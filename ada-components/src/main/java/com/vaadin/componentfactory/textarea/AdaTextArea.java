/*-
 * #%L
 * ada-components
 * %%
 * Copyright (C) 2021 Vaadin Ltd
 * %%
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * #L%
 */

package com.vaadin.componentfactory.textarea;

import com.vaadin.flow.component.AttachEvent;
import com.vaadin.flow.component.dependency.CssImport;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.dependency.NpmPackage;
import com.vaadin.flow.component.html.Div;

/**
 * ada-components component definition. ada-components uses vis-timeline component to display data in time (see
 * more at https://github.com/ada-components).
 */
@SuppressWarnings("serial")
//@NpmPackage(value = "react", version = "^16.7.0")
//@NpmPackage(value = "react-dom", version = "^16.7.0")
//@NpmPackage(value = "@types/react", version = "^16.7.0")
//@NpmPackage(value = "@types/react", version = "^16.7.0")
@NpmPackage(value = "@chakra-ui/react", version = "^2.8.0")
@JsModule("./src/views/textarea/adatextarea.tsx")
@JsModule("./styles/css.ts")
@CssImport("./styles/components.css")
public class AdaTextArea extends Div {
    public AdaTextArea() {
        setId("visualization" + this.hashCode());
        setWidthFull();
        setClassName("adatextarea");
    }

    /**
     * Method called when the component is attached to the UI.
     * It initializes the TuiGrid component.
     */
    @Override
    protected void onAttach(AttachEvent attachEvent) {
        super.onAttach(attachEvent);
        initAdaTextArea();
    }
    private void initAdaTextArea() {
        this.getElement()
                .executeJs(
                        "adatextarea.create($0, $1, $2);",
                        this, "[]" ,
                        "tuiGridOption.toJSON()");
    }

}
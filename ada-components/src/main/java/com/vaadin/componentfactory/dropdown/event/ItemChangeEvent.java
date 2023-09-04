/*-
 * #%L
 * TuiGrid
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
package com.vaadin.componentfactory.dropdown.event;

import com.vaadin.componentfactory.dropdown.AdaDropDown;
import com.vaadin.flow.component.ComponentEvent;

/**
 * Event thrown when an item is resized.
 */
public class ItemChangeEvent extends ComponentEvent<AdaDropDown> {

    private final String colName;
    private int row;
    private String colValue;
    private boolean cancelled = false;

    public ItemChangeEvent(AdaDropDown source, String colName, String colValue, int row, boolean fromClient) {
        super(source, fromClient);
        this.colName = colName;
        this.colValue = colValue;
        this.row = row;
    }

    public String getColName() {
        return colName;
    }

    public int getRow() {
        return row;
    }

    public boolean isCancelled() {
        return cancelled;
    }

    public void setCancelled(boolean cancelled) {
        this.cancelled = cancelled;
    }

    public String getColValue() {
        return colValue;
    }

    public void setColValue(String colValue) {
        this.colValue = colValue;
    }

    public AdaDropDown getTuiGrid() {
        return (AdaDropDown) source;
    }
}
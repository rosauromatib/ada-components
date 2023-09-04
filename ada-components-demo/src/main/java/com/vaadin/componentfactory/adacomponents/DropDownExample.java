package com.vaadin.componentfactory.adacomponents;

import com.vaadin.componentfactory.dropdown.AdaDropDown;
import com.vaadin.componentfactory.input.AdaInput;
import com.vaadin.flow.component.html.Div;
import com.vaadin.flow.component.html.Span;
import com.vaadin.flow.router.Route;

@Route(value = "dropdown", layout = MainLayout.class)
public class DropDownExample extends Div {

    public DropDownExample() {
        Span sp = new Span("");
        // create components
        AdaDropDown input = new AdaDropDown();

        add(input, sp);
    }
}

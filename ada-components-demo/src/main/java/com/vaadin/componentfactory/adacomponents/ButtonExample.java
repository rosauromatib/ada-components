package com.vaadin.componentfactory.adacomponents;

import com.vaadin.componentfactory.button.AdaButton;
import com.vaadin.componentfactory.input.AdaInput;
import com.vaadin.flow.component.html.Div;
import com.vaadin.flow.component.html.Span;
import com.vaadin.flow.router.Route;

@Route(value = "button", layout = MainLayout.class)
public class ButtonExample extends Div {

    public ButtonExample() {
        Span sp = new Span("");
        // create components
        AdaButton input = new AdaButton();

        add(input, sp);
    }
}

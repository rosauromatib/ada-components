package com.vaadin.componentfactory.adacomponents;

import com.vaadin.componentfactory.input.AdaInput;
import com.vaadin.flow.component.html.Div;
import com.vaadin.flow.component.html.Span;
import com.vaadin.flow.router.Route;

@Route(value = "input", layout = MainLayout.class)
public class InputExample extends Div {

    public InputExample() {
        Span sp = new Span("");
        // create components
        AdaInput input = new AdaInput();

        add(input, sp);
    }
}

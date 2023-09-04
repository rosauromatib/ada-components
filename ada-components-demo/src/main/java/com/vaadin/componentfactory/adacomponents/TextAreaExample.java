package com.vaadin.componentfactory.adacomponents;

import com.vaadin.componentfactory.menu.AdaMenu;
import com.vaadin.componentfactory.textarea.AdaTextArea;
import com.vaadin.flow.component.html.Div;
import com.vaadin.flow.component.html.Span;
import com.vaadin.flow.router.Route;

@Route(value = "textarea", layout = MainLayout.class)
public class TextAreaExample extends Div {

    public TextAreaExample() {
        Span sp = new Span("");
        // create components
        AdaTextArea textArea = new AdaTextArea();

        add(textArea, sp);
    }
}

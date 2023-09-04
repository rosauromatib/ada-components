package com.vaadin.componentfactory.adacomponents;

import com.vaadin.componentfactory.accordion.AdaAccordion;
import com.vaadin.flow.component.html.Div;
import com.vaadin.flow.component.html.Span;
import com.vaadin.flow.router.Route;

@Route(value = "accordion", layout = MainLayout.class)
public class AccordionExample extends Div {

    public AccordionExample() {
        Span sp = new Span("");
        // create components
        AdaAccordion accordion = new AdaAccordion();

        add(accordion, sp);
    }
}

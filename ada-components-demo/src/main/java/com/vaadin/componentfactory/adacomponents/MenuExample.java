package com.vaadin.componentfactory.adacomponents;

import com.vaadin.componentfactory.button.AdaButton;
import com.vaadin.componentfactory.menu.AdaMenu;
import com.vaadin.flow.component.html.Div;
import com.vaadin.flow.component.html.Span;
import com.vaadin.flow.router.Route;

@Route(value = "menu", layout = MainLayout.class)
public class MenuExample extends Div {

    public MenuExample() {
        Span sp = new Span("");
        // create components
        AdaMenu menu = new AdaMenu();

        add(menu, sp);
    }
}

package com.vaadin.componentfactory.adacomponents;

import com.vaadin.flow.component.applayout.AppLayout;
import com.vaadin.flow.component.applayout.DrawerToggle;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.router.RouterLink;

public class MainLayout extends AppLayout {

    public MainLayout() {
        final DrawerToggle drawerToggle = new DrawerToggle();
        final RouterLink inputExample =
                new RouterLink("Input Example", InputExample.class);
        final RouterLink buttonExample =
                new RouterLink("Button Example", ButtonExample.class);
        final RouterLink dropDownExample =
                new RouterLink("DropDown Example", DropDownExample.class);
        final RouterLink menuExample =
                new RouterLink("Menu Example", MenuExample.class);
        final RouterLink textAreaExample =
                new RouterLink("TextArea Example", TextAreaExample.class);
        final RouterLink accordionExample =
                new RouterLink("Accordion Example", AccordionExample.class);

        final VerticalLayout menuLayout = new VerticalLayout(inputExample, buttonExample, dropDownExample, menuExample, textAreaExample, accordionExample);
        addToDrawer(menuLayout);
        addToNavbar(drawerToggle);
    }
}

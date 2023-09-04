//To use this code, you would need to have the required dependencies installed
// and set up a container element in your HTML.
// Then, you can call the functions of the toastuigrid object to
// create, update, and manipulate the grid component.

import "@vaadin/button";
import "@vaadin/text-field";
// import "tui-grid/dist/tui-grid.css";
// import "tui-date-picker/dist/tui-date-picker.css";
// import "tui-time-picker/dist/tui-time-picker.css";
// import {createRoot} from "react-dom/client";
import { createRoot } from 'react-dom/client';
import React, {useState} from "react";
import {Box,  Menu, MenuDivider, MenuGroup, MenuList } from '@chakra-ui/react';
import MenuButtonComponent from "./button";
import MenuItemComponent from "./menuItem";

declare global {
    interface Window {
        adamenu: { [key: string]: any };
    }
}

window.adamenu = {
    create(container: HTMLElement, itemsJson: any, optionsJson: any) {
        setTimeout(() => this._createInput(container, itemsJson, optionsJson, null));
    },
    _createInput(container: HTMLElement, itemsJson: any, optionsJson: any, _: any) {
        const MenuContainer = () => {
            const [value, setValue] = useState('');

            const handleClick = (e: any) => console.log(e.target.value);

            return (
                <Box backgroundColor={'#326f70'}>
                    <Menu>
                        <MenuButtonComponent MenuButtonTitle={'Contact Management'} backgroundColor={'#326f70'} />
                        <MenuList padding={0} borderRadius={0} _focusVisible={{outline: 'none'}} _hover={{outline: 'none'}}>
                            <MenuGroup>
                                <MenuItemComponent handleClick={handleClick} backgroundColor={'#66878833'} MenuItemTitle={'Order'} />
                                <MenuItemComponent handleClick={handleClick} backgroundColor={'#fff'} MenuItemTitle={'Order Line'} />
                                <MenuItemComponent handleClick={handleClick} backgroundColor={'#fff'} MenuItemTitle={'Order Line'} />
                            </MenuGroup>
                            <MenuDivider border={'1px solid black'} />
                            <MenuGroup>
                                <MenuItemComponent handleClick={handleClick} backgroundColor={'#66878833'} MenuItemTitle={'Order Tax'} />
                                <MenuItemComponent handleClick={handleClick} backgroundColor={'#66878833'} MenuItemTitle={'Payment Schedule'} />
                            </MenuGroup>
                        </MenuList>
                    </Menu>

                    <Menu>
                        <MenuButtonComponent MenuButtonTitle={'Sales'} backgroundColor={'#326f70'} />
                        <MenuList padding={0} borderRadius={0} _focusVisible={{outline: 'none'}} _hover={{outline: 'none'}}>
                            <MenuGroup>
                                <MenuItemComponent handleClick={handleClick} backgroundColor={'#66878833'} MenuItemTitle={'Order'} />
                                <MenuItemComponent handleClick={handleClick} backgroundColor={'#fff'} MenuItemTitle={'Order Line'} />
                            </MenuGroup>
                            <MenuDivider border={'1px solid black'} />
                            <MenuGroup>
                                <MenuItemComponent handleClick={handleClick} backgroundColor={'#66878833'} MenuItemTitle={'Order Tax'} />
                                <MenuItemComponent handleClick={handleClick} backgroundColor={'#66878833'} MenuItemTitle={'Payment Schedule'} />
                            </MenuGroup>
                        </MenuList>
                    </Menu>
                </Box>
            );
        };

        const root = createRoot(container);
        root.render(<MenuContainer/>);

    }
}

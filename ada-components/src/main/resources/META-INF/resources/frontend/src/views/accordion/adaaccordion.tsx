//To use this code, you would need to have the required dependencies installed
// and set up a container element in your HTML.
// Then, you can call the functions of the toastuigrid object to
// create, update, and manipulate the grid component.

import "@vaadin/button";
import "@vaadin/text-field";
// import "tui-grid/dist/tui-grid.css";
// import "tui-date-picker/dist/tui-date-picker.css";
// import "tui-time-picker/dist/tui-time-picker.css";
import {createRoot} from 'react-dom/client';
import React, {useState} from "react";
import {Accordion, AccordionItem, AccordionPanel} from '@chakra-ui/react';
import AccordionButtonComponent from "./AccordionButtonComponent";
import InputComponent from "../input/ada-input";

declare global {
    interface Window {
        adaaccordion: { [key: string]: any };
    }
}

window.adaaccordion = {
    create(container: HTMLElement, itemsJson: any, optionsJson: any) {
        setTimeout(() => this._createInput(container, itemsJson, optionsJson, null));
    },
    _createInput(container: HTMLElement, itemsJson: any, optionsJson: any, _: any) {
        const AccordionContainer = () => {
            const [value, setValue] = useState('');

            const handleChange = (event: any) => setValue(event.target.value);

            return (
                <Accordion allowToggle>
                    <AccordionItem>
                        <AccordionButtonComponent backgroundColor='#326f70' AccordionTitle={'Quantities'}/>
                        <AccordionPanel>
                            <InputComponent
                                value={value}
                                handleChange={handleChange}
                                width={'50%'}
                                backgroundColor={'#66878859'}
                                size={'sm'}
                                border={'1px solid #326f70'}
                            />
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            );
        };

        const root = createRoot(container);
        root.render(<AccordionContainer/>);

    }
}

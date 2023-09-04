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
import {createRoot} from 'react-dom/client';
import React, {useState} from "react";
import InputComponent from "./ada-input";
import InputIconComponent from "./ada-icon-input";
import "../../../styles/css.ts";
import {theme} from "../../../styles/css";

declare global {
    interface Window {
        adainput: { [key: string]: any };
    }
}

window.adainput = {
    create(container: HTMLElement, itemsJson: any, optionsJson: any) {
        setTimeout(() => this._createInput(container, itemsJson, optionsJson, null));
    },
    _createInput(container: HTMLElement, itemsJson: any, optionsJson: any, _: any) {
        const InputContainer = () => {
            const [value, setValue] = useState('');

            const handleChange = (event: any) => setValue(event.target.value);

            return (
                <>
                    <InputComponent
                        value={value}
                        handleChange={handleChange}
                        className="DarkCyan"
                        width={'50%'}
                        backgroundColor={theme.colors.DarkCyan[20]}
                        size={'sm'}
                        border={`1px solid ${theme.colors.DarkCyan[40]}`}
                    />

                    <InputIconComponent
                        value={value}
                        handleChange={handleChange}
                        className="DarkCyan"
                        width={'50%'}
                        backgroundColor={theme.colors.DarkCyan[20]}
                        size={'sm'}
                        border={`1px solid ${theme.colors.DarkCyan[40]}`}
                    />
                </>
            );
        };

        const root = createRoot(container);
        root.render(<InputContainer/>);

    }
}

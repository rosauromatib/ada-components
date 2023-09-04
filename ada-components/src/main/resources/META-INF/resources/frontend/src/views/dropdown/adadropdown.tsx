//To use this code, you would need to have the required dependencies installed
// and set up a container element in your HTML.
// Then, you can call the functions of the toastuigrid object to
// create, update, and manipulate the grid component.

import "@vaadin/button";
import "@vaadin/text-field";
// import "tui-grid/dist/tui-grid.css";
// import "tui-date-picker/dist/tui-date-picker.css";
// import "tui-time-picker/dist/tui-time-picker.css";
import { createRoot } from 'react-dom/client';
import React, {useState} from "react";
import DropDown from "./index";

declare global {
    interface Window {
        adadropdown: { [key: string]: any };
    }
}

window.adadropdown = {
    create(container: HTMLElement, itemsJson: any, optionsJson: any) {
        setTimeout(() => this._createInput(container, itemsJson, optionsJson, null));
    },
    _createInput(container: HTMLElement, itemsJson: any, optionsJson: any, _: any) {
        const DropDownContainer = () => {
            const [value, setValue] = useState('');

            const handleClick = (e: any) => console.log(e.target.value);

            return (
                <DropDown
                    width={'50%'}
                    backgroundColor={'#66878859'}
                    border={'1px solid #326f70'}
                    size={'sm'}
                    placeholder={'GardenWorld'}
                />
            );
        };

        const root = createRoot(container);
        root.render(<DropDownContainer/>);

    }
}

import React, {Fragment, useState} from 'react';

import style from "./assets/Settings.module.scss";

import Topbar from "./../layout/Topbar";
import Content from "./../layout/Content";

import FontSize from "./subpages/settings/FontSize";
import FontLine from "./subpages/settings/FontLine";
import FontAlign from "./subpages/settings/FontAlign";
import Theme from "./subpages/settings/Theme";
import Preview from "./subpages/settings/Preview";

const Settings = () => {
    const [activeButton, setActiveButton] = useState("fontSize");
    const [content, setContent] = useState(<FontSize></FontSize>);

    const selectCategory = (category) => {
        switch(category) {
            case "fontSize":
                setContent(<FontSize></FontSize>);
                setActiveButton(category);
                break;
            case "fontLine":
                setContent(<FontLine></FontLine>);
                setActiveButton(category);
                break;
            case "fontAlign":
                setContent(<FontAlign></FontAlign>);
                setActiveButton(category);
                break;
            case "theme":
                setContent(<Theme></Theme>);
                setActiveButton(category);
                break;
            default:
                setContent(<FontSize></FontSize>);
                setActiveButton(category);
        }
    };

    return (
        <Fragment>
            <Topbar title="Nastavení">
                <ul className={style.settings_navigation}>
                    <li
                        name="fontSize"
                        onClick={() => selectCategory("fontSize")}
                        className={style.settings_navigation_item + " " + (activeButton === "fontSize" ? style.settings_navigation_item_active : "")}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 172 172" fill="#ffffff"><path d="M7.16667,28.66667v14.33333h43v100.33333h14.33333v-100.33333h43v-14.33333zM143.33333,28.66667l-21.5,21.5h14.33333v71.66667h-14.33333l21.5,21.5l21.5,-21.5h-14.33333v-71.66667h14.33333z"></path></svg>
                    </li>
                    <li
                        name="fontLine"
                        onClick={() => selectCategory("fontLine")}
                        className={style.settings_navigation_item + " " + (activeButton === "fontLine" ? style.settings_navigation_item_active : "")}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 172 172" fill="#ffffff"><path d="M78.83333,14.33333v21.5h-21.5l28.66667,28.66667l28.66667,-28.66667h-21.5v-21.5zM86,64.5h-64.5v14.33333h129v-14.33333zM21.5,93.16667v14.33333h64.5h64.5v-14.33333zM86,107.5l-28.66667,28.66667h21.5v21.5h14.33333v-21.5h21.5z"></path></svg>
                    </li>
                    <li
                        name="fontAlign"
                        onClick={() => selectCategory("fontAlign")}
                        className={style.settings_navigation_item + " " + (activeButton === "fontAlign" ? style.settings_navigation_item_active : "")}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 172 172" fill="#ffffff"><path d="M21.5,21.5v14.33333h129v-14.33333zM35.83333,50.16667v14.33333h100.33333v-14.33333zM21.5,78.83333v14.33333h129v-14.33333zM35.83333,107.5v14.33333h100.33333v-14.33333zM21.5,136.16667v14.33333h129v-14.33333z"></path></svg>
                    </li>
                    <li
                        name="theme"
                        onClick={() => selectCategory("theme")}
                        className={style.settings_navigation_item + " " + (activeButton === "theme" ? style.settings_navigation_item_active : "")}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 172 172" fill="#ffffff"><path d="M86,14.33333c-39.49552,0 -71.66667,32.17115 -71.66667,71.66667c0,39.49552 32.17115,71.66667 71.66667,71.66667c39.49552,0 71.66667,-32.17115 71.66667,-71.66667c0,-39.49552 -32.17115,-71.66667 -71.66667,-71.66667zM86,28.66667c31.74921,0 57.33333,25.58412 57.33333,57.33333c0,31.74921 -25.58412,57.33333 -57.33333,57.33333z"></path></svg>
                    </li>
                </ul>
                {content}
            </Topbar>
            <Content>
                <Preview></Preview>
            </Content>    
        </Fragment>
        
    );
};

export default Settings;

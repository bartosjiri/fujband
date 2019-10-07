import React, {useContext} from "react";
import SettingsContext from "../../../../context/settings/settingsContext";

import style from "./assets/FontLine.module.scss";

const FontLine = () => {
    const settingsContext = useContext(SettingsContext);
    const {setFontLine, fontLine} = settingsContext;

    const onChange = (option) => {
        setFontLine(option);
        localStorage.setItem("fontLine", option);
    };

    return (
        <div className={style.fontline_selection}>
            <h3 className={style.fontline_selection_title}>Řádkování textu</h3>
            <ul className={style.fontline_list}>
                <li 
                    name="1.0" 
                    onClick={() => onChange(1.0)}
                    className={style.fontline_list_item + " " + (fontLine === 1.0 ? style.fontline_list_item_active : "")}
                >
                    1.0
                </li>
                <li 
                    name="1.15" 
                    onClick={() => onChange(1.15)}
                    className={style.fontline_list_item + " " + (fontLine === 1.15 ? style.fontline_list_item_active : "")}
                >
                    1.15
                </li>
                <li 
                    name="1.5" 
                    onClick={() => onChange(1.5)}
                    className={style.fontline_list_item + " " + (fontLine === 1.5 ? style.fontline_list_item_active : "")}
                >
                    1.5
                </li>
                <li 
                    name="2.0" 
                    onClick={() => onChange(2.0)}
                    className={style.fontline_list_item + " " + (fontLine === 2.0 ? style.fontline_list_item_active : "")}
                >
                    2.0
                </li>
            </ul>
        </div>
    )
};

export default FontLine;

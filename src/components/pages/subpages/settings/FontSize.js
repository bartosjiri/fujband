import React, {useContext} from 'react';
import SettingsContext from "../../../../context/settings/settingsContext";

import style from "./assets/FontSize.module.scss";

const FontSize = () => {
    const settingsContext = useContext(SettingsContext);
    const {setFontSize, fontSize} = settingsContext;

    const onChange = (option) => {
        setFontSize(option);
        localStorage.setItem("fontSize", option);
    };

    return (     
        <div className={style.fontsize_selection}>
            <h3 class={style.fontsize_selection_title}>Velikost textu</h3>
            <ul className={style.fontsize_list}>
                <li 
                    name="16px" 
                    onClick={() => onChange(16)}
                    className={style.fontsize_list_item + " " + style.fontsize_list_item_16px + " " + (fontSize === 16 ? style.fontsize_list_item_active : "")}
                >
                    16px
                </li>
                <li 
                    name="24px" 
                    onClick={() => onChange(24)}
                    className={style.fontsize_list_item + " " + style.fontsize_list_item_24px + " " + (fontSize === 24 ? style.fontsize_list_item_active : "")}
                >
                    24px
                </li>
                <li 
                    name="32px" 
                    onClick={() => onChange(32)}
                    className={style.fontsize_list_item + " " + style.fontsize_list_item_32px + " " + (fontSize === 32 ? style.fontsize_list_item_active : "")}
                >
                    32px
                </li>
            </ul>
        </div>
    );
};

export default FontSize;

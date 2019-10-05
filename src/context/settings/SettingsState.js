import React, {useReducer, useEffect} from "react";
import SettingsContext from "./settingsContext";
import settingsReducer from "./settingsReducer";
import {
    SETTINGS_FONT_SIZE,
    SETTINGS_FONT_LINE,
    SETTINGS_FONT_ALIGN,
    SETTINGS_THEME
} from "../types";

const SettingsState = props => {
    const initialState = {
        fontSize: 16,
        fontLine: 1.5,
        fontAlign: "left",
        theme: "dark"
    };

    useEffect(() => {
        const storedFontSize = localStorage.getItem("fontSize");
        const storedFontLine = localStorage.getItem("fontLine");
        const storedFontAlign = localStorage.getItem("fontAlign");
        const storedTheme = localStorage.getItem("theme");

        if (storedFontSize !== null) {
            setFontSize(Number(storedFontSize));
        };
        if (storedFontLine !== null) {
            setFontLine(Number(storedFontLine));
        };
        if (storedFontAlign !== null) {
            setFontAlign(storedFontAlign);
        };
        if (storedTheme !== null) {
            setTheme(storedTheme);
        };       
    }, []);

    const [state, dispatch] = useReducer(settingsReducer, initialState);

    const setFontSize = fontSize => {
        dispatch({ type: SETTINGS_FONT_SIZE, payload: fontSize });
    };

    const setFontLine = fontLine => {
        dispatch({ type: SETTINGS_FONT_LINE, payload: fontLine });
    };

    const setFontAlign = fontAlign => {
        dispatch({type: SETTINGS_FONT_ALIGN, payload: fontAlign});
    };
    
    const setTheme = theme => {
        dispatch({ type: SETTINGS_THEME, payload: theme });

        document.documentElement.classList.add('theme-transition');
        document.documentElement.setAttribute("data-theme", theme);
        window.setTimeout(function () {
            document.documentElement.classList.remove('theme-transition')
        }, 275);

        if (theme === "dark") {
            document.querySelector("meta[name=theme-color]").setAttribute("content", "#121212");
        } else {
            document.querySelector("meta[name=theme-color]").setAttribute("content", "#f8f8f8");
        }
    };

    return (
        <SettingsContext.Provider
            value={{
                fontSize: state.fontSize,
                setFontSize,
                fontLine: state.fontLine,
                setFontLine,
                fontAlign: state.fontAlign,
                setFontAlign,
                theme: state.theme,
                setTheme
            }}
        >
            {props.children}
        </SettingsContext.Provider>
    );
};

export default SettingsState;
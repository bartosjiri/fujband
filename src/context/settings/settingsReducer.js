import {
    SETTINGS_FONT_SIZE,
    SETTINGS_FONT_LINE,
    SETTINGS_FONT_ALIGN,
    SETTINGS_THEME
} from "../types";

export default (state, action) => {
    switch (action.type) {
        case SETTINGS_FONT_SIZE:
            return {
                ...state,
                fontSize: action.payload
            };
        case SETTINGS_FONT_LINE:
            return {
                ...state,
                fontLine: action.payload
            };
        case SETTINGS_FONT_ALIGN:
            return {
                ...state,
                fontAlign: action.payload
            };
        case SETTINGS_THEME:
            return {
                ...state,
                theme: action.payload
            };
        default:
            return state;
    }
}
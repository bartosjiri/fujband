import React, {useContext} from "react";

import SettingsContext from "../../context/settings/settingsContext";

import fontAlignStyle from "./assets/FontAlign.module.scss";

const FontAlign = () => {
  const settingsContext = useContext(SettingsContext);
  const {setFontAlign, fontAlign} = settingsContext;

  const onChange = (option) => {
    setFontAlign(option);
    localStorage.setItem("fontAlign", option);
  };

  return (
    <div className={fontAlignStyle.selection}>
      <h3 className={fontAlignStyle.selection_title}>Zarovnání textu</h3>
      <ul className={fontAlignStyle.options}>
        <li
          name="left"
          onClick={() => onChange("left")}
          className={`${fontAlignStyle.options_item} ${fontAlign === "left" && fontAlignStyle.options_item_active}`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 172 172" fill="#ffffff"><path d="M21.5,21.5v14.33333h129v-14.33333zM21.5,50.16667v14.33333h93.16667v-14.33333zM21.5,78.83333v14.33333h129v-14.33333zM21.5,107.5v14.33333h93.16667v-14.33333zM21.5,136.16667v14.33333h129v-14.33333z"></path></svg>
        </li>
        <li
          name="center"
          onClick={() => onChange("center")}
          className={`${fontAlignStyle.options_item} ${fontAlign === "center" && fontAlignStyle.options_item_active}`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 172 172" fill="#ffffff"><path d="M21.5,21.5v14.33333h129v-14.33333zM35.83333,50.16667v14.33333h100.33333v-14.33333zM21.5,78.83333v14.33333h129v-14.33333zM35.83333,107.5v14.33333h100.33333v-14.33333zM21.5,136.16667v14.33333h129v-14.33333z"></path></svg>
        </li>
        <li
          name="right"
          onClick={() => onChange("right")}
          className={`${fontAlignStyle.options_item} ${fontAlign === "right" && fontAlignStyle.options_item_active}`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 172 172" fill="#ffffff"><path d="M21.5,21.5v14.33333h129v-14.33333zM57.33333,50.16667v14.33333h93.16667v-14.33333zM21.5,78.83333v14.33333h129v-14.33333zM57.33333,107.5v14.33333h93.16667v-14.33333zM21.5,136.16667v14.33333h129v-14.33333z"></path></svg>
        </li>
      </ul>
    </div>
  )
};

export default FontAlign;

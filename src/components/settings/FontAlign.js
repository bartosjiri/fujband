import React, {useContext} from "react";

import SettingsContext from "../../context/settings/settingsContext";

import fontAlignStyle from "./assets/FontAlign.module.scss";

const FontAlign = () => {
  const settingsContext = useContext(SettingsContext);
  const {setFontAlign, fontAlign} = settingsContext;

  const options = [
    {
      name: "left",
      iconPath: "M21.5,21.5v14.33333h129v-14.33333zM21.5,50.16667v14.33333h93.16667v-14.33333zM21.5,78.83333v14.33333h129v-14.33333zM21.5,107.5v14.33333h93.16667v-14.33333zM21.5,136.16667v14.33333h129v-14.33333z"
    },
    {
      name: "center",
      iconPath: "M21.5,21.5v14.33333h129v-14.33333zM35.83333,50.16667v14.33333h100.33333v-14.33333zM21.5,78.83333v14.33333h129v-14.33333zM35.83333,107.5v14.33333h100.33333v-14.33333zM21.5,136.16667v14.33333h129v-14.33333z"
    },
    {
      name: "right",
      iconPath: "M21.5,21.5v14.33333h129v-14.33333zM57.33333,50.16667v14.33333h93.16667v-14.33333zM21.5,78.83333v14.33333h129v-14.33333zM57.33333,107.5v14.33333h93.16667v-14.33333zM21.5,136.16667v14.33333h129v-14.33333z"
    }
  ]

  const onChange = (option) => {
    setFontAlign(option);
    localStorage.setItem("fontAlign", option);
  };

  return (
    <div className={fontAlignStyle.selection}>
      <h3 className={fontAlignStyle.selection_title}>Zarovnání textu</h3>
      <ul className={fontAlignStyle.options}>
        {options.map(option => (
          <li
            key={option.name}
            onClick={() => onChange(option.name)}
            className={`${fontAlignStyle.options_item} ${fontAlign === option.name && fontAlignStyle.options_item_active}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 172 172" fill="#ffffff">
              <path d={option.iconPath} />
            </svg>
          </li>
        ))}
      </ul>
    </div>
  )
};

export default FontAlign;

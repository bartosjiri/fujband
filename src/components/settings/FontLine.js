import React, {useContext} from "react";

import SettingsContext from "../../context/settings/settingsContext";

import fontLineStyle from "./assets/FontLine.module.scss";

const FontLine = () => {
  const settingsContext = useContext(SettingsContext);
  const {setFontLine, fontLine} = settingsContext;

  const onChange = (option) => {
    setFontLine(option);
    localStorage.setItem("fontLine", option);
  };

  return (
    <div className={fontLineStyle.selection}>
      <h3 className={fontLineStyle.selection_title}>Řádkování textu</h3>
      <ul className={fontLineStyle.options}>
        <li
          name="1.0"
          onClick={() => onChange(1.0)}
          className={`${fontLineStyle.options_item} ${fontLine === 1.0 && fontLineStyle.options_item_active}`}
        >
          1.0
        </li>
        <li
          name="1.15"
          onClick={() => onChange(1.15)}
          className={`${fontLineStyle.options_item} ${fontLine === 1.15 && fontLineStyle.options_item_active}`}
        >
          1.15
        </li>
        <li
          name="1.5"
          onClick={() => onChange(1.5)}
          className={`${fontLineStyle.options_item} ${fontLine === 1.5 && fontLineStyle.options_item_active}`}
        >
          1.5
        </li>
        <li
          name="2.0"
          onClick={() => onChange(2.0)}
          className={`${fontLineStyle.options_item} ${fontLine === 2.0 && fontLineStyle.options_item_active}`}
        >
          2.0
        </li>
      </ul>
    </div>
  )
};

export default FontLine;

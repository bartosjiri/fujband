import React, {useContext} from "react";

import SettingsContext from "../../context/settings/settingsContext";

import fontLineStyle from "./assets/FontLine.module.scss";

const FontLine = () => {
  const settingsContext = useContext(SettingsContext);
  const {setFontLine, fontLine} = settingsContext;

  const [minValue, maxValue] = [1, 2]
  const step = 0.05

  const onChange = (option) => {
    const optionParsed = Math.round((option + Number.EPSILON) * 100) / 100
    if (optionParsed >= minValue && optionParsed <= maxValue) {
      setFontLine(optionParsed);
      localStorage.setItem("fontLine", optionParsed);
    }
  };

  return (
    <div className={fontLineStyle.selection}>
      <h3 className={fontLineStyle.selection_title}>Řádkování textu</h3>
      <ul className={fontLineStyle.options}>
        <li
          name="decrease"
          onClick={() => onChange(fontLine - step)}
          className={`${fontLineStyle.options_item} ${fontLine <= minValue && fontLineStyle.options_item_disabled}`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 172 172" fill="#ffffff">
            <path d="M86,16.125c-38.52783,0 -69.875,31.34717 -69.875,69.875c0,38.52783 31.34717,69.875 69.875,69.875c38.52783,0 69.875,-31.34717 69.875,-69.875c0,-38.52783 -31.34717,-69.875 -69.875,-69.875zM86,26.875c32.71192,0 59.125,26.41309 59.125,59.125c0,32.71192 -26.41308,59.125 -59.125,59.125c-32.71191,0 -59.125,-26.41308 -59.125,-59.125c0,-32.71191 26.41309,-59.125 59.125,-59.125zM53.75,80.625v10.75h64.5v-10.75z" />
          </svg>
        </li>
        <li
          name="display"
          className={fontLineStyle.options_display}
        >
          {fontLine}
        </li>

        <li
          name="decrease"
          onClick={() => onChange(fontLine + step)}
          className={`${fontLineStyle.options_item} ${fontLine >= maxValue && fontLineStyle.options_item_disabled}`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 172 172" fill="#ffffff">
            <path d="M86,16.125c-38.52783,0 -69.875,31.34717 -69.875,69.875c0,38.52783 31.34717,69.875 69.875,69.875c38.52783,0 69.875,-31.34717 69.875,-69.875c0,-38.52783 -31.34717,-69.875 -69.875,-69.875zM86,26.875c32.71192,0 59.125,26.41309 59.125,59.125c0,32.71192 -26.41308,59.125 -59.125,59.125c-32.71191,0 -59.125,-26.41308 -59.125,-59.125c0,-32.71191 26.41309,-59.125 59.125,-59.125zM80.625,59.125v21.5h-21.5v10.75h21.5v21.5h10.75v-21.5h21.5v-10.75h-21.5v-21.5z" />
          </svg>
        </li>
      </ul>
    </div>
  )
};

export default FontLine;

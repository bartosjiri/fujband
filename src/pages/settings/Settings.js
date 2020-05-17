import React, {Fragment, useState} from "react";

import settingsStyle from "./assets/Settings.module.scss";

import Topbar from "../../layout/topbar/Topbar";
import Content from "../../layout/content/Content";

import FontSize from "../../components/settings/FontSize";
import FontLine from "../../components/settings/FontLine";
import FontAlign from "../../components/settings/FontAlign";
import Theme from "../../components/settings/Theme";
import Preview from "../../components/settings/Preview";

const Settings = () => {
  const [FONT_SIZE, FONT_LINE, FONT_ALIGN, THEME] = ["fontSize", "fontLine", "fontAlign", "theme"];

  const [activeButton, setActiveButton] = useState(FONT_SIZE);
  const [content, setContent] = useState(<FontSize></FontSize>);

  const selectCategory = (category) => {
    switch (category) {
      default:
      case FONT_SIZE:
        setContent(<FontSize></FontSize>);
        setActiveButton(category);
        break;
      case FONT_LINE:
        setContent(<FontLine></FontLine>);
        setActiveButton(category);
        break;
      case FONT_ALIGN:
        setContent(<FontAlign></FontAlign>);
        setActiveButton(category);
        break;
      case THEME:
        setContent(<Theme></Theme>);
        setActiveButton(category);
    }
  };

  return (
    <Fragment>
      <Topbar title="Nastavení">
        <ul className={settingsStyle.navigation}>
          <li
            name={FONT_SIZE}
            onClick={() => selectCategory(FONT_SIZE)}
            className={settingsStyle.navigation_item + " " + (activeButton === FONT_SIZE ? settingsStyle.navigation_item_active : "")}
          >
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 172 172" fill="#ffffff">
              <path d="M7.16667,28.66667v14.33333h43v100.33333h14.33333v-100.33333h43v-14.33333zM143.33333,28.66667l-21.5,21.5h14.33333v71.66667h-14.33333l21.5,21.5l21.5,-21.5h-14.33333v-71.66667h14.33333z" />
            </svg>
          </li>
          <li
            name={FONT_LINE}
            onClick={() => selectCategory(FONT_LINE)}
            className={settingsStyle.navigation_item + " " + (activeButton === FONT_LINE ? settingsStyle.navigation_item_active : "")}
          >
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 172 172" fill="#ffffff">
              <path d="M78.83333,14.33333v21.5h-21.5l28.66667,28.66667l28.66667,-28.66667h-21.5v-21.5zM86,64.5h-64.5v14.33333h129v-14.33333zM21.5,93.16667v14.33333h64.5h64.5v-14.33333zM86,107.5l-28.66667,28.66667h21.5v21.5h14.33333v-21.5h21.5z" />
            </svg>
          </li>
          <li
            name={FONT_ALIGN}
            onClick={() => selectCategory(FONT_ALIGN)}
            className={settingsStyle.navigation_item + " " + (activeButton === FONT_ALIGN ? settingsStyle.navigation_item_active : "")}
          >
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 172 172" fill="#ffffff">
              <path d="M21.5,21.5v14.33333h129v-14.33333zM35.83333,50.16667v14.33333h100.33333v-14.33333zM21.5,78.83333v14.33333h129v-14.33333zM35.83333,107.5v14.33333h100.33333v-14.33333zM21.5,136.16667v14.33333h129v-14.33333z" />
            </svg>
          </li>
          <li
            name={THEME}
            onClick={() => selectCategory(THEME)}
            className={settingsStyle.navigation_item + " " + (activeButton === THEME ? settingsStyle.navigation_item_active : "")}
          >
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 172 172" fill="#ffffff">
              <path d="M86,14.33333c-39.49552,0 -71.66667,32.17115 -71.66667,71.66667c0,39.49552 32.17115,71.66667 71.66667,71.66667c39.49552,0 71.66667,-32.17115 71.66667,-71.66667c0,-39.49552 -32.17115,-71.66667 -71.66667,-71.66667zM86,28.66667c31.74921,0 57.33333,25.58412 57.33333,57.33333c0,31.74921 -25.58412,57.33333 -57.33333,57.33333z" />
            </svg>
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

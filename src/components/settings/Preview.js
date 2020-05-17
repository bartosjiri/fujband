import React, {useContext} from "react";

import SettingsContext from "../../context/settings/settingsContext";

import previewStyle from "./assets/Preview.module.scss";

const Preview = () => {
  const settingsContext = useContext(SettingsContext);
  const {fontSize, fontLine, fontAlign} = settingsContext;

  return (
    <div className={previewStyle.preview}>
      <h4 className={previewStyle.preview_title}>Náhled textu</h4>
      <div
        className={previewStyle.preview_content}
        style={{
          fontSize,
          lineHeight: fontLine,
          textAlign: fontAlign
        }}
      >
        <p>
          Stojí hruška v širém poli,<br />
          vršek se jí zelená..<br />
          Pod ní se pase kůň vraný,<br />
          pase ho má milá.<br />
          Pod ní se pase kůň vraný,<br />
          pase ho má milá.
        </p>
        <br />
        <p>
          Proč má milá dnes pasete<br />
          z večera do rána?<br />
          Kam můj milí pojedete?<br />
          Já pojedu s váma.<br />
          Kam můj milí pojedete?<br />
          Já pojedu s váma.
        </p>
        <br />
        <p>
          Ó já pojedu daleko<br />
          přez vody hluboké.<br />
          Kéž bych byl nikdy nepoznal<br />
          pany černooké.<br />
          Kéž bych byl nikdy nepoznal<br />
          pany černooké.
        </p>
      </div>
    </div>
  )
};

export default Preview;

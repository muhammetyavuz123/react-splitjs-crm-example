import React, { useEffect, useState } from "react";
import Split from "react-split";
import "../Styles/Split.css";
import { TableLocation } from "./TableLocation";
export const SplitContainer = ({ children }) => {
  const [horizantalWindowValues, SetHorizantalWindowValues] = useState(null);
  const [upVerticalWindowValues, SetUpVerticalWindowValues] = useState(null);
  const [downVerticalWindowValues, SetDownverticalWindowValues] =
    useState(null);

  const horizantalWindow = (sizes) => {
    if (sizes) {
      console.log("sizee", sizes);
      localStorage.setItem("yatay-pencere-değerleri", JSON.stringify(sizes));

      const data = JSON.parse(localStorage.getItem("yatay-pencere-değerleri"));
      SetHorizantalWindowValues(data);
    }
  };

  const upVerticalWindow = (sizes) => {
    if (sizes) {
      console.log("sizee", sizes);
      localStorage.setItem("üst-dikey-değerleri", JSON.stringify(sizes));

      const data = JSON.parse(localStorage.getItem("üst-dikey-değerleri"));
      SetUpVerticalWindowValues(data);
    }
  };

  const downVerticalWindow = (sizes) => {
    if (sizes) {
      console.log("sizee", sizes);
      localStorage.setItem("alt-dikey-değerleri", JSON.stringify(sizes));

      const data = JSON.parse(localStorage.getItem("alt-dikey-değerleri"));
      SetDownverticalWindowValues(data);
    }
  };

  useEffect(() => {
    horizantalWindow();
    upVerticalWindow();
    downVerticalWindow();
  }, []);

  return (
    <Split
      direction="vertical"
      sizes={[60, 40]}
      style={{ height: "calc(100vh - 6rem)" }}
      id="one"
      onDrag={(sizes) => horizantalWindow(sizes)}
    >
      <Split
        className="split"
        sizes={[70, 30]}
        onDrag={(sizes) => upVerticalWindow(sizes)}
      >
        <div className="gutter-row">{children[0]}</div>
        <div className="gutter-row">
          <TableLocation
            horizantalWindowValues={horizantalWindowValues}
            upVerticalWindowValues={upVerticalWindowValues}
            downVerticalWindowValues={downVerticalWindowValues}
          />
        </div>
      </Split>
      <Split
        className="split"
        sizes={[70, 30]}
        onDrag={(sizes) => downVerticalWindow(sizes)}
      >
        <div className="gutter-row">{children[1]}</div>
        <div className="gutter-row">**Lorem İpsume**</div>
      </Split>
    </Split>
  );
};

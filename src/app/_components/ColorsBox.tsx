"use client";
import React, { useState } from "react";
import styles from "./ColorsBox.module.scss";
import { CopyToClipboard } from "react-copy-to-clipboard";

interface ColorsBoxProps {
  colorr: any;
  colorType: string;
}
function ColorsBox({ colorr, colorType }: ColorsBoxProps) {
  const [copy, setCopy] = useState<boolean>(false);
  // let copy = false;
  console.log(colorr);
  let color = colorr[colorType];
  const copyChanger = () => {
    setCopy(!copy)
    console.log(copy);
  };
  async function copyHandler() {
    await copyChanger();
    await setTimeout(() => {
      copyChanger();
    }, 2000);
  }

  return (
    <CopyToClipboard
      text={color}
      onCopy={copyHandler}
    >
      <div className={styles.colorBoxMain}>
        <div
          style={{ background: color }}
          className={styles.colorBox}
        >
          <div
            style={{ background: color }}
            className={`${copy ? styles.playTransition : styles.copyTransition}`}
          ></div>
          <h1>{colorr.name}</h1>
          <button className={styles.copy}>COPY</button>
          <span className={styles.seeMore}>See More</span>
        </div>
      </div>
    </CopyToClipboard>
  );
}

export default ColorsBox;

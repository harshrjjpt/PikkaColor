import React from "react";
import mycolors from "../mycolors";
import styles from "./ColorsList.module.scss";
import SmallPallateBox from "./SmallPallateBox";
import { Container } from "./ui/Container/Container.styled";

function ColorsList() {
  return (
    <Container className={styles.colorslistContainer}>
      <ul className={styles.colorsList}>
        {mycolors.map((color: any) => (
          <li className={styles.colorListItem}>
            <SmallPallateBox colorDetails={color} />
          </li>
        ))}
      </ul>
    </Container>
  );
}

export default ColorsList;

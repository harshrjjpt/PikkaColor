import React from "react";
import styles from "./Header.module.scss";
import Icon from "./../../logo";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Container } from "../Container/Container.styled";
import Link from "next/link";

function Header() {
  return (
    <div className={styles.navbar}>
    <div className={styles.left}>
      <div className={styles.logoContainer}>
        <div>
          <Icon></Icon>
        </div>
      </div>
    </div>
    <div className={styles.right}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/trending">Trending</Link>
        </li>
        <li>
          <Link href="/pallate">Brands</Link>
        </li>
      </ul>
      <div className={styles.hamburgerContainer}>
        <img
          className={styles.hamburger}
          src="https://www.freeiconspng.com/thumbs/menu-icon/menu-icon-24.png"
          alt="HamburgerIcon"
          width="40"
          height="40"
        ></img>
      </div>
    </div>
  </div>
  );
}

export default Header;

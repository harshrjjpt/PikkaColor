import React from "react";
import mycolors from "../../mycolors";
import SmallPallateBox from "@/app/_components/SmallPallateBox";
import styles from "./Trending.module.scss";
import ColorsList from "@/app/_components/ColorsList";
function TrendingPage() {
  return (
    <div>
      <div className={styles.main}>
        <ColorsList />
      </div>
      <div className={styles.colorBackgroundBallContainer}>
        <div className={styles.circle}></div>
      </div>
    </div>
  );
}

export default TrendingPage;

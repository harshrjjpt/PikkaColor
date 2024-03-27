import Link from "next/link";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.homeWrapper}>
        <div className={styles.subHomeWrapper}>
          <div className={styles.left}></div>
          <div className={styles.right}>
            <h1 className={styles.header}>Pikk-A Color!</h1>
            <h3 className={styles.description}>
            Elevate Your Design Effortlessly Curate Captivating Color Palettes.
Unleash Your Creativity Explore, Customize, and Generate the Perfect Colors.
Craft Stunning Visuals Transform Your Ideas into Eye-catching Designs
            </h3>
            <Link href="/trending">
              <button
                className={styles.button53}
                role="button"
              >
                Explore
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.circle}></div>
      </div>
    </div>
  );
}

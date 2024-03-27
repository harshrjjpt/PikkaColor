'use client'
import React from 'react'
import styles from "./SmallPallateBox.module.scss"
import { useRouter } from 'next/navigation';

interface  SmallPallateBoxProps {
    colorDetails: any
}
function SmallPallateBox({colorDetails}:SmallPallateBoxProps ) {
  console.log(colorDetails)
  const { push } = useRouter();
  const openPallate = () => {
    push(`/palette/${colorDetails.id}`)
  }
  return (
    <div onClick={openPallate} className={styles.smallPallateBox}>
      <div className={styles.smallPallateBoxContainer}>
        <h1 className={styles.title}>{colorDetails.paletteName}</h1>
        <h3 className={styles.subTitle}>Traditional colors</h3>
        <div className={styles.ballContainer}>
          {colorDetails.colors.slice(0, 4).map((color:any) => (
            <div className={styles.colorBallBox}>
              <div
                style={{ backgroundColor: color["color"] }}
                className={styles.colorBall}
              ></div>
              <span className={styles.colorName}>{color.name.substring(0, 10)}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SmallPallateBox

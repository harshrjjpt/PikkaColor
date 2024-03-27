"use client";
import React, { useEffect, useState } from "react";
import styles from "./Pallate.module.scss";
import ColorsBox from "@/app/_components/ColorsBox";
import mycolors from "@/app/mycolors";
import { Palette, StarterPalette } from "@/app/interface";
import { generatePalette } from "@/app/utils";
import { Container } from "@/app/_components/ui/Container/Container.styled";

interface PageProps {
  pallateId:string
}
function PallatePage({params}: {params: PageProps}) {
  const [darkness, setDarkness] = useState(500);
  const [colorType, setcolorType] = useState("hex");
  const [data, setData] = useState<Palette | null>(null);
  console.log(params.pallateId)

  useEffect(() => {
    getColorsData(params.pallateId);
  }, []);

  const colorPallateFinder = async (ID: string): Promise<StarterPalette | undefined> => {
    const foundPalette = mycolors.find((palette: any) => palette.id === ID);
    if (foundPalette) {
      return foundPalette;
    } else {
      return undefined;
    }
  };

  const getColorsData = async (id: string) => {
    const pallate: StarterPalette | undefined = await colorPallateFinder(id);
    if (pallate) {
      const colorData = await generatePalette(pallate)
      setData(colorData);
    }
  };

  return (
    <div className={styles.pallatePageContainer}>
      <div className={styles.colorsContainer}>
        <ul className={styles.colorBoxesList}>
          {data &&
            data.colors[900].map((color: any) => (
              <li>
                <ColorsBox
                  colorr={color}
                  colorType={colorType}
                />
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default PallatePage;

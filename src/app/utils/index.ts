
import chroma from "chroma-js";
import { Palette, StarterPalette } from "../interface";

const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

export function generatePalette(starterPalette: StarterPalette): Palette {
  const newPalette: Palette = {
    paletteName: starterPalette.paletteName,
    id: starterPalette.id,
    emoji: starterPalette.emoji,
    colors: {},
  };

  for (const level of levels) {
    newPalette.colors[level] = [];
  }

  for (const color of starterPalette.colors) {
    const scale = getScale(color.color, 10).reverse();
    for (let i = 0; i < scale.length; i++) {
      newPalette.colors[levels[i]].push({
        name: `${color.name} ${levels[i]}`,
        id: `${color.name.toLowerCase().replace(/ /g, "-")}-${levels[i]}`, // Include level in the ID
        hex: scale[i],
        rgb: chroma(scale[i]).css(),
        rgba: chroma(scale[i]).css().replace("rgb", "rgba").replace(")", ",1.0)"),
      });
    }
  }

  return newPalette;
}

export function getRange(hexColor: string) {
  const end = "#fff";
  return [chroma(hexColor).darken(1.4).hex(), hexColor, end];
}

export function getScale(hexColor: string, numberOfColors: number) {
  return chroma.scale(getRange(hexColor)).mode("lab").colors(numberOfColors);
}

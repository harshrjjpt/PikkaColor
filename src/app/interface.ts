export interface Color {
    name: string;
    hex: string;
    rgb: string;
    rgba: string;
  }
  
  export interface StarterPalette {
    paletteName: string;
    id:string;
    emoji: string;
    colors: {name:string, color:string}[];
  }
  
  export interface Palette {
    paletteName: string;
    emoji: string;
    id:string;
    colors: {
      [level: number]: {
        name: string;
        id: string;
        hex: string;
        rgb: string;
        rgba: string;
      }[];
    };
  }
import { createTheme } from "@mui/material/styles";
import { Theme } from "@mui/material/styles";

type customPaletteOption = {
  customeGreen?: {
    main: string;
  };
} & Theme["palette"];


export const myTheme = createTheme({
  palette: {
    customeGreen: {
      main: "#40A578",
    },
  } as customPaletteOption,
});

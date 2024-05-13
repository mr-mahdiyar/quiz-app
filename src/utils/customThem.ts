import { createTheme } from "@mui/material/styles";
import { Theme } from "@mui/material/styles";

type customPaletteOption = {
  customBlue: {
    main: string;
  };
  customYellow: {
    main: string
  }
} & Theme["palette"];


export const myTheme = createTheme({
  palette: {
    customBlue: {
      main: "#03AED2",
    },
    customYellow: {
      main: "#FDDE55"
    }
  } as customPaletteOption,
});

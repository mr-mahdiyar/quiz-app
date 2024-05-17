import { createTheme } from "@mui/material/styles";
import { Theme } from "@mui/material/styles";

type customPaletteOption = {
  customBlue: {
    main: string;
  };
  customYellow: {
    main: string
  },
  customGreen: {
    main: string
  },
  customRed: {
    main: string
  },
  customWhite: {
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
    },
    customGreen: {
      main: "#7fff00"
    },
    customRed: {
      main: "#ff0000"
    },
    customWhite: {
      main: "#EEF7FF"
    }
  } as customPaletteOption,
});

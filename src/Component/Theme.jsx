import { createTheme } from "@mui/material";

export default function Theme() {
  const theme = createTheme({
    palette: {
      mode: "light",

      primary: {
        main: "#2A777C",
      },
      secondary: {
        main: "#00A9BB",
      },
      warning: {
        main: "#cb5108",
        light: "#d6690a",
        dark: "#dc770d",
      },
      error: {
        main: "#da312a",
        light: "#da312a",
        dark: "#bb1f1e",
      },
      success: {
        main: "#09E78F",
      },
      background: {
        paper: "#FFFFFF",
        normal: "#FFFFFF",
      },
      link: {
        main: "#149BDB",
        light: "#34AFD9",
      },
      fontcolor: {
        main: "#2A777C",
        light: "#00A9BB",
      },
    },
    shape: {
      borderRadius: 2, //5
    },

    typography: {
      fontFamily: "sans-serif",
    },
  });
  return theme;
}

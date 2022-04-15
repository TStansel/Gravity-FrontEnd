import { createTheme } from "@mui/material";

const gravityPurple = "#A259FF";
const gravityBlue = "#86C0F6";
const gradient = "conic-gradient(from -26.29deg at 64.69% 113.89%, #86C0F6 -31.88deg, #A259FF 11.25deg, #E086F6 166.87deg, #86C0F6 328.12deg, #A259FF 371.25deg)";
const gravityGrey = "#868686"

const theme = createTheme({
  palette: {
    common: {
      blue: `${gravityPurple}`,
      orange: `${gravityBlue}`,
      purple: `${gradient}`
    },
    primary: {
      main: `${gravityPurple}`
    },
    secondary: {
      main: `${gravityBlue}`
    }
  },
  typography: {
    tab: {
      fontFamily: "Raleway",
      fontWeight: 700,
      textTransform: "none",
      fontSize: "1rem",
      color: "white",
    },
    estimate: {
      fontFamily: "Pacifico",
      fontSize: "1rem",
      textTransform: "none",
      color: "white",
    },
    h2: {
      fontFamily: "Raleway",
      fontSize: "2.5rem",
      color: gravityPurple,
      fontWeight: 700,
      lineWeight: 1.5,
    },
    h3: {
      fontFamily: "Pacifico",
      fontSize: "2.5rem",
      color: gravityPurple,
    },
    h4: {
      fontFamily: "Raleway",
      fontSize: "1.75rem",
      color: gravityPurple,
      fontWeight: 700,
    },
    subtitle1: {
      fontSize: "1.25rem",
      fontWeight: 300,
      color: gravityGrey,
    },
    subtitle2: {
      color: 'white',
      fontSize: "1.25rem",
      fontWeight: 300,
    },
    body1: {
      fontSize: "1.25rem",
      color: gravityGrey,
      fontWeight: 300,
    },
    learnButton: {
      borderColor: gravityPurple,
      borderWidth: 2,
      textTransform: "none",
      borderRadius: 50,
      fontFamily: "Roboto",
      fontWeight: "bold",
    } 
  },
});

export default theme

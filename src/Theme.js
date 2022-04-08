import { createTheme } from "@mui/material";

const arcBlue = "#007bff";
const arcOrange = "#FFBA60";
const gradient = "conic-gradient(from -26.29deg at 64.69% 113.89%, #86C0F6 -31.88deg, #A259FF 11.25deg, #E086F6 166.87deg, #86C0F6 328.12deg, #A259FF 371.25deg)";
const arcGrey = "#868686"

const theme = createTheme({
  palette: {
    common: {
      blue: `${arcBlue}`,
      orange: `${arcOrange}`,
      purple: `${gradient}`
    },
    primary: {
      main: `${arcBlue}`
    },
    secondary: {
      main: `${arcOrange}`
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
      color: arcBlue,
      fontWeight: 700,
      lineWeight: 1.5,
    },
    h4: {
      fontFamily: "Raleway",
      fontSize: "1.75rem",
      color: arcBlue,
      fontWeight: 700,
    },
    subtitle1: {
      fontSize: "1.25rem",
      fontWeight: 300,
      color: arcGrey,
    },
    learnButton: {
      borderColor: arcBlue,
      borderWidth: 2,
      textTransform: "none",
      borderRadius: 50,
      fontFamily: "Roboto",
      fontWeight: "bold",
    } 
  },
});

export default theme



// const GlobalStyle = createGlobalStyle`
//   :root {
//       --primary-color: #007bff;
//       --white: #fff;
//       --black: #010101;
//       --primary-button: #81FCC5;
//       --background-primary: conic-gradient(from -26.29deg at 64.69% 113.89%, #86C0F6 -31.88deg, #A259FF 11.25deg, #E086F6 166.87deg, #86C0F6 328.12deg, #A259FF 371.25deg);
//       --linkedin-hex: #0e76a8;
//       --facebook-hex: #4267B2;
//       --instagram-hex: #fccc63;
//       --primary-accent: #3E103F;
//   }

//   * {
//     box-sizing: border-box;
//     padding: 0;
//     margin: 0;
//     font-family: 'lato';
//   }

//   html, body {
//     margin: 0;   
//     padding: 0;  
//   }
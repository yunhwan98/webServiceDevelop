// #region Global Imports
import { DefaultTheme } from "styled-components";
// #endregion Global Imports
import { common } from "./common";

const dark: DefaultTheme = {
    colors: {
        ...common.colors,
        toggleBorder: "#556678",
        gradient: "linear-gradient(#091236, #1E215D)",
        background: "#20232A",
        headerBg: "#1A1C22",
        cardsBg: "#1A1C22",
        textColor: "#FFFFFF",
        dodgerBlue: "#0062CC",
    },
    breakpoints: {
        TABLETMIN: `screen and (min-width: 768px)`,
        DESKTOPMIN: `screen and (min-width: 1140px)`,
    },
};

export { dark };

import Typography from "typography";
import altonTheme from "typography-theme-alton";
// // Hot reload typography in development.
// if (process.env.NODE_ENV !== `production`) {
//   Typography.injectStyles();
// }

altonTheme.overrideStyles = ({ rhythm }, options) => ({
  "h1,h2, h2": {
    fontSize: "2em",
    fontWeight: "normal",
  },
});
const typography = new Typography(altonTheme);

export default typography;
export const rhythm = typography.rhythm;
export const scale = typography.scale;

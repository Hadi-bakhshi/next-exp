import { Theme, ThemeOptions } from "@mui/material/styles";

//MUI Module Types to create theme

declare module "@mui/material/styles" {
  // Theme interface
  interface CustomTheme extends Theme {
    [key: string]: any;
  }
  // ThemeOptions interface
  interface CustomThemeOptions extends ThemeOptions {
    [key: string]: any;
  }
  export function createTheme(options?: CustomThemeOptions): CustomTheme;
}

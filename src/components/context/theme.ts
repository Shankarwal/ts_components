// type ThemeType = {
//   backgroundColor: string;
//   color: string;
//   border: string;
// };

interface ThemeType {
  backgroundColor: string;
  color: string;
  border: string;
}

export type Themes = {
  primary: ThemeType;
  secondary: ThemeType;
};

export const themes: Themes = {
  primary: {
    backgroundColor: "#fff",
    color: "#555",
    border: "1px solid #555",
  },
  secondary: {
    backgroundColor: "#555",
    color: "#fff",
    border: "1px solid #fff",
  },
};

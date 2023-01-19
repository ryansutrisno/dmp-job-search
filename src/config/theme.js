import {createTheme} from '@material-ui/core/styles';

const theme = createTheme({
  overrides: {
    MuiContainer: {
      maxWidthXs: {
        maxWidth: '960px !important',
      },
      maxWidthSm: {
        maxWidth: '960px !important',
      },
      maxWidthMd: {
        maxWidth: '960px !important',
      },
      maxWidthLg: {
        maxWidth: '960px !important',
      },
    },
    typography: {
      fontFamily: ['Nunito', 'sans-serif'],
      fontWeight: 'normal',
    },
    palette: {
      primary: {
        main: '#106cc8',
      },
    },
    breakpoints: {
      values: {
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920,
      },
    },
  },
});

export default theme;

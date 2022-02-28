import { AppThemeProvider } from "../shared/contexts";
import "./globals.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <AppThemeProvider>
      <Component {...pageProps} />
    </AppThemeProvider>
  )
};

export default MyApp;

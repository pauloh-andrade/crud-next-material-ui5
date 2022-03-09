import { AppThemeProvider, DrawerProvider } from "../shared/contexts";
import "./globals.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <AppThemeProvider>
      <DrawerProvider>
        <Component {...pageProps} />
      </DrawerProvider>
    </AppThemeProvider>
  )
};

export default MyApp;

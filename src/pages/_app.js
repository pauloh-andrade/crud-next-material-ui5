import { MenuLateral } from '../componnents';
import { AppThemeProvider, DrawerProvider } from '../contexts';
import '../forms/TraducoesYup';
import './globals.css';

const MyApp = ({ Component, pageProps }) => {
	return (
		<AppThemeProvider>
			<DrawerProvider>
				<MenuLateral>
					<Component {...pageProps} />
				</MenuLateral>
			</DrawerProvider>
		</AppThemeProvider>
	);
};

export default MyApp;

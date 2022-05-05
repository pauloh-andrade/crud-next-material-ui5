import { ThemeProvider } from '@mui/material';
import { LightTheme, DarkTheme } from '../themes';
import { useCallback, useMemo, useState, createContext, useContext } from 'react';
import { Box } from '@mui/system';

//criando context
const ThemeContext = createContext({});

//hook do context
const useAppThemeContext = () => {
	//Retorna o valor atual do contexto para esse contexto.
	return useContext(ThemeContext);
};

const AppThemeProvider = ({ children }) => {
	const [themeName, setThemeName] = useState('light');

	//arrow para troca de tema
	const toggleTheme = useCallback(() => {
		setThemeName(oldThemeName => (oldThemeName === 'light' ? 'dark' : 'light'));
	}, []);

	//retorna tema quando themeName for alterado
	const theme = useMemo(() => {
		if (themeName === 'light') return LightTheme;
		return DarkTheme;
	}, [themeName]);

	return (
		<ThemeContext.Provider value={{ themeName, toggleTheme }}>
			<ThemeProvider theme={theme}>
				<Box width="100vw" height="100vh" bgcolor={theme.palette.background.default}>
					{children}
				</Box>
			</ThemeProvider>
		</ThemeContext.Provider>
	);
};

export { ThemeContext, useAppThemeContext, AppThemeProvider };

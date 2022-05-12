import { Box, Button, TextField, Paper, useTheme, Icon } from '@mui/material';

import { Environment } from '../../environment';

export const FerramentasDaListagem = ({
	textoBusca = '',
	mostrarInputBusca = false,
	aoMudarTextoDeBusca,
	aoClicarEmNovo,
	textoBotaoNovo = 'Novo',
	mostrarBotaoNovo = true,
	params,
}) => {
	const theme = useTheme();

	return (
		<Box
			height={theme.spacing(5)}
			gap={1}
			marginX={1}
			padding={1}
			paddingX={2}
			display="flex"
			alignItems="center"
			component={Paper}>
			{mostrarInputBusca && (
				<TextField
					size="small"
					placeholder={Environment.INPUT_DE_BUSCA}
					onChange={e => aoMudarTextoDeBusca?.({ busca: e.target.value, pagina: 1 })}
					value={textoBusca}
				/>
			)}
			<Box flex={1} display="flex" justifyContent="end">
				{mostrarBotaoNovo && (
					<Button
						color="primary"
						variant="contained"
						endIcon={<Icon>add</Icon>}
						disableElevation
						onClick={aoClicarEmNovo}>
						{textoBotaoNovo}
					</Button>
				)}
			</Box>
		</Box>
	);
};

import { Box, useTheme, Paper, Button, Icon, Divider, Skeleton, Typography, useMediaQuery } from '@mui/material';

export const FerramentasDeDetalhe = ({
	textoBotaoNovo = 'Novo',
	mostrarBotaoNovo = true,
	mostrarBotaoApagar = true,
	mostrarBotaoSalvar = true,
	mostrarBotaoSalvarEVoltar = false,
	mostrarBotaoVoltar = true,

	mostrarBotaoNovoCarregando = false,
	mostrarBotaoApagarCarregando = false,
	mostarBotaoSalvarCarregando = false,
	mostrarBotaoSalvarEVoltarCarregando = false,
	mostrarBotaoVoltarCarregando = false,

	aoClicarEmNovo,
	aoClicarEmSalvar,
	aoClicarEmSalvarEVoltar,
	aoClicarEmApagar,
	aoClicarEmVoltar,
}) => {
	const theme = useTheme();
	const smDown = useMediaQuery(theme.breakpoints.down('sm'));
	const mdDown = useMediaQuery(theme.breakpoints.down('md'));

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
			{mostrarBotaoSalvar && !mostarBotaoSalvarCarregando && (
				<Button color="primary" variant="contained" startIcon={<Icon>save</Icon>} disableElevation>
					<Typography variant="button" whiteSpace="nowrap" textOverflow="ellipsis" overflow="hidden">
						Salvar
					</Typography>
				</Button>
			)}
			{mostarBotaoSalvarCarregando && <Skeleton width={110} height={60} />}
			{mostrarBotaoSalvarEVoltar && !mostrarBotaoSalvarEVoltarCarregando && !smDown && !mdDown && (
				<Button color="primary" variant="outlined" startIcon={<Icon>save</Icon>} disableElevation>
					<Typography variant="button" whiteSpace="nowrap" textOverflow="ellipsis" overflow="hidden">
						Salvar e voltar
					</Typography>
				</Button>
			)}
			{mostrarBotaoSalvarEVoltarCarregando && !smDown && !mdDown && <Skeleton width={170} height={60} />}
			{mostrarBotaoApagar && !mostrarBotaoApagarCarregando && (
				<Button color="primary" variant="outlined" startIcon={<Icon>delete</Icon>} disableElevation>
					<Typography variant="button" whiteSpace="nowrap" textOverflow="ellipsis" overflow="hidden">
						Apagar
					</Typography>
				</Button>
			)}
			{mostrarBotaoApagarCarregando && <Skeleton width={110} height={60} />}
			{mostrarBotaoNovo && !mostrarBotaoNovoCarregando && !smDown && (
				<Button color="primary" variant="outlined" startIcon={<Icon>add</Icon>} disableElevation>
					<Typography variant="button" whiteSpace="nowrap" textOverflow="ellipsis" overflow="hidden">
						{textoBotaoNovo}
					</Typography>
				</Button>
			)}
			{mostrarBotaoNovoCarregando && !smDown && <Skeleton width={95} height={60} />}
			{mostrarBotaoVoltar &&
				(mostrarBotaoNovo || mostrarBotaoApagar || mostrarBotaoSalvar || mostrarBotaoSalvarEVoltar) && (
					<Divider variant="middle" orientation="vertical" />
				)}

			{mostrarBotaoVoltar && !mostrarBotaoVoltarCarregando && (
				<Button color="primary" variant="outlined" startIcon={<Icon>arrow_back</Icon>} disableElevation>
					<Typography variant="button" whiteSpace="nowrap" textOverflow="ellipsis" overflow="hidden">
						voltar
					</Typography>
				</Button>
			)}
			{mostrarBotaoVoltarCarregando && <Skeleton width={110} height={60} />}
		</Box>
	);
};

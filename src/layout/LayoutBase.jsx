import { IconButton, useTheme, Icon, useMediaQuery } from '@mui/material';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useDrawerContext } from '../contexts';
import { useEffect } from 'react';

const LayoutBase = ({ children, titulo, barraDeFerramentas }) => {
	const theme = useTheme();
	const smDown = useMediaQuery(theme.breakpoints.down('sm'));
	const mdDown = useMediaQuery(theme.breakpoints.down('md'));

	const { toggleDrawerOpen } = useDrawerContext();
	const { setDrawerOptions } = useDrawerContext();

	useEffect(() => {
		setDrawerOptions([
			{
				icon: 'home',
				path: '/',
				label: 'Página inicial  ',
			},
			{
				icon: 'people',
				path: '/pessoa',
				label: 'Pessoas',
			},
			{
				icon: 'apartment',
				path: '/cidade',
				label: 'Cidades',
			},
		]);
	}, []);

	return (
		<Box height="100%" display="flex" flexDirection="column" gap={1}>
			<Box display="flex" alignItems="center" padding={1} height={theme.spacing(smDown ? 6 : mdDown ? 8 : 12)} gap={1}>
				{smDown && (
					<IconButton onClick={toggleDrawerOpen}>
						<Icon>menu</Icon>
					</IconButton>
				)}
				<Typography
					variant={smDown ? 'h5' : mdDown ? 'h4' : 'h3'}
					overflow="hidden"
					whiteSpace="nowrap"
					textOverflow="ellipsis">
					{titulo}
				</Typography>
			</Box>
			{barraDeFerramentas && <Box>{barraDeFerramentas}</Box>}
			<Box flex={1} overflow="auto">
				{children}
			</Box>
		</Box>
	);
};

export default LayoutBase;

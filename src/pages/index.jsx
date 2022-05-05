import { Button } from '@mui/material';
import { useEffect } from 'react';
import { MenuLateral } from '../componnents';
import { useDrawerContext } from '../contexts';
import Dashboard from './dashboard/Dashboard';

const Home = () => {
	return <Dashboard></Dashboard>;
};

export default Home;

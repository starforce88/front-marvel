/* eslint eqeqeq: "off", curly: "error", @typescript-eslint/no-unused-vars: "off", react-hooks/exhaustive-deps: "off", array-callback-return: "off", no-eval: "off", jsx-a11y/alt-text: "off", jsx-a11y/anchor-is-valid: "off" */
import React, { useState } from 'react';
import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Avatar, Card, CardContent, CardHeader, Container, CssBaseline } from '@mui/material';
import logo from './images/icon-marvel.jpg';
import Search from './components/Search';
import Results from './components/Results';
import Character from './components/Character';

const theme = createTheme({
	palette: {
		mode: 'dark',
		primary: {
			main: '#8c9eff',
		},
		secondary: {
			main: '#004d40'
		}
	},
	/*typography: {
		h6: {
			fontSize: '20px',
			//fontFamily: 'cursive',
			fontWeight: 'bold'
		},
		subtitle1: {
			fontSize: '15px',
			//fontFamily: 'cursive'
		},
		body1: {
			fontSize: '1rem'
		}
	},*/
});

const App = () => {
	const [list, setList] = useState([]);
	const [open, setOpen] = useState(false);
	const [info, setInfo] = useState({});
  	return <ThemeProvider theme={theme}>
	  	<CssBaseline/>
		<Container>
			<Card>
				<CardHeader
					avatar={
						<Avatar>
							<img
								src={logo}
								width={'100%'}
							/>
						</Avatar>
					}
					title={'Search characters'}
				/>
				<CardContent>
					<Search setList={setList}/>
					<Results list={list} setInfo={setInfo} setOpen={setOpen}/>
				</CardContent>
			</Card>
			<Character 
				open={open}
				setOpen={setOpen}
				info={info}
				setInfo={setInfo}
			/>
		</Container>
	</ThemeProvider>
}

export default App;

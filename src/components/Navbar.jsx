import { IconButton, Stack, Typography } from "@mui/material"
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { Link } from "react-router-dom"
import {logo} from "../utils/constants";
import SearchBar from "./SearchBar";
import { useContext } from "react";
import ThemeContext from "../context/theme";
import { lightTheme, darkTheme } from "../utils/themes";

const Navbar = () => {
	const { theme, setTheme } = useContext(ThemeContext);

	const themeToggler = () => {
		theme === "light" ? setTheme("dark") : setTheme("light")
	}

	return (
		<Stack 
			direction="row" 
			alignItems="center" 
			p={2} 
			sx={{
				position: "sticky",
				background: theme === "light" ? lightTheme.body : darkTheme.body,
				top: 0,
				justifyContent: "space-between"
			}}
		>
			<Link to="/" style={{display: "flex", alignItems:"center"}}>
				<img src={logo} alt="logo" height={45} />
			</Link>

			<SearchBar />
			<IconButton sx={{display: "flex", alignItems: "center", justifyContent: "center"}} onClick={themeToggler}>
				{
					theme === "dark" ? 
					(<Brightness4Icon sx={{ color: darkTheme.fontColor }} />) : 
					(<Brightness7Icon sx={{ color: lightTheme.fontColor }} />)
				}
				<Typography 
					sx={{
						display: {
							xs: "none",
							md: "flex"
						},
						color: theme === "light" ? lightTheme.fontColor : darkTheme.fontColor
					}}
				>
					{theme}
				</Typography>
			</IconButton>
		</Stack>
	)
}

export default Navbar
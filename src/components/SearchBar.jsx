import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { Paper, IconButton } from "@mui/material"
import { Search } from "@mui/icons-material";
import ThemeContext from "../context/theme";
import { lightTheme, darkTheme } from "../utils/themes";

const SearchBar = () => {
	const { theme } = useContext(ThemeContext);
	const [searchTerm, setSearchTerm] = useState("");
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();

		if (searchTerm) {
			navigate(`/search/${searchTerm}`);
			setSearchTerm("");
		}
	}

	return (
		<Paper 
			component="form"
			onSubmit={handleSubmit}
			sx={{
				display: "flex",
				borderRadius: 20,
				border: "1px solid #e3e3e3",
				pl: 2,
				boxShadow: "none",
				mr: {sm: 5},
				background: theme === "light" ? lightTheme.background : darkTheme.bodyLight
			}}
		>
			<input 
				type="text" 
				className="search-bar" 
				placeholder="Search..." 
				value={searchTerm} 
				onChange={(e) => setSearchTerm(e.target.value)} 
				style={{
					background: theme === "light" ? lightTheme.body : darkTheme.bodyLight,
					color: theme === "light" ? lightTheme.bodyLight : darkTheme.fontColorLight,
					borderRadius: "15px",
				}}
			/>
			<IconButton 
				type="submit" 
				sx={{
					p: "10px", 
					color: theme === "light" ? lightTheme.primary : darkTheme.primary
				}} 
			>
				<Search />
			</IconButton>
		</Paper>
	)
}

export default SearchBar
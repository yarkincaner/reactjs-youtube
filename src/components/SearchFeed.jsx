import { useState, useEffect, useContext } from "react"
import { useParams } from "react-router-dom"
import { Box, Typography } from "@mui/material"
import { Videos } from "./"
import ThemeContext from "../context/theme";
import { lightTheme, darkTheme } from "../utils/themes";

import { fetchFromAPI } from "../utils/fetchFromAPI"

const SearchFeed = () => {
	const { theme } = useContext(ThemeContext);
	const [videos, setVideos] = useState([]);
	const { searchTerm } = useParams();

	useEffect(() => {
		fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
			.then((data) => {setVideos(data.items)})
	}, [searchTerm])

	return (
		<Box p={2} sx={{overflowY: "auto", height: "90vh", flex: 2}}>
			<Typography variant="h4" fontWeight="bold" mb={2} sx={{color: theme === "light" ? lightTheme.fontColor : darkTheme.fontColor}}>
				Search Results for: <span style={{ color: theme === "light" ? lightTheme.primary : darkTheme.primary}}>{searchTerm}</span>
			</Typography>

			<Videos videos={videos} />
		</Box>
	)
}

export default SearchFeed
import { Stack } from "@mui/material"
import { categories } from "../utils/constants"
import { useContext } from "react";
import ThemeContext from "../context/theme";
import { lightTheme, darkTheme } from "../utils/themes";

const SideBar = ({selectedCategory, setSelectedCategory}) => {
	const { theme } = useContext(ThemeContext);

	return (
		<Stack
			direction="row"
			sx={{
				overflowY: "auto",
				height: {
					sx: "auto",
					md: "95%"
				},
				flexDirection: {
					md: "column"
				}
			}}
		>
			{
				categories.map((category) => (
					<button
						className="category-btn"
						onClick={() => setSelectedCategory(category.name)}
						style={{
							background: category.name === selectedCategory && "#FC1503",
							color: category.name === selectedCategory ? "white" : (theme === "light" ? lightTheme.fontColor : darkTheme.fontColor),
						}}
						key={category.name}
					>
						<span
							style={{
								color: category.name === selectedCategory ? "white" : "red",
								marginRight: "15px"
							}}
						>
							{category.icon}
						</span>
						<span
							style={{
								opacity: category.name === selectedCategory ? "1" : "0.8"
							}}
						>
							{category.name}
						</span>
					</button>
				))
			}
		</Stack>
	)
}

export default SideBar
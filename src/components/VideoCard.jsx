import { useContext } from "react";
import { CheckCircle } from "@mui/icons-material"
import { Typography, Card, CardContent, CardMedia } from "@mui/material"
import { Link } from "react-router-dom"
import ThemeContext from "../context/theme";
import { lightTheme, darkTheme } from "../utils/themes";

import { 
	demoThumbnailUrl, 
	demoVideoUrl, demoVideoTitle, 
	demoChannelUrl, demoChannelTitle 
} from "../utils/constants"

const VideoCard = ({ video: { id: { videoId }, snippet } }) => {
	const { theme } = useContext(ThemeContext);

	return (
		<Card
			sx={{
				width: {
					xs: "100%",
					sm: "358px",
					md: "320px",
				},
				boxShadow: "none",
				borderRadius: 0
			}}
		>
			<Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
				<CardMedia 
					image={snippet?.thumbnails?.high?.url} 
					alt={snippet?.title}
					sx={{
						width: {
							xs: "100%",
							sm: "358px",
							md: "320px",
						}, 
						height: 180
					}}
				/>
				<CardContent 
					sx={{
						backgroundColor: theme === "light" ? lightTheme.body : darkTheme.bodyLight,
						height: "106px"
					}}
				>
					<Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
						<Typography variant="subtitle1" fontWeight="bold" color={theme === "light" ? lightTheme.fontColor : darkTheme.fontColor}>
							{snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
						</Typography>
					</Link>

					<Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
						<Typography 
							variant="subtitle2" 
							fontWeight="bold" 
							color={theme === "light" ? lightTheme.fontColorLight : darkTheme.fontColorLight}
						>
							{snippet?.channelTitle || demoChannelTitle}
							<CheckCircle 
								sx={{ 
									fontSize: 12, 
									color: theme === "light" ? lightTheme.fontColorLight : darkTheme.fontColorLight, 
									ml: "5px" 
								}} 
							/>
						</Typography>
					</Link>
				</CardContent>
			</Link>
		</Card>
	)
}

export default VideoCard
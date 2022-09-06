import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import {
  Navbar,
  Feed,
  VideoDetail,
  ChannelDetail,
  SearchFeed,
} from "./components";
import { useContext } from "react";
import ThemeContext from "./context/theme";
import { lightTheme, darkTheme } from "./utils/themes";

const App = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <BrowserRouter>
      <Box
        sx={{
          backgroundColor: theme === "light" ? lightTheme.body : darkTheme.body,
        }}
      >
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Feed />} />
          <Route path="/video/:id" element={<VideoDetail />} />
          <Route path="/channel/:id" element={<ChannelDetail />} />
          <Route path="/search/:searchTerm" element={<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
};

export default App;

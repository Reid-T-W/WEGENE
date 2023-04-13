// import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from '@mui/material';
import { Home, Navbar, Postdetail, Login } from './components';

function App() {
  return (
    <BrowserRouter>
    <Box sx={{ backgroundColor: '#FFFFFF' }}>
        <Navbar />
        <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/posts/:id" element={<Postdetail />} />
            <Route path="/login" element={<Login />} />
            {/* <Route path="/channel/:id" element={<ChannelDetail />} />
            <Route path="/search/:searchTerm" element={<SearchFeed />} /> */}
        </Routes> 
    </Box>
    </BrowserRouter>
  );
}

export default App;

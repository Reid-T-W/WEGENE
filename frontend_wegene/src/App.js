// import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from '@mui/material';
import { Home, Navbar, Postdetail, Login, Signup, Resetpassword, Userdonations, Userpendingdonations, Userposts } from './components';
import { DynamicContextProvider } from "./contexts/DynamicContext";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <DynamicContextProvider>
      <ToastContainer />
      <BrowserRouter>
      <Box sx={{ backgroundColor: '#FFFFFF' }}>
          <Navbar />
          <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/posts/:id" element={<Postdetail />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/resetpassword" element={<Resetpassword />} />
              <Route path="/user" element={<Userdonations />} />
              <Route path="/userdonations" element={<Userdonations />} />
              <Route path="/userpendingdonations" element={<Userpendingdonations />} />
              <Route path="/userposts" element={<Userposts />} />
              {/* <Route path="/channel/:id" element={<ChannelDetail />} />
              <Route path="/search/:searchTerm" element={<SearchFeed />} /> */}
          </Routes> 
      </Box>
      </BrowserRouter>
    </DynamicContextProvider>
  );
}

export default App;

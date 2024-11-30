import React from 'react'
import { Box } from "@mui/material";
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Skills from './Skills'
import {  Routes, Route } from 'react-router-dom';

const MainContent = () => {
    return (
        <div>
            <Box
                sx={{
                    // ml: "250px",
                    height: "100vh",
                    overflowY: "auto",
                    // width: "calc(100% - 250px)",
                }}
            >
                <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/project' element={<Projects />} />
                        <Route path='/skills' element={<Skills />} />
                    </Routes>
            </Box>
        </div>
    )
}

export default MainContent

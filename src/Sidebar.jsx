import React, { useState } from "react";
import { Box, Drawer, IconButton, } from "@mui/material";
import MainContent from './MainContent';
import Avatar from '@mui/material/Avatar';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';
import { Link } from 'react-router-dom';
import Tooltip from '@mui/material/Tooltip';
import MenuIcon from "@mui/icons-material/Menu";
const Sidebar = () => {
    const [open, setOpen] = useState(false);
    const toggleDrawer = (newOpen) => () => {
      setOpen(newOpen);
    };

    return (
        <div>
            {/* Navbar */}
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                px={2}
                py={1}
                bgcolor="#111418"
                color="white"
                position="sticky"
                width="100%"
                zIndex={10}
            >
                <IconButton onClick={toggleDrawer(true)} color="inherit">
                    <MenuIcon />
                </IconButton>
                <h5 style={{ margin: 0 }}>Keerthi Gandham</h5>
            </Box>

            {/* Drawer (Sidebar) */}
            <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
                <Box
                    sx={{
                        width: 250,
                        backgroundColor: "#111418",
                        color: "white",
                        height: "100%",
                        p: 2,
                    }}
                    role="presentation"
                    onClick={toggleDrawer(false)}
                    onKeyDown={toggleDrawer(false)}
                >
                    <Avatar
                        alt="my-image"
                        src="/assets/Images/my.jpeg"
                        sx={{
                            width: 150,
                            height: 150,
                            border: 2,
                            boxShadow: "4px 4px 10px lightblue",
                            mx: "auto",
                        }}
                    />
                    <h5 className="mt-3 mb-1 text-center">
                        <i>Keerthi Gandham</i>
                    </h5>
                    <p className="mb-0" style={{ fontSize: "11px", textAlign: "center" }}>
                        Available for Work
                    </p>

                    <ul
                        className="mt-5"
                        style={{
                            listStyleType: "none",
                            padding: 0,
                        }}
                    >
                        <li className="mt-3 linknav">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="mt-3 linknav">
                            <Link to="/about">About</Link>
                        </li>
                        <li className="mt-3 linknav">
                            <Link to="/skills">What I do</Link>
                        </li>
                        <li className="mt-3 linknav">
                            <Link to="/project">Projects</Link>
                        </li>
                    </ul>

                    <ul
                        style={{
                            listStyleType: "none",
                            position: "absolute",
                            bottom: 10,
                            left: 0,
                            width: "100%",
                        }}
                        className="social-icons social-icons-muted social-icons-sm d-flex justify-content-center"
                    >
                        <li className="social-icons-facebook mx-2">
                            <Tooltip title="LinkedIn">
                                <a
                                    href="https://www.linkedin.com/in/keerthi-gandham-a17082170/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <LinkedInIcon color="primary" />
                                </a>
                            </Tooltip>
                        </li>
                        <li className="social-icons-facebook mx-2">
                            <Tooltip title="GitHub">
                                <a
                                    href="https://github.com/keerthi1723/protofilo-1723"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <GitHubIcon color="success" />
                                </a>
                            </Tooltip>
                        </li>
                        <li className="social-icons-facebook mx-2">
                            <Tooltip title="Mail">
                                <a
                                    href="mailto:keerthigandham0509@gmail.com?subject=Contact"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <MailIcon color="secondary" />
                                </a>
                            </Tooltip>
                        </li>
                    </ul>
                </Box>
            </Drawer>

            {/* Main Content */}
            <Box >
                <MainContent px={2} />
            </Box>
        </div>
    )
}

export default Sidebar
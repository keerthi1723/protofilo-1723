import React from 'react'
import { Box } from "@mui/material";
import MainContent from './MainContent';
import Avatar from '@mui/material/Avatar';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';
import { Link } from 'react-router-dom';
import Tooltip from '@mui/material/Tooltip';
const Sidebar = () => {
    return (
        <div>
            <Box display="flex" alignItems='center' height="100vh" overflow="hidden">
                {/* Sidebar */}
                <Box
                    sx={{
                        width: 250,
                        backgroundColor: "#111418",
                        color: "white",
                        p: 2,
                        position: "fixed",
                        height: "100vh",
                    }}
                >
                    <Avatar alt="my-image" className='mt-3' src="/assets/Images/my.jpeg" sx={{ width: 150, height: 150, border: 2, boxShadow: "4px 4px 10px lightblue", }} />
                    <h5 className='mt-3 mb-1 text-center' ><i>Keerthi Gandham</i></h5>
                    <p className='mb-0'  style={{ fontSize: '11px', marginLeft: '30px' }}>Available for Work</p>

                    <ul className='mt-5'
                        style={{
                            listStyleType: "none",
                        }}
                    >
                        <li style={{ color: "white !important", }} className='mt-3 linknav'><Link to="/">Home</Link></li>
                        <li className='mt-3 linknav'><Link to="/about">About</Link></li>
                        <li className='mt-3 linknav'><Link to="/skills">What I do</Link></li>
                        <li className='mt-3 linknav'><Link to="/project">Projects</Link></li>
                        {/* <li className='mt-3 linknav'><Link to="/contact">Contact Us</Link></li> */}
                    </ul>

                    <ul style={{
                        listStyleType: "none",
                        position: 'fixed',
                        bottom: 0
                    }} className="social-icons social-icons-muted social-icons-sm mt-lg-auto ms-auto ms-lg-0 d-flex">
                        <li className="social-icons-facebook">
                            <Tooltip title="LinkedIn">
                                <a
                                    href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ textDecoration: 'none' }}
                                >
                                    <LinkedInIcon color="primary" className="m-1" style={{ cursor: 'pointer' }} />
                                </a>
                            </Tooltip>


                            <Tooltip title="Instagram">
                                <InstagramIcon color="warning" className='m-1' style={{ cursor: 'pointer' }} />

                            </Tooltip>


                            <Tooltip title='GitHub'>
                                <a
                                    href="https://github.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ textDecoration: 'none' }}
                                >
                                    <GitHubIcon color="success" className='m-1' style={{ cursor: 'pointer' }} />
                                </a>
                            </Tooltip>
                            <Tooltip title="Mail">
                                <MailIcon color="info" className='m-1' style={{ cursor: 'pointer' }} />

                            </Tooltip>

                        </li>
                    </ul>
                </Box>
                {/* Main Content */}
                <MainContent />
            </Box>
        </div>
    )
}

export default Sidebar
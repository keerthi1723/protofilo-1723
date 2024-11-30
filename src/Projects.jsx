
import React from 'react'
import './Common.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
const Projects = () => {
    const matches = useMediaQuery('(min-width:768px)');
    return (
        <div className="p-2 project-banner" style={{
            overflowX: matches ? 'hidden' : 'hidden',
            overflowY: matches ? 'hidden' : 'scroll',
        }}>
            <h5 style={{
                marginLeft: window.innerWidth <= 768 ? '35%' : '48%',
            }} className='element-left-align text-white mt-5'>Projects</h5>

            <Card sx={{ minWidth: 275, backgroundColor: "#212529" }} className="card-wrapper1 mb-3 mt-3" >
                <CardContent>
                    <Typography component="div" className="text-white mt-1">
                        <span className='inner-text'>Point Of Care (POC) Lite     &nbsp;&nbsp;&nbsp;  2023 - Present</span>

                        <p className='mb-0 mt-3' style={{ whiteSpace: 'normal !important' }}>
                            The POC Lite application is undergoing a transformative
                            migration from the Structs framework to a modern and efficient stack, utilizing
                            React. This transition aims to simplify the user experience while enhancing the
                            overall performance and maintainability of the application
                        </p>

                        <p className='mt-1 mb-0'><span className='inner-text mt-2'>Technologies</span> : HTML5, SCSS, Bootstrap, React, JavaScript, Git</p>
                        <p className='mt-1 mb-0'><span className='inner-text mt-2'>Team Size</span> : 12</p>
                        <p className='mt-1 mb-0'><span className='inner-text mt-2'>Role</span> : UI and React Developer</p>


                    </Typography>
                </CardContent>
            </Card>

            <Card sx={{ minWidth: 275, backgroundColor: "#212529" }} className="card-wrapper1 mb-3 mt-3" >
                <CardContent>
                    <Typography component="div" className="text-white mt-1">
                        <span className='inner-text'>Maybe@thome</span>

                        <p className='mb-0 mt-3' style={{ whiteSpace: 'normal !important' }}>
                            It is a real estate e-commerce application. Which has access to
                            both agents and end users. It features various types of home like villa,
                            apartment, hotel etc. ownership status like leased, rented, owned and
                            brokerage deals.

                        </p>

                        <p className='mt-1 mb-0'><span className='inner-text mt-2'>Technologies</span> : HTML5, SCSS, Bootstrap, React, JavaScript, Git</p>
                        <p className='mt-1 mb-0'><span className='inner-text mt-2'>Role</span> : UI and React Developer</p>


                    </Typography>
                </CardContent>
            </Card>

        </div>
    )
}

export default Projects
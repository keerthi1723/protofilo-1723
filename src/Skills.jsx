import React from 'react'
import './Common.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import Button from '@mui/material/Button';
const Skills = () => {
  const matches = useMediaQuery('(min-width:768px)');
  return (
    <div className="p-2 edu-banner" style={{
      overflowX: matches ? 'hidden' : 'hidden',
      overflowY: matches ? 'hidden' : 'scroll',
    }}>
      <div className="row justify-content-center">
        {/* Education Section */}
        <div className="col-md-5">
          <Typography variant="h5" component="div" className="mb-2 text-white text-center">
            My Education
          </Typography>

          {/* SSC */}
          <Card sx={{ minWidth: 275, backgroundColor: "#212529" }} className="card-wrapper mb-3">
            <CardContent>
              <Button variant="contained">2011 - 2012</Button>
              <Typography variant="h6" component="div" className="text-white mt-2">
                SSC
              </Typography>
              <Typography component="div" className="text-white mt-1">
                <em>Wonder Kids English Medium School </em>
                <span className="mx-2 f-14" style={{ color: '#20c997' }}>  8.7 Gpa</span>
              </Typography>
            </CardContent>
          </Card>

          {/* Intermediate */}
          <Card sx={{ minWidth: 275, backgroundColor: "#212529" }} className="card-wrapper mb-3">
            <CardContent>
              <Button variant="contained">2012 - 2014</Button>
              <Typography variant="h6" component="div" className="text-white mt-2">
                Intermediate
              </Typography>
              <Typography component="div" className="text-white mt-1">
                <em>Sri Chaitanya Junior College </em>
                <span className="mx-2 f-14" style={{ color: '#20c997' }}>  80.8%</span>
              </Typography>
            </CardContent>
          </Card>

          {/* B.Tech */}
          <Card sx={{ minWidth: 275, backgroundColor: "#212529" }} className="card-wrapper mb-3">
            <CardContent>
              <Button variant="contained">2014 - 2018</Button>
              <Typography variant="h6" component="div" className="text-white mt-2">
                B.Tech
              </Typography>
              <Typography component="div" className="text-white mt-1">
                <em>Grandhi Varalakshmi VenkatRao Institute of Engineering & Technology (GVVIT) </em>
                <span className="mx-2 f-14" style={{ color: '#20c997' }}>  76%</span>
              </Typography>
            </CardContent>
          </Card>

          {/* M.Tech */}
          <Card sx={{ minWidth: 275, backgroundColor: "#212529" }} className="card-wrapper mb-3">
            <CardContent>
              <Button variant="contained">2018 - 2020</Button>
              <Typography variant="h6" component="div" className="text-white mt-2">
                M.Tech
              </Typography>
              <Typography component="div" className="text-white mt-1">
                <em>Bhimavaram Institute of Engineering & Technology (BIET) </em>
                <span className="mx-2 f-14" style={{ color: '#20c997' }}>  76%</span>
              </Typography>
            </CardContent>
          </Card>
        </div>

        {/* Experience Section */}
        <div className="col-md-5">
          <Typography variant="h5" component="div" className="mb-2 text-white text-center">
            My Experience
          </Typography>

          {/* UI Developer */}
          <Card sx={{ minWidth: 275, backgroundColor: "#212529" }} className="card-wrapper mb-3">
            <CardContent>
              <Button variant="contained">2019 Nov - Present</Button>
              <Typography variant="h6" component="div" className="text-white mt-2">
                UI Developer
              </Typography>
              <Typography component="div" className="text-white mt-1">
                <em>Ahex Technologies Private Limited</em>
              </Typography>
              <Typography component="div" className="text-white mt-2">
                <em className='inner-text element-left-align mb-2'>Roles & Responsibilities</em> <br />
                Collaborated with clients to understand project requirements, developing
                responsive, cross-browser compatible web applications using HTML5,
                CSS3, Bootstrap, JavaScript, and React.js.
                Ensured pixel-perfect UI design, adhering to best practices in RWD, while
                maintaining scalable code through CSS conventions like BEM and
                managing version control with Git and Bitbucket.
              </Typography>

              <Typography component="div" className="text-white mt-1">
                <em className='inner-text element-left-align mb-2 mt-2'>Awards & Certificates</em>
                <p className='mb-0' style={{ color: '#20c997' }}> Constant Contributor Award, [ Ahex Technologies ] –2023, 2024 </p>
                Recognized for consistent contributions and excellence in project deliveries
                over consecutive years. <br />
                <p className='mb-0 mt-2' style={{ color: '#20c997' }}>Year of Service Award, [ Ahex Technologies]-2024 </p>
                Honored for completing a significant year of service with dedication and
                outstanding performance.
              </Typography>
              <Typography component="div" className="text-white mt-1">
                <em className='inner-text element-left-align mb-2 '>Skills</em> <br />
                HTML5 <br />
                CSS3, SCSS  <br />
                Bootstrap 3,4,5  <br />
                JavaScript ,  Material Ui , React.js , Git  <br />
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Skills
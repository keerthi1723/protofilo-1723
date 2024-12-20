import React from 'react'
import useMediaQuery from '@mui/material/useMediaQuery';
import './Common.css'
const About = () => {
  const matches = useMediaQuery('(min-width:768px)');
  const white = useMediaQuery('(min-width:500px)');


  return (
    <div>
      <div className='about-banner'   style={{
    overflowX: matches ? 'hidden' : 'hidden',
    overflowY: matches ? 'hidden' : 'scroll',
  }}>
    <div className="aboutinner-banner">
  <h5 className="element-left-align" style={{ textAlign: "center" }}>
    Know Me More
  </h5>
  <div
    className="row mb-0 align-items-center justify-content-center"
  >
    <div className="col-md-5">
      <div className="mt-5">
        <h4 style={{ padding: "10px" }}>
          I'm
          <span className="inner-text"> Keerthi Gandham</span>, a UI Developer
        </h4>
        <h6 className="innerWelcome-Banner">
          I am a skilled and dedicated{" "}
          <i className="inner-text">UI developer with 5 years of experience</i>{" "}
          in creating dynamic and responsive web applications,
          <i className="inner-text">
            specializing in HTML5, CSS3, SCSS, and JavaScript, proficient in
            Bootstrap 3, 4, and 5, with 2 years of expertise in React.js.
          </i>
          Strong background in delivering pixel-perfect, responsive web designs
          (RWD) and following CSS naming conventions like BEM and Material-UI
          (MUI). Well-versed in version control systems such as Git and
          Bitbucket, and experienced with npm package managers. A proactive
          team player, fast learner, and highly motivated to achieve project
          success.
        </h6>
      </div>
    </div>
    <div
      className="col-md-5 p-2"
      style={{ marginTop: "6%" }}
    >
      <table className="table table-striped table-dark">
        <tbody>
          <tr>
            <td>Name :</td>
            <td>Keerthi Gandham</td>
          </tr>
          <tr>
            <td>Email :</td>
            <td className="inner-text">keerthigandham0509@gmail.com</td>
          </tr>
          <tr className='' style={{whiteSpace: 'nowrap'}}>
            <td>Mobile :</td>
            <td>8500619127</td>
          </tr>
          <tr>
            <td>From :</td>
            <td>Bhimavaram, Andhra Pradesh</td>
          </tr>
          <tr>
            <td>DOB :</td>
            <td>05-09-1997</td>
          </tr>
        </tbody>
      </table>
      <button
        className="button mt-2"
        style={{
          margin: matches ? "0" : "auto",
          display: matches ? "block" : "flex",
        }}
      >
        <a
          href="/assets/files/React.jsKeerthi.pdf"
          download="My_Resume.pdf"
        >
          Download Resume
        </a>
      </button>
    </div>
  </div>
</div>

      </div>
    </div>
  )
}

export default About

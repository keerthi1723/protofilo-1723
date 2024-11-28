import React from 'react';
import './Common.css'
import { Typewriter } from 'react-simple-typewriter'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <div className='main-banner'>
        <div className='welcome-banner'>
          <h4>Welcome....</h4>
          <h1 className='mt-3'>
            <Typewriter style={{ fontWeight: 'bold' }}
              words={['I am a Ui Developer.', 'I am a React Developer.']}
              loop={5}
              cursor
              cursorStyle='|'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h1>
          <h4 className='mt-3' style={{ color: '#20c997' }}>based in Hyderabad, Telengana.</h4>
            <Link to="/about" > 
           <button className="button mt-5"> Hire Me</button>
            </Link>
        </div>
      </div>
    </div>
  )
}

export default Home

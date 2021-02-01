import React from 'react'

import Banner from '../Banner';
import Bio from '../Bio';
import CourseInterest from '../CourseInterest';

import './main.css'

function MainContent() {
  return (
    <div className="pb-main">
      <Banner />
      <div className="pb-main__sections">
        <div className="pb-main__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci porta non pulvinar neque laoreet suspendisse interdum. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci porta non pulvinar neque laoreet suspendisse interdum. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci porta non pulvinar neque laoreet suspendisse interdum. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci porta non pulvinar neque laoreet suspendisse interdum. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel.
        </div>
        <Bio />
        <CourseInterest />
      </div>
    </div>
  )
}

export default MainContent

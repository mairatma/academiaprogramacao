import { Button, Card } from 'antd';
import React from 'react'

import './course-interest.css';

const CourseInterest = () => {
  return (
    <div className="pb-course-interest">
      <h2 id="cursos">Cursos</h2>
      <Card className="pb-course" hoverable>
        <Card.Meta title="Introdução à Programação" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci porta non pulvinar neque laoreet suspendisse interdum. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci porta non pulvinar neque laoreet suspendisse interdum. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci porta non pulvinar neque laoreet suspendisse interdum. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel." />
        <Button type="primary" size="large">Tenho interesse</Button>
      </Card>
    </div>
  )
}

export default CourseInterest

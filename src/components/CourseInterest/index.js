import { Button, Card } from 'antd';
import React from 'react'

import styles from './course-interest.module.css';

const CourseInterest = () => {
  return (
    <div className="pb-course-interest">
      <h2 id="cursos" className={styles.title}>Cursos</h2>
      <Card hoverable>
        <Card.Meta title="Introdução à Programação" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci porta non pulvinar neque laoreet suspendisse interdum. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci porta non pulvinar neque laoreet suspendisse interdum. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci porta non pulvinar neque laoreet suspendisse interdum. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel." />
        <Button className={styles.button} type="primary" size="large">Tenho interesse</Button>
      </Card>
    </div>
  )
}

export default CourseInterest

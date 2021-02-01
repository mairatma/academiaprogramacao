import { Button, Card } from 'antd';
import React from 'react'

import './course-interest.css';

const CourseInterest = () => {
  return (
    <div className="pb-course-interest">
      <h2 id="cursos">Cursos</h2>
      <Card className="pb-course" hoverable>
        <Card.Meta title="Curso de Programação - Iniciantes" description="Lorem ipsum lorem ipsum lorem ipsum" />
        <Button block type="primary">Inscreva-se</Button>
      </Card>
    </div>
  )
}

export default CourseInterest

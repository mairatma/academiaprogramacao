import { Avatar, Card, Image } from 'antd';
import React from 'react'

import pedroPhoto from './images/pedro.jpg';

import './bio.css';

const Bio = () => {
  return (
    <div className="pb-bio">
      <Card>
        <div className="pb-bio__card">
          <Avatar alt="Pedro Bello" src={pedroPhoto} />
          <Card.Meta title="Pedro Bello" description="@pedrobello59" />
        </div>
      </Card>
    </div>
  )
}

export default Bio

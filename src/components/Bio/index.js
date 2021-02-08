import { Avatar } from 'antd';
import React from 'react'

import pedroPhoto from './images/pedro.jpg';

import './bio.css';

const Bio = () => {
  return (
    <div className="pb-bio">
      <Avatar alt="Pedro Bello" src={pedroPhoto} />
      <div className="pb-bio__text">
        <span className="pb-bio__name">Pedro Bello</span> é formado em Engenharia da Computação pelo CIn-UFPE. Durante a graduação,
        participou de competições de programação, sendo duas vezes campeão nacional da Maratona de Programação da SBC
        (<a href="http://maratona.sbc.org.br/hist/2008/index.html">2008</a> e <a href="http://maratona.sbc.org.br/hist/2009/index.html">2009</a>)
        e uma vez campeão latino-americano no International Collegiate Programming Contest (2010). Após se formar, Pedro trabalhou
        por um ano como engenheiro de software na Google. Entre 2013 e 2020 trabalhou na In Loco, onde liderou o desenvolvimento da
        tecnologia de localização da empresa. Em 2015, concluiu o Mestrado em Ciência da Computação no CIn-UFPE.
      </div>
    </div>
  )
}

export default Bio

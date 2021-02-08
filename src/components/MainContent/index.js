import { Divider } from 'antd';
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
        <p>Com a Academia de Programação quero criar uma comunidade (física e virtual) dedicada ao estudo e à prática da programação. Estou convencido de que os benefícios deste estudo ainda não são plenamente reconhecidos e de que o ensino da programação será cada vez mais difundido nas escolas. Minha ideia é apenas acelerar este processo que já está em curso.</p>

        <p>O primeiro e mais óbvio benefício do estudo da programação é o financeiro. A indústria de software vem engolindo vários nichos do mercado global e tudo indica que ela continuará próspera pelas próximas décadas.</p>

        <p>Há também um benefício que não se restringe ao âmbito profissional, mas deriva do próprio processo de aprendizado da programação: aprender a programar é aprender a disciplinar o pensamento. Um programa feito às pressas ou sem atenção conterá erros (bugs) e não funcionará da forma esperada. Erros de raciocínio lógico que o programador cometer também serão revelados pela execução do programa. Programar é exercitar a mente, e por isso chamei o empreendimento de academia, ao invés de escola ou instituto.</p>

        </div>
        <Divider />
        <Bio />
        <Divider />
        <CourseInterest />
      </div>
    </div>
  )
}

export default MainContent

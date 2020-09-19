import React,{useState,useEffect} from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ButtonSA from '../../components/buttonSA/buttonSA';
import Utility from '../../assets/utility.png'

import {useSelector} from 'react-redux'


import SinonimoInitial from '../../components/sinComponents/sinonimoInitial/sinonimoInitial';
import SinonimoLoading from '../../components/sinComponents/sinonimoLoading/sinonimoLoading';
import SinonimoComplete from '../../components/sinComponents/sinonimoComplete/sinonimoComplete';

const SinonimoPage = () => {
  const stateApp = useSelector(state => state.text.stateOfApp);
 

 
  
  return (
    <Container fluid className="mt-5 p-lg-5" id="top">
      <div>

          <Row className="pt-5">
            <Col className="d-flex flex-wrap align-items-end">
              <div className="textbox text-dark">
                  <h1 className="font-lg font-weight-bold">
                      Gerar texto <br/> com sinônimos
                  </h1>
              </div>
              
            </Col>         
          </Row>

        {stateApp ==1 &&
          <SinonimoInitial />
        }
        {stateApp ==2 &&
          <SinonimoLoading />
        }
        {stateApp ==3 &&
          <SinonimoComplete />
        }
      </div>
       




        <Row className="mt-5 pt-5 ml-lg-2">
            <Col lg>
              <Row className="justify-content-end justify-content-lg-start">
                <span className="p-3 font-lg font-weight bold text-right text-lg-left">
                  Qual ultilidade <br/>disso?
                </span>
              </Row>
              <Row className="mt-5 textbox">
                  <p className="font-sm p-3">
                    Ver as possibilidades de diversificar um texto com as leis do português, gramatica correta e socorrer estudantes
                    com a entrega de textos de forma diversificada.
                  </p>
              </Row>
              <Row className="mt-5 pt-5">
                <div>
                  <a href="#top" className="nav-link">
                    <ButtonSA title="Ir ao topo" iconName="keyboard_arrow_up" bgColor="terciary" size="md"/>
                  </a>
                </div>
              </Row>
            </Col>
            <Col>
              <img src={Utility} className="img-fluid" />
            </Col>
        </Row>  
      
    </Container>
  );
};


export default SinonimoPage;
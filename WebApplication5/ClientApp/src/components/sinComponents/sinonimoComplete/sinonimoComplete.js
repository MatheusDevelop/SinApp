import React,{useEffect,useState} from 'react';
import { Col, Row } from 'react-bootstrap';
import TextBoxDestktop from '../../textBoxDestktop/textBoxDestktop';
import TextBoxMobile from '../../textBoxMobile/textBoxMobile';

const SinonimoComplete = () => {
  const [isMobile, setisMobile] = useState(false);

  useEffect(() => {
    if(window.innerWidth>500){
      setisMobile(false)
    }else{
      setisMobile(true)
    }
  }, []);
  return (
      <Row className="mt-4">

      <Col lg={7}>
        {isMobile ?
          <TextBoxMobile stateOfApp={3} />
          :
          <TextBoxDestktop stateOfApp={3} />
        }
      </Col>
        <Col className="ml-lg-5">
            <Row>
              <span className="p-3 font-lg font-weight bold fadeIn">
                Como usar?
              </span>
            </Row>
            <Row className="mt-3 textbox">
              <p className="p-3 font-sm fadeIn">
                1º -  Clique nas palavras destacadas de azul e altere manualmente o que desejar.
                <br/><br/>
                2º -In dev
                <br/><br/>
                3º - Após o texto estar alterado
                clique no botão amarelo para ter o texto adicionado ao seu clipboard.
                <br/><br/>
                4º -  Se você desejar gerar um novo texto clique no botão azul escuro.
                <br/><br/>

              </p>
            </Row>
        </Col>
    </Row>

  );
};


export default SinonimoComplete;
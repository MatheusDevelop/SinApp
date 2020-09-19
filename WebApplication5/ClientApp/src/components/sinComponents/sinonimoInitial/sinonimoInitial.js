import React,{useEffect,useState} from 'react';
import { Col, Row } from 'react-bootstrap';
import TextBoxDestktop from '../../textBoxDestktop/textBoxDestktop';
import TextBoxMobile from '../../textBoxMobile/textBoxMobile';
const SinonimoInitial = () => {

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
          <TextBoxMobile stateOfApp={1} />
          :
          <TextBoxDestktop stateOfApp={1} />
        }
      </Col>
        <Col className="ml-lg-5 m-sm-2">
            <Row>
              <span className="p-3 font-lg font-weight bold fadeIn">
                Como usar?
              </span>
            </Row>
            <Row className="mt-5 textbox">
              <p className="font-sm fadeIn p-3">
              1º -  Clique no bloco acima e escreva algum texto que você deseja gerar os sinônimos.<br/><br/>
              2º - Logo após de digitar o texto
              clique no botão "Pronto" e aguarde o texto ser gerado.<br/><br/>
              3º -  Se você desejar apagar o texto digitado clique no botão vermelho.<br/><br/>

              </p>
            </Row>
        </Col>
    </Row>
  
  );
};


export default SinonimoInitial;
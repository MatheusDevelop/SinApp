import React,{useEffect,useState} from 'react';
import { Col, Row } from 'react-bootstrap';
import TextBoxDestktop from '../../textBoxDestktop/textBoxDestktop';
import Illustration from '../../../assets/loadilustration.png'

import './style.css'
import { useDispatch ,useSelector} from 'react-redux';
import TextBoxMobile from '../../textBoxMobile/textBoxMobile';


const SinonimoLoading = () => {
  const dispatch = useDispatch();
  const textOld = useSelector(state => state.text.textOld);
  const [isMobile, setisMobile] = useState(false);

  let url = window.location.href;
  let arr = url.split("/");
  let api = arr[0]+"//"+arr[2]+"/api/sinonimo";

  
  useEffect(() => {
    let options = {
      method:'post',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body:JSON.stringify(textOld)
    }
      fetch(api,options)
      .then(res => res.json())
      .then((data)=>{
        console.log(data);
        dispatch({
          type:'REQUEST',
          payload:{
            data
          }
        })
        dispatch({
          type:'SET-STATE',
          payload:{
            stateToSet:3
          }
        })

      },(error)=>{
         console.log(error) 
      })

      if(window.innerWidth>500){
        setisMobile(false)
      }else{
        setisMobile(true)
      }
    
  })

  return (
    <Row className="mt-4">

    <Col lg={7}>
      {isMobile ?
        <TextBoxMobile stateOfApp={2} />
        :
        <TextBoxDestktop stateOfApp={2} />
      }
    </Col>
      <Col className="p-3 ml-lg-5">
          <Row>
            <span className="font-lg font-weight bold fadeIn">
              Aguarde <br/> alguns segundos...
            </span>
          </Row>
          <Row className="ilus">
            <img src={Illustration} className="img-fluid fadeIn" />
          </Row>
          </Col>
    </Row>

  );
};


export default SinonimoLoading;
import React,{useState  } from 'react';
import ButtonSA from '../../buttonSA/buttonSA';
import {useDispatch} from 'react-redux'
import { Toast } from 'react-bootstrap';

const TextBoxDesktopInitial = () => {
  const dispatch = useDispatch();

  let handleDel=()=>{

   document.getElementById('text-a').value="";


  }
  let handleCopy = ()=>{
    let el =document.getElementById('text-a').value;
    navigator.clipboard.writeText(el);
    setToast(true)
    setTimeout(() => {
      setToast(false)
    }, 3000);

  }
  let handleOkay = ()=>{

    let text = document.getElementById('text-a').value;
    let stateToSet = 2;

    if(text.length >3){

      dispatch({
        type:'SET-TEXT-OLD',
        payload:{
          text        
        }
      })
      
      dispatch({
        type:'SET-STATE',
        payload:{
          stateToSet
        }
      })
    }else{
      document.getElementById('text-a').placeholder = "Digite um texto..."

    }

  }

  

  const [toast, setToast] = useState(false);


  return (

    <div className="d-flex align-items-center">
      <Toast className="fixed-top" show={toast} onClick={()=>{setToast(false)}}>
        
        <Toast.Body>Texto copiado, pronto para o CRTL+V :)</Toast.Body>
      </Toast>
      <div className="boxAppBar bg-primary bshadow rounded-left pr-3 pl-2 pt-2 ">
          <div onClick={handleOkay}>
            <ButtonSA title="Pronto" bgColor="secondary" iconName="add_task" size="lg"/>
          </div>
         <div className="d-flex align-items-center">
            <div onClick={handleCopy}>
              <ButtonSA title="Copiar" bgColor="terciary" iconName="content_copy" size="md"/>
            </div>
            <div onClick={handleDel}>
              <ButtonSA circle bgColor="quadriary" iconName="delete" size="md"/>
            </div>
         </div>
      </div>   
      <div className="boxInputText bg-white bshadow rounded text-dark">
        <span className="font-lg font-weight-normal fadeIn">
            
        </span>
        <div>
          <textarea className="font-sm font-weight-light fadeIn" id="text-a" placeholder="Clique aqui e escreva o texto">
          </textarea>
        </div>
      </div>
    </div>
      
  );
};


export default TextBoxDesktopInitial;
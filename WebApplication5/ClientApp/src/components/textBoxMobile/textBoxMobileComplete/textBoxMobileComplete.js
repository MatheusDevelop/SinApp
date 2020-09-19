import React, { useEffect ,useState } from 'react';
import ButtonSA from '../../buttonSA/buttonSA';
import {useSelector ,useDispatch} from 'react-redux'
import './style.css'
import { Toast } from 'react-bootstrap';
const TextBoxMobileComplete = () => {
  const textOld = useSelector(state => state.text.textOld);
  const words = useSelector(state => state.text.word);
  const text= textOld.replace(/( )+/g, ' ');
  let textArr = text.split(" ");
  
  let arrofObj=useSelector(state => state.text.word)

  useEffect(() => { 
  });

  const dispatch = useDispatch();
  let handleCancel=()=>{
    dispatch({
      type:'SET-STATE',
      payload:{
        stateToSet:1
      }
    })
  }
 

  let handleUpdate=(el,index)=>{
    let element = document.getElementById(index);

    element.innerHTML=el;
  }
  let list = textArr.map((i,indexOfWord)=>{
    let index = arrofObj.findIndex(e=>e.verbo == i);
    if(index<0){
      return i+" "
    }else{
      return (
      <div className="dropdown">
        <div className="dropdown__title mx-1" id={indexOfWord}>
          {i} 
        </div>
        <strong className="dropdown__menu bshadow bg-white">
          <div onClick={()=>{handleUpdate(i,indexOfWord)}}>
            {i}
          </div>

            {arrofObj[index].sinonimos.map((el)=>{
              return (
                <div onClick={()=>{handleUpdate(el,indexOfWord)}}>{el} </div>
              )
            })}
        </strong>
      </div>
      )



    }
  })

  let handleCopy = ()=>{
    let text = document.getElementById('newText').innerText;
    navigator.clipboard.writeText(text);
    setToast(true)
    setTimeout(() => {
      setToast(false)
    }, 3000);
  }
  const [toast, setToast] = useState(false);
  return (
    <div className="d-flex flex-wrap flex-lg-nowrap justify-content-center align-items-center">
      <Toast className="fixed-top" show={toast} onClick={()=>{setToast(false)}}>
        
        <Toast.Body>Texto copiado, pronto para o CRTL+V :)</Toast.Body>
      </Toast>
      <div className="boxAppBar pb-3 pt-2 ">
        <div className="d-flex align-items-center">
          <div onClick={handleCancel}>
            <ButtonSA title="Novo texto" bgColor="secondary" iconName="add_task" size="lg"/>
          </div>
          <div onClick={handleCopy}>

            <ButtonSA title="Copiar" bgColor="terciary" iconName="content_copy" size="md"/>            
          </div>
        </div>
      </div>

       

      <div className="boxInputText bg-white bshadow rounded text-dark">
        <span className="font-lg font-weight-normal fadeIn">
        </span>
        <div id="newText" className="d-flex flex-wrap">
          
          
          {list}
        </div>
      </div>
    </div>
  );
};


export default TextBoxMobileComplete;
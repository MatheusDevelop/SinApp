import React from 'react';
import ButtonSA from '../../buttonSA/buttonSA';
import {useDispatch} from 'react-redux';
import Load from '../../../assets/loading.svg'
import './style.css'

const TextBoxMobileLoading = () => {
  const dispatch = useDispatch();
  let handleCancel=()=>{
    dispatch({
      type:'SET-STATE',
      payload:{
        stateToSet:1
      }
    })
  }
  return (
    <div className="d-flex flex-wrap flex-lg-nowrap justify-content-center align-items-center">
      <div className="boxAppBar mb-2 pt-2 ">
        <div onClick={handleCancel}>
         <ButtonSA title="Cancelar" bgColor="secondary" iconName="close" size="lg" />       
        </div>
      </div>   
      <div className="boxInputText bg-white bshadow rounded text-dark d-flex justify-content-center align-items-center">
        <div className="textbox text-center loadingIcon">
          <img src={Load} className="img-fluid" />
        </div>
      </div>
    </div>
  );
};


export default TextBoxMobileLoading;
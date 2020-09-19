import React from 'react';
import TextBoxMobileComplete from './textBoxMobileComplete/textBoxMobileComplete';
import TextBoxMobileInitial from './textBoxMobileInitial/textBoxMobileInitial';
import TextBoxMobileLoading from './textBoxMobileLoading/textBoxMobileLoading';
const TextBoxMobile = (props) => {
  return (
    <div>
    {props.stateOfApp == 1 &&      
      <TextBoxMobileInitial/>
    }
    {props.stateOfApp == 2 &&   
      <TextBoxMobileLoading />
    }
    {props.stateOfApp == 3 &&   
      <TextBoxMobileComplete />
    }
    </div>
  );
};


export default TextBoxMobile;
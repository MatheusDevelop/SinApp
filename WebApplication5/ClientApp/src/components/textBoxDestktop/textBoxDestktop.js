import React from 'react';

import './textbox.css'
import TextBoxDesktopComplete from './textBoxDesktopComplete';

import TextBoxDesktopInitial from './textBoxDesktopInitial';
import TextBoxDesktopLoading from './textBoxDesktopLoading';
const TextBoxDestktop = (props) => {
  return (
    <div>
      {props.stateOfApp == 1 &&      
        <TextBoxDesktopInitial/>
      }
      {props.stateOfApp == 2 &&     
        <TextBoxDesktopLoading />   
      }
      {props.stateOfApp == 3 &&   

        <TextBoxDesktopComplete />   
      }
    </div>
  );
};

export default TextBoxDestktop;
import React from 'react';


const ButtonSA = (props) => {
  return (
    <div className="m-2">

      {!props.circle ? 
        <div className={`button__${props.size} bshadow bg-${props.bgColor} p-2 d-flex text-white`}>
          <div className="mr-3 tShadow">
            {props.title}
          </div>
          <div class="material-icons">
            {props.iconName}
          </div>
        </div>
      :
      <div className={`button__circle bshadow bg-${props.bgColor} p-2 d-flex text-white`}>
        <div class="material-icons">
           {props.iconName}
        </div>
      </div>
        
      }
    </div>
        
   
  );
};



export default ButtonSA;
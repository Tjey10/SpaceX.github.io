import React from 'react';
import ReactDOM from 'react-dom/client';


function Sections(props){
return(
<div className='main-content'>
    <img src={`${props.Dat.Image}`} alt='section-img'/>
    <div className='section-info'>
        <p>{props.Dat.frequency}</p>
        <h1>{props.Dat.title}</h1>
        <div className='btn'> 
           <button type='button'>{props.Dat.button}</button>  
        </div>
        <div className='reveal'></div>
    </div>
</div>
)
}

export default Sections;
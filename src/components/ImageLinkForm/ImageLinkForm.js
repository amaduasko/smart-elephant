import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
    
    return(
        <div>
            <p className = 'f3 white'>
                {'This magic Elephant will detect  faces in your picture. GIve it a try'}
            </p>
            <div className = 'center'>
                <div className = 'form center pa4 br3 shadow-5'>
                    <input className = 'f4 pa2 w-70 center' type ='tex' onChange = {onInputChange}/>
                    <button className = 'w-30 grow f4 link ph3 pv2 dib bn white bg-blue' 
                    onClick={onButtonSubmit}
                    >Detect</button>
                </div>  
            </div>
        </div>
        
    );
}

export default ImageLinkForm;
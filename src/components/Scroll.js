import React from 'react';

const Scroll=(props)=>{
    return  (<div style={{overflowY:'scroll', border:'5px solid pink', height: '400px'}}>
                {props.children}
            </div>)
}

export default Scroll;
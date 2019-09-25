import React from 'react';


const Person=(props)=>{
    return(
        <div className='w-100'>
            <div className=' shadow-2 ba bw2 truncate fl grow br3 w-50 w-third-m w-20-l gold bg-dark-gray b--near-white' >
                <img src= {`https://api.adorable.io/avatars/200/${props.id}.png`} alt='every-day people' 
                    className=' db w-100 f4'/>
             <span className=' db tc w-100 f6'>
                <h1 className=' db tc w-100 f6'>{props.name}</h1>
                <p className=' db tc w-100 f6'>{props.email}</p>
                
                    <p>{props.street1}<br/>{props.street2}<br/>{props.street3}</p>
            </span>
            </div>
        </div>
    )
}

export default Person  
import React from 'react';

const Searchbox=(props)=>{
    return (
        <div className='mb2'>
            <input 
            className='ph5 pv3 ba b--dark-pink bg-light-pink br2 fw6 athelas' 
            type='search' 
            placeholder='Find face'
            onChange={props.searchChange}
            />
        </div>
    )
}

export default Searchbox;
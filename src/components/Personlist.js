import React from 'react';
import Person from './Person'






const Personlist = ({people})=>{
     const list = people.map((user,i)=>{
    return (
    
    <Person 
     key={i}
    id={people[i].id}          
    name={people[i].name} 
     email={people[i].email}
        street1={people[i].address.street}
        street2={people[i].address.suite}
        street3={people[i].address.city}
     />
 )
})
    return (
        <div>
           {list} 
        </div>
    )
}

export default Personlist
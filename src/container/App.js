//import the redux guys, action and connecct
import {setSearchField} from '../action'
import {connect} from 'react-redux'
import React, {Component} from 'react';
import Personlist from '../components/Personlist'
import Scroll from '../components/Scroll'
import Searchbox from '../components/Searchbox'

//import {people} from './People'

const mapStateToProps= state=>{
    return {
        searchField: state.searchField
    }
}

const mapDispatchToProps=dispatch=>{
    return{
        onSearchChange: event=>dispatch(setSearchField(event.target.value))
    }
}

class App extends Component {
    constructor(){
        super()
        this.state={
            people: [],
           
        }
    }

    componentDidMount(){
        
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.json())
        .then(users=>this.setState({people:users}))
    }   
    
    render(){
        const filteredPeople=this.state.people.filter(people=>{
            return people.name.toLowerCase().includes(this.props.searchField.toLowerCase());
            
        })
        return (
            <div className='tc'>
                <div>
                    <h1 className=' georgia f2'>Passionate Moods</h1>
                </div>
                
                <Searchbox searchChange={this.props.onSearchChange}/>
                <Scroll>
                    <Personlist people={filteredPeople}/>
                </Scroll>
            </div>
    )
}
    
}


export default connect(mapStateToProps, mapDispatchToProps)(App);

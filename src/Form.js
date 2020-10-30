import React, { Component } from 'react'

import axios from 'axios'

class Form extends React.Component {
  
    constructor(){
        // @ts-ignore
        super()

        this.state = {
            id:'',
            name:'',
            city:'',
            age:'',
            isEdit:false
        }

    }
    
  
  inforchance = even =>{

    const {name,value} = even.target

    this.setState({ 
        [name]:value

    })

  }
  insubmit = event =>{

    if(!this.state.isEdit){
        let  data = {
            isEdit:this.state.isEdit,
            name:this.state.name,
            age:this.state.age,
            city:this.state.city
        }
    
        this.props.myData(data)
        
    }else{
        let  data = {
            isEdit:this.state.isEdit,
            id:this.state.id,
            name:this.state.name,
            age:this.state.age,
            city:this.state.city
        }
    
        this.props.myData(data)

    }
   
     
  }
  componentWillReceiveProps(props){
      
    this.setState({
        id:props.setForm.name,
        name:props.setForm.name,
        age:props.setForm.age,
        city:props.setForm.city,
        isEdit:true

    })

  }
    render() {
        return (
            <div>
                <form  onSubmit={this.insubmit}>
  <div className="form-group">
    <label >Enter  Name:</label>
    <input type="text" className="form-control"  
    
    name='name'
    onChange={this.inforchance}
    value = {this.state.name}
    
    > </input>
  </div>
  <div className="form-group">
    <label> Enter Age:</label>
    <input type="password" className="form-control"
    
    
    
    />
  </div>
  <div className="checkbox">
    <label><input type="checkbox"/> Remember me</label>
  </div>
        <button type="submit" className="btn btn-default" >{this.state.isEdit ? 'Update' :'Create'}</button>
</form>
            </div>
        )
    }
}
export default Form

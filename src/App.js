import React, { Component } from 'react'
import Form from './Form'
import Table from './table'
import axios from 'axios'

export default class App extends Component {

  constructor(){
    // @ts-ignore
    super()
   
     this.state = {
            data :[],
            editData:[]
     }

    
  }

create = (data) =>{
  if(!data.isEdit){
    axios.post("http://localhost:5000/info",data).then(res =>{

      console.log(res)

  })
  }else{
    axios.put("http://localhost:5000/info/update").then(res =>{
      console.log(res)
    })
  }
 

  axios.post("http://localhost:5000/info",data).then(res =>{

      console.log(res)

  })
}

componentDidMount(){

}
getAll(){

  axios.get("http://localhost:5000/info").then(res =>{
    console.log(res.data)

    this.setState({
      data:res.data
    })
  })
}
updata = data =>{
  this.setState({
    editData:data
  
  })

}



  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-6'>
            <Form myData= {this.create} setForm ={this.state.editData}/>

          </div>

          <div className='col-6'>
            <Table getData = {this.state.data} setData = {this.updata}/>
          </div>
        </div>
        
      </div>
    )
  }
}

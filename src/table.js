import React, { Component } from 'react'

class table extends Component {
    render() {
        return (
            <div>
                 <table className="table">
    <thead>
      <tr>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
        {
            this.props.getData.map(e =>{
                
                <tr>
                   
            <td>{e.name}</td>
            <td>{e.city}</td>
            <td>{e.age}</td>
            <td> <button className= 'btn btn-primary' onClick = {this.props.setData(e)}> Edit</button></td>
            <td> <button className= 'btn btn-primary'> Delete</button></td>
                </tr>
                

            })
        }
    </tbody>
  </table>
                
            </div>
        )
    }
}

export default table
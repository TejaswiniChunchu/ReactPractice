import React, { Component } from 'react'
import { Button, Table } from 'react-bootstrap'


export default class TableComponent extends Component {
  render() {
    console.log(this.props);
    return (
        <>
        <h3>{this.props.tableName}</h3>
        <Table striped bordered hover>
        <thead>
            <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
                
            </tr>
        </thead>
        <tbody>
        {this.props.mydata.map (({ first_name,email,last_name,id},index) =>{
    return(< tr key={id} >
        <td>1</td>
        <td>{first_name}</td>
        <td>{email}</td>
        <td>{last_name}</td>
        <td><Button variant='danger' onClick={this.props.deletebutton(index)}>Delet</Button></td>
    </tr>
    )
   })}
     
        
        </tbody>
    </Table>
    </>
    )
  }
}

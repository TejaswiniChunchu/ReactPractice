import React, { Component } from 'react'
import axios from 'axios';
import { Button, Table } from 'react-bootstrap';
import TableComponent from './components/table'

export default class Dashboard extends Component {
    constructor() {
        console.log('constructor')
        super();
        this.state = {
            name: 'teja',
            age: 30,
            show: true,
            color: 'red',
            mydata: [
            ]
        }
        
    }
    updateDetails = () => {
        this.setState({
            name: 'Ajay'
        }
        )


    }
    hideButton = () => {
        this.setState({
            show: !this.state.show
        })

    }
    highlets = () => {
        this.setState({
            color: 'blue'
        })
     
    }
    deletebutton=(index)=>()=>{
      
        let mydatacopy = this.state.mydata;
        mydatacopy.splice(index,1);
      
        this.setState({
         mydata:mydatacopy
        })
    }
    componentDidMount(){
        console.log('componentDidMount')
        axios.get('https://reqres.in/api/users').then(res=>{
           this.setState({
            mydata:res.data.data
           })
        })
    }
    shouldComponentUpdate(nextprops,nextstate){
        console.log(nextprops,nextstate)
        return true
    }
    componentWillUnmount(){

    }
    render() {
        console.log('render')
        const { name, age, show, color, mydata } = this.state
        return (
            <>
                {show  ?<div>my name is <span style={{ color: color }}>{name} </span>and my age is <span style={{ color: color }}>{age}</span></div> : <div> con't show details</div>}
                <Button onClick={this.updateDetails}> update details</Button>
                <Button onClick={this.hideButton}> Hide details</Button>
                <Button onClick={this.highlets}> highlets details</Button>
                <TableComponent mydata={mydata} tableName='DashBoard table' deletebutton={this.deletebutton}/>
             
            </>
        )
    }
}

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import TableComponent from '../dashboard/components/table'

export default function Home() {

  const [mydata, setMydata] = useState([])
  useEffect(() => {
    console.log('useEffect')
    axios.get('https://reqres.in/api/users').then(res => {
      setMydata(
        res.data.data
      )
    })
  }, [])
  const deletebutton = (index) => () => {

    let mydatacopy = mydata;
    console.log(mydatacopy)
    mydatacopy.splice(index, 1);
    console.log(mydatacopy)
    setMydata(
      mydatacopy
    )
    console.log(mydata)
  }
  return (
    <>
      <TableComponent mydata={mydata} tableName='DashBoard table' deletebutton={deletebutton} />

    </>

  )
}

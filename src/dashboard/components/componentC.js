import React, { useContext } from 'react'
import { AgeContext, UserContext } from '../../Login/login'


export default function ComponentC() {
    const name = useContext(UserContext)
    const age = useContext(AgeContext)
  return (
    <div>ComponentC { name} -{age}</div>
  )
}

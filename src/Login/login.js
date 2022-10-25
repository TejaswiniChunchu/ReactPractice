import React, { useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ComponentA from '../dashboard/components/componentA';

export const UserContext = React.createContext('')
export const AgeContext= React.createContext([])


export default function Login() {
  const sentname ='Sai'
    const [userDetail, setUserdetails] = useState({ username: '', password: '' });
    const [showDetails, setshowDetails] = useState(false)
    const [showMissingdata, setshowMissingdata] = useState({ username1: false, password1: false })
    const [saveUserDetails, setsaveUserDetails] = useState([])
    const submitDetails = () => {

        if (userDetail.username && userDetail.password) {
            setUserdetails(
                saveUserDetails.push(userDetail)
            )
            setUserdetails(
                {
                    username: '',
                    password: ''
                }
            )
            console.log(saveUserDetails)
            setshowDetails(true)
            setshowMissingdata({
                username1: true,
                password1: true
            })
        } else {
            setshowMissingdata({
                username1: false,
                password1: false
            })
        }


    }
    const handleDetails = (event) => {
        console.log(event.target.name, event.target.value)
        setUserdetails({
            ...userDetail,
            [event.target.name]: event.target.value
        })



    }
    return (
        <>
        <AgeContext.Provider value={[20]}>
        <UserContext.Provider value='TEJA'>
        <ComponentA  />
        </UserContext.Provider>
        </AgeContext.Provider>
        
      
        <div></div>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-4'></div>

                    <div className='col-md-4'>
                        <form>
                            <div className='form-group mb-3'>
                                <label>UserName</label>
                                <input className='form-control' onChange={handleDetails} value={userDetail.username} placeholder='UserName' name='username' />
                            </div>
                            <div className='form-group mb-3'>
                                <label>Password</label>
                                <input className='form-control' onChange={handleDetails} value={userDetail.password} type='password' placeholder='password' name='password' />
                            </div>
                        </form>
                        <Button className='mb-2' variant='success' onClick={submitDetails}>Login</Button>
                        {showDetails && <div>
                            {saveUserDetails.map(({username,password}) => {
                                return( <Card style={{ width: '18rem' }} className='mb-2'>
                                <Card.Body>
                                    <Card.Title>{username}</Card.Title>
                                    <Card.Subtitle>{password}</Card.Subtitle>
                                </Card.Body>
                            </Card>)

                            })}
                           
                        </div>}
                        {!showMissingdata.username1 && !showMissingdata.password1 && <div>Please Enter User name and password</div>}
                    </div>
                </div>

            </div>


        </>
    )

}

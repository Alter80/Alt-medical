import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useHistory } from 'react-router';
import useAuth from '../../hooks/useAuth';

const UsrLoginReg = () => {
    let history = useHistory()
    const { goolelogin, user, error, logOut, handleReigstration, handleEmailchange, handlePasswordChange, handleNameChange, isLogin, toggleLogin, handleResetPassword } = useAuth();

    // console.log(user);

    if (user?.emailVerified == true) {
        history.push('/');
    }

    return (
        <div className='container w-50'>
            <div className='container mx-auto py-4 '>
                <h3>Please {isLogin ? 'Login' : 'Register'}</h3>
                <Form onSubmit={handleReigstration}>
                    {!isLogin && <Form.Group className="text-start mb-3" controlId="formBasicEmail">
                        <Form.Label className=''>User Name</Form.Label>
                        <Form.Control required onBlur={handleNameChange} type="text" placeholder="Enter User Name" />
                        <Form.Label className=''>Address</Form.Label>
                        <Form.Control required type="text" placeholder="Enter Address" />
                    </Form.Group>}

                    <Form.Group className="text-start mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control required onBlur={handleEmailchange} type="email" placeholder="Enter email" />
                    </Form.Group>


                    <Form.Group className="text-start mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control required type="password" onBlur={handlePasswordChange} placeholder="Password" />
                        <Form.Text className="text-muted">
                            Never share your password with anyone else.
                        </Form.Text> <br />
                        <Form.Text className="text-danger">
                            {error}
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="text-start mb-3" controlId="formBasicCheckbox">
                        <Form.Check onChange={toggleLogin} type="checkbox" label="Already Registered?" className='text-start' />
                    </Form.Group>
                    <Button variant="outline-primary" type="submit">
                        {isLogin ? 'Login' : 'Register'}
                    </Button> <br />

                    {isLogin && <Button onClick={handleResetPassword} variant="outline-danger my-3" size="sm">Reset Password</Button>}

                    <hr className="my-4" />

                    <h6 className="card-title text-center fs-5">Or {isLogin ? 'Login' : 'Register'}</h6>
                    <Button className="btn btn-lg btn-google btn-block btn-danger text-uppercase" onClick={goolelogin} ><span className='text-white'>Using Google</span></Button>
                </Form>
            </div>


        </div>
    );
};

export default UsrLoginReg;
import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import './Login.css'


const Login = () => {
    const { goolelogin, user, error } = useFirebase();

    return (
        <div className="container">

            <div className="row">

                <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                    <div className="card card-signin my-5">
                        <div className="card-body">
                            <h5 className="card-title text-center">Sign In</h5>
                            <form className="form-signin">
                                <div className="form-label-group">
                                    <input type="email" id="inputEmail" className="text-center form-control p-2" placeholder="Email address" />
                                </div>

                                <div className="form-label-group">
                                    <input type="password" id="inputPassword" className="text-center  form-control p-2" placeholder="Password" />
                                </div>

                                <div className="custom-control custom-checkbox mb-3">
                                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                    <label className="custom-control-label ms-2" for="customCheck1">Remember password</label>
                                </div>
                                <Button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit" >Sign in</Button>

                                <hr className="my-4" />

                                <h6 className="card-title text-center fs-5">Or Sign in Using</h6>
                                <Button className="btn btn-lg btn-google btn-block btn-danger text-uppercase" onClick={goolelogin} ><span className='text-white'>Sign in with Google</span></Button>

                                <hr className="my-4" />
                                <p>Don't have an account? <Link to='/register'>Register Here</Link></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Login;
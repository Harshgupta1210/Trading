import React, { useState } from 'react';
import './login.css';

const Login = () => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showSignupPassword, setShowSignupPassword] = useState(false);

    const flip = () => {
        setIsFlipped(!isFlipped);
    };

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const toggleShowSignupPassword = () => {
        setShowSignupPassword(!showSignupPassword);
    };

    return (
        <div className="box">
            <div className={`flip-card-inner ${isFlipped ? 'flipped' : ''}`}>
                <div className="box-login">
                    <ul>
                        <form action="" method="get">
                            <h1>LOGIN</h1>
                            <div className="email-login">
                                <input className="inpt" type="email" name="email" placeholder="Email" required />
                                <i className='fa fa-envelope'></i>
                            </div>

                            <div className="password-login">
                                <input
                                    className="inpt"
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    id="password-login"
                                    placeholder="Password"
                                    required
                                />
                                <i
                                    id="eye-login"
                                    className={`fa ${showPassword ? 'fa-eye' : 'fa-eye-slash'}`}
                                    onClick={toggleShowPassword}
                                    style={{ cursor: 'pointer', color: showPassword ? 'cyan' : 'white' }}
                                ></i>
                            </div>

                            <div className="forget">
                                <input type="checkbox" name="checkbox1" id="checkbox" />
                                <label htmlFor="checkbox">Remember me</label>
                                <a href="#">Forget Password?</a>
                            </div>
                            <button type="submit" className="btn">LOGIN</button>
                        </form>
                        <div className="register-link">
                            <p>Don't have an account? <a href="#" onClick={flip}>Sign Up</a></p>
                        </div>
                    </ul>
                </div>
                <div className="box-signup">
                    <ul>
                        <form action="" method="get">
                            <h1>SIGN UP</h1>
                            <div className="user-signup">
                                <input className="inpt" type="text" name="username" id="username" placeholder="User Name" />
                                <i className="fa fa-user"></i>
                            </div>

                            <div className="email-signup">
                                <input className="inpt" type="email" name="email" id="email-signup" placeholder="Email" required />
                                <i className='fa fa-envelope'></i>
                            </div>

                            <div className="password-signup">
                                <input
                                    className="inpt"
                                    type={showSignupPassword ? "text" : "password"}
                                    name="password"
                                    id="password-signup"
                                    placeholder="Password"
                                    required
                                />
                                <i
                                    id="eye-signup"
                                    className={`fa ${showSignupPassword ? 'fa-eye' : 'fa-eye-slash'}`}
                                    onClick={toggleShowSignupPassword}
                                    style={{ cursor: 'pointer', color: showSignupPassword ? 'cyan' : 'white' }}
                                ></i>
                            </div>

                            <div className="forget">
                                <input type="checkbox" name="checkbox1" id="checkbox1" />
                                <label htmlFor="checkbox1">Remember me</label>
                                <a href="#">Forget Password?</a>
                            </div>
                            <button type="submit" className="btn">SIGN UP</button>
                        </form>
                        <div className="register-link">
                            <p>Already have an account? <a href="#" onClick={flip}>Log In</a></p>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Login;

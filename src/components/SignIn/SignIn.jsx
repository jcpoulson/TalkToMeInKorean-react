import React, { useContext, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { Form, Input, Row, Col } from 'antd';
import Cookies from 'js-cookie';
import { AppContext } from '../../AppContext';

import './style.css'
import TTMIKLogo from '../../assets/ttmik-logo.png';


const SignIn = () => {
    const AppState = useContext(AppContext);
    const history = useHistory();
    const [email, setEmail] = useState(AppState.user.email || '');
    const [password, setPassword] = useState('');


    return (
        <div className="signin-form">
            <Row justify="center">
                <Col style={{marginTop: "5%"}}>
                    <NavLink to="/">
                        <img src={TTMIKLogo} alt="ttmik logo" />
                    </NavLink>
                </Col>
            </Row>

            <Row justify="center">
                <Form
                    name="basic"
                    style={{marginTop: "10%"}}
                    labelCol={{ span: 24 }}
                    wrapperCol={{ span: 24 }}
                    initialValues={{ remember: true }}
                    autoComplete="off"
                    >
                    <Form.Item
                        label="Email"
                        name="email"
                        className="email"
                        onChange={(e) => setEmail(e.target.value)}
                    >
                        <Input className="email" defaultValue={email} />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        id="password"
                        onChange={(e) => setPassword(e.target.value)}
                    >
                        <Input.Password id="password" className="password" />
                    </Form.Item>

                    <Form.Item
                        name="error"
                    >
                        <h3 style={{color: "red", display: "none"}} id="account-error">Error: Account Not Found</h3>
                    </Form.Item>

                    <Form.Item >
                        <div className="signin-btn" onClick={async () => {
                            try {
                                const signIn = await AppState.signIn(email, password)
                                AppState.setUser(signIn);
                                Cookies.set('authenticatedUser', JSON.stringify(signIn), { expires: 1 });
                                history.push('/');
                            } catch (error) {
                                document.getElementById('account-error').style.display = ''
                            }
                                }
                            }>
                        Login
                        </div>
                    </Form.Item>
                
                    <div className="bottom-links">
                        <Row justify="center">
                            <Form.Item>
                                <NavLink to="/signup">
                                    Sign Up
                                </NavLink>
                            </Form.Item>
                        </Row>

                        <Row justify="center">
                            <Form.Item>
                                <NavLink to="/">
                                    &#8592; Go Back Home
                                </NavLink>
                            </Form.Item>
                        </Row>
                    </div>

                </Form>
            </Row>
        </div>
    )
}

export default SignIn;
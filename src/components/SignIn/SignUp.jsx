import React, { useContext, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { Form, Input, Row, Col } from 'antd';
import { AppContext } from '../../AppContext';


// Components
import './style.css'
import TTMIKLogo from '../../assets/ttmik-logo.png';


const SignUp = () => {
    const AppState = useContext(AppContext);
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
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

            <Row className="form-body" justify="center">
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
                        <Input className="email"/>
                    </Form.Item>

                    <Form.Item
                        label="First Name"
                        name="firstname"
                        id="firstname"
                        onChange={(e) => setFirstName(e.target.value)}
                    >
                        <Input className="firstname"/>
                    </Form.Item>

                    <Form.Item
                        label="Last Name"
                        name="lastname"
                        id="lastname"
                        onChange={(e) => setLastName(e.target.value)}
                    >
                        <Input className="lastname"/>
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        id="password"
                        onChange={(e) => setPassword(e.target.value)}
                    >
                        <Input.Password className="password"/>
                    </Form.Item>

                    <Form.Item
                        name="error"
                    >
                        <h3>Password must be 6 characters long</h3>
                    </Form.Item>


                    <Form.Item
                        name="error"
                    >
                        <h3 style={{color: "red", display: "none"}} id="account-error">Error: Account Already Exists or Insufficient Information</h3>
                    </Form.Item>

                    <Form.Item> 
                        <div className="signin-btn" onClick={async () => {
                            try {
                            await AppState.signUp(email, password, firstName, lastName);
                            const userSignIn = await AppState.signIn(email, password);
                            AppState.setUser(userSignIn);
                            history.push('/');
                            } catch (error) {
                            console.log(error)
                            document.getElementById('account-error').style.display = ''
                            }
                        }}>
                        Submit
                        </div> 
                    </Form.Item>

                    <div className="bottom-links">
                            <Row justify="center">
                                <Form.Item>
                                    <NavLink to="/signup">
                                        Already have an account, Sign In
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

export default SignUp;

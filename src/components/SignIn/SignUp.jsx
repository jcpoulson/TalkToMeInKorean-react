import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Form, Input, InputNumber, Button, Checkbox, Row } from 'antd';
import { AppContext } from '../../AppContext';


// Components
import AppHeader from '../global/AppHeader';
import MobileAppHeader from '../global/MobileAppHeader';

const SignUp = () => {
    const AppState = useContext(AppContext);
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');


    return (
        <div className="signin-form">
            { AppState.width > 970 ? <AppHeader /> : <MobileAppHeader /> }
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

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <NavLink to="/">
                        <Button type="primary" onClick={async () => {
                            const userSignUp = await AppState.signUp(email, password, firstName, lastName);
                            const userSignIn = await AppState.signIn(email, password);
                            AppState.setUser(userSignIn);
                        }}>
                        Submit
                        </Button>
                    </NavLink>
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <NavLink to="/signin">
                        Already Have an Account, Sign in
                    </NavLink>
                </Form.Item>
                </Form>
            </Row>
        </div>
    )
}

export default SignUp;
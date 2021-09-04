import react, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Form, Input, InputNumber, Button, Checkbox, Row } from 'antd';
import { AppContext } from '../../AppContext';


// Components
import AppHeader from '../global/AppHeader';
import MobileAppHeader from '../global/MobileAppHeader';

const SignIn = () => {
    const AppState = useContext(AppContext);
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');


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
                    label="First name"
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
                    <Input />
                </Form.Item>

                <h3>User data proccessing is still being developed on the backend</h3>
                <h3> so this is just a temporary user sign in experience</h3>
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <NavLink to="/">
                        <Button type="primary" onClick={() => AppState.setUser({email: email, firstName: firstName, lastName: lastName})}>
                        Submit
                        </Button>
                    </NavLink>
                </Form.Item>
                </Form>
            </Row>
        </div>
    )
}

export default SignIn;
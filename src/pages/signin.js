import { useContext, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { Form, Input, Row, Col } from 'antd';
import Cookies from 'js-cookie';
import { AppContext } from '../AppContext';

import TTMIKLogo from '../assets/ttmik-logo.png';
import "./"


const SignIn = () => {
    const AppState = useContext(AppContext);
    const router = useRouter();
    const [email, setEmail] = useState(AppState.user.email || '');
    const [password, setPassword] = useState('');


    return (
        <div className="signin-form">
            <Row justify="center">
                <Col style={{marginTop: "5%"}}>
                    <Link href="/" passHref>
                        <Image src={TTMIKLogo} alt="ttmik logo" className="ttmik-logo" />
                    </Link>
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
                        id="email"
                        onChange={(e) => setEmail(e.target.value)}
                    >
                        <Input id="email" defaultValue={email} />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        id="password"
                        onChange={(e) => setPassword(e.target.value)}
                    >
                        <Input.Password style={{borderTop: "none", borderLeft: "none", borderRight: "none"}}/>
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
                                Cookies.set('authenticatedUser', signIn.email, { expires: 1 });
                                router.push('/');
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
                                <Link href="/signup">
                                    Sign Up
                                </Link>
                            </Form.Item>
                        </Row>

                        <Row justify="center">
                            <Form.Item>
                                <Link href="/">
                                    &#8592; Go Back Home
                                </Link>
                            </Form.Item>
                        </Row>
                    </div>

                </Form>
            </Row>
        </div>
    )
}

export default SignIn;
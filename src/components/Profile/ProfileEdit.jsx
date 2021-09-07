import React, { useState, useContext } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { Form, Input, InputNumber, Button, Checkbox, Row, Col, Avatar, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { AppContext } from '../../AppContext';

import Hyunwoo from '../../assets/Hyunwoo-Sun.jpg';

// Components 
import AppHeader from '../global/AppHeader';
import MobileAppHeader from '../global/MobileAppHeader';


const ProfileEdit = () => {
    const AppState = useContext(AppContext);
    const history = useHistory();
    const [firstName, setFirstName] = useState(AppState.user.firstName);
    const [lastName, setLastName] = useState(AppState.user.lastName);
    const [selectedPic, setSelectedPic] = useState({})

    const colStyle = {backgroundColor: "#fff", minHeight: "280px", padding: "2%"};

    const props = {
        action: '//jsonplaceholder.typicode.com/posts/',
        listType: 'picture',
        previewFile(file) {
            console.log('Your upload file:', file);
            setSelectedPic(file)
          // Your process logic. Here we just mock to the same file
          return fetch('https://next.json-generator.com/api/json/get/4ytyBoLK8', {
            method: 'POST',
            body: file,
          })
            .then(res => res.json())
            .then(({ thumbnail }) => thumbnail)
            .catch(error => console.log("It's no big deal, don't worry about the errors here"))
        },
      };
    

    return (
        <div className="edit-profile">
            { AppState.width > 970 ? <AppHeader /> : <MobileAppHeader /> }

            <Row justify="center">
                <Col style={colStyle} xs={{span: "12"}} sm={{span: "8"}} xl={{span: "5"}}>
                    <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
                        <Avatar style={{marginBottom: "10%"}} size={100} src={AppState.user.picture} />
                        <Upload {...props}>
                            <Button icon={<UploadOutlined />}>Upload</Button>
                        </Upload>
                        <h1>{AppState.user.firstName} {AppState.user.lastName}</h1>
                        <h4>{AppState.user.email}</h4>
                    </div>
                </Col>
            </Row>

            <Row justify="center">
            <Form
                name="basic"
                style={{marginTop: "5%"}}
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
                initialValues={{ remember: true }}
                autoComplete="off"
                >

                <Form.Item
                    label="First Name"
                    name="firstname"
                    id="firstname"
                    onChange={(e) => setFirstName(e.target.value)}
                >
                    <Input className="firstname" defaultValue={firstName}/>
                </Form.Item>

                <Form.Item
                    label="Last Name"
                    name="lastname"
                    id="lastname"
                    onChange={(e) => setLastName(e.target.value)}
                >
                    <Input className="lastname" defaultValue={lastName} />
                </Form.Item>


                <Form.Item
                    name="error"
                >
                    <h3 style={{color: "red", display: "none"}} id="account-error">Error: Something went wrong</h3>
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}> 
                    <Button type="primary" onClick={async () => {
                            try {
                                const updatePicture = await AppState.uploadImage(selectedPic, AppState.user.email);
                                history.push('/signin');
                            } catch (error) {
                                document.getElementById('account-error').style.display = ''
                            }
                                }
                            }>
                    Submit
                    </Button> 
                </Form.Item>
                </Form>
            </Row>
        </div>
    )
}

export default ProfileEdit;
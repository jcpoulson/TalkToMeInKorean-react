import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Input, Button, Row, Col, Avatar, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { AppContext } from '../../../AppContext';


const ProfileEdit = () => {
    const AppState = useContext(AppContext);
    const history = useHistory();
    const [firstName, setFirstName] = useState(AppState.user.firstName);
    const [lastName, setLastName] = useState(AppState.user.lastName);
    const [selectedPic, setSelectedPic] = useState({})

    const colStyle = {backgroundColor: "#fff", minHeight: "280px", padding: "2%"};
    const rowStyle = {backgroundColor: "#F5F5F5"}

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

            <Row justify="center" style={rowStyle}>
                <Col style={colStyle} xs={{span: "20"}} sm={{span: "20"}} xl={{span: "15"}} align="center">
                    
                        <Avatar style={{marginBottom: "10%"}} size={100} src={AppState.user.picture} /><br />
                        <Upload {...props}>
                            <Button icon={<UploadOutlined />}>Upload</Button>
                        </Upload>
                        <h4>{AppState.user.email}</h4>
                    
                </Col>
            </Row>

            <Row justify="center" style={rowStyle}>
                <Col style={colStyle} xs={{span: "20"}} sm={{span: "20"}} xl={{span: "15"}} align="center">
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
                            label="Email"
                            name="email"
                            id="email"
                        >
                            <Input className="lastname" defaultValue={AppState.user.email} />
                        </Form.Item>

                        <Form.Item
                            label="Address (<house number> <street> <city>, <state> <zip code> <country> )"
                            name="address"
                            id="adress"
                        >
                            <Input className="lastname" defaultValue={"12345 someplace somewhere Reston, VA 20190 United States"} />
                        </Form.Item>


                        <Form.Item
                            name="error"
                        >
                            <h3 style={{color: "red", display: "none"}} id="account-error">Error: Something went wrong</h3>
                        </Form.Item>

                        <Form.Item> 
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
                </Col>
            </Row>
        </div>
    )
}

export default ProfileEdit;
import React, { useContext } from "react"
import { Row, Col, Radio } from "antd"
import { AppContext } from "../../../AppContext"

const ProfileMenuBar = () => {
    const AppState = useContext(AppContext);
    const colStyle = { padding: "2%" }

    return (
        <div>
            <Row justify="center" align="middle" gutter={1} style={{minHeight: "100%", marginBottom: "0", backgroundColor: "#F5F5F5"}}>
                <Col style={colStyle} xs={{span: "24"}} sm={{span: "8"}} xl={{span: "16"}} >
                    <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                        
                            <a className="profile-menu-link" style={{backgroundColor: "#8ba3c7"}}>My Account</a>
                            <a className="profile-menu-link">Orders</a>
                            <a className="profile-menu-link">Memebership</a>
                            <a className="profile-menu-link">Downloads</a>

                    </div>
                </Col>
                
            </Row>
        </div>
    )
}


export default ProfileMenuBar



{/* <Radio.Group defaultValue="a" size="large" className="button-group">
                        <Radio.Button value="a">My Account</Radio.Button>
                        <Radio.Button value="b">Orders</Radio.Button>
                        <Radio.Button value="c">Membership</Radio.Button>
                        <Radio.Button value="d">Downloads</Radio.Button>
                    </Radio.Group> */}
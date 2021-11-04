import React from "react"
import { Row, Col } from "antd"

const ProfileMenuBar = ({setSelectedMenuItem}) => {
    const colStyle = { padding: "2%" }
    

    const handleMenuChange = (event) => {
        const profileLinks = document.querySelectorAll('.profile-menu-link');
        profileLinks.forEach(link => link.style.backgroundColor = "#d7e3f2")
        event.target.style.backgroundColor = "#8ba3c7"
        setSelectedMenuItem(event.target.textContent)
    }


    return (
        <div>
            <Row justify="center" align="middle" gutter={1} style={{minHeight: "100%", marginBottom: "0", backgroundColor: "#F5F5F5"}}>
                <Col style={colStyle} xs={{span: "24"}} sm={{span: "8"}} xl={{span: "16"}} >
                    <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                        
                            <a className="profile-menu-link" onClick={(e) => handleMenuChange(e)} style={{backgroundColor: "#8ba3c7"}}>My Account</a>
                            <a className="profile-menu-link" onClick={(e) => handleMenuChange(e)}>Orders</a>
                            <a className="profile-menu-link" onClick={(e) => handleMenuChange(e)}>Membership</a>
                            <a className="profile-menu-link" onClick={(e) => handleMenuChange(e)}>Downloads</a>

                    </div>
                </Col>
                
            </Row>
        </div>
    )
}


export default ProfileMenuBar
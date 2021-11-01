import React, { useContext } from 'react';
import { Row, Col, Avatar } from 'antd';
import { AppContext } from '../../../AppContext';
import "../../Profile/style.css"


// Components
import { NavLink } from 'react-router-dom';

const AccountDetails = () => {
    const AppState = useContext(AppContext);
    const colStyle = {backgroundColor: "#fff", height: "280px", padding: "2%"}

    return (
        <div>
            {
            AppState.width > 970 ?
                <div className="desktop-view-component">

                    {/* Top Row */}
                    <Row justify="center" align="middle" gutter={1} style={{minHeight: "100%", marginBottom: "0"}}>
                        <Col style={colStyle} xs={{span: "24"}} sm={{span: "8"}} xl={{span: "6"}}>
                            <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
                                <Avatar style={{marginBottom: "10%"}} size={100} src={AppState.user.picture} />
                                <h1>{AppState.user.firstName} {AppState.user.lastName}</h1>
                                <h4>{AppState.user.email}</h4>
                            </div>
                        </Col>
                        <Col style={colStyle} xs={{span: "24"}} sm={{span: "16"}} xl={{span: "10"}}>
                            <div style={{display: "flex", justifyContent: "center"}}>
                                <a style={{backgroundColor: "darkblue", padding: "2%", marginTop: "25%", borderRadius: "30px"}}><strong><NavLink to="/profile-edit" style={{color: "white"}}>Edit Account Information</NavLink></strong></a>
                            </div>
                        </Col>
                    </Row>
                    
                    {/* Bottom Row */}
                    <Row justify="center" align="middle" gutter={1} style={{minHeight: "100%", marginTop: "0"}}>
                        <Col style={colStyle} xs={{span: "24"}} sm={{span: "8"}} xl={{span: "8"}}>
                            <div style={{display: "flex", flexDirection: "column", justifyContent: "center", borderTop: "dotted 1px black"}}>
                                <h1>Billing Address</h1>
                                <h2>{AppState.user.firstName} {AppState.user.lastName}</h2>
                                <h4>12243 Parkstream Terrace
                                    Herndon, VA 20170
                                    United States
                                </h4>
                            </div>
                        </Col>
                        <Col style={colStyle} xs={{span: "24"}} sm={{span: "16"}} xl={{span: "8"}}>
                        <div style={{display: "flex", flexDirection: "column", justifyContent: "center", borderTop: "dotted 1px black"}}>
                                <h1>Shipping Address</h1>
                                <h2>{AppState.user.firstName} {AppState.user.lastName}</h2>
                                <h4>12243 Parkstream Terrace
                                    Herndon, VA 20170
                                    United States
                                </h4>
                            </div>
                        </Col>
                    </Row>
                </div>
        :
                <div className="mobile-view-component">
                    
                    <Row justify="center" align="middle" gutter={1} style={{minHeight: "360px"}}>
                        <Col style={colStyle} xs={{span: "24"}} sm={{span: "8"}} xl={{span: "5"}}>
                            <div style={{marginLeft: "30%", marginRight: "30%", marginTop: "10%"}}>
                                <Avatar style={{marginBottom: "10%"}} size={100} src={AppState.user.picture} />
                                <h1>{AppState.user.firstName} {AppState.user.lastName}</h1>
                                <h4>{AppState.user.email}</h4>
                            </div>
                        </Col>
                        <Col style={colStyle} xs={{span: "24"}} sm={{span: "16"}} xl={{span: "10"}}>
                            <div style={{display: "flex", justifyContent: "center"}}>
                                <a style={{backgroundColor: "darkblue", padding: "2%", marginTop: "25%", borderRadius: "30px"}}><strong><NavLink to="/profile-edit" style={{color: "white"}}>Edit Account Information</NavLink></strong></a>
                            </div>
                        </Col>
                    </Row>


                    {/* Bottom Row */}
                    <Row justify="center" align="middle" gutter={1} style={{minHeight: "100%", marginTop: "0"}}>
                        <Col style={colStyle} xs={{span: "24"}} sm={{span: "8"}} xl={{span: "8"}}>
                            <div style={{display: "flex", flexDirection: "column", justifyContent: "center", borderTop: "dotted 1px black"}}>
                                <h1 className="mobile-billing-title">Billing Address</h1>
                                <h2>{AppState.user.firstName} {AppState.user.lastName}</h2>
                                <h4>12243 Parkstream Terrace
                                    Herndon, VA 20170
                                    United States
                                </h4>
                            </div>
                        </Col>
                        <Col style={colStyle} xs={{span: "24"}} sm={{span: "16"}} xl={{span: "8"}}>
                        <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
                                <h1 className="mobile-billing-title">Shipping Address</h1>
                                <h2>{AppState.user.firstName} {AppState.user.lastName}</h2>
                                <h4>12243 Parkstream Terrace
                                    Herndon, VA 20170
                                    United States
                                </h4>
                            </div>
                        </Col>
                    </Row>
                </div>
        }
        </div> 
    )
}

export default AccountDetails;
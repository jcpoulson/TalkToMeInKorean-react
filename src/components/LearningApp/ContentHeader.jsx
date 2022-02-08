import Link from 'next/link';
import Image from 'next/image';
import { Layout } from 'antd';
import TTMIKLogo from '../../assets/ttmik-logo.png';

const { Header } = Layout;

const ContentHeader = (props) => {
    // the prop data that this recieves is being prop drilled, and that might be okay because the data lives in LearningApp.js but see if I can clean up this state/data management a little bit
    const arrowStyle = {backgroundColor: "rgb(53, 80, 154)", borderRadius: "100%", padding: "1%", fontSize: "x-large", color: "white", marginRight: "5%"}
    return (
        <div className="site-layout-background learning-app-header" style={{ padding: 25 }}>
            {
                props.collapsed ? <a onClick={props.toggle} style={arrowStyle}>&#9776;</a> : <a onClick={props.toggle} style={arrowStyle}>&#9776;</a> 
            }
            <Link href="/"><Image src={TTMIKLogo} position="responsive" height={100} width={175} className="ttmik-logo" alt="Talk To Me In Korean Logo" /></Link>
        </div>
    )
}

export default ContentHeader;
import { Row } from 'antd';
import ReactPlayer from 'react-player';

// import BannerVideo from '../../assets/banner-video.mp4';

const Banner = () => {
    return (
        <Row>
            <ReactPlayer 
                className="banner-vid"
                url="https://firebasestorage.googleapis.com/v0/b/ttmik-backend.appspot.com/o/videos%2Fbanner-video.mp4?alt=media&token=504b8a26-1f1e-465a-ae42-ce232fff2207"
                width='100%'
                height='100%'
                controls={false}
                muted={true}
                playing={true}
                loop={true}
                style={{padding: "0"}}
            />
        </Row>
    )
}

export default Banner;
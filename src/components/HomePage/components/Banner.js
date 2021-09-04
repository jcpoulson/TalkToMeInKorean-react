import React from 'react';
import { Row } from 'antd';

import BannerVideo from '../../../assets/banner-video.mp4';

const Banner = () => {
    return (
        <Row>
            <video src={BannerVideo} width="100%" autoPlay loop muted />
        </Row>
    )
}

export default Banner;
import React from 'react';
import './Video.css';

// tambahkan param props agar dapat memanggil data dari Home.jsx
const Video = (props) => {
    return (
        <div className="video-wrapper">
            <div className="video-image">
                <img src="https://i.ytimg.com/vi/tRE70FZ_gWQ/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDQj6nbl56a83GMqijm5xDPViwlcA" alt="" />
                <p className="time">{props.time} </p>
            </div>
            <p className="title">{props.title}</p>
            <p className="desc">{props.desc}</p>
        </div>
    )
}

//ketika tdk diberian nilai propsnya
    //sehingga mnjdi defaul

Video.defaultProps = {
    time : '00.00',
    title : 'NaT',
    desc : 'Not a description'
}

export default Video;
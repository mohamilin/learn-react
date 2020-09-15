import React from 'react';
import Video from '../component/VideoComponent/Video.jsx';
import './Home.css';

class Home extends React.Component {
    render() {
        return (
            <div className="video-content" >
                <h1>Video Content</h1>
                <hr/>
                <Video 
                    time="20.00"
                    title="Belajar 1"
                    desc="Jalan Ninjaku"
                />
                <Video
                    time="19.00"
                    title="Belajar 2"
                    desc="Jalan Ninjaku"
                />
                <Video
                    time="11.00"
                    title="Belajar 3"
                    desc="Jalan Ninjaku"
                />
                <Video
                    time="10.00"
                    title="Belajar 4"
                    desc="Jalan Ninjaku"
                />
                <Video  />
            </div>
            
        )
    }
}

export default Home;
import Header from "../layouts/header";
import React, { useState, useRef } from 'react';
import Webcam from 'react-webcam';
import '../assets/styles/home.css';
import ModalCam from "../containers/modalCam";
import Button from "../components/button";
import Result from "../components/result";


function Home() {
    const [isCameraOn, setIsCameraOn] = useState(false);
    const [textButton, setTextButton] = useState("ON");
    const webcamRef = useRef(null);

    const videoConstraints = {
        facingMode: isCameraOn ? 'user' : undefined,
    };
    
    const turnOffCamera = () => {
        setIsCameraOn(false);
        if (webcamRef.current !== null) {
            const videoTrack = webcamRef.current.video.srcObject.getVideoTracks()[0];
            videoTrack.stop();
        }
    };
  
    const toggleCamera = () => {
        if (isCameraOn) {
            setIsCameraOn(false);
            setTextButton("ON");
            turnOffCamera();
        } else {
            setIsCameraOn(true);
            setTextButton("OFF");
        }
    };

    return (
        <div>
            <Header/>
            <div className="result-home">
                <Result/>
            </div>
            <div className="home-body">
                <ModalCam>
                    <div className="modal-grup">
                        <Webcam className="webcam" videoConstraints={videoConstraints} ref={webcamRef}/>
                        <Button action={toggleCamera} text={textButton} isActive={isCameraOn} />
                    </div>
                </ModalCam>
            </div>
        </div>
    );
}

export default Home
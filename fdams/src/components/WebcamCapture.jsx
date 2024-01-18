// WebcamCapture component
import React, { useRef, useEffect } from 'react';
import Webcam from 'react-webcam';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const WebcamCapture = () => {
  const webcamRef = useRef(null);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const email = searchParams.get('email');

  useEffect(() => {
    console.log('Email:', email);
    // You can use the 'email' variable for capturing face data or other purposes
  }, [email]);

  const capture = async () => {
    const imageSrc = webcamRef.current.getScreenshot();

    try {
      const response = await axios.post('/register_new_user', {
        file: imageSrc,
        email, // Use the email retrieved from the query parameters
        userType: 'staff', // Replace with the user's role (student or staff)
      });

      console.log(response.data);
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  return (
    <div>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
      />
      <button onClick={capture}>Capture</button>
    </div>
  );
};

export default WebcamCapture;

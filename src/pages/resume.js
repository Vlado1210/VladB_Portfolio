import React, { useState, useEffect } from 'react'
import '../components/navbar.css'
import { Card, CardMedia } from "@mui/material";
import './resume.css'
import { DownloadSimple } from 'phosphor-react';


const Resume = () => {
  const[ height, setHeight ] = useState(null);

  useEffect(() => {
		setHeight(window.innerHeight + 300);
	}, [height]);

  return (
    <div className='container' >
      <p className='downloadResume'>Download Resume:</p> 
      <a className='downloadButton' href="https://drive.google.com/uc?export=download&id=1P6Rkcu0FpRLBi9vm2iUSwfJ9aKakl21A">
        <DownloadSimple size={42} />
      </a>
      <Card sx={{ maxWidth: 824 }}>
        <CardMedia
        className="cardMedia"
				component="iframe"
				Height={height}
				src="https://drive.google.com/file/d/1P6Rkcu0FpRLBi9vm2iUSwfJ9aKakl21A/preview"/>
      </Card>
    </div>
  )
}

export default Resume
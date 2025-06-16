import { useState } from 'react';
import { Link } from 'react-router-dom';
import './notfound-style.css';
import backgroundVideo from '../../../assets/Videos/mar-background.mp4';
import backgroundImg from '../../../assets/Pictures/bajo-mar.jpg';

function NotFound() {

    const [videoPlaying, setVideoPlaying] = useState(false);


    return (
        <div className="notfound-wrapper">
            <video
                className={`video-bg ${videoPlaying ? 'video-visible' : ''}`}
                src={backgroundVideo}
                autoPlay
                loop
                muted
                playsInline
                onPlaying={() => setVideoPlaying(true)}
                poster={backgroundImg}
            >
                Tu navegador no soporta el video de fondo.
            </video>
            <div className="notfound-container text-center">
                <h1 className="notfound-title">404</h1>
                <h3 className="notfound-message">
                    ¡Ups! Parece que ha habido un problema.</h3>
                <h3 className="notfound-message">
                    ¿Por qué mejor no volvemos al inicio?</h3>
                <Link to="/" className="notfound-button">Volver a Home</Link>
            </div>
        </div>
    );
}

export default NotFound;
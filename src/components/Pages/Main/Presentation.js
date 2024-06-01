import React from 'react';



const Presentation = (props) => {
    return (

            <div className='mainPage__container_first'>
                <div className='foto -ibg'>
                    <img src="./product/img/main.JPG" alt="main"/>
                </div>
                <div className='first'>
                    <div className='first__body'>

                        <div className='wrapperPhoto'>
                            <div className="mainPhoto">
                                <h1 className="mainPhoto__title">Maraudeur De Nuit</h1>
                            </div>
                        </div>
                        <div className='video'>
                            <video src="./video/video.mp4" autoPlay loop muted></video>
                        </div>
                    </div>
                </div>
            </div>




    );
}

export default Presentation;
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, 
    faGithub, 
    faTwitter,
 } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
    return (
        <div className="flex text-white text-3xl pb-3 pt-3 bg-blue-600">
            <div className="flex-1">
                <div className="ml-4 md:ml-10">
                Neev Shah
                </div>

            </div>
            <div className="md:flex-1">

            </div>
            <div className="flex-1 space-x-4 text-center">
                <a href="https://www.linkedin.com/in/neev-shah-832339175/">
                    <FontAwesomeIcon icon={faLinkedinIn} color="#fff" />
                </a>
                <a href="https://github.com/neevshah1273">
                    <FontAwesomeIcon icon={faGithub} color="#fff"/>
                </a>
                <a href="https://twitter.com/Neevshah11">
                    <FontAwesomeIcon icon={faTwitter} color="#fff"/>                
                </a>
            </div>
        </div>
    )
}

export default Footer;

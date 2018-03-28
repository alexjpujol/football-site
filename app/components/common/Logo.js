import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const notFoundImage =  "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Soccerball.svg/313px-Soccerball.svg.png";

const imageError = error => {
    error.target.setAttribute('src', notFoundImage);
}


const Logo = props => {

    return (
        <img src={props.src || notFoundImage} alt={props.teamName} onError={imageError} height={props.height} />
    )
}

Logo.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired
}

module.exports = Logo;
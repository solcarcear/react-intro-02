import React from 'react';
import PropTypes from 'prop-types';

const PrimeraApp = ({saludo, subtitulo}) => {
    return (
        <>
            <h1>{saludo}</h1>
            <p>{subtitulo}</p>
        </>
    );
};
PrimeraApp.propTypes={
    saludo:PropTypes.string.isRequired
};
PrimeraApp.defaultProps={
    saludo:'Hola Mundo',
    subtitulo:'Esta es mi primera vez',
};

export default PrimeraApp;
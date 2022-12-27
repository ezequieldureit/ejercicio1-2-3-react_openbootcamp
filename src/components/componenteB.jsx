import {PropTypes } from 'prop-types';

export const ComponenteB = (props) => {
  return (
    <div>
      <h2>Nombre:{props.nombre}</h2>
      <h3>Apellido:{props.apellido}</h3>
      <h4>Email: {props.email}</h4>
      <h5>{props.conectado ?'Contacto en Linea':'Contacto No Disponible'}</h5>
    </div>
  );
};

ComponenteB.propTypes = {
  nombre: PropTypes.string,
  apellido: PropTypes.string,
  email: PropTypes.string,
  conectado: PropTypes.bool

};





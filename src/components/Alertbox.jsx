import React from 'react';
import './Alertbox.css';

const Alertbox = (props) => {
  return (
    props.alert && <div className={`alert-box alert-${props.alert.type.toLowerCase()}`} role={alert}>
      <b>
        {props.alert.type}
      </b>
      : {props.alert.msg}
    </div>
  );
}

export default Alertbox
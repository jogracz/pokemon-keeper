import React, { useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';

const Alerts = () => {
  const alertContext = useContext(AlertContext);
  return (
    alertContext.alerts.length > 0 &&
    alertContext.alerts.map(alert => (
      <div className='row' key={alert.id}>
        <div className='alert col s10 offset-s1 bgcolor4'>{alert.msg}</div>
      </div>
    ))
  );
};

export default Alerts;

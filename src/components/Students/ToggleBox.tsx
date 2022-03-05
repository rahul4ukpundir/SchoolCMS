import React, { useEffect } from 'react';

import Alert from 'react-popup-alert';
import './AlertBox.scss';

const ToggleBox = (props: any) => {
  const [alert, setAlert] = React.useState({
    type: 'success',
    text: 'alertText',
    show: true
  });
  useEffect(() => {
    setAlert({
      type: props.alertType,
      text: props.alertText,
      show: props.alertVisible
    });
  }, []);
  function onCloseAlert() {
    props.navigateFn();
    setAlert({
      type: '',
      text: '',
      show: false
    });
  }

  return (
    <div>
      <div
        style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}
      ></div>
      <Alert
        header={'Action Message'}
        btnText={'Ok'}
        text={alert.text}
        type={alert.type}
        show={alert.show}
        onClosePress={onCloseAlert}
        pressCloseOnOutsideClick={true}
        showBorderBottom={true}
        alertStyles={{}}
        headerStyles={{}}
        textStyles={{}}
        buttonStyles={{}}
      />
    </div>
  );
};

export default ToggleBox;

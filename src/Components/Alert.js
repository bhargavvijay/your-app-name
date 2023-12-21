import React from 'react';

export default function Alert(props) {
  if (props.alert.msg.length !== 0) {
    const capsAlertType = () => {
      let new_type = props.alert.type;
      if (new_type.charCodeAt(0) >= 97 && new_type.charCodeAt(0) <= 122) {
        // Create a new string with the first letter converted to uppercase
        new_type = String.fromCharCode(new_type.charCodeAt(0) - 32) + new_type.slice(1);
      }
      return new_type;
    };

    return (
      <div>
        <div className={`alert alert-${props.alert.type} alert-dismissible fade show container`} role="alert">
          <strong>{capsAlertType()}: </strong>{props.alert.msg}
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}

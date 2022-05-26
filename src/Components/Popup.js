import React from 'react'

function Popup(props) {
  return (props.trigger) ? (
    <div className = "popup">
        <div className = "popup-inner">
            <button className = "close-btn" onClick = {refreshPage}>Retry</button>
            {props.children}
        </div>
            </div>
  ) : "";
}

function refreshPage() {
    window.location.reload(false);
}

export default Popup
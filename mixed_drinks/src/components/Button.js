import React from 'react';
const style = {
    cursor: 'pointer'
}
const Button = props => <button id={props.id} onClick={props.onClick} disabled={props.disabled} style={style}>{props.children}</button>

export default Button;
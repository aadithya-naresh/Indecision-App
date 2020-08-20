import React from 'react'

const Option = (props) =>(
        <div className="option">
            <p className="option__text">{props.count}.{props.text}</p>
            <button 
            onClick = {(e) =>{
                props.handleDeleteOption(props.text)
            }}
            className="button button--link"
            >
            Remove
            </button>
        </div> 
)

export default Option
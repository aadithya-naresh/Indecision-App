import React from 'react'
import Option from './Option'
const Options = (props) =>(
        <div>
            <div className="widget-header">
              <h3 className="widget-header__title">Your options</h3>
                <button 
                onClick={props.handleDeleteOptions}
                className="button button--link"
                >
                Remove All
                </button>
            </div>
                {props.options.length === 0 && <p className="widget__messages">Please add some options</p>}
                    {
                        props.options.map((option,index) =>(
                            <Option 
                            key={option} 
                            text={option}
                            count={index+1}
                            handleDeleteOption ={props.handleDeleteOption} />
                        ))
                    }
         </div>
    )

export default Options
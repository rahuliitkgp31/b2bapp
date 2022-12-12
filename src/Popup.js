import react from 'react'

import './Popup.css'

function Popup(props){
    return (props.trigger)?(
        <div className="popup">
            <div className='overlay' onClick={()=>props.setTrigger(false)}></div>
            <div className="popup-inner">
                <button onClick={()=>props.setTrigger(false)} class="close-btn">
                    close
                </button>
                {props.children}
            </div>
        </div>):"";
}
export default Popup
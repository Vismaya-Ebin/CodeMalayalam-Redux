import React from 'react';
import {useSelector,useDispatch} from "react-redux";

export default function LabelComponent() {
    const dispatch = useDispatch();

    const showData = useSelector((state)=>{
        return state.showLabel;
    })
    const handleShowLabel = (event) => {
        const isChecked = event.target.checked;
        console.log("isChecked", isChecked);
        dispatch({ type: "showLabel",payload: { showLabel: isChecked}})
    }
  return (
    <div>
        <h2>LabelComponent</h2>
        <input  type="checkbox" checked={showData} onChange={handleShowLabel}/> SHOW LABEL
        {showData ?<p>User checked In</p> : <p>User checked Out</p>}
    </div>
  )
}



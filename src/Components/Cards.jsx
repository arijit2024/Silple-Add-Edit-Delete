import React, { useState } from "react";

const Cards = (props) => {

    const [checkVal, setCheckVal] = useState(true);
    const [checkInputFild, setCheckInputFild] = useState(true);
    const [textValue, setTextValue] = useState(props.valus.text)
    
    const EditData = (id) => {
        setCheckVal(false)
        setCheckInputFild(false)

    }
    const saveData = () => {
        setCheckVal(true)
        setCheckInputFild(true)
    }

    return (
        <>
            <div className="card container mt-5 p-3">
                <div className="card-header">
                    {props.valus.name} / Age= {props.valus.age}
                </div>
                {
                    checkInputFild ? (<div className="card-body">
                        <p className="card-text">{props.valus.text}</p>
                    </div>) : (<input type="text" className="form-control mb-3 mt-3" value={textValue} onChange={(e) => setTextValue(e.target.value)}/>)
                }                
                <div className="btn mb-2 btn-sm btn-info text-light" onClick={() => {props.deleteData(props.id)}}>Delete</div>
                {checkVal ? (<div className="btn btn-sm btn-success text-lignt" onClick={() => {EditData(props.id)}}>Edit</div>) : (<div className="btn btn-sm btn-success text-lignt" onClick={() => {saveData(props.id)}}>Save</div>)}
            </div>
        </>
    )
}

export default Cards;
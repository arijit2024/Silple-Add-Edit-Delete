import React, { useState } from "react";
import Cards from "./Cards";
import data from "./data";

const Home = () => {

    const [arrData, setArrData] = useState(data);

    const deleteData = (id) => {
            const deleteData = arrData.filter((value,i) => {
                return i != id;
            })
            setArrData(deleteData)
            // console.log(deleteData)
    }

    // const EditData = () => {
    //     const editDataMain = arrData.filter((value,i) => {
    //         return {...value, }
    //     })
    // }


    
    return(
        <>
            {
                arrData.map((valus,index)=>(
                        <Cards key={index} id={index} valus={valus} deleteData={deleteData}/>
                ))
            }
        </>
    )
}
export default Home;
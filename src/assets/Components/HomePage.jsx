import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../../App.css';

export const HomePage = (props) => {

    const navigate = useNavigate();


    /*const BUTTON = {
        width: "80px",
        height: "80px",
        margin: "auto",
        marginBottom: 20,
        borderRadius: "20px",
        borderWidth: "5px",
        WebkitBoxShadow: "0px 15px 20px -10px #000000",
        BoxShadow: "0px 15px 20px -10px #000000",
    }*/

    function switchToView(data) {
        console.log(data);
        props.setView(data);
        navigate("/View");
    }

    function handleClick() {
        navigate("./Scanning");
    }

    return (
        <div style={{
            height: "90vh",
            width: "80vw",
            display: 'flex',
            flexDirection: "column",
        }}>
            <div style={{
                display: "grid",
                width: "100%",
                height: "auto",
                gridTemplateColumns: "repeat(auto-fill, 100px)",
                justifyContent: "Center",

            }}>
                {
                    props.database.map(data => (
                        <button className='button' onClick={() => switchToView(data)}>{data.name}</button>
                    ))

                }
                <button className='button' onClick={handleClick}>+</button>
            </div>
        </div>
    )
}
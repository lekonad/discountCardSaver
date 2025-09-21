import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const HomePage = (props) => {

    const navigate = useNavigate();


    const BUTTON = {
        width: "80px",
        height: "80px",
        margin: "auto",
        marginBottom: 20
    }

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
                        <button style={BUTTON} onClick={() => switchToView(data)}>{data.name}</button>
                    ))

                }
                <button style={BUTTON} onClick={handleClick}>+</button>
            </div>
        </div>

    )
}
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const HomePage = (props) => {

    const navigate = useNavigate();

    function switchToView(data) {
        console.log(data);
        props.setView(data);
        navigate("/View");
    }

    return (
        <>
            {
                props.database.map(data => (
                    <button onClick={() => switchToView(data)}>{data.name}</button>
                ))
            }
        </>
    )
}
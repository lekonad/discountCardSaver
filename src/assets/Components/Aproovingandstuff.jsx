import { useNavigate } from "react-router-dom";
import { ReactBarcode } from 'react-jsbarcode';
import QRCode from "react-qr-code";
import { useEffect, useState } from "react";

const Aproovinfandstuff = (props) => {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [format, setFormat] = useState();
    const [value, setValue] = useState();
    const [maxID, setMaxID] = useState();
    

    function goback() {
        navigate("/");
    }

    function handleClick() {
        props.setMaxID(maxID + 1);
        console.log(props.maxID);
        //props.setDatabase(...props.database, JSON.stringify(format, value, name));
        props.setDatabase([...props.database, { maxID, format, value, name }]);
        localStorage.setItem("maxID", maxID);
        console.log(localStorage.getItem("maxID"));
        navigate("/");
    }


    useEffect(() => {
        setFormat(props.code[0]);
        setValue(props.code[1])
        setMaxID(props.maxID);
    }, []);

    return (
        <>
            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100vw",
            }}>
                {format == "qrcode" && format != "" &&
                    <QRCode
                        size={256}
                        style={{ height: "200px", maxWidth: "100%", width: "100%" }}
                        value={value}
                        viewBox={`0 0 256 256`}
                    />
                    || format != "qrcode" && format != "" &&
                    <ReactBarcode value={value} options={{ format: format }} renderer="svg" />
                }
                <form onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                    style={{
                        marginTop: "10px",
                        color: "white",
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "column",
                    }}>
                    <label>Název <input name="nazev" type="text" id="nazev" onChange={(e) => setName(e.target.value)} /></label>

                    <div style={{
                        display: "flex",
                        position: "absolute",
                        bottom: 0,
                    }}>
                        <button type="button" onClick={goback} style={{ width: "50vw" }}>Return</button>
                        <button type="button" style={{ width: "50vw" }} onClick={handleClick}>Aprooved</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Aproovinfandstuff;
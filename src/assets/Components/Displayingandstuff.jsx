import { useEffect, useState } from "react";
import { ReactBarcode } from "react-jsbarcode";
import QRCode from "react-qr-code";
import { useNavigate } from "react-router-dom"
import "../../App.css"

export const Displayingandstuff = (props) => {

    const navigate = useNavigate();
    const [format, setFormat] = useState();
    const [name, setName] = useState();
    const [value, setValue] = useState();
    const [ID, setID] = useState();

    function backtothefuture() {
        navigate("/");
    }

    function remove() {
        const newlist = props.database.filter((stuff) => stuff.maxID != ID);
        props.setDatabase(newlist);
        navigate("/");
    }

    useEffect(() => {
        setFormat(props.data.format);
        setValue(props.data.value);
        setName(props.data.name);
        setID(props.data.maxID);
        console.log(props.data);
        localStorage.setItem("database", JSON.stringify(props.database));
    }, [props.database])

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            overflowY: "hiden",
        }}>
            {format == "qrcode" && format != "" &&
                <QRCode
                    size={256}
                    style={{ height: "200px", maxWidth: "100%", width: "100%" }}
                    value={value}
                    viewBox={`0 0 256 256`}
                />
                || format != "qrcode" && format != "" &&
                <ReactBarcode value={value} options={{ width: 2.5, height: 500, format: format, text: name, flat: true }} renderer="svg" />
            }
            <div style={{
                display: "flex",
                position: "absolute",
                bottom: 0,
                height: "50px",
            }}>
                <button onClick={remove} style={{ 
                    width: "50vw",
                    backgroundColor: "red",
                    borderRadius: "50px",
                    }}>remove</button>
                <button onClick={backtothefuture} style={{ 
                    width: "50vw",
                    backgroundColor: "lightgreen",
                    borderRadius: "50px"
                    }}>return</button>
            </div>

        </div>
    );

}
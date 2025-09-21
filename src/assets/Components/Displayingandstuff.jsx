import { useEffect, useState } from "react";
import { ReactBarcode } from "react-jsbarcode";
import QRCode from "react-qr-code";
import { useNavigate } from "react-router-dom"


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
        }}>
            <h1>{name}</h1>
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
            <div style={{
                display: "flex",
            }}>
                <button onClick={remove}>remove</button>
                <button onClick={backtothefuture}>return</button>
            </div>

        </div>
    );

}
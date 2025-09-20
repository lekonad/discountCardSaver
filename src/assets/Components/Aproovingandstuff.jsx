import { useNavigate } from "react-router-dom";
import { ReactBarcode } from 'react-jsbarcode';
import QRCode from "react-qr-code";

const Aproovinfandstuff = (props) => {
    const navigate = useNavigate();
    function goback() {
        navigate("/");
    }
    return (
        <>
            <div style={{
                display: "flex",
                flexDirection: "column",
                width:"100vw",
            }}>
                {props.code[0] == "qrcode" && props.code[0] != "" &&
                    <QRCode
                        size={256}
                        style={{ height: "200px", maxWidth: "100%", width: "100%" }}
                        value={props.code[1]}
                        viewBox={`0 0 256 256`}
                    />
                    || props.code[0] != "qrcode" && props.code[0] != "" &&
                    <ReactBarcode value={props.code[1]} options={{ format: props.code[0] }} renderer="svg" />
                }
                <div style={{
                    display: "flex",
                    position: "absolute",
                    bottom:0,
                }}>
                    <button onClick={goback} style={{width: "50vw"}}>Return</button>
                    <button style={{width: "50vw"}}>Aprooved</button>
                </div>
            </div>
        </>
    )
}

export default Aproovinfandstuff;
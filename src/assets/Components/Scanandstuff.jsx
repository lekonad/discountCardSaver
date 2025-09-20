import { Scanner } from "@yudiel/react-qr-scanner";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Scanandstuff = (props) => {
  const navigate = useNavigate();
  const [result, setResult] = useState([]);
  useEffect(() => {
    result.map((code) => {
      props.code([code.format.replace("_", ""),code.rawValue]);
      contitnue();
    })
  }, [result])



  function immaheadout() {
    navigate("/");
  }

  function contitnue() {
    navigate("/Aprooving");
  }

  return (
    <>

      <div id="scanner">
        <button onClick={immaheadout}>return</button>
        {
          <Scanner formats={
            [
              'aztec',
              'code_128',
              'code_39',
              'code_93',
              'codabar',
              'databar',
              'databar_expanded',
              'data_matrix',
              'dx_film_edge',
              'ean_13',
              'ean_8',
              'itf',
              'maxi_code',
              'micro_qr_code',
              'pdf417',
              'qr_code',
              'rm_qr_code',
              'upc_a',
              'upc_e',
              'linear_codes',
              'matrix_codes',
              'unknown'
            ]} sound={false} onScan={(res) => setResult(res)} />
        }
      </div>

    </>
  );
}

export default Scanandstuff;
import Barcode from "react-barcode";

// function ProductBarcode({ id }) {
function ProductBarcode({ barcode }) {
  return (
    // <Barcode
    //   value={`P${String(id).padStart(6, "0")}`}
    //   format="CODE128"
    //   width={2}
    //   height={80}
    //   displayValue={true}
    // />

        <Barcode
      value={barcode}
      format="CODE128"
      width={2}
      height={80}
      displayValue={true}
    />
  );
}

export default ProductBarcode;
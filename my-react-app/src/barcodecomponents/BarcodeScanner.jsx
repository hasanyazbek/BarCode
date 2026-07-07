import { Html5QrcodeScanner } from "html5-qrcode";
import { useEffect } from "react";

function BarcodeScanner({ onScan }) {
  useEffect(() => {
    const scanner = new Html5QrcodeScanner(
      "reader",
      {
        fps: 10,
        qrbox: { width: 250, height: 250 },
      },
      false
    );

    scanner.render(
      (decodedText) => {
        console.log("Scanned barcode:", decodedText);
        onScan(decodedText.trim());

        // Stop scanning after a successful scan
        scanner.clear();
      },
      (error) => {
        // Ignore scan errors
      }
    );

    return () => {
      scanner.clear().catch(() => {});
    };
  }, [onScan]);

  return <div id="reader"></div>;
}

export default BarcodeScanner;
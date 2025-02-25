import { useState } from "react";
import Tesseract from "tesseract.js";

const PrescriptionScanner = () => {
  const [image, setImage] = useState<File | null>(null);
  const [text, setText] = useState<string>("");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setImage(event.target.files[0]);
    }
  };

  const handleScan = async () => {
    if (!image) return;

    const { data } = await Tesseract.recognize(image, "eng");
    setText(data.text);
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleScan}>Scan Prescription</button>
      <p>Extracted Text: {text}</p>
    </div>
  );
};

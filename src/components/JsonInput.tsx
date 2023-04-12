import { useState, useEffect, ChangeEvent } from "react";
import { getItem, setItem } from "../utils/localStorage";

interface JsonInputProps {
  onJsonChange: (json: string) => void;
}

const JsonInput: React.FC<JsonInputProps> = ({ onJsonChange }) => {
  const [json, setJson] = useState(() => {
    const storedJson = getItem("jsonInput", "");
    return storedJson;
  });

  const handleJsonChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setJson(e.target.value);
    setItem("jsonInput", e.target.value);
  };

  useEffect(() => {
    onJsonChange(json);
  }, [json]);

  return (
    <div className="mb-4">
      <label
        htmlFor="json-input"
        className="block text-sm font-medium text-white"
      >
        JSON Input (paste your JSON below)
      </label>
      <textarea
        id="json-input"
        className="mt-1 block w-full bg-gray-100 p-2 rounded-md"
        placeholder="Paste your JSON here"
        value={json}
        onChange={handleJsonChange}
        rows={10}
      ></textarea>
    </div>
  );
};

export default JsonInput;

import { useEffect, useState, useRef } from "react";
import { getItem, setItem } from "@/utils/localStorage";

interface SortOptions {
  sortBy: string;
  sortOrder: string;
  keyName: string;
}

interface JsonOutputProps {
  inputJson: string;
  sortOptions: SortOptions | null;
}

const JsonOutput: React.FC<JsonOutputProps> = ({ inputJson, sortOptions }) => {
  const [output, setOutput] = useState(() => {
    const storedOutput = getItem("jsonOutput", "");
    return storedOutput;
  });
  const outputRef = useRef<HTMLTextAreaElement>(null);

  const sortJson = (inputJson: string, sortOptions: SortOptions): string => {
    // Sorting logic here
    if (!inputJson || !sortOptions) return "";

    let parsedJson;
    try {
      parsedJson = JSON.parse(inputJson);
    } catch (e) {
      return "Invalid JSON input";
    }

    if (!Array.isArray(parsedJson)) {
      alert("Input JSON should be an array");
      return "Input JSON should be an array";
    }

    const { sortBy, sortOrder, keyName } = sortOptions;

    const sortedJson = parsedJson.sort((a: any, b: any) => {
      const compareA = sortBy === "keyName" ? a[keyName] : a;
      const compareB = sortBy === "keyName" ? b[keyName] : b;

      if (compareA < compareB) return sortOrder === "ascending" ? -1 : 1;
      if (compareA > compareB) return sortOrder === "ascending" ? 1 : -1;
      return 0;
    });

    return JSON.stringify(sortedJson, null, 2);
  };

  const copyToClipboard = () => {
    if (outputRef.current) {
      outputRef.current.select();
      document.execCommand("copy");
    }
  };

  useEffect(() => {
    if (inputJson && sortOptions) {
      const sortedJson = sortJson(inputJson, sortOptions);
      setOutput(sortedJson);
      setItem("jsonOutput", sortedJson);
    }
  }, [inputJson, sortOptions]);

  return (
    <div className="mb-4">
      <label
        htmlFor="json-output"
        className="block text-sm font-medium text-white"
      >
        JSON Output
      </label>
      <textarea
        ref={outputRef}
        id="json-output"
        className="mt-1 block w-full bg-gray-100 p-2 rounded-md"
        placeholder="Receive your SORTED JSON here"
        value={output}
        readOnly
        rows={10}
      ></textarea>
      <button
        className="bg-black text-white font-bold py-2 px-4 rounded mt-4"
        onClick={copyToClipboard}
      >
        Copy JSON to Clipboard
      </button>
    </div>
  );
};

export default JsonOutput;

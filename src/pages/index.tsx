import { SetStateAction, useState } from "react";
import JsonInput from "@/components/JsonInput";
import JsonOutput from "@/components/JsonOutput";
import SortOptions from "@/components/SortOptions";

export default function Home() {
  const [jsonInput, setJsonInput] = useState("");
  const [sortOptions, setSortOptions] = useState(null);

  const handleSort = (options: SetStateAction<null>) => {
    setSortOptions(options);
  };

  return (
    <div className="container mx-auto py-4">
      <h1 className="text-4xl font-bold mb-4 text-white">JSON Sorter</h1>
      <JsonInput onJsonChange={setJsonInput} />
      <SortOptions onSort={handleSort} />
      <JsonOutput inputJson={jsonInput} sortOptions={sortOptions} />
    </div>
  );
}

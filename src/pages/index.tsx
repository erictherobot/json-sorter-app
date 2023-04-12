import { SetStateAction, useState } from "react";
import JsonInput from "@/components/JsonInput";
import JsonOutput from "@/components/JsonOutput";
import SortOptions from "@/components/SortOptions";
import Footer from "@/components/Footer";
import Head from "next/head";

export default function Home() {
  const [jsonInput, setJsonInput] = useState("");
  const [sortOptions, setSortOptions] = useState(null);

  const handleSort = (options: SetStateAction<null>) => {
    setSortOptions(options);
  };

  return (
    <>
      <Head>
        <title>JSON Sorter Online - Sort JSON Easily - Dev Utilities</title>
        <meta
          name="description"
          content="Looking to sort your JSON data? This free online JSON sorter will sort your JSON data in alphabetical order, and will also remove any duplicate keys. It's easy to use, and it's free!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mx-auto py-4 px-4">
        <h1 className="text-4xl font-bold mb-4 text-white">JSON Sorter</h1>
        <JsonInput onJsonChange={setJsonInput} />
        <SortOptions onSort={handleSort} />
        <JsonOutput inputJson={jsonInput} sortOptions={sortOptions} />
        <Footer />
      </div>
    </>
  );
}

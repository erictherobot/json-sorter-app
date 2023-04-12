import { useEffect, useState } from "react";

function SortOptions({ onSort }: { onSort: Function }) {
  const [sortOptions, setSortOptions] = useState({
    sortBy: "keyName",
    sortOrder: "ascending",
    keyName: "",
  });

  const handleOptionChange = (e: { target: { name: any; value: any } }) => {
    setSortOptions({ ...sortOptions, [e.target.name]: e.target.value });
  };

  const handleSortButtonClick = () => {
    onSort(sortOptions);
    console.log(sortOptions);
  };

  useEffect(() => {
    localStorage.setItem("sortOptions", JSON.stringify(sortOptions));
  }, [sortOptions]);

  return (
    <div className="mb-4">
      <div className="flex space-x-4">
        <div className="w-1/3">
          <label
            htmlFor="sort-by"
            className="block text-sm font-medium text-white"
          >
            Sort By
          </label>
          <select
            id="sort-by"
            name="sortBy"
            className="mt-1 block w-full bg-gray-100 p-2 rounded-md"
            value={sortOptions.sortBy}
            onChange={handleOptionChange}
          >
            <option value="keyName">Key Name</option>
            <option value="keyValue">Key Value</option>
          </select>
        </div>
        <div className="w-1/3">
          <label
            htmlFor="sort-order"
            className="block text-sm font-medium text-white"
          >
            Sort Order
          </label>
          <select
            id="sort-order"
            name="sortOrder"
            className="mt-1 block w-full bg-gray-100 p-2 rounded-md"
            value={sortOptions.sortOrder}
            onChange={handleOptionChange}
          >
            <option value="ascending">Asc</option>
            <option value="descending">Desc</option>
          </select>
        </div>

        {sortOptions.sortBy === "keyValue" && (
          <div className="w-1/3">
            <label
              htmlFor="key-name"
              className="block text-sm font-medium text-white"
            >
              Key Name
            </label>
            <input
              id="key-name"
              name="keyName"
              className="mt-1 block w-full bg-gray-100 p-2 rounded-md"
              value={sortOptions.keyName}
              onChange={handleOptionChange}
            />
          </div>
        )}
        <button
          className="bg-black text-white font-bold py-2 px-4 rounded mt-4"
          onClick={handleSortButtonClick}
        >
          Sort
        </button>
      </div>
    </div>
  );
}

export default SortOptions;

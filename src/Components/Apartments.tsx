import { useState } from "react";

type ApartmentType = {
  id: number;
  label: string;
};

type TableData = {
  id: number;
  types: string;
  carpetArea: string;
  privateUsableArea: string;
  saleableArea: string;
  towers: string;
  finishes: string[];
};

const apartmentList: ApartmentType[] = [
  { id: 1, label: "APARTMENTS" },
  { id: 2, label: "SIMPLEX" },
  { id: 3, label: "DUPLEX" },
  { id: 4, label: "DOUBLE HEIGHT" },
  { id: 5, label: "STUDIO" },
  { id: 6, label: "PENTHOUSE" },
];

// Table data corresponding to different apartment types
const tableData: Record<number, TableData[]> = {
  1: [
    {
      id: 1,
      types: "3 BHK",
      carpetArea: "147.80 M² / 1591 FT²",
      privateUsableArea: "186.92 M² / 2012 FT²",
      saleableArea: "249.44 M² / 2685 FT²",
      towers: "B, C, D, E",
      finishes: ["SILVER"],
    },
    {
      id: 2,
      types: "4 BHK",
      carpetArea: "177.72 M² / 1913 FT²",
      privateUsableArea: "228.54 M² / 2460 FT²",
      saleableArea: "292.64 M² / 3150 FT²",
      towers: "C, D",
      finishes: ["SILVER"],
    },
  ],
  2: [
    {
      id: 3,
      types: "4L-BHK",
      carpetArea: "257.99 M² / 2777 FT²",
      privateUsableArea: "310.11 M² / 3338 FT²",
      saleableArea: "387.87 M² / 4175 FT²",
      towers: "A, F",
      finishes: ["BARE SHELL", "SILVER", "PLATINUM"],
    },
  ],
  3: [
    {
      id: 4,
      types: "4T-BHK",
      carpetArea: "250.46 M² / 2696 FT²",
      privateUsableArea: "301.28 M² / 3243 FT²",
      saleableArea: "399.48 M² / 4300 FT²",
      towers: "C, D",
      finishes: ["SILVER"],
    },
  ],
};

export default function Apart() {
  const [selectedId, setSelectedId] = useState(1);

  const selectedTableData = tableData[selectedId] || [];

  return (
    <div className="min-h-screen bg-white text-black p-6 font-serif pt-20">
      {/* Title */}
      <h1 className="text-4xl font-bold text-center mb-4">APARTMENT PLANS</h1>
      <p className="text-center mb-8 text-gray-500 max-w-2xl mx-auto">
        Select an apartment type to view the details dynamically.
      </p>

      {/* Main Layout */}
      <div className="grid grid-cols-12 gap-4">
        {/* Left Sidebar */}
        <div className="col-span-2 bg-gray-100 p-4">
          {apartmentList.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelectedId(item.id)}
              className={`block w-full text-left p-2 font-medium ${
                selectedId === item.id
                  ? "text-black border-l-4 border-black"
                  : "text-gray-500"
              } hover:text-black`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Middle Section - Dynamic Table */}
        <div className="col-span-7 bg-gray-200 p-4 overflow-x-auto">
          <table className="w-full text-sm text-left border-collapse">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="p-2">TYPES</th>
                <th className="p-2">CARPET AREA</th>
                <th className="p-2">PRIVATE USABLE AREA</th>
                <th className="p-2">SALEABLE AREA</th>
                <th className="p-2">TOWERS</th>
                <th className="p-2">FINISHES AVAILABLE</th>
              </tr>
            </thead>
            <tbody>
              {selectedTableData.map((row) => (
                <tr key={row.id} className="border-b border-gray-300">
                  <td className="p-2 font-medium">{row.types}</td>
                  <td className="p-2">{row.carpetArea}</td>
                  <td className="p-2">{row.privateUsableArea}</td>
                  <td className="p-2">{row.saleableArea}</td>
                  <td className="p-2">{row.towers}</td>
                  <td className="p-2">
                    {row.finishes.map((finish, index) => (
                      <span
                        key={index}
                        className="inline-block bg-gray-300 rounded px-2 py-1 mr-1"
                      >
                        {finish}
                      </span>
                    ))}
                  </td>
                </tr>
              ))}
              {selectedTableData.length === 0 && (
                <tr>
                  <td colSpan={6} className="text-center p-4 text-gray-500">
                    No data available for this selection.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Right Sidebar */}
        <div className="col-span-3 bg-white p-4 shadow">
          <h2 className="text-lg font-bold mb-2">Details</h2>
          <p className="text-sm text-gray-600">
            Select an apartment type from the left to view its detailed plans and finishes.
          </p>
          <ul className="mt-4">
            <li className="text-sm mb-2">
              <span className="font-medium">Selected Type:</span>{" "}
              {apartmentList.find((apartment) => apartment.id === selectedId)?.label || "N/A"}
            </li>
            <li className="text-sm mb-2">
              <span className="font-medium">Total Options:</span>{" "}
              {selectedTableData.length}
            </li>
            <li className="text-sm">
              <span className="font-medium">Finishes:</span> Dynamic per row.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

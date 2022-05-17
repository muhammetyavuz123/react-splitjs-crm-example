import React, { useState } from "react";
import { useAsyncDebounce } from "react-table";

export const GlobalFilter = ({ filter, setFilter }) => {
  const [value, setValue] = useState(filter);
  const onChange = useAsyncDebounce((value) => {
    setFilter(value || undefined);
  }, 1000);
  return (
    <>
      <select
        name="cars"
        id="cars"
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
      >
        <option value={""}>All</option>
        <option value={"2019"}>2019</option>
        <option vvalue={"2020"}>2020</option>
        <option value={"2021"}>2021</option>
        <option value={"2022"}>2022</option>
      </select>
      <span style={{ marginLeft: "5px", marginTop: "2px" }}>
        Tüm Tabloda Arama:
        <input
          placeholder="Arama..."
          value={value || ""}
          onChange={(e) => {
            setValue(e.target.value);
            onChange(e.target.value);
          }}
        />
      </span>
    </>
  );
};
// export const GlobalFilter = ({ filter, setFilter }) => {
//   const [value, setValue] = useState(filter);
//   const onChange = useAsyncDebounce((value) => {
//     setFilter(value || undefined);
//   }, 1000);
//   return (
//     <span>
//       Search:{" "}
//       <input
//         value={value || ""}
//         onChange={(e) => {
//           setValue(e.target.value);
//           onChange(e.target.value);
//         }}
//       />
//     </span>
//   );
// };

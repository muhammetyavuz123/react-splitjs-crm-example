import React, { useMemo, useState } from "react";
import { useTable, useGlobalFilter } from "react-table";
import MOCK_DATA from "../../DummyData/MOCK_DATA.json";
import { COLUMNS } from "../../DummyData/columns";
import "../../Styles/Table.css";
import { Checkbox } from "../../Components/Checkbox";
import { GlobalFilter } from "../../Components/GlobalFilter";
import { Add, Upload, Settings } from "../../Icons";

export const FilterTable = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);
  const [drop, setDrop] = useState(false);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    allColumns,
    getToggleHideAllColumnsProps,
    state,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter
    // useFilters
  );
  const { globalFilter } = state;
  return (
    <>
      <div
        style={{
          backgroundColor: "#cecbcb",
          width: "100%",
          display: "flex",
          padding: "5px",
        }}
      >
        <GlobalFilter
          filter={globalFilter}
          setFilter={setGlobalFilter}
        ></GlobalFilter>

        <div className="tableHeader">
          <Upload />
          <div style={{ position: "relative" }}>
            <button
              onClick={(e) => setDrop((e) => !e)}
              style={{
                backgroundColor: "transparent",
                border: "none",
                cursor: "pointer",
              }}
            >
              <Settings />
            </button>

            {drop ? (
              <div
                style={{
                  position: "absolute",
                  backgroundColor: "white",
                  width: "100px",
                  border: "1px solid black",
                }}
              >
                <Checkbox {...getToggleHideAllColumnsProps()} /> Toggle All
                {allColumns.map((column) => (
                  <div key={column.id} style={{ display: "flex" }}>
                    <label>
                      <input
                        type="checkbox"
                        {...column.getToggleHiddenProps()}
                      />{" "}
                      {column.Header}
                    </label>
                  </div>
                ))}
              </div>
            ) : (
              ""
            )}

            <br />
          </div>
          <Add />
        </div>
      </div>

      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>
                  {column.render("Header")}
                  {/* <div>{column.canFilter ? column.render("Filter") : null}</div> */}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
// export default FilterTable;

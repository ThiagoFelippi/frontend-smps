import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { defaultColumns, defaultRows } from "./default-values";

export const DataTable = ({ rows = defaultRows, columns = defaultColumns, pageSize = 5 }) => {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid rows={rows} columns={columns} pageSize={pageSize} rowsPerPageOptions={[7]} />
    </div>
  );
};

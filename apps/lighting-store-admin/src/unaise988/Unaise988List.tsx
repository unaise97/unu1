import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const Unaise988List = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Unaise988s"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="password" source="unaise98" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="username" source="username" />
      </Datagrid>
    </List>
  );
};

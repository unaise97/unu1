import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { US_TITLE_FIELD } from "../us/USTitle";

export const OrderList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Orders"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="@@index([light])" source="indexLight" />
        <TextField label="@@index([orderDate])" source="indexOrderDate" />
        <ReferenceField label="Light" source="us.id" reference="US">
          <TextField source={US_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Order Date" source="orderDate" />
        <TextField label="Quantity" source="quantity" />
        <TextField label="Total Amount" source="totalAmount" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};

import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { US_TITLE_FIELD } from "../us/USTitle";

export const OrderShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};

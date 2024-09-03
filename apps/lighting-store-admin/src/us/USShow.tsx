import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { US_TITLE_FIELD } from "./USTitle";
import { CATEGORY_TITLE_FIELD } from "../category/CategoryTitle";

export const USShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField
          label="Category"
          source="category.id"
          reference="Category"
        >
          <TextField source={CATEGORY_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="@@index([category])" source="indexCategory" />
        <TextField label="Name" source="name" />
        <TextField label="Price" source="price" />
        <TextField label="Stock Quantity" source="stockQuantity" />
        <TextField label="@@unique([name])" source="uniqueName" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField reference="Order" target="lightId" label="Orders">
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
        </ReferenceManyField>
        <ReferenceManyField reference="Review" target="lightId" label="Reviews">
          <Datagrid rowClick="show">
            <TextField label="Comment" source="comment" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="@@index([light])" source="indexLight" />
            <ReferenceField label="Light" source="us.id" reference="US">
              <TextField source={US_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Rating" source="rating" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};

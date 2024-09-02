import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";

import { USTitle } from "../us/USTitle";

export const OrderCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="@@index([light])" source="indexLight" />
        <DateTimeInput label="@@index([orderDate])" source="indexOrderDate" />
        <ReferenceInput source="light.id" reference="US" label="Light">
          <SelectInput optionText={USTitle} />
        </ReferenceInput>
        <DateTimeInput label="Order Date" source="orderDate" />
        <NumberInput step={1} label="Quantity" source="quantity" />
        <NumberInput label="Total Amount" source="totalAmount" />
      </SimpleForm>
    </Create>
  );
};

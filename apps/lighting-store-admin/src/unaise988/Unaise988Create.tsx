import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const Unaise988Create = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="password" source="unaise98" />
        <TextInput label="username" source="username" />
      </SimpleForm>
    </Create>
  );
};

import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const Unaise988Edit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="password" source="unaise98" />
        <TextInput label="username" source="username" />
      </SimpleForm>
    </Edit>
  );
};

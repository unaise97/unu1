/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Unaise988WhereInput } from "./Unaise988WhereInput";
import { Type } from "class-transformer";

@ArgsType()
class Unaise988CountArgs {
  @ApiProperty({
    required: false,
    type: () => Unaise988WhereInput,
  })
  @Field(() => Unaise988WhereInput, { nullable: true })
  @Type(() => Unaise988WhereInput)
  where?: Unaise988WhereInput;
}

export { Unaise988CountArgs as Unaise988CountArgs };

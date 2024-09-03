/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Unaise988WhereInput } from "./Unaise988WhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class Unaise988ListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => Unaise988WhereInput,
  })
  @ValidateNested()
  @Type(() => Unaise988WhereInput)
  @IsOptional()
  @Field(() => Unaise988WhereInput, {
    nullable: true,
  })
  every?: Unaise988WhereInput;

  @ApiProperty({
    required: false,
    type: () => Unaise988WhereInput,
  })
  @ValidateNested()
  @Type(() => Unaise988WhereInput)
  @IsOptional()
  @Field(() => Unaise988WhereInput, {
    nullable: true,
  })
  some?: Unaise988WhereInput;

  @ApiProperty({
    required: false,
    type: () => Unaise988WhereInput,
  })
  @ValidateNested()
  @Type(() => Unaise988WhereInput)
  @IsOptional()
  @Field(() => Unaise988WhereInput, {
    nullable: true,
  })
  none?: Unaise988WhereInput;
}
export { Unaise988ListRelationFilter as Unaise988ListRelationFilter };

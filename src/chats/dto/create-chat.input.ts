import { InputType, Field } from '@nestjs/graphql';
import {
  IsNotEmpty,
  IsString,
} from 'class-validator';

@InputType()
export class CreateChatInput {

  @Field({ nullable: true })
  @IsNotEmpty()
  @IsString()
  name: string;
}

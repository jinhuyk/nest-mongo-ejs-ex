import { Type } from 'class-transformer';
import {IsString, IsNumber} from 'class-validator'

export class CreateCatDto {

    @IsString()
    readonly name: string;

    @Type(()=>Number)
    @IsNumber()
    readonly age: number;
    
    @IsString({each:true})
    readonly breed: string;
}
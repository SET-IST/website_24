import {
    IsEmail,
    IsOptional,
    IsString,
  } from "class-validator";
  
  
  export class PatchStudentProfileDto {
    
    @IsOptional()
    @IsString()
    name: string | undefined;
    
    @IsOptional()
    @IsEmail()
    email: string | undefined;

    @IsOptional()
    @IsString()
    university: string | undefined;

    @IsOptional()
    @IsString()
    course: string | undefined;
  
  }
  
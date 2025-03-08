import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsEmail, IsNotEmpty, IsOptional, IsString, IsStrongPassword, MinLength } from "class-validator";

export class RegisterDto {

    @ApiProperty({
        description: "User's full name",
        example: "John Doe",
        minLength: 3,
    })
    @IsNotEmpty({ message: 'Name is required and must be a string' })
    @IsString()
    @MinLength(3)
    name: string;

    @ApiProperty({
        description: "User's email address",
        example: "johndoe@example.com",
        format: "email",
    })
    @IsNotEmpty({ message: 'Email is required and must be a valid email address' })
    @IsString()
    @IsEmail({}, { message: 'Please provide a valid email address' })
    email: string;

    @ApiProperty({
        description: "User's password (must contain at least 8 characters, 1 uppercase letter, 1 number, and 1 special character)",
        example: "SecurePass123!",
        minLength: 8,
    })
    @IsNotEmpty({ message: 'Password is required and must be a valid password: at least 8 characters, 1 upper case, at least one digit from (0-9) and at least one special character' })
    @IsString()
    @IsStrongPassword({}, { message: 'Please provide a valid password: at least 8 characters, at least 1 upper case, at least one digit from (0-9) and at least one special character' })
    @Transform(({ value }) => value.trim())//For not accept only spaces in the password
    password: string;

    @ApiProperty({
        description: "User's role",
        example: "admin",
    })
    @IsOptional()
    @IsString()
    role: string;
}
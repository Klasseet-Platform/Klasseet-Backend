import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    description: 'user mail',
    type: String,
    required: true,
  })
  @IsEmail()
  @IsNotEmpty()
  @Matches(
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
    { message: 'email must be a valid email' },
  )
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  @MaxLength(20)
  @Matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    {
      message:
        'password must contain Min of eight characters, at least one uppercase letter, one lowercase letter, one number and one special character',
    },
  )
  @ApiProperty({
    description: 'user password',
    type: String,
    required: true,
  })
  password: string;

  @ApiProperty({
    description: 'user first name',
    type: String,
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @ApiProperty({
    description: 'user last name',
    type: String,
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  lastName: string;

  @ApiProperty({
    description: 'user country',
    type: String,
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  country: string;

  @ApiProperty({
    enum: ['STUDENT', 'INSTRUCTOR'],
    description: 'user role',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  role: 'STUDENT' | 'INSTRUCTOR';
}

export class LoginUserDto {
  @ApiProperty({
    description: 'user mail',
    type: String,
    required: true,
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    description: 'user password',
    type: String,
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  password: string;
}

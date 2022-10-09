/* eslint-disable prettier/prettier */
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { AppModule } from 'src/app.module';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthService } from '../auth.service';
import { CreateUserDto } from '../dto/auth.dto';

describe('user authentication e2e', () => {
  let app: INestApplication;
  let prisma: PrismaService;
  let authService: AuthService;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
    app = moduleRef.createNestApplication();
    app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
    await app.init();
    prisma = app.get(PrismaService);
    await prisma.$connect();
  });

  afterAll(() => {
    app.close();
  });

  // describe('check if data exists in the db', () => {
  //   const dto: CreateUserDto = {
  //     firstName: 'Yetunde',
  //     lastName: 'Elusakin',
  //     email: 'yetundeelusakin1@gmail.com',
  //     country: 'Nigeria',
  //     role: 'INSTRUCTOR',
  //     password: 'yetunde1995@',
  //   };

  //   it('should check if user exist', async () => {
  //     await authService
  //       .signUp(dto)
  //       .then()
  //       .catch((error) => expect(error.statusCode).toBe(403));
  //   });
  // });

  describe('creates new user', () => {
    const dto: CreateUserDto = {
      firstName: 'Yetunde',
      lastName: 'Elusakin',
      email: 'yetundeelusakin1@gmail.com',
      country: 'Nigeria',
      role: 'INSTRUCTOR',
      password: 'yetunde1995@',
    };
    it('should create user', async () => {
      const user = await prisma.user.create({
        data: {
          firstName: dto.firstName,
          lastName: dto.lastName,
          email: dto.email,
          role: dto.role,
          hash: dto.password,
          country: dto.country,
        },
      });
    });
  });
});

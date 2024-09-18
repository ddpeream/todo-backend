// src/auth/auth.service.ts
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { User } from '../user/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.userService.findByEmail(email);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      console.log('el result', result);
      return result;
    }
    return null;
  }

  async login(user: any) {
    console.log('El password', user);
    const payload = { username: user.username, sub: user.userId };
    return this.jwtService.sign(payload);
  }
}
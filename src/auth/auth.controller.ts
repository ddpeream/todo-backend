// src/auth/auth.controller.ts
import { Controller, Request, Post, UseGuards, Get, Body, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guard/local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Body() body: any, @Req() req: any) {
    console.log('user', req.user, body);
    return {
        access_token: await this.authService.login(req.user),
        user: req.user
    }
  }
}

// https://github.com/ddpeream/todo-backend.git
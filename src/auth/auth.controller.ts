import { Controller, Post, Get, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuards } from './guards/local-auth.guards';
import { JwtAuthGuards } from './guards/jwt-auth-guards';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuards)
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuards)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}

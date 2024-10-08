import { Body, Controller, Get, HttpCode, HttpStatus, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { ActiveUserInterface } from 'src/common/interfaces/active-user.interface';
import { ActiveUser } from 'src/common/decorators/active-user.decorator';
import { Auth } from './decorators/auth.decorator';
import { Role } from 'src/common/enums/role.enum';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { };

    @Post('register')
    register(@Body() registerDto: RegisterDto) {
        return this.authService.register(registerDto);
    }

    @HttpCode(HttpStatus.OK)
    @Post('login')
    login(@Body() loginDto: LoginDto) {
        return this.authService.login(loginDto);
    }

    @Get('profile')
    @Auth([Role.ADMIN])
    profile(@ActiveUser() user: ActiveUserInterface) { //@ActiveUser() it's a customized decorator
        console.log(user)
        return this.authService.profile(user);
    }
}


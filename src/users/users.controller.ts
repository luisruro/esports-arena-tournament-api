import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { Role } from 'src/common/enums/role.enum';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
@Auth([Role.ADMIN])
export class UsersController {
    constructor(private readonly usersService: UsersService) {};

    @Post()
    @ApiOperation({ summary: 'Create a new user' })
    @ApiResponse({ status: 200, description: 'New user has been created' })
    @ApiResponse({ status: 404, description: 'Role not found' })
    async create(@Body() createUserDto: CreateUserDto) {
        return await this.usersService.create(createUserDto);
    }

    @Get()
    @ApiOperation({ summary: 'Get all users' })
    @ApiResponse({ status: 200, description: 'All users' })
    async findAll() {
        return await this.usersService.findAll();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Get a user by id' })
    @ApiResponse({ status: 200, description: 'User found' })
    @ApiResponse({ status: 404, description: 'User has not been found' })
    async findOne(@Param('id', ParseUUIDPipe) id: string) {
        return await this.usersService.findOne(id);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Delete user' })
    @ApiResponse({ status: 200, description: 'User has been deleted' })
    @ApiResponse({ status: 404, description: 'User has not been found' })
    async deleteUser(@Param('id', ParseUUIDPipe) id: string) {
        await this.usersService.deleteUser(id);
    }

    @Patch(':id')
    @ApiOperation({ summary: 'Update user' })
    @ApiResponse({ status: 200, description: 'User has been updated' })
    @ApiResponse({ status: 404, description: 'User has not been found' })
    async updateUser(@Param('id', ParseUUIDPipe) id: string, @Body() user: CreateUserDto) {
        await this.usersService.updateUser(id, user);
    }
}


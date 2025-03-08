import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post } from '@nestjs/common';
import { RolesService } from './roles.service';
import { UpdateRoleDto } from './dto/update-role.dto';
import { CreateRoleDto } from './dto/create-role.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('roles')
@Controller('roles')
export class RolesController {
    constructor(private readonly rolesService: RolesService) { };

    @Get()
    @ApiOperation({ summary: 'Get all roles' })
    getAllRoles() {
        return this.rolesService.getAllRoles();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Get role by id' })
    getRoleById(@Param('id', ParseUUIDPipe) id: string) {
        return this.rolesService.getRoleById(id);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Delete role' })
    deleteRole(@Param('id', ParseUUIDPipe) id: string) {
        return this.rolesService.deleteRole(id);
    }

    @Patch(':id')
    @ApiOperation({ summary: 'Update role' })
    updateRole(@Param('id', ParseUUIDPipe) id: string, @Body() role: UpdateRoleDto) {
        return this.rolesService.updateRole(id, role);
    }

    @Post()
    @ApiOperation({ summary: 'Create a new role' })
    createRole(@Body() newRole: CreateRoleDto) {
        return this.rolesService.createRole(newRole);
    }
}


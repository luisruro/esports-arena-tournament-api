import { CanActivate, ExecutionContext, ForbiddenException, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from 'src/auth/decorators/roles.decorator';
import { Rol } from 'src/common/enums/role.enum';


@Injectable()
export class RolesGuard implements CanActivate {

  constructor(private reflector: Reflector) { };

  canActivate(context: ExecutionContext): boolean {


    const roles = this.reflector.getAllAndOverride<Rol[]>(ROLES_KEY, [
      context.getClass(),
      context.getHandler(),
    ])

    console.log(roles);

    //If no roles are specified, the route or controller is accessible by anyone. It means that rout does not need protection.
    if (!roles) {
      return true;
    }

    const { user } = context.switchToHttp().getRequest();
    console.log(user); 
    
    //Validating user role
    if (!user || !user.rol || !roles.includes(user.rol)) {
      throw new ForbiddenException('Access denied, you are unauthorized');
    }

    return true;
  }
}

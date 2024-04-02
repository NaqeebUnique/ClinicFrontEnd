//To register new user
export class AppUser{
  constructor(
    public Email:string,
    public Password:string,
    public ConfirmPassowrd:string
  ){}
}

//To authenticate user
export class LoginUser{
  constructor(
    public Email:string,
    public Password:string,
  ){}
}

//To create new role
export class RoleInfo {
  constructor(
    public Name:string
  ){}
}

//To assign role
export class UserRole {
  constructor(
    public Email:string,
    public RoleName:string
  ){}
}

export class SecurityResponse{
  constructor(
    public Message:string,
    public Token:string,
    public IsLoggedIn:boolean,
    public roles:string

  ){}
}
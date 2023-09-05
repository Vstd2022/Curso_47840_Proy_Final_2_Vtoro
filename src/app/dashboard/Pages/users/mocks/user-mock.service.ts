import { User } from "../models";

export class UserMockService {
  private users: User[] = [
    {
      id: 1,
      name: 'Nom Usuario',
      surname: 'Ape Usuario',
      email: 'usuario@mail.com',
      password: '123456',
      role: 'ADMINISTRADOR',
      token: ''
    },
  ];
  getUsers(): User[] {
    return this.users;
  }
}
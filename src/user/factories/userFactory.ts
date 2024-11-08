import { User } from '../entities/user.entity';

type Override = Partial<User>;

export const makeUser = ({ id, ...override }: Override) => {
  return new User(
    {
      email: 'pedro@mail.com',
      username: 'pedro',
      password: 'pedro',
      user_type: 1,
      ...override,
    },
    id,
  );
};
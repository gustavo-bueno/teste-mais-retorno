import React, { createContext, useState } from 'react';

import { IUser } from '../models/user.model';

type UserContext = {
  user: IUser;
  setUser: React.Dispatch<React.SetStateAction<IUser>>;
};

const UserContext = createContext<UserContext>({} as UserContext);

const UserProvider: React.FC<{}> = ({ children }) => {
  const [user, setUser] = useState<IUser>();

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };

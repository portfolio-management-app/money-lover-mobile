import { types } from 'mobx-state-tree';

export const User = types.model({
  email: types.string,
  id: types.string,
  isLoggedIn: false,
});

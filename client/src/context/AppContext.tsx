/* eslint-disable react-refresh/only-export-components */
import React from 'react';
import { SavedUser } from '../types';

enum ActionType {
  LOGIN = 'LOGIN',
  LOGOUT = 'LOGOUT',
}

type UserState = SavedUser | null;

type LogInAction = {
  type: ActionType.LOGIN;
  payload: UserState;
};

type LogOutAction = {
  type: ActionType.LOGOUT;
  payload: UserState;
};
type Action = LogInAction | LogOutAction;

type ActionDispatch = React.Dispatch<Action>;

const initialUser: UserState = JSON.parse(
  localStorage.getItem('user') ?? 'null'
);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const initialDispatch = (_v: Action): void => {};

export const UserStateContext = React.createContext<SavedUser | null>(
  initialUser
);
export const UserDispatchContext =
  React.createContext<ActionDispatch>(initialDispatch);

/* Provider Context*/
type ProviderProp = {
  children: React.ReactNode;
};
export default function UserProvider({ children }: ProviderProp): JSX.Element {
  const [state, dispatch] = React.useReducer<
    (state: UserState, action: Action) => UserState
  >(userReducer, initialUser);
  return (
    <UserStateContext.Provider value={state}>
      <UserDispatchContext.Provider value={dispatch}>
        {children}
      </UserDispatchContext.Provider>
    </UserStateContext.Provider>
  );
}

export function userReducer(state: UserState, action: Action): UserState {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, ...action.payload };
    case 'LOGOUT':
      return null;
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

export function dispatchToStorage(
  dispatch: ActionDispatch,
  payload: UserState
) {
  localStorage.setItem('user', JSON.stringify(payload));
  dispatch({
    type: ActionType.LOGIN,
    payload,
  });
}

export function dispatchFromStorage(
  dispatch: ActionDispatch,
  payload: UserState
) {
  localStorage.setItem('user', JSON.stringify(null));
  dispatch({
    type: ActionType.LOGOUT,
    payload,
  });
}

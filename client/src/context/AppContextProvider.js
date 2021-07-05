// import { ContextProvider1 } from '.../Context1';
// import { ContextProvider2 } from '.../Context2';
// import { ContextProvider3 } from '.../Context3';
import { UserProvider } from "./UserProvider";
import { FrameworkProvider } from "./FrameworkProvider";

import { combineComponents } from "../utils/combineComponents";

const providers = [
  UserProvider,
  FrameworkProvider,
  //   ContextProvider3,
  //   ContextProvider4
];
export const AppContextProvider = combineComponents(...providers);

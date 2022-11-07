import { StateSchema } from "../../../../../StoreProvider";

export const getUsers = (state: StateSchema) => state.users?.answer?.users;

import { StateSchema } from "../../../../../StoreProvider";

export const getUser = (state: StateSchema) => state.user?.answer?.me;
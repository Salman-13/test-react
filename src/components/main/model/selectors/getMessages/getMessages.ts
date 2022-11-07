import { StateSchema } from "../../../../../StoreProvider";

export const getMessages = (state: StateSchema) => state.messages?.answer?.messages;

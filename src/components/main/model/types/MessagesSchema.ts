export interface MessageSchema {
    id?: number;
    replyTo?: number;
    author: string;
    message: string;
    timestamp?: number;
}
export interface Messages {
    answer: {
        messages: MessageSchema[]
    }
    error: {
        code: number
    }
}
export interface UsersSchema {
    id: string;
    name: string;
    surname?: string;
    image?: string;
}

export interface Users {
    answer: {
        users: UsersSchema[]
    }
    error: {
        code: number
    }
}
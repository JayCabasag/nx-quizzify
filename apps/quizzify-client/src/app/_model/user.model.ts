export interface User {
    access_token: string,
    user: {
        id: string;
        email: string;
        type: string;
    }
}
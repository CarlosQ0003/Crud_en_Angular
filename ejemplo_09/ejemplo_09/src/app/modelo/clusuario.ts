export class Clusuario {
    id?: number;
    user: string;
    password: string;

    constructor(user: string, password: string) {
        this.user = user;
        this.password = password;
    }
}

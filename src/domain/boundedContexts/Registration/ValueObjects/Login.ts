import { ValueObject } from "~/src/domain/Templates/ValueObject";

interface ILogin {
    value: string;
}

export class Login extends ValueObject<ILogin> {
    private constructor(props: ILogin) {
        super(props);
    }

    public static create(login: string): Login {
        // Проверка длины
        if (login.length < 8 || login.length > 30) {
            throw new Error("Логин должен содержать от 8 до 30 символов.");
        }

        // Проверка содержания символов
        const loginRegex = /^[a-zA-Z0-9_]+$/;
        if (!login.match(loginRegex)) {
            throw new Error(
                "Логин должен содержать только буквы, цифры и символы подчеркивания."
            );
        }

        return new Login({ value: login });
    }
}

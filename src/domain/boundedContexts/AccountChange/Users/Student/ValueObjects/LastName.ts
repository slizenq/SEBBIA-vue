import { ValueObject } from "./ValueObject";

interface ILastName {
    value: string;
}

export class LastName extends ValueObject<ILastName> {
    private constructor(props: ILastName) {
        super(props);
    }

    public static create(lastName: string): LastName {
        // Проверка длины
        if (lastName.length < 1 || lastName.length > 25) {
            throw new Error(
                "Длина фамилии должна составлять от 1 до 25 символов."
            );
        }

        // Проверка символов
        const lastNameRegex = /^(?![ъь])[А-ЯЁа-яё]+$/;
        if (!lastName.match(lastNameRegex)) {
            throw new Error("Некоректная фамилия");
        }

        return new LastName({ value: lastName });
    }
}

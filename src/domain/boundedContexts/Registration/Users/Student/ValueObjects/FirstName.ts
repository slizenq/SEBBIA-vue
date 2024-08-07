import { ValueObject } from "~/src/domain/Templates/ValueObject";

interface IFirstName {
  value: string;
}

export class FirstName extends ValueObject<IFirstName> {
  private constructor(props: IFirstName) {
    super(props);
  }

  public static create(firstName: string): FirstName {
    // Проверка длины
    if (firstName.length < 1 || firstName.length > 25) {
      throw new Error("Длина имени должна составлять от 1 до 25 символов.");
    }

    // Проверка символов
    const firstNameRegex = /^(?![ъь])[А-ЯЁа-яё]+$/;
    if (!firstName.match(firstNameRegex)) {
      throw new Error("Некоректное имя");
    }

    return new FirstName({ value: firstName });
  }
}

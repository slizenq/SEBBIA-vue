import { ValueObject } from "~/src/domain/Templates/ValueObject";

interface ILastName {
  value: string;
}

export class LastName extends ValueObject<ILastName> {
  private constructor(props: ILastName) {
    super(props);
  }
  public static create(lastName: string): LastName {
    const lastNameRegex = /^[А-ЯЁ](?:[а-яё]+(?:-[А-ЯЁ][а-яё]+)*)?$/;

    if (!lastName.match(lastNameRegex)) {
      throw new Error("Фамилия введена некорректно");
    } else if (lastName.length > 25) {
      throw new Error("Фамилия слишком длинная");
    } else if (lastName.length < 1) {
      throw new Error("Фамилия слишком короткая");
    } else {
      return new LastName({ value: lastName });
    }
  }
}

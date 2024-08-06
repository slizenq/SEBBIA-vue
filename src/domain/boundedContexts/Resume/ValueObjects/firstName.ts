import { ValueObject } from "~/src/domain/Templates/ValueObject";

interface IFirstName {
  value: string;
}

export class FirstName extends ValueObject<IFirstName> {
  private constructor(props: IFirstName) {
    super(props);
  }

  public static create(firstName: string): FirstName {
    const firstNameRegex = /^[А-ЯЁ](?:[а-яё]+(?:-[А-ЯЁ][а-яё]+)*)?$/;

    if (!firstName.match(firstNameRegex)) {
      throw new Error("Имя введено некорректно");
    } else if (firstName.length > 25) {
      throw new Error("Имя слишком длинное");
    } else if (firstName.length < 1) {
      throw new Error("Имя слишком короткое");
    } else {
      return new FirstName({ value: firstName });
    }
  }
}

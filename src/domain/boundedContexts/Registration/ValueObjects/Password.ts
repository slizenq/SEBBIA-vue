import { ValueObject } from "~/src/domain/Templates/ValueObject";

interface IPassword {
  value: string;
}

export class Password extends ValueObject<IPassword> {
  private constructor(props: IPassword) {
    super(props);
  }

  public static create(password: string): Password {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!password.match(passwordRegex)) {
      throw new Error(
        "Пароль должен содержать не менее 8 символов, по крайней мере, одну цифру, один специальный символ и только латинские буквы."
      );
    } else {
      return new Password({ value: password });
    }
  }
}

import { ValueObject } from "~/src/domain/Templates/ValueObject";

interface IMidleName {
  value: string;
}

export class MidleName extends ValueObject<IMidleName> {
  private constructor(props: IMidleName) {
    super(props);
  }

  public static create(midleName: string): MidleName {
    const midleNameRegex = /^[А-ЯЁ](?:[а-яё]+(?:-[А-ЯЁ][а-яё]+)*)?$/;
    if (midleName.length != 0) {
      if (!midleName.match(midleNameRegex)) {
        throw new Error("Отчество введено некорректно");
      } else if (midleName.length > 25) {
        throw new Error("Отчество слишком длинное");
      } else if (midleName.length < 1) {
        throw new Error("Отчество слишком короткое");
      } else {
        return new MidleName({ value: midleName });
      }
    } else {
      return new MidleName({ value: midleName });
    }
  }
}

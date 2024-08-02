import { ValueObject } from "~/src/domain/Templates/ValueObject";

interface IAboutPractice {
  value: string;
}

export class AboutPractice extends ValueObject<IAboutPractice> {
  private constructor(props: IAboutPractice) {
    super(props);
  }

  public static create(aboutPractice: string): AboutPractice {
    if (aboutPractice.length > 500) {
      throw new Error("Превышено максимальное количество символов - 500.");
    } else {
      return new AboutPractice({ value: aboutPractice });
    }
  }
}

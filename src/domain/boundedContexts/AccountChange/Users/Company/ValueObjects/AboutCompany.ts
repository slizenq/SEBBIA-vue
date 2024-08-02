import { ValueObject } from "~/src/domain/Templates/ValueObject";

interface IAboutCompany {
  value: string;
}

export class AboutCompany extends ValueObject<IAboutCompany> {
  private constructor(props: IAboutCompany) {
    super(props);
  }

  public static create(aboutCompany: string): AboutCompany {
    if (aboutCompany.length > 800) {
      throw new Error("Превышено максимальное количество символов - 800.");
    } else {
      return new AboutCompany({ value: aboutCompany });
    }
  }
}

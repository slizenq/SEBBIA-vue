import { ValueObject } from "~/src/domain/Templates/ValueObject";

interface UAboutMe {
  value: string;
}

export class AboutMe extends ValueObject<UAboutMe> {
  private constructor(props: UAboutMe) {
    super(props);
  }

  public static create(info: string): AboutMe {
    if (info.length > 350) {
      throw new Error("Превышено количество информации о вас");
    } else {
      return new AboutMe({ value: info });
    }
  }
}

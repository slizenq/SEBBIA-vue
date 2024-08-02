import { ValueObject } from "~/src/domain/Templates/ValueObject";

interface IAboutProjects {
  value: string;
}

export class AboutProjects extends ValueObject<IAboutProjects> {
  private constructor(props: IAboutProjects) {
    super(props);
  }

  public static create(aboutProjects: string): AboutProjects {
    if (aboutProjects.length > 500) {
      throw new Error("Превышено максимальное количество символов - 500.");
    } else {
      return new AboutProjects({ value: aboutProjects });
    }
  }
}

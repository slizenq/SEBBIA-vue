import { ValueObject } from "~/src/domain/Templates/ValueObject";

interface IAboutProject {
  value: string;
}

export class AboutProject extends ValueObject<IAboutProject> {
  private constructor(props: IAboutProject) {
    super(props);
  }

  public static create(aboutProject: string): AboutProject {
    if (aboutProject.length > 400) {
      throw new Error("Слишком длинное описание");
    } else {
      return new AboutProject({ value: aboutProject });
    }
  }
}

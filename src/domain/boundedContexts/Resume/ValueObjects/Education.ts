import { ValueObject } from "~/src/domain/Templates/ValueObject";

interface IEducation {
  value: string;
}

export class Education extends ValueObject<IEducation> {
  private constructor(props: IEducation) {
    super(props);
  }
  public static create(education: string): Education {
    if (education === undefined || education === null) {
      throw new Error("Пустое значение для специальности");
    } else {
      return new Education({ value: education });
    }
  }
}

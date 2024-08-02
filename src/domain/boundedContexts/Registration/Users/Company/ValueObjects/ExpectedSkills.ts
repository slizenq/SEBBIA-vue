import { ValueObject } from "~/src/domain/Templates/ValueObject";
import { Skill } from "./Skill";

interface IExpectedSkills {
  value: Skill[];
}

export class ExpectedSkills extends ValueObject<IExpectedSkills> {
  private constructor(props: IExpectedSkills) {
    super(props);
  }

  public static create(expectedSkills: Skill[]): ExpectedSkills {
    return new ExpectedSkills({ value: expectedSkills });
  }
}

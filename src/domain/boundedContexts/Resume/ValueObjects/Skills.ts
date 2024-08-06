import { ValueObject } from "~/src/domain/Templates/ValueObject";
import { Skill } from "./Skill";

interface ISkills {
  value: Skill[];
}

export class Skills extends ValueObject<ISkills> {
  private constructor(props: ISkills) {
    super(props);
  }

  public static create(skills: Skill[]): Skills {
    return new Skills({ value: skills });
  }
}

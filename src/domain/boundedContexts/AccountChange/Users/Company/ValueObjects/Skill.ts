import { ValueObject } from "~/src/domain/Templates/ValueObject";

interface ISkill {
  value: string;
}

export class Skill extends ValueObject<ISkill> {
  private constructor(props: ISkill) {
    super(props);
  }

  public static create(skill: string): Skill {
    if (skill.length > 30) {
      throw new Error("Превышено количество информации о ваших способностях");
    } else {
      return new Skill({ value: skill });
    }
  }
}

import { Entity } from "~/src/domain/Templates/Entity";
import type { ExpectedSkills } from "../ValueObjects/ExpectedSkills";
import type { Direction } from "../../Resume/ValueObjects/Direction";
import type { AboutProject } from "../../Resume/ValueObjects/AboutProject";
import type { AboutPractice } from "../ValueObjects/AboutPracrice";

export interface VacancyProps {
  expectedSkills: ExpectedSkills;
  aboutPractice: AboutPractice;
  directions: Direction;
  aboutProjects: AboutProject;
}

export class Vacancy extends Entity<VacancyProps> {
  private constructor(props: VacancyProps) {
    super(props);
    this.props.expectedSkills = props.expectedSkills;
    this.props.aboutPractice = props.aboutPractice;
    this.props.directions = props.directions;
    this.props.aboutProjects = props.aboutProjects;
  }

  public static create(props: VacancyProps) {
    if (props.expectedSkills === null || props.expectedSkills === undefined) {
      throw new Error("Обязательное поле");
    } else if (props.directions === null || props.directions === undefined) {
      throw new Error("Обязательное поле");
    } else {
      return new Vacancy(props);
    }
  }
}
//

import { Entity } from "~/src/domain/Templates/Entity";
import type { FirstName } from "../ValueObjects/firstName";
import type { LastName } from "../ValueObjects/lastName";
import type { MidleName } from "../ValueObjects/MidleName";
import type { Direction } from "../ValueObjects/Direction";
import type { Photo } from "../ValueObjects/Photo";
import type { PhoneNumber } from "../ValueObjects/phoneNumber";
import type { Skills } from "../ValueObjects/Skills";
import type { Education } from "../ValueObjects/Education";
import type { AboutProject } from "../ValueObjects/AboutProject";
import type { AboutMe } from "../ValueObjects/AboutMe";
import type { Portfolio } from "../ValueObjects/Portfolio";
import type { BornDate } from "../ValueObjects/BornDate";

export interface ResumeProps {
  //   resumeId: ResumeId;
  firstName: FirstName;
  lastName: LastName;
  middleName?: MidleName;
  phone: PhoneNumber;
  bornDate: BornDate;
  education: Education;
  aboutMe?: AboutMe;
  skills?: Skills;
  photo?: Photo;
  direction: Direction;
  aboutProject?: AboutProject;
  portfolio?: Portfolio;
}

export class Resume extends Entity<ResumeProps> {
  private constructor(props: ResumeProps) {
    super(props);
    // this.props.resumeId = props.resumeId;
    this.props.photo = props.photo;
    this.props.direction = props.direction;
    this.props.skills = props.skills;
    this.props.education = props.education;
    this.props.aboutMe = props.aboutMe;
    this.props.aboutProject = props.aboutProject;
    this.props.firstName = props.firstName;
    this.props.lastName = props.lastName;
    this.props.middleName = props.middleName;
    this.props.phone = props.phone;
    this.props.bornDate = props.bornDate;
    this.props.portfolio = props.portfolio;
  }

  public static create(props: ResumeProps) {
    if (props.firstName === null || props.firstName === undefined) {
      throw new Error("Обязательное поле");
    } else if (props.lastName === null || props.lastName === undefined) {
      throw new Error("Обязательное поле");
    } else if (props.phone === null || props.phone === undefined) {
      throw new Error("Обязательное поле");
    } else if (props.education === null || props.education === undefined) {
      throw new Error("Обязательное поле");
    } else if (props.direction === null || props.direction === undefined) {
      throw new Error("Обязательное поле");
    } else if (props.bornDate === null || props.bornDate === undefined) {
      throw new Error("Обязательное поле");
    } else {
      return new Resume(props);
    }
  }
}
//

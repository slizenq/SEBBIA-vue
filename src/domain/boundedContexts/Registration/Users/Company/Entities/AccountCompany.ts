import { Entity } from "~/src/domain/Templates/Entity";
import type { Title } from "../ValueObjects/Titile";
import type { FoundationDate } from "../ValueObjects/FoundationDate";
import type { AboutCompany } from "../ValueObjects/AboutCompany";
import type { TypeCompany } from "../ValueObjects/TypeCompany";
import type { Contracts } from "../ValueObjects/Contracts";
import { Photo } from "../ValueObjects/Photo";
import type { ExpectedSkills } from "../ValueObjects/ExpectedSkills";
import type { AboutPractice } from "../ValueObjects/AboutPracrice";
import type { AboutProjects } from "../ValueObjects/AboutProjects";
import type { Directions } from "../ValueObjects/Directions";

export interface AccountCompanyProps {
  title: Title;
  foundationDate?: FoundationDate;
  aboutCompany?: AboutCompany;
  login: Login;
  password: Password;
  typeCompany: TypeCompany;
  location: Location;
  contracts?: Contracts;
  photo?: Photo;
  expectedSkills?: ExpectedSkills;
  aboutPractice?: AboutPractice;
  directions?: Directions;
  aboutProjects?: AboutProjects;
}

export class AccountCompany extends Entity<AccountCompanyProps> {
  private constructor(props: AccountCompanyProps) {
    super(props);
    this.props.title = props.title;
    this.props.foundationDate = props.foundationDate;
    this.props.aboutCompany = props.aboutCompany;
    this.props.login = props.login;
    this.props.password = props.password;
    this.props.typeCompany = props.typeCompany;
    this.props.location = props.location;
    this.props.contracts = props.contracts;
    this.props.photo = props.photo;
    this.props.expectedSkills = props.expectedSkills;
    this.props.aboutPractice = props.aboutPractice;
    this.props.directions = props.directions;
    this.props.aboutProjects = props.aboutProjects;
  }
  public static create(props: AccountCompanyProps) {
    if (props.title === null || props.title === undefined) {
      throw new Error("Обязательное поле");
    } else if (props.login === null || props.login === undefined) {
      throw new Error("Обязательное поле");
    } else if (props.password === null || props.password === undefined) {
      throw new Error("Обязательное поле");
    } else if (props.typeCompany === null || props.typeCompany === undefined) {
      throw new Error("Обязательное поле");
    } else if (props.location === null || props.location === undefined) {
      throw new Error("Обязательное поле");
    } else {
      return new AccountCompany(props);
    }
  }
}

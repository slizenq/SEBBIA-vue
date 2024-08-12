import { Entity } from "~/src/domain/Templates/Entity";
import type { Title } from "../ValueObjects/Titile";
import type { FoundationDate } from "../ValueObjects/FoundationDate";
import type { AboutCompany } from "../ValueObjects/AboutCompany";
import type { TypeCompany } from "../ValueObjects/TypeCompany";
import type { Contracts } from "../ValueObjects/Contracts";

export interface AccountCompanyInfoProps {
  title: Title;
  foundationDate?: FoundationDate;
  aboutCompany?: AboutCompany;
  typeCompany: TypeCompany;
  location: Location;
  contracts?: Contracts;
}

export class AccountCompanyInfo extends Entity<AccountCompanyInfoProps> {
  private constructor(props: AccountCompanyInfoProps) {
    super(props);
    this.props.title = props.title;
    this.props.foundationDate = props.foundationDate;
    this.props.aboutCompany = props.aboutCompany;
    this.props.typeCompany = props.typeCompany;
    this.props.location = props.location;
    this.props.contracts = props.contracts;
  }
  public static create(props: AccountCompanyInfoProps) {
    if (props.title === null || props.title === undefined) {
      throw new Error("Обязательное поле");
    } else if (props.typeCompany === null || props.typeCompany === undefined) {
      throw new Error("Обязательное поле");
    } else if (props.location === null || props.location === undefined) {
      throw new Error("Обязательное поле");
    } else {
      return new AccountCompanyInfo(props);
    }
  }
}

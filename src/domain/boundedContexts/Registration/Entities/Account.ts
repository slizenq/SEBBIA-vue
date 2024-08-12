import { Entity } from "~/src/domain/Templates/Entity";
import type { Login } from "~/src/domain/boundedContexts/Registration/ValueObjects/Login";
import type { Password } from "~/src/domain/boundedContexts/Registration/ValueObjects/Password";

export interface AccountCompanyRegProps {
  login: Login;
  password: Password;
}

export class AccountCompanyReg extends Entity<AccountCompanyRegProps> {
  private constructor(props: AccountCompanyRegProps) {
    super(props);
    this.props.login = props.login;
    this.props.password = props.password;
  }
  public static create(props: AccountCompanyRegProps) {
    if (props.login === null || props.login === undefined) {
      throw new Error("Обязательное поле");
    } else if (props.login === null || props.password === undefined) {
      throw new Error("Обязательное поле");
    } else {
      return new AccountCompanyReg(props);
    }
  }
}

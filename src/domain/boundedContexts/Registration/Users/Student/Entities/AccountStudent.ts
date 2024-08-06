import { Entity } from "~/src/domain/Templates/Entity";
import { Login } from "../../../ValueObjects/Login";
import { Password } from "../../../ValueObjects/Password";
import { FirstName } from "../ValueObjects/FirstName";
import { LastName } from "../ValueObjects/LastName";
import { BornDate } from "../ValueObjects/BornDate";
import { Education } from "../ValueObjects/Education";
import { Location } from "../ValueObjects/Location";

interface AccountStudentProps {
    login: Login;
    password: Password;
    firstName: FirstName;
    lastName: LastName;
    bornDate: BornDate;
    education: Education;
    location: Location;
}

export class AccountStudent extends Entity<AccountStudentProps> {
    private constructor(props: AccountStudentProps) {
        super(props);
    }

    public static create(
        login: Login,
        password: Password,
        firstName: FirstName,
        lastName: LastName,
        bornDate: BornDate,
        education: Education,
        location: Location
    ): AccountStudent {
        return new AccountStudent({
            login,
            password,
            firstName,
            lastName,
            bornDate,
            education,
            location,
        });
    }

    get login(): Login {
        return this.props.login;
    }

    get password(): Password {
        return this.props.password;
    }

    get firstName(): FirstName {
        return this.props.firstName;
    }

    get lastName(): LastName {
        return this.props.lastName;
    }

    get bornDate(): BornDate {
        return this.props.bornDate;
    }

    get education(): Education {
        return this.props.education;
    }

    get location(): Location {
        return this.props.location;
    }
}

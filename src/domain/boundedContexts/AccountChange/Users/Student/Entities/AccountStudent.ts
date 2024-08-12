import { Entity } from "~/src/domain/Templates/Entity";
import { FirstName } from "../ValueObjects/FirstName";
import { LastName } from "../ValueObjects/LastName";
import { BornDate } from "../ValueObjects/BornDate";
import { Education } from "../ValueObjects/Education";
import { Location } from "../ValueObjects/Location";

interface AccountStudentProps {
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
    firstName: FirstName,
    lastName: LastName,
    bornDate: BornDate,
    education: Education,
    location: Location
  ): AccountStudent {
    return new AccountStudent({
      firstName,
      lastName,
      bornDate,
      education,
      location,
    });
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

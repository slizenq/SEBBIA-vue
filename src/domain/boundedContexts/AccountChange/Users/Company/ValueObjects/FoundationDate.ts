import { ValueObject } from "~/src/domain/Templates/ValueObject";

interface IFoundationDate {
  value: number;
}

export class FoundationDate extends ValueObject<IFoundationDate> {
  private constructor(props: IFoundationDate) {
    super(props);
  }

  public static create(foundationDate: string): FoundationDate {
    const foundationDateTimeStamp = new Date(foundationDate).getTime();
    const dateRightNowTimeStamp = new Date().getTime();

    if (foundationDateTimeStamp >= dateRightNowTimeStamp) {
      throw new Error("Компания не может иметь такую дату основания");
    } else {
      return new FoundationDate({ value: foundationDateTimeStamp });
    }
  }
}

import { ValueObject } from "~/src/domain/Templates/ValueObject";

interface IStatus {
  value: number;
}

export class Status extends ValueObject<IStatus> {
  private constructor(props: IStatus) {
    super(props);
  }

  public static create(status: number): Status {
    if (status === 0 || status === 1 || status === 2 || status === 3) {
      return new Status({ value: status });
    } else {
      throw new Error("Статус должен принимать значение от 0 до 3");
    }
  }
}

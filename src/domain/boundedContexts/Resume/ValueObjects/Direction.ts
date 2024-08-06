import { ValueObject } from "~/src/domain/Templates/ValueObject";

interface IDirection {
  value: string;
}

export class Direction extends ValueObject<IDirection> {
  private constructor(props: IDirection) {
    super(props);
  }
  public static create(direction: string): Direction {
    if (direction === undefined || direction === null) {
      throw new Error("Пустое значение для специальности");
    } else {
      return new Direction({ value: direction });
    }
  }
}

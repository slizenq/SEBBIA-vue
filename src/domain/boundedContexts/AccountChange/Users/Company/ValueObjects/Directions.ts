import { ValueObject } from "~/src/domain/Templates/ValueObject";

interface IDirections {
  value: string[];
}

export class Directions extends ValueObject<IDirections> {
  private constructor(props: IDirections) {
    super(props);
  }

  public static create(directions: string[]): Directions {
    return new Directions({ value: directions });
  }
}

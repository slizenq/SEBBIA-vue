import { ValueObject } from "~/src/domain/Templates/ValueObject";
import { Contract } from "./Contract";

interface IContracts {
  value: Contract[];
}

export class Contracts extends ValueObject<IContracts> {
  private constructor(props: IContracts) {
    super(props);
  }

  public static create(contracts: Contract[]): Contracts {
    return new Contracts({ value: contracts });
  }
}

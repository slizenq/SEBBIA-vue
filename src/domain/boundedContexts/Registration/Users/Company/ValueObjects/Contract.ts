import { ValueObject } from "~/src/domain/Templates/ValueObject";

interface IContract {
  value: Uint8Array;
}

export class Contract extends ValueObject<IContract> {
  private constructor(props: IContract) {
    super(props);
  }
  public static create(contract: Uint8Array): Contract {
    return new Contract({ value: contract });
  }
}

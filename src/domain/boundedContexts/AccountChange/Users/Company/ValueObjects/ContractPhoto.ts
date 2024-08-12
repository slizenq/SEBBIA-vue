import { ValueObject } from "~/src/domain/Templates/ValueObject";

interface IContractPhoto {
  value: Uint8Array;
}

export class ContractPhoto extends ValueObject<IContractPhoto> {
  private constructor(props: IContractPhoto) {
    super(props);
  }
  public static create(contractPhoto: Uint8Array): ContractPhoto {
    return new ContractPhoto({ value: contractPhoto });
  }
}

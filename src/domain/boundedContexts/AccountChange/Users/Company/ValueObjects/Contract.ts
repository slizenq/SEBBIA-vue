import { ValueObject } from "~/src/domain/Templates/ValueObject";
import { ContractPhoto } from "./ContractPhoto";

interface IContract {
  value: ContractPhoto;
  educationId: string;
}

export class Contract extends ValueObject<IContract> {
  private constructor(props: IContract) {
    super(props);
  }
  public static create(contract: ContractPhoto, education: string): Contract {
    return new Contract({ value: contract, educationId: education });
  }
}

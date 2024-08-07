import { ValueObject } from "~/src/domain/Templates/ValueObject";
import { v4 as uuidv4, validate as uuidValidate } from "uuid";

interface IUuidProps {
  value: string;
}

export class ReqestId extends ValueObject<IUuidProps> {
  private constructor(props: IUuidProps) {
    super(props);
  }

  public static create(uuidValue: string): ReqestId {
    if (!uuidValidate(uuidValue)) {
      throw new Error("Неверный формат UUID.");
    } else {
      return new ReqestId({ value: uuidValue });
    }
  }
}

import { ValueObject } from "~/src/domain/Templates/ValueObject";
import { v4 as uuidv4, validate as uuidValidate } from "uuid";

interface ReqestIdProps {
  value: string;
}

export class ReqestId extends ValueObject<ReqestIdProps> {
  private constructor(props: ReqestIdProps) {
    super(props);
  }

  public static create(reqestId: string): ReqestId {
    if (!reqestId) {
      reqestId = uuidv4(); // Генерация нового UUID, если не предоставлен
    }

    if (!uuidValidate(reqestId) && reqestId) {
      throw new Error("Неверный формат UUID.");
    } else {
      return new ReqestId({ value: reqestId });
    }
  }
}

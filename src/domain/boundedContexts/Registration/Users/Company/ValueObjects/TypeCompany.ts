import { ValueObject } from "~/src/domain/Templates/ValueObject";

interface ITypeCompany {
  value: string;
}

export class TypeCompany extends ValueObject<ITypeCompany> {
  private constructor(props: ITypeCompany) {
    super(props);
  }

  public static create(typeCompany: string): TypeCompany {
    if (typeCompany === null || typeCompany === undefined) {
      throw new Error("Тип компании обязательное поле");
    } else {
      return new TypeCompany({ value: typeCompany });
    }
  }
}

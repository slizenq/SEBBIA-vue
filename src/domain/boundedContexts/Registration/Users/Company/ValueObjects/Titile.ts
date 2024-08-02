import { ValueObject } from "~/src/domain/Templates/ValueObject";

interface ITitle {
  value: string;
}

export class Title extends ValueObject<ITitle> {
  private constructor(props: ITitle) {
    super(props);
  }

  public static create(title: string): Title {
    const titleMoneyRegex = /[€$£¥₽₹¢₩₪฿₫₭₦₱₲₴₸₮₯₠₡₣₤]/;
    let titleKirilitsaRegex = /\b[a-zA-Z]+\b/;

    if (title.length <= 1) {
      throw new Error("Название компании слишком короткое");
    } else if (title.length > 100) {
      throw new Error("Название компании слишком длинное");
    } else if (title.match(titleMoneyRegex)) {
      throw new Error("Название компании не должно содержать денежных знаков");
    } else if (title.match(titleKirilitsaRegex)) {
      throw new Error(
        "Название компании должно быть написано только с использованием киррилицы"
      );
    } else {
      return new Title({ value: title });
    }
  }
}

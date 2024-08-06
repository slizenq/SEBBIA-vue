import { ValueObject } from "~/src/domain/Templates/ValueObject";

interface IPortfolio {
  value: string;
}

export class Portfolio extends ValueObject<IPortfolio> {
  private constructor(props: IPortfolio) {
    super(props);
  }

  public static create(portfolio: string): Portfolio {
    const phoneRegex =
      /https?:\/\/(?:[a-zA-Z]|[0-9]|[$-_@.&+]|[!*\\(\\),]|(?:%[0-9a-fA-F][0-9a-fA-F]))+/;
    if (portfolio.length == 0) {
      return new Portfolio({ value: portfolio });
    } else {
      if (!portfolio.match(phoneRegex)) {
        throw new Error("Некорректный формат ссылки");
      } else {
        return new Portfolio({ value: portfolio });
      }
    }
  }
}

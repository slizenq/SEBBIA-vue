import { ValueObject } from "~/src/domain/Templates/ValueObject";

interface UPhoneNumber {
  value: string;
}

export class PhoneNumber extends ValueObject<UPhoneNumber> {
  private constructor(props: UPhoneNumber) {
    super(props);
  }

  public static create(phone: string): PhoneNumber {
    const phoneNumberRegex = /^\d+$/;

    // Проверка на корректный формат телефонного номера

    if (!phone.match(phoneNumberRegex)) {
      throw new Error("Некорректный формат телефонного номера");
    } else if (phone.length <= 8 || phone.length < 11) {
      throw new Error("Некорректный размер номера телефона");
    } else {
      return new PhoneNumber({ value: phone });
    }
  }
}

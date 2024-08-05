import { ValueObject } from "./ValueObject";

interface IBornDate {
    value: number;
}

class BornDate extends ValueObject<IBornDate> {
    private constructor(props: IBornDate) {
        super(props);
    }

    public static create(bornDate: number): BornDate {
        const minDate = new Date("1900-01-01").getTime();
        const currentDate = Date.now();

        if (bornDate < minDate || bornDate > currentDate) {
            throw new Error(
                "Дата рождения должна быть между 1900 годом и текущей датой."
            );
        } else {
            return new BornDate({ value: bornDate });
        }
    }
}

export { BornDate };

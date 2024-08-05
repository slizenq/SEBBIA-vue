import { ValueObject } from "./ValueObject";

interface IEducation {
    value: string;
}

export class Education extends ValueObject<IEducation> {
    private constructor(props: IEducation) {
        super(props);
    }
    public static create(education: string): Education {
        if (
            education === undefined ||
            education === null ||
            education.length != 0
        ) {
            throw new Error("Пустое значение для учебного заведения");
        } else {
            return new Education({ value: education });
        }
    }
}

//

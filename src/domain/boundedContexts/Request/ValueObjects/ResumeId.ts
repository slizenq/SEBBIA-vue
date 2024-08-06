import { ValueObject } from "~/src/domain/Templates/ValueObject";

interface IResumeIdProps {
    value: string;
}

export class ResumeId extends ValueObject<IResumeIdProps> {
    private constructor(props: IResumeIdProps) {
        super(props);
    }

    public static create(resumeId: string): ResumeId {
        if (!resumeId || resumeId.trim().length === 0) {
            throw new Error("ResumeId не может быть пустым.");
        }

        return new ResumeId({ value: resumeId });
    }
}

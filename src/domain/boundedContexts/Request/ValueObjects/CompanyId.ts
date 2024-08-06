import { ValueObject } from "~/src/domain/Templates/ValueObject";

interface ICompanyIdProps {
    value: string;
}

export class CompanyId extends ValueObject<ICompanyIdProps> {
    private constructor(props: ICompanyIdProps) {
        super(props);
    }

    public static create(companyId: string): CompanyId {
        if (!companyId || companyId.trim().length === 0) {
            throw new Error("CompanyId не может быть пустым.");
        }

        return new CompanyId({ value: companyId });
    }
}

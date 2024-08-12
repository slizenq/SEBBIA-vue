import { ValueObject } from "~/src/domain/Templates/ValueObject";

interface IUUID {
    value: string;
}

export class UUID extends ValueObject<IUUID> {
    private constructor(props: IUUID) {
        super(props);
    }

    public static create(uuid: string): UUID {
        const uuidRegex =
            /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
        if (!uuid.match(uuidRegex)) {
            throw new Error("Недопустимый формат UUID.");
        } else {
            return new UUID({ value: uuid });
        }
    }
}

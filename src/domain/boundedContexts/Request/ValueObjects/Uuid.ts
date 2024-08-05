import { ValueObject } from "./ValueObject";
import { v4 as uuidv4, validate as uuidValidate } from "uuid";

interface IUuidProps {
    value: string;
}

class Uuid extends ValueObject<IUuidProps> {
    private constructor(props: IUuidProps) {
        super(props);
    }

    public static create(uuid?: string): Uuid {
        if (!uuid) {
            uuid = uuidv4(); // Генерация нового UUID, если не предоставлен
        }

        if (!uuidValidate(uuid)) {
            throw new Error("Неверный формат UUID.");
        }

        return new Uuid({ value: uuid });
    }
}

export { Uuid };

import { ValueObject } from "~/src/domain/Templates/ValueObject";

interface ILocation {
    value: string;
}

export class Location extends ValueObject<ILocation> {
    private constructor(props: ILocation) {
        super(props);
    }

    public static create(location: string): Location {
        if (!location || location.trim().length === 0) {
            throw new Error("Необходимо выбрать местоположение.");
        }

        return new Location({ value: location });
    }
}

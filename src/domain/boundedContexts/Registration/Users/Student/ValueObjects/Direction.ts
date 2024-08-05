import { ValueObject } from "./ValueObject";


interface IDirection {
    value: string
}

class Direction extends ValueObject<IDirection> {

    private constructor (props: IDirection) {
        super(props);
    }
    public static create (direction: string) : Direction {
        
        if (direction === undefined || direction === null || direction.length > 50) {
            throw new Error('Пустое или слишком длинное значение для специальности');
        } else {
            return new Direction({value : direction});
        }
    }
}

export {Direction};
// 
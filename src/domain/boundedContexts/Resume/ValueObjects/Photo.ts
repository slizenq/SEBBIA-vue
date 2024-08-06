import { ValueObject } from "~/src/domain/Templates/ValueObject";

interface IPhoto {
  value: Uint8Array;
}

export class Photo extends ValueObject<IPhoto> {
  private constructor(props: IPhoto) {
    super(props);
  }
  public static create(photo: Uint8Array): Photo {
    return new Photo({ value: photo });
  }
}

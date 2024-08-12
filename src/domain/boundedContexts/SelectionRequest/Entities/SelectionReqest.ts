import { Entity } from "~/src/domain/Templates/Entity";
import type { Status } from "../ValueObjects/Status";
import type { ReqestId } from "../ValueObjects/ReqestId";

export interface SelectionReqestProps {
  reqestId: ReqestId;
  status: Status;
}

export class SelectionReqest extends Entity<SelectionReqestProps> {
  private constructor(props: SelectionReqestProps) {
    super(props);
    this.props.status = props.status;
    this.props.reqestId = props.reqestId;
  }
  public static create(props: SelectionReqestProps) {
    if (props.status === null || props.status === undefined) {
      throw new Error("Обязательное поле");
    } else if (props.reqestId === null || props.reqestId === undefined) {
      throw new Error("Обязательное поле");
    } else {
      return new SelectionReqest(props);
    }
  }
}

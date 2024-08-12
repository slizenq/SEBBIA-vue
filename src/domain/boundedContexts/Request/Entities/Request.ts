import { Entity } from "~/src/domain/Templates/Entity";
import type { Status } from "../ValueObjects/Status";
import type { ResumeProps } from "../../Resume/Entities/Resume";
import type { ReqestId } from "../ValueObjects/ReqestId";
import type { ResumeId } from "../ValueObjects/ResumeId";
import type { CompanyId } from "../ValueObjects/CompanyId";

export interface SelectionReqestProps {
  reqestId: ReqestId;
  resumeId: ResumeId;
  companyId: CompanyId;
  status: Status;
}

export class SelectionReqest extends Entity<SelectionReqestProps> {
  private constructor(props: SelectionReqestProps) {
    super(props);
    this.props.reqestId = props.reqestId;
    this.props.resumeId = props.resumeId;
    this.props.companyId = props.companyId;
    this.props.status = props.status;
  }
  public static create(props: SelectionReqestProps) {
    if (props.reqestId === null || props.reqestId === undefined) {
      throw new Error("Обязательное поле");
    } else if (props.resumeId === null || props.resumeId === undefined) {
      throw new Error("Обязательное поле");
    } else if (props.companyId === null || props.companyId === undefined) {
      throw new Error("Обязательное поле");
    } else if (props.status === null || props.status === undefined) {
      throw new Error("Обязательное поле");
    } else {
      return new SelectionReqest(props);
    }
  }
}

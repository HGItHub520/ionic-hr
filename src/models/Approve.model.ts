import { ApproveState } from "./ApproveState.model";

export class Approve {
    id:number;
    type:string;
    steps: ApproveState[];
    current: number;
}
import { Units } from "../../../models/unit";
export declare class CreateCommandRequest {
    type: string;
    sendTime: number;
    units: Units;
    world: string;
    done: boolean;
}

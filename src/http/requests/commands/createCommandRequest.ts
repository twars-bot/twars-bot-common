import { Expose, Type } from "class-transformer";
import { Units } from "../../../models/unit";

export class CreateCommandRequest {
    @Expose()
    type: string;

    @Expose()
    sendTime: number;

    @Expose()
    @Type(() => Units)
    units: Units;

    @Expose()
    world: string;

    @Expose()
    done: boolean;
}
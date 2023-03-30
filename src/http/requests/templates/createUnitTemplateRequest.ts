import { Expose, Type } from "class-transformer";
import { Units } from "../../../models/unit";

export class CreateUnitTemplateRequest {
    @Expose()
    public name: string;

    @Expose()
    @Type(() => Units)
    public units: Units;
}
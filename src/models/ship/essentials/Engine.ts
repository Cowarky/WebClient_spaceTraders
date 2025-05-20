import type { IRequirement } from "../extras/Requirement";

export interface IEngine{
    condition: number,
    description: string,
    integrity: number,
    name: string,
    quality: number,
    requirments: IRequirement,
    speed: number,
    symbol: string
}

export default {
    condition: 0,
    description: "",
    name: "",
    quality: 0,
    speed: 0,
    symbol: ""
}
import type { IRequirement } from "../extras/Requirement";

export interface IMount {
    description: string,
    name: string,
    requirements: IRequirement,
    strength : number,
    symbol: string
}
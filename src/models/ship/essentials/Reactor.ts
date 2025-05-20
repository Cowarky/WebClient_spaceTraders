import type { IRequirement } from "../extras/Requirement";

export interface IReactor{
    condition: number,
    description: string,
    integrity: number,
    name: string,
    powerOutput: number,
    quality: number,
    requirements: IRequirement,
    symbol: string,
    
}
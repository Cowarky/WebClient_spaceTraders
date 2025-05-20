import type { IRequirement } from "../extras/Requirement";

export interface IModule {
    capacity: number,
    description: string,
    name: string,
    requirements: IRequirement & {
        slots: number
    },
    symbol: string
}
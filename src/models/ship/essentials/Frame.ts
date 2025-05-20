import type { IRequirement } from "../extras/Requirement"

export interface IFrame {
    condition: number,
    description: string,
    fuelCapacity: number,
    integrity: number,
    moduleSlots: number,
    mountingPoints: number,
    name: string,
    quality: number,
    requirements: IRequirement,
    symbol: string
}
import type { IDestination } from "./Destination";

export interface IRoute {
    arrival: Date,
    departureTime: Date,
    destination: IDestination,
    origin: IDestination

}
import type { IRoute } from "../extras/Route"

export interface INav {
    flightMode: string,
    route: IRoute,
    status: string,
    systemSymbol: string,
    waypointSymbol: string
}

export default {
    flightMode: "",
    status: "",
    systemSymbol: "",
    waypointSymbol: ""
}

type Status = "DOCKED" | "IN_TRANSIT" | "IN_ORBIT";
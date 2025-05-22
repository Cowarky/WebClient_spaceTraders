import type {IWaypoint} from "../waypoint/Waypoint"

export interface ISystem {
    name: string,
    constellation: string,
    symbol: string,
    sectorSymbol: string,
    type: string,
    x: number,
    y: number,
    waypoints: IWaypoint[]
}

export default {
    name: "",
    constellation: "",
    symbol: "",
    sectorSymbol: "",
    type: "",
    x: 0,
    y: 0,
    waypoints: [{
        symbol: "",
        type: "",
        x: 0,
        y: 0
    }]
}
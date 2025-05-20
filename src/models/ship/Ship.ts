import type { ICargo } from "./essentials/Cargo"
import type { ICooldown } from "./essentials/Cooldown"
import type { ICrew } from "./essentials/Crew"
import type { IEngine } from "./essentials/Engine"
import type { IFrame } from "./essentials/Frame"
import type { IFuel } from "./essentials/Fuel"
import type { IModule } from "./essentials/Module"
import type { IMount } from "./essentials/Mount"
import type { INav } from "./essentials/Nav"
import type { IReactor } from "./essentials/Reactor"
import type { IRegistration } from "./essentials/Registration"

export interface IShip {
    cargo: ICargo,
    cooldown: ICooldown,
    crew: ICrew,
    engine: IEngine,
    frame: IFrame,
    fuel: IFuel,
    modules: IModule[],
    mounts: IMount[],
    nav: INav,
    reactor: IReactor,
    registration: IRegistration,
    symbol: string

}


export default [{
    cargo: {
        capacity: 0,
        units: 0,
        inventory: []
    },
    cooldown: {
        remainingSeconds: 0,
        shipSymbol: '',
        totalSeconds: 0
    },
    crew: {
        capacity: 0,
        current: 0,
        morale: 0,
        required: 0,
        rotation: "",
        wages: 0
    },
    engine: {
        condition: 0,
        description: "",
        name: "",
        quality: 0,
        requirements: {
            power: 0,
            crew: 0
        },
        speed: 0,
        symbol: ""
    },
    frame: {
        condition: 0,
        description: "",
        fuelCapacity: 0,
        integrity: 0,
        moduleSlots: 0,
        mountingPoints: 0,
        name: "",
        quality: 0,
        requirements: {
            power: 0,
            crew: 0
        },
        symbol: ""
    },
    fuel: {
        capacity: 0,
        consumed: {
            amount: 0,
            timestamp: Date
        },
        current: 0
    },
    modules: [{
        capacity: 0,
        description: "",
        name: "",
        requirements: {
            power: 0,
            crew: 0,
            slots: 0
        },
        symbol: ""
    }],
    mounts: [{
        description: "",
        name: "",
        requirements: {
            power: 0,
            crew: 0
        },
        strength: 0,
        symbol: ""
    }],
    nav: {
        flightMode: "",
        route: {
            arrival: new Date(),
            departureTime: new Date(),
            destination: {
                symbol: "",
                type: "",
                systemSymbol: "",
                coordinates: {
                    x: 0,
                    y: 0
                },
            },
            origin: {
                symbol: "",
                type: "",
                systemSymbol: "",
                coordinates: {
                    x: 0,
                    y: 0
                },
            },

        },
        status: "",
        systemSymbol: "",
        waypointSymbol: ""
    },
    reactor: {
        condition: 0,
        description: "",
        integrity: 0,
        name: "",
        powerOutput: 0,
        quality: 0,
        requirements: {
            power: 0,
            crew: 0
        },
        symbol: "",
    },
    registration: {
        factionSymbol: "",
        name: "",
        symbol: ""
    }
}]

export interface IWaypoint {
    symbol: string,
    type: string,
    x: number,
    y: number,
    traits: [
        {
            symbol: string,
            name: string,
            description: string
        }
    ]
}

export default [{
    symbol: "",
    type: "",
    x: 0,
    y: 0,
    traits: [
        {
            symbol: "",
            name: "",
            description: ""
        }
    ]
}]
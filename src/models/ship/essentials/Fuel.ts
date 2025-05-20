export interface IFuel {
    capacity: number,
    consumed: {
        amount: number,
        timestamp: Date
    },
    current: number
}

export default {
    capacity: 0,
        consumed: {
            amount: 0,
            timestamp: Date
        },
        current: 0
}
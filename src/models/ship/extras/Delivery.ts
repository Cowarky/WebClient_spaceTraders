export interface IDeliver {
    tradeSymbol: string;
    destinationSymbol: string;
    unitsRequired: number;
    unitsFulfilled: number;
}

export default [{
    tradeSymbol: "",
    destinationSymbol: "",
    unitsRequired: 0,
    unitsFulfilled: 0
}]
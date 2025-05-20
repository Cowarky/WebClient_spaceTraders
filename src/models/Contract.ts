import type {ITerms} from './ship/essentials/contracts/Terms'

interface IContract {
    id: number,
    factionSymbol: string,
    type: "PROCUREMENT",
    terms: ITerms
}

type ContractType = "PROCUREMENT" | "TRANSPORT" | "SHUTTLE";

export default {
    id: 0, // Default value
    factionSymbol: "", // You can set this to an appropriate value
    type: "PROCUREMENT", // Fixed value as per the interface
    terms: {
        deadline: "", // You can set this to an appropriate date-time string
        payment: {
            onAccepted: 0, // Default value
            onFulfilled: 0 // Default value
        },
        deliver: [{
            tradeSymbol: "", // You can set this to an appropriate value
            destinationSymbol: "", // You can set this to an appropriate value
            unitsRequired: 0, // Default value
            unitsFulfilled: 0 // Default value
        }],
        accepted: false, // Default value
        fulfilled: false, // Default value
        deadlineToAccept: "" // You can set this to an appropriate date-time string
    }
};
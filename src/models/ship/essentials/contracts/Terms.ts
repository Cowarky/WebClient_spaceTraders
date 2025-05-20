import type {IPayment}  from '../../extras/Payment';
import type {IDeliver} from '../../extras/Delivery';

export interface ITerms {
    deadline: string;
    payment: IPayment;
    deliver: IDeliver[];
    accepted: boolean;
    fulfilled: boolean;
    deadlineToAccept: string;
}

export default {
    deadline: "",
    accepted: false,
    fulfilled: false,
    deadlineToAccept: ""
    // payment: {
    //     onAccepted: 0,
    //     onFulfilled: 0
    // },
    // deliver: [{
    //     tradeSymbol: "",
    //     destrinationSymbol: "",
    //     unitsRequired: 0,
    //     unitsFulfilled: 0
    // }]
}

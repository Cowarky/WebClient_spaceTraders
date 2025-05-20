<template>
    <ul>

        <ElementWithProps :prop = "titles.contract" />
        
        <ul>
            
            <ElementsWithProps :packedProps = "props.contract"/>
        </ul>
        <ElementWithProps :prop = "titles.terms" />
    <ul>
        
        <ElementsWithProps :packedProps = "props.term"/>
    </ul>
    <ElementWithProps :prop = "titles.payment" />
    <ul>

        <ElementsWithProps :packedProps = "props.payment"/>
    </ul>
    <li v-for="deliver in props.delivery" :key="deliver">
        <ElementsWithProps :packedProps = "deliver" />
    </li>
</ul>
    
</template>
<script setup>
import ElementsWithProps from '../../common/ElementsWithProps.vue';
import ElementWithProps from '../../common/ElementWithProps.vue';
import IContract from '../../../models/Contract';
import ITerms from '../../../models/ship/essentials/contracts/Terms'
import IPayment from '../../../models/ship/extras/Payment'
import IDelivery from '../../../models/ship/extras/Delivery'

const props = defineProps(
    {
    contract: {
        type: IContract
    },
    term: {
        type: ITerms
    },
    payment: {
        type: IPayment
    },
    delivery: {
        type: Array(IDelivery)
    }
}
)

const titles = {
  contract: "contract",
  terms: "terms",
  payment: "payment"
}

</script>
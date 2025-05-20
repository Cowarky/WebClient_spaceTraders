<template>
    <ul v-for="contract in props.contracts" :key="contract">
        <Contract 
        :contract = "_contract(contract)" 
        :term = "_terms(contract.terms)"
        :payment = "_payment(contract.terms.payment)"
        :delivery = "_delivery(contract.terms.deliver)"
        />
        
    </ul>
</template>

<script setup>
import ElementWithProps from '../../common/ElementWithProps.vue';
import ElementsWithProps from '../../common/ElementsWithProps.vue';
import Contract from './Contract.vue';
import IContract from '../../../models/Contract';

const props = defineProps({
    contracts: Array,
    required: false
})

const _contract = (contract) => {
    return {
        id: contract.id, // Default value
        factionSymbol: contract.factionSymbol, // You can set this to an appropriate value
        type: contract.type,
        accepted: contract.accepted,
        fulfilled: contract.fulfilled, 
        deadlineToAccept: contract.deadlineToAccept 
    }
}
const _terms = (contract) => {
    return {
        deadline: contract.deadline,
        
    }
}

const _payment = (contract) => {
    return {
        onAccepted: contract.onAccepted,
        onFulfilled: contract.onFulfilled,
    }
}

const _delivery = (contract) => {
    return [{
        destinationSymbol: contract.destinationSymbol,
        tradeSymbol: contract.tradeSymbol,
        unitsRequired: contract.unitsRequired,
        unitsFulfilled: contract.unitsFulfilled
    }]
}
console.log(_delivery(props.contracts.terms.deliver[0]))
</script>
<!-- <template>
    <h1>
        Contracts
    </h1>
    <Contracts :contracts = "contracts"/>
</template>

<script setup>
import api from '../services/api';
import Handler from '../services/Handler';
import Contracts from '../components/essentials/contracts/Contracts.vue';
import Contract from '../models/Contract';

const contracts = Handler.retrieveData(import.meta.env.VITE_API_CONTRACTS_ENDPOINT, Contract)

</script> -->

<template>
    <div>
        <h1>Contracts</h1>
        <Contracts :contracts="contracts" />
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import api from '../services/api'
import Handler from '../services/Handler'
import Contracts from '../components/essentials/contracts/Contracts.vue'
import Contract from '../models/Contract'

const contracts = ref([])

const loadContracts = async () => {
    
    try {
        contracts.value = await Handler.retrieveData(
            import.meta.env.VITE_API_CONTRACTS_ENDPOINT, 
            Contract
        )
    } catch (err) {
        console.error('Error loading contracts:', err)
    }
}

onMounted(() => {
    loadContracts()
})

</script>
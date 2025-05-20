<template>
    <h1>
        Contracts
    </h1>
    <Contracts :contracts = "Handler.contract"/>
</template>

<script setup>
import api from '../services/api';
import Handler from '../services/Handler';
import Contracts from '../components/essentials/contracts/Contracts.vue';



</script>
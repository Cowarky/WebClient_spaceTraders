<template>
    <h1>
        My Fleet
    </h1>

    <Ships :ships = "handler.ship" /> 
</template>

<script setup>
import Ships from '../components/essentials/fleet/Ships.vue'
import shipHandler from '../services/shipHandler';
import handler from '../services/Handler'


</script>
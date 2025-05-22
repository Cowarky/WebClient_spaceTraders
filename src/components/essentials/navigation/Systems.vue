<template>
    <ul v-for="system in props.systems" :key="system">
        <!-- {{ system.waypoints }} -->
        <System 
        :system = "_system(system)" 
        :waypoint = "_waypoint(system.waypoints)"
        />
    </ul>
</template>

<script setup>
import ElementsWithProps from '../../common/ElementsWithProps.vue';
import System from './System.vue';

const props = defineProps({
    systems: Array,
    required: false
})

const _system = (system) => {
    return {
        name: system.name,
        constellation: system.constellation,
        symbol: system.symbol,
        sectorSymbol: system.sectorSymbol,
        type: system.type,
        x: system.x,
        y: system.y
    }

}
const _waypoint = (system) => {
    return [{
        // orbitals: [{symbol:"test"}],
        symbol: system.symbol,
        type: system.type,
        x: system.x,
        y: system.y
    }]
}


</script>
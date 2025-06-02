<template>
    <ul v-for="system in props.systems" :key="system">
        <System 
        :system = "_system(system)" 
        
        />
        <!-- :waypoint = "_waypoint(system)" -->
        <ul v-for="waypoint in system.waypoints" :key="waypoint">
            <ElementsWithProps :packedProps = "waypoint" /> 
        </ul>
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
        name: "name: " + system.name,
        constellation: "constellation: " +system.constellation,
        symbol: "symbol: " +system.symbol,
        sectorSymbol: "sectorSymbol: " +system.sectorSymbol,
        type: "type: " +system.type,
        x: "x: " +system.x,
        y: "y: " +system.y
    }

}

const _waypoint = ([system]) => {
    return [{
        // orbitals: [{symbol:"test"}],
        symbol: "symbol: " + system.symbol,
        type: "type: " + system.type,
        x: "x: " + system.x,
        y: "y: " + system.y
    }]
}


</script>
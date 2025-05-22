<template>
    <ElementsWithProps :packedProps = "props.system"/>
        <li v-for="waypoints in props.waypoint" :key="waypoints">        
        <ElementsWithProps :packedProps = "waypoints" />

    </li>
</template>

<script setup>
import ElementsWithProps from '../../common/ElementsWithProps.vue';
import ISystem from '../../../models/navigation/system/System';
import IWaypoint from '../../../models/navigation/waypoint/Waypoint'

const props = defineProps({
    system: {
        type: ISystem
    },
    waypoint: {
        type: IWaypoint
    }
})

</script>
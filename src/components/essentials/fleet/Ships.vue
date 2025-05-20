<template>
    <ul v-for="ship in props.ships" :key="ship">
        <ElementWithProps :prop = "ship.symbol"/>
        <Ship 
        :nav = "_navigation(ship)" 
        :crew = "_crew(ship.crew)" 
        :cargo = "_cargo(ship.cargo)" 
        :engine = "_engine(ship.engine)"
        :fuel = "_fuel(ship.fuel)"
        />
    </ul>
</template>

<script setup >
import Ship from './Ship.vue';
import ElementWithProps from '../../common/ElementWithProps.vue';

const props = defineProps({
    ships: {
        type: Array,
        required: false
    }
})

const _navigation = (ship) => {
    return {
        symbol: "symbol: "+ship.symbol,
        flightMode: "flight mode: "+ship.nav.flightMode,
        status: "status: "+ship.nav.status,
        systemSymbol: "system symbol: "+ship.nav.systemSymbol,
        waypointSymbol: "waypoint: "+ship.nav.waypointSymbol,
    }
}
const _crew = (ship) => {
    return {
        capacity: "capacity: "+ship.capacity,
        current: "current: "+ship.current,
        morale: "morale: "+ship.morale,
        required: "required: "+ship.required,
        rotation: "rotation: "+ship.rotation,
        wages: "wages: "+ship.wages,
    }
}

const _cargo = (ship) => {
    return {
        capacity: "capacity: "+ship.capacity,
        inventory: "inventory: "+ship.inventory,
        units: "units: "+ship.units
    }
}
const _engine = (ship) => {
    return {
        condition: "condition: "+ship.condition,
        description: "description: "+ship.description,
        integrity: "integrity: "+ship.integrity,
        name: "name: "+ship.name,
        requirements: "requirements: "+ship.requirements,
        quality: "quality: "+ship.quality,
        speed: "speed: "+ship.speed,
        symbol: "symbol: "+ship.symbol
    }
}
const _fuel = (ship) => {
    return {
        capacity: "capacity: "+ship.capacity,
        consumed: "consumed: "+ship.consumed,
        current: "current: "+ship.current
    }
}
</script>
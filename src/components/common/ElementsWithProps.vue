<template>
    <li>
                
        <div v-for="p in props.packedProps" :key="p"> 
            
            <ElementWithProps :prop="p" />
        </div>
    </li>
    </template>

<script setup>
import ElementWithProps from './ElementWithProps.vue';

const props = defineProps({
    packedProps: {
        type: Object,
        required: true
    }
});


</script>
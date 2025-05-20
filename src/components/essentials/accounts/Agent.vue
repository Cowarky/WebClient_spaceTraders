<template>
    <Id :accountId = "props.id" />
    <h3>
        {{ props.symbol }}
        <p>
            {{ props.headquarters }}
        </p>
    </h3>
    <h4>
        {{ props.faction }}
    </h4>
    <p>
        credits: {{ props.credits }}
    </p>
    
</template>

<script setup>
import Id from './Header.vue'
import Agent from '../../../models/Agent'

const { props } = defineProps({
  props: {
    type: Agent,
    required: true,
    // You can optionally validate the structure
    validator: (value) => {
      return (
        'id' in value &&
        'symbol' in value &&
        'headquarters' in value &&
        'faction' in value &&
        'credits' in value
      )
    }
  }
})
</script>


<style outscoped>
p{
    display: inline;
    font-weight: lighter;
    font-size: 0.6em;
}
</style>
<template>
    <ul>
      <ElementWithProps :prop = "titles.cargo" />
      <ul>

        <ElementsWithProps :packedProps = "props.cargo" />
      </ul>
      

        <ElementWithProps :prop = "titles.engine" />
        <ul>
        <ElementsWithProps :packedProps = "props.engine" />
      </ul>

      <ElementWithProps :prop = "titles.fuel" />
      <ul>

        <ElementsWithProps :packedProps = "props.fuel" />
      </ul>

      <ElementWithProps :prop = "titles.nav" />
      <ul>

        <ElementsWithProps :packedProps = "props.nav" />
      </ul>
    </ul>
</template>

<script setup>
import ElementsWithProps from '../../common/ElementsWithProps.vue';
import ElementWithProps from '../../common/ElementWithProps.vue'
import IEngine from '../../../models/ship/essentials/Engine';
import INav from '../../../models/ship/essentials/Nav'
import ICrew from '../../../models/ship/essentials/Crew'
import ICargo from '../../../models/ship/essentials/Cargo'
import IFuel from '../../../models/ship/essentials/Fuel';

const props = defineProps({
  nav: {
    type: INav
  },
  crew: {
    type: ICrew
  },
  cargo: {
    type: ICargo
  },
  engine: {
    type: IEngine
  },
  fuel: {
    type: IFuel
  }
})

const titles = {
  cargo: "Cargo",
  engine: "Engine",
  fuel: "Fuel",
  nav: "Nav"
}
</script>
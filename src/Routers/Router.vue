<script setup>
import Home from '../Routes/Home.vue';
import Fleet from '../Routes/Fleet.vue';
import Contracts from '../Routes/Contracts.vue';
import { ref , computed, onMounted} from 'vue';



let routes = {
  '/': Home,
  '/fleet': Fleet,
  '/contracts': Contracts
}

const currentPath = ref(window.location.hash)


window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
  let href = window.location.hash.slice(1)
  let links = document.querySelectorAll("a")
  let link = document.querySelector("a[href*='"+href+"']")
  links.forEach(a => {
    a.style.display = "inline"
  });
  toggleElement(link)
  
  
})

onMounted(() => {
    toggleElement(document.querySelector("a[href*='"+window.location.hash.slice(1)+"']"))
})

const toggleElement = (element) => {
    element.style.display = (element.style.display === "none") ? "inline" : "none";
}

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/'] || NotFound
})



</script>

<template>
<component :is="currentView" />
<a href="#/">Home</a> <br>
<a href="#/fleet">Fleet</a> <br>
<a href="#/contracts">Contracts</a>
</template>
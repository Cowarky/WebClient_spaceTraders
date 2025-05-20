<template>
  <Account :props = "agentProps" />

</template>

<script setup>
import { ref, onMounted } from 'vue'
import agentHandler from '../services/agentHandler'
import Account from '../components/essentials/accounts/Account.vue'
import API from '../services/api'
import Agent from '../models/Agent'
import handler from '../services/Handler'

let agent = {
  accountId: handler.agent.accountId,
  symbol: handler.agent.symbol,
  headquarters: handler.agent.headquarters,
  credits: handler.agent.credits,
  startingFaction: handler.agent.startingFaction 
}

let agentProps = {
  id: agent.accountId,
  symbol: agent.symbol,
  headquarters: agent.headquarters,
  faction: agent.startingFaction,
  credits: agent.credits,
}
</script>

<style scoped>

</style>
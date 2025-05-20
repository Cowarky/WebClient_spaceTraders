<template>
    <p>
        <i>
            Account ID: {{ accountId }}
        </i>
    </p>

</template>

<script setup>
defineProps(['accountId'])
</script>

<style scoped>
p{
    font-size: 0.7em;
}
</style>
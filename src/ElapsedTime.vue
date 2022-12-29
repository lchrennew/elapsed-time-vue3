<template>
    <auto-refresh :enabled="autoRefresh" :handler="tillNow">
        <slot :elapsed="elapsed"/>
    </auto-refresh>
</template>

<script setup>
import AutoRefresh from './AutoRefresh.vue';
import calculateElapsed from './calculate-elapsed.js';
import { computed, ref } from "vue";

const props = defineProps([ 'startedAt', 'stoppedAt', 'adjust' ])
const till = ref(props.stoppedAt || (new Date() - (props.adjust ?? 0)))
const elapsed = computed(() => calculateElapsed(props.startedAt, props.stoppedAt || till.value, !!props.stoppedAt))
const autoRefresh = computed(() => !props.stoppedAt)
const tillNow = () => till.value = new Date() - (props.adjust ?? 0)
</script>

<style scoped>

</style>

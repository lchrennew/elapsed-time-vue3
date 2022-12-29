<template>
    <slot/>
</template>

<script>
let registry = []

setInterval(() => {
    registry = registry.filter(({ enabled, handler }) => {
        enabled && handler?.()
        return enabled && handler
    })
}, 1000)
</script>

<script setup>
import { watch, onBeforeUnmount } from "vue";

const props = defineProps([ 'enabled', 'handler' ])
const entry = {
    enabled: !!props.enabled,
    handler: props.handler
}

watch(() => props.enabled, enabled => {
    entry.enabled = enabled
    enabled && registry.push(entry)
}, { immediate: true, flush: 'sync' })

onBeforeUnmount(() => entry.enabled = false)
</script>

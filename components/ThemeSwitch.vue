<template>
  $END$
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{ test: boolean }>(), {test: false});

const emit = defineEmits<{
  (e: 'change', id: number): void
}>();
</script>

<style scoped>

</style>

<script setup lang="ts">
const model = defineModel<string>();
</script>
<template>
	<input v-model="model" class="input-text-good" type="text"/>
</template>

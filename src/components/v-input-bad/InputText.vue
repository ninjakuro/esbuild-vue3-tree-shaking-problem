<script setup lang="ts">
const model = defineModel<string>({});
</script>
<template>
	<input v-model="model" class="input-text-bad" type="text"/>
</template>

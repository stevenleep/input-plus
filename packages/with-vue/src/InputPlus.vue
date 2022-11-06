<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
defineProps({
  value: {
    type: String,
    default: ''
  }
})
defineEmits(['update:value'])
</script>

<template>
    <div class="input-plus">
        <input type="text" v-model="value" />
    </div>
</template>
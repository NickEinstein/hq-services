<template>
  <div class="relative w-full" ref="dropdownRef">
    <button
      type="button"
      class="w-full flex items-center justify-between px-3 py-2 bg-white border rounded-lg focus:outline-none hover:border-gray-400 transition-colors"
      @click="toggleDropdown"
      :class="{ 'border-[#e82264]': isOpen }"
    >
      <span v-if="selectedItem" class="font-semibold text-gray-700">
        {{ selectedItem.name }}
      </span>
      <span v-else class="text-gray-400">{{ placeholder }}</span>
      <svg
        class="h-4 w-4 ml-2 text-gray-400 transition-transform"
        :class="{ 'rotate-180': isOpen }"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>
    <div
      v-if="isOpen"
      class="absolute z-10 mt-1 w-full bg-white border rounded-lg shadow-lg max-h-60 overflow-auto"
    >
      <div
        v-for="item in items"
        :key="item.id"
        @click="selectItem(item)"
        class="flex items-center gap-2 px-3 py-2 cursor-pointer hover:bg-gray-100 transition-colors"
        :class="{ 'bg-gray-50': selectedItem?.id === item.id }"
      >
        <span class="font-semibold text-gray-700">{{ item.name }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'

const props = defineProps({
  items: {
    type: Array,
    default: () => []
  },
  modelValue: {
    type: [String, Number],
    default: ''
  },
  placeholder: {
    type: String,
    default: 'Select'
  }
})

const emit = defineEmits(['update:modelValue', 'select'])

const isOpen = ref(false)
const dropdownRef = ref(null)

const selectedItem = computed(() => {
  return props.items.find((item) => item.id === props.modelValue)
})

function toggleDropdown() {
  isOpen.value = !isOpen.value
}

function selectItem(item) {
  emit('update:modelValue', item.id)
  emit('select', item)
  isOpen.value = false
}

function handleClickOutside(event) {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
    isOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped>
.rotate-180 {
  transform: rotate(180deg);
}
</style>

<template>
  <RouterLink v-bind="$attrs" :to="to" :class="computedClass" ref="linkRef">
    <slot />
  </RouterLink>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'

const props = defineProps({
  to: {
    type: [String, Object],
    required: true
  },
  class: {
    type: String,
    default: ''
  },
  activeClass: {
    type: String,
    default: ''
  },
  pendingClass: {
    type: String,
    default: ''
  }
})

const linkRef = ref(null)
const route = useRoute()

const computedClass = computed(() => {
  // Vue Router doesn't expose isPending, so we only check isActive
  const isActive = route.path === (typeof props.to === 'string' ? props.to : props.to.path)
  return [props.class, isActive && props.activeClass].filter(Boolean).join(' ')
})
</script>

<script>
export default {
  name: 'NavLink',
  inheritAttrs: false
}
</script>

<style scoped></style>

import { ref } from 'vue'

export function useToggleState() {
  const state = ref(false)

  function setState(bool: boolean) {
    state.value = bool
  }
  function toggleState(): void {
    state.value = !state.value
  }
  return {
    state,
    toggleState,
    setState,
  }
}

<template>
  {{ volume }}
</template>

<script lang="ts">
import { useStore } from '@/vuex';
import { computed } from 'vue';

export default {
  setup() {
    const store = useStore();

    return {
      song: computed(() => store.state.song),

      artists: computed(() => store.state.artists),

      playing: computed(() => store.state.playing),

      volume: computed(() => store.state.volume),
    };
  },
};
</script>

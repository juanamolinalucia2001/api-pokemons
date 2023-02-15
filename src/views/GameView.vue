<template>
  <div >

    <Playfield :pairs="6" />
    
  </div>
</template>

<script>
// @ is an alias to /src
import Playfield from '@/components/Playfield.vue'

export default {
  name: 'Game',
  components: {
    Playfield
  }
}
</script>
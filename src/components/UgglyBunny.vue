<script setup>
import { ref } from 'vue'
import { useAnimations, useGLTF } from '@tresjs/cientos'

const { scene: model, animations } = await useGLTF('models/ugly-bunny.gltf')

const { actions } = useAnimations(animations, model)
const currentAction = ref(actions.Greeting)
currentAction.value.play()
</script>

<template>
  <primitive :object="model" />
</template>

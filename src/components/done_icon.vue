<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 8 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :class="{ 'icon_rotated' : rotate }"
  >
    <path d="M14.5315 1.80937L5.63341 11.237L1.34814 7.19237"
          :fill="icon_color"
    />
  </svg>

</template>

<script>
    export default {
        props: {
            width: {
                type: [Number, String],
                default: 18
            },
            height: {
                type: [Number, String],
                default: 18
            },
            icon_color: {
                type: String,
                default: '#2B2D33'
            },
            rotate: {
                type: Boolean,
                default: false
            }
        }
    }
</script>

<style scoped>

</style>

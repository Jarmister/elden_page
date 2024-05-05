<template>
  <div class="vue-family-card">
    <a
      href="#"
      @click.prevent="click"
      class="vue-family-card__image"
      :style="{backgroundImage: image ? `url(${image})` : null}"
    />
    {{ name }}
  
  </div>

</template>

<script setup lang="ts">

const props = defineProps({
    name: String,
    image: String,
    source: Object
})
// const emit = defineEmits(['click'])


const click = this.$emit('click', this.source);


</script >

<!-- // export default {
//   name: 'FamilyCard',
//   props: {
//     name: String,
//     image: String,pnpm up
//     source: Object
//   },
//   methods: {
//     click () {
//       this.$emit('click', this.source);
//     }
//   }
// } -->


<style lang="scss" scoped>
  .vue-family-card {
    text-align: center;
    width: 100px;
    &__image {
      display: block;
      width: 100px;
      height: 100px;
      margin-bottom: 16px;
      background-position: 50%;
      background-size: cover;
      background-color: #dedede;
    }
    &__name {
      font-weight: 600;
      a {
        color: #000;
        text-decoration: none;
      }
    }
  }
</style>
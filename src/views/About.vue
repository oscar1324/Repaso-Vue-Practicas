<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button type="button" class="btn tbn-danger">a</button>



  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: 'first'
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
}
</script>

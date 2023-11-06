<template>
  <div>
    <p>{{ index }}</p>
  </div>
</template>

<script>
export default {
  async asyncData(ctx){
    let index = ctx.params.id;
    return {
      index
    }
  },
  data: () => {
    return {
      page: "detail",
    };
  },
};
</script>
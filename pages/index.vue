<template>
  <div>
    <ul class="list">
      <li v-for="item in list">
        <nuxt-link :to="{ name: 'detail-id', params: { id: item.index } }">{{
          item.index
        }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData(ctx) {
    return new Promise((res) => {
      setTimeout(() => {
        let list = [];
        for (var i = 0; i < 10; i++) {
          list.push({
            index: i,
          });
        }
        res({
          list,
        });
      }, 2000);
    });
  },
  data: () => {
    return {
      page: "index",
    };
  },
};
</script>

<style scoped>
.list li {
  height: 300px;
  border-bottom: 1px solid #000;
  text-align: center;
}
</style>
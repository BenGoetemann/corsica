<template>
  <div class="card">
    <div v-if="pic" class="img-wrapper"><img :src="pic" alt="food" /></div>
    <div class="title">
      <h3>
        {{ title }}
        {{ art }}
      </h3>
    </div>
    <div class="content">
      <p class="ingredients">
        {{ ingredients }}
      </p>
      <p class="price">{{ price }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["pic", "title", "art", "ingredients", "price"],
};
</script>

<style>
.card {
  width: 100%;
  text-align: left;
  margin-top: 10px;
  padding: 10px;
  background: white;
  min-height: 118px;
  border-radius: 5px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.016);
}

.img-wrapper {
  height: 200px;
}

img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.title {
  display: flex;
  flex-direction: row;
}

.content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.ingredients {
  font-style: italic;
  font-size: 12px;
  font-weight: 500;
  color: #6a6a6a;
}

.price {
  font-weight: bold;
  font-size: 12px;
}
</style>
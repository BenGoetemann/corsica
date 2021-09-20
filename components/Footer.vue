<template>
  <div class="footer">
      <div class="link-wrapper">
          <nuxt-link class="tab" to="#">Datenschutz</nuxt-link>
          <nuxt-link class="tab" to="#">Impressum</nuxt-link>
      </div>
  </div>
</template>

<script>
export default {}
</script>

<style>

.footer {
    z-index:100000;
}

.link-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 40px;
    background: white;
    text-decoration: none;

}

.tab {
    margin: 5px
}

</style>
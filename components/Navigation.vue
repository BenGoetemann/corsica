<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="light">
      <b-navbar-brand class="brand" href="#">A Conca Marina</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav> </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#starters">{{
            $store.state.menu.entrees.section
          }}</b-nav-item>
          <b-nav-item href="#dishes">{{
            $store.state.menu.plats.section
          }}</b-nav-item>
          <b-nav-item href="#pasta">{{
            $store.state.menu.pasta.section
          }}</b-nav-item>
          <b-nav-item href="#grill">{{
            $store.state.menu.grillades.section
          }}</b-nav-item>
          <b-nav-item href="#pizza">{{
            $store.state.menu.pizza.section
          }}</b-nav-item>
          <b-nav-item href="#kids-menu">{{
            $store.state.menu.enfant.section
          }}</b-nav-item>
          <b-nav-item href="#desserts">{{
            $store.state.menu.desserts.section
          }}</b-nav-item>

          <div class="languages">
            <b-nav-item @click="$store.commit('en')" class="flag" href="#"
              >🇬🇧</b-nav-item
            >
            <b-nav-item @click="$store.commit('fr')" class="flag" href="#"
              >🇫🇷</b-nav-item
            >
            <b-nav-item @click="$store.commit('it')" class="flag" href="#"
              >🇮🇹</b-nav-item
            >

          </div>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  methods: {},
};
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Fuggles&family=Style+Script&display=swap');

.navbar.navbar-light.bg-light {
  background-color: rgb(255, 255, 255) !important;
    z-index:10000;
  
}

.navbar-light .navbar-nav .nav-link {
  color: black !important;
  font-weight: 500;
}

.navbar-light .navbar-nav .nav-item {
  display: flex !important;
  align-items: center;
}

.languages {
  display: flex;
  flex-direction: row;
  justify-content: left;
  margin-top: 0px;
}

.flag {
  margin-right: 15px;
  font-size: 30px;
}
</style>
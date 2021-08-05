<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="#">NavBar</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav> </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#starters">{{ $store.state.menu.entrees.section }}</b-nav-item>
          <b-nav-item href="#dishes">{{ $store.state.menu.plats.section }}</b-nav-item>
          <b-nav-item href="#pasta">{{ $store.state.menu.pasta.section }}</b-nav-item>
                    <b-nav-item href="#grill">{{ $store.state.menu.grillades.section }}</b-nav-item>
<b-nav-item href="#pizza">{{ $store.state.menu.pizza.section }}</b-nav-item>
<b-nav-item href="#kids-menu">{{ $store.state.menu.enfant.section }}</b-nav-item>
<b-nav-item href="#desserts">{{ $store.state.menu.desserts.section }}</b-nav-item>


          <div class="languages">
            <b-nav-item @click="$store.commit('en')" class="flag" href="#"
              >🇬🇧</b-nav-item
            >
            <b-nav-item @click="$store.commit('fr')" class="flag" href="#"
              >🇫🇷</b-nav-item
            >
            <b-nav-item @click="$store.commit('es')" class="flag" href="#"
              >🇪🇸</b-nav-item
            >
            <b-nav-item @click="$store.commit('it')" class="flag" href="#"
              >🇮🇹</b-nav-item
            >
            <b-nav-item @click="$store.commit('de')" class="flag" href="#"
              >🇩🇪</b-nav-item
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

<style>
.navbar.navbar-dark.bg-dark {
  background-color: white !important;
}

.navbar-dark .navbar-nav .nav-link {
  color: black !important;
}

.languages {
  display: flex;
  flex-direction: row;
}

.flag {
  margin-right: 3px;
  font-size: 24px;
}
</style>
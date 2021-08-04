<template>
  
<div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#">NavBar</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>

      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="test">test</b-nav-item>
        <b-nav-item href="#test">anchor</b-nav-item>
        <b-nav-item href="#">Link</b-nav-item>
        <b-nav-item href="#">Link</b-nav-item>
    
    
        <div class="languages">
            <b-nav-item @click="$store.commit('en')" class="flag" href="#">🇬🇧</b-nav-item>
            <b-nav-item @click="$store.commit('fr')" class="flag" href="#">🇫🇷</b-nav-item>
        </div>

      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
export default {

    methods: {

    }


}
</script>

<style>

.languages {
    display: flex;
    flex-direction: row;
}

.flag {
    margin-right: 3px;
}

</style>
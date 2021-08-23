<template>
  <div class="responsive-background">
    <div class="overlay">
      <div class="start">
        <div class="spacer"></div>
        <div class="callto">
          <div>
            <h1 class="brand">A Conca Marina</h1>
            <h2 class="claude">chez Jean Claude</h2>
            <p class="intro-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>

            <div class="languages">
              <nuxt-link class="btn" to="card"><div @click="$store.commit('en')" class="flag">🇬🇧</div></nuxt-link>
              <nuxt-link class="btn" to="card"><div @click="$store.commit('fr')" class="flag">🇫🇷</div></nuxt-link>
              <nuxt-link class="btn" to="card"><div @click="$store.commit('it')" class="flag">🇮🇹</div></nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Fuggles&family=Style+Script&display=swap");

.responsive-background {
  background-image: url("~/assets/images/background-2.jpeg");
  background-position: center center;
  background-size: cover;
  background-color: #464646;
  width: 100vw;
  height: 100vh;
}

.btn {
  padding: 4px;
  background: rgb(233, 233, 233);
  border-radius: 100px;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.016);
}

.btn:hover {
  background: rgb(193, 193, 193);
}

.btn:focus {
  background: rgb(145, 145, 145);
}

.languages {
    margin-top: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
}

.flag {
  font-size: 2rem;
}

.overlay {
  position: relative; /* Sit on top of the page content */
  width: 100vw; /* Full width (cover the whole page) */
  height: 100vh; /* Full height (cover the whole page) */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(79, 135, 255, 0.105); /* Black background with opacity */
  z-index: 10000; /* Specify a stack order in case you're using a different order for other elements */
}

.start {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
}

.callto {
  width: 90%;
  height: 44%;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 5px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.016);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4%;
  text-align: center;
}

.spacer {
  height: 49vh;
}

.brand {
  font-family: "Style Script", cursive;
  margin: 0;
}

.claude {
  font-family: "Fuggles", cursive;
  font-size: 2rem;
  margin: 0;
}

.intro-text {
  margin-top: 10px;
}




</style>

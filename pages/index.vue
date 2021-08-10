<template>
  <div class="responsive-background">
    <div class="overlay">
      <div class="start">
        <div class="callto">
          <div>
            <h1 class="brand">A Conca Marina</h1>
            <h2 class="claude">chez Jean Claude</h2>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex a
            quibusdam pariatur maxime cupiditate placeat quas nulla, quia
            numquam sed, officiis quam suscipit soluta? Rerum et accusamus
            placeat quas recusandae.
          </p>
          <button class="btn"><nuxt-link class="menu-link" to="/card">Menu</nuxt-link></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Fuggles&family=Style+Script&display=swap');

.responsive-background {
  background-image: url("~assets/images/background-2.jpeg");
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-color: #464646;
  width: 100vw;
  height: 100vh;
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
  height: 93%;
  background: rgba(255, 255, 255, 0.899);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 8%;
  text-align: center;
}

.brand {
  font-family: "Style Script", cursive;
  margin: 0;
}

.claude {
  font-family: 'Fuggles', cursive;
  font-size: 2rem;
  margin: 0;
}

.btn {
  width: 120px;
  height: 50px;
  background: rgb(90, 164, 255);
}

.menu-link {
  color: white
}
</style>
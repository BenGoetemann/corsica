<template>
  <div>
    <Navigation />
    <div class="background">
      <div class="container">
        <section id="starters">
          <h2>{{ $store.state.menu.entrees.section }}</h2>
          <Card
            :pic="require('../assets/images/pizza.jpeg')"
            :title="$store.state.menu.entrees.goatcheesesalad.title"
            :art="$store.state.menu.entrees.goatcheesesalad.art"
            :ingredients="$store.state.menu.entrees.goatcheesesalad.ingredients"
            :price="$store.state.menu.entrees.goatcheesesalad.price"
          />
          <Card
            :pic="require('../assets/images/burger.jpeg')"
            :title="$store.state.menu.entrees.cuttlefishsalad.title"
            :art="$store.state.menu.entrees.cuttlefishsalad.art"
            :ingredients="$store.state.menu.entrees.cuttlefishsalad.ingredients"
            :price="$store.state.menu.entrees.cuttlefishsalad.price"
          />
          <Card
            :title="$store.state.menu.entrees.tomatosalad.title"
            :art="$store.state.menu.entrees.tomatosalad.art"
            :ingredients="$store.state.menu.entrees.tomatosalad.ingredients"
            :price="$store.state.menu.entrees.tomatosalad.price"
          />
          <Card
            :title="$store.state.menu.entrees.caesarsalad.title"
            :art="$store.state.menu.entrees.caesarsalad.art"
            :ingredients="$store.state.menu.entrees.caesarsalad.ingredients"
            :price="$store.state.menu.entrees.caesarsalad.price"
          />
          <Card
            :title="$store.state.menu.entrees.tatar.title"
            :art="$store.state.menu.entrees.tatar.art"
            :ingredients="$store.state.menu.entrees.tatar.ingredients"
            :price="$store.state.menu.entrees.tatar.price"
          />
        </section>
        <br />
        <section id="dishes">
          <h2>{{ $store.state.menu.plats.section }}</h2>
          <Card
            :title="$store.state.menu.plats.saute.title"
            :art="$store.state.menu.plats.saute.art"
            :ingredients="$store.state.menu.plats.saute.ingredients"
            :price="$store.state.menu.plats.saute.price"
          />
          <Card
            :title="$store.state.menu.plats.filet.title"
            :art="$store.state.menu.plats.filet.art"
            :ingredients="$store.state.menu.plats.filet.ingredients"
            :price="$store.state.menu.plats.filet.price"
          />
          <Card
            :title="$store.state.menu.plats.moules.title"
            :art="$store.state.menu.plats.moules.art"
            :ingredients="$store.state.menu.plats.moules.ingredients"
            :price="$store.state.menu.plats.moules.price"
          />
          <Card
            :title="$store.state.menu.plats.lasagne.title"
            :art="$store.state.menu.plats.lasagne.art"
            :ingredients="$store.state.menu.plats.lasagne.ingredients"
            :price="$store.state.menu.plats.lasagne.price"
          />
          <Card
            :title="$store.state.menu.plats.saumon.title"
            :art="$store.state.menu.plats.saumon.art"
            :ingredients="$store.state.menu.plats.saumon.ingredients"
            :price="$store.state.menu.plats.saumon.price"
          />
        </section>
        <br />
        <section id="pasta">
          <h2>{{ $store.state.menu.pasta.section }}</h2>
          <Card
            :title="$store.state.menu.pasta.truffe.title"
            :art="$store.state.menu.pasta.truffe.art"
            :ingredients="$store.state.menu.pasta.truffe.ingredients"
            :price="$store.state.menu.pasta.truffe.price"
          />
          <Card
            :title="$store.state.menu.pasta.fruitsdemer.title"
            :art="$store.state.menu.pasta.fruitsdemer.art"
            :ingredients="$store.state.menu.pasta.fruitsdemer.ingredients"
            :price="$store.state.menu.pasta.fruitsdemer.price"
          />
          <Card
            :title="$store.state.menu.pasta.carbonara.title"
            :art="$store.state.menu.pasta.carbonara.art"
            :ingredients="$store.state.menu.pasta.carbonara.ingredients"
            :price="$store.state.menu.pasta.carbonara.price"
          />
        </section>
        <br />
        <section id="grill">
          <h2>{{ $store.state.menu.grillades.section }}</h2>
          <p>{{ $store.state.menu.grillades.info }}</p>
          <Card
            :title="$store.state.menu.grillades.entrecote.title"
            :art="$store.state.menu.grillades.entrecote.art"
            :ingredients="$store.state.menu.grillades.entrecote.ingredients"
            :price="$store.state.menu.grillades.entrecote.price"
          />
          <Card
            :title="$store.state.menu.grillades.chimichurri.title"
            :art="$store.state.menu.grillades.chimichurri.art"
            :ingredients="$store.state.menu.grillades.chimichurri.ingredients"
            :price="$store.state.menu.grillades.chimichurri.price"
          />
          <Card
            :title="$store.state.menu.grillades.loup.title"
            :art="$store.state.menu.grillades.loup.art"
            :ingredients="$store.state.menu.grillades.loup.ingredients"
            :price="$store.state.menu.grillades.loup.price"
          />
          <Card
            :title="$store.state.menu.grillades.coquelet.title"
            :art="$store.state.menu.grillades.coquelet.art"
            :ingredients="$store.state.menu.grillades.coquelet.ingredients"
            :price="$store.state.menu.grillades.coquelet.price"
          />
          <Card
            :title="$store.state.menu.grillades.brochette.title"
            :art="$store.state.menu.grillades.brochette.art"
            :ingredients="$store.state.menu.grillades.brochette.ingredients"
            :price="$store.state.menu.grillades.brochette.price"
          />
          <Card
            :title="$store.state.menu.grillades.gigot.title"
            :art="$store.state.menu.grillades.gigot.art"
            :ingredients="$store.state.menu.grillades.gigot.ingredients"
            :price="$store.state.menu.grillades.gigot.price"
          />
          <Card
            :title="$store.state.menu.grillades.assiette.title"
            :art="$store.state.menu.grillades.assiette.art"
            :ingredients="$store.state.menu.grillades.assiette.ingredients"
            :price="$store.state.menu.grillades.assiette.price"
          />
          <Card
            :title="$store.state.menu.grillades.sauce.title"
            :art="$store.state.menu.grillades.sauce.art"
            :ingredients="$store.state.menu.grillades.sauce.ingredients"
            :price="$store.state.menu.grillades.sauce.price"
          />
        </section>
        <br />
        <section id="pizza">
          <h2>{{ $store.state.menu.pizza.section }}</h2>
          <Card
            :title="$store.state.menu.pizza.margherita.title"
            :art="$store.state.menu.pizza.margherita.art"
            :ingredients="$store.state.menu.pizza.margherita.ingredients"
            :price="$store.state.menu.pizza.margherita.price"
          />
          <Card
            :title="$store.state.menu.pizza.hawaii.title"
            :art="$store.state.menu.pizza.hawaii.art"
            :ingredients="$store.state.menu.pizza.hawaii.ingredients"
            :price="$store.state.menu.pizza.hawaii.price"
          />
          <Card
            :title="$store.state.menu.pizza.napolitana.title"
            :art="$store.state.menu.pizza.napolitana.art"
            :ingredients="$store.state.menu.pizza.napolitana.ingredients"
            :price="$store.state.menu.pizza.napolitana.price"
          />
          <Card
            :title="$store.state.menu.pizza.regina.title"
            :art="$store.state.menu.pizza.regina.art"
            :ingredients="$store.state.menu.pizza.regina.ingredients"
            :price="$store.state.menu.pizza.regina.price"
          />
          <Card
            :title="$store.state.menu.pizza.quattroformaggi.title"
            :art="$store.state.menu.pizza.quattroformaggi.art"
            :ingredients="$store.state.menu.pizza.quattroformaggi.ingredients"
            :price="$store.state.menu.pizza.quattroformaggi.price"
          />
          <Card
            :title="$store.state.menu.pizza.veggi.title"
            :art="$store.state.menu.pizza.veggi.art"
            :ingredients="$store.state.menu.pizza.veggi.ingredients"
            :price="$store.state.menu.pizza.veggi.price"
          />
          <Card
            :title="$store.state.menu.pizza.diavolo.title"
            :art="$store.state.menu.pizza.diavolo.art"
            :ingredients="$store.state.menu.pizza.diavolo.ingredients"
            :price="$store.state.menu.pizza.diavolo.price"
          />
          <Card
            :title="$store.state.menu.pizza.capricciosa.title"
            :art="$store.state.menu.pizza.capricciosa.art"
            :ingredients="$store.state.menu.pizza.capricciosa.ingredients"
            :price="$store.state.menu.pizza.capricciosa.price"
          />
          <Card
            :title="$store.state.menu.pizza.burrata.title"
            :art="$store.state.menu.pizza.burrata.art"
            :ingredients="$store.state.menu.pizza.burrata.ingredients"
            :price="$store.state.menu.pizza.burrata.price"
          />
          <Card
            :title="$store.state.menu.pizza.pescatore.title"
            :art="$store.state.menu.pizza.pescatore.art"
            :ingredients="$store.state.menu.pizza.pescatore.ingredients"
            :price="$store.state.menu.pizza.pescatore.price"
          />
          <Card
            :title="$store.state.menu.pizza.fruttidimare.title"
            :art="$store.state.menu.pizza.fruttidimare.art"
            :ingredients="$store.state.menu.pizza.fruttidimare.ingredients"
            :price="$store.state.menu.pizza.fruttidimare.price"
          />
          <Card
            :title="$store.state.menu.pizza.jeanclaude.title"
            :art="$store.state.menu.pizza.jeanclaude.art"
            :ingredients="$store.state.menu.pizza.jeanclaude.ingredients"
            :price="$store.state.menu.pizza.jeanclaude.price"
          />
        </section>
        <br />
        <section id="kids-menu">
          <h2>{{ $store.state.menu.enfant.section }}</h2>
          <Card
            :title="$store.state.menu.enfant.beurrenature.title"
            :art="$store.state.menu.enfant.beurrenature.art"
            :ingredients="$store.state.menu.enfant.beurrenature.ingredients"
            :price="$store.state.menu.enfant.beurrenature.price"
          />
          <Card
            :title="$store.state.menu.enfant.steak.title"
            :art="$store.state.menu.enfant.steak.art"
            :ingredients="$store.state.menu.enfant.steak.ingredients"
            :price="$store.state.menu.enfant.steak.price"
          />
          <Card
            :title="$store.state.menu.enfant.nuggets.title"
            :art="$store.state.menu.enfant.nuggets.art"
            :ingredients="$store.state.menu.enfant.nuggets.ingredients"
            :price="$store.state.menu.enfant.nuggets.price"
          />
        </section>
        <br />
        <section id="desserts">
          <h2>{{ $store.state.menu.desserts.section }}</h2>
          <Card
            :title="$store.state.menu.desserts.tartetatin.title"
            :art="$store.state.menu.desserts.tartetatin.art"
            :ingredients="$store.state.menu.desserts.tartetatin.ingredients"
            :price="$store.state.menu.desserts.tartetatin.price"
          />
          <Card
            :title="$store.state.menu.desserts.tiramisu.title"
            :art="$store.state.menu.desserts.tiramisu.art"
            :ingredients="$store.state.menu.desserts.tiramisu.ingredients"
            :price="$store.state.menu.desserts.tiramisu.price"
          />
          <Card
            :title="$store.state.menu.desserts.brownie.title"
            :art="$store.state.menu.desserts.brownie.art"
            :ingredients="$store.state.menu.desserts.brownie.ingredients"
            :price="$store.state.menu.desserts.brownie.price"
          />
          <Card
            :title="$store.state.menu.desserts.creme.title"
            :art="$store.state.menu.desserts.creme.art"
            :ingredients="$store.state.menu.desserts.creme.ingredients"
            :price="$store.state.menu.desserts.creme.price"
          />
          <Card
            :title="$store.state.menu.desserts.tartecitron.title"
            :art="$store.state.menu.desserts.tartecitron.art"
            :ingredients="$store.state.menu.desserts.tartecitron.ingredients"
            :price="$store.state.menu.desserts.tartecitron.price"
          />
          <Card
            :title="$store.state.menu.desserts.pizzanutella.title"
            :art="$store.state.menu.desserts.pizzanutella.art"
            :ingredients="$store.state.menu.desserts.pizzanutella.ingredients"
            :price="$store.state.menu.desserts.pizzanutella.price"
          />
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "../components/Card.vue";
import Navigation from "../components/Navigation.vue";

export default {
  components: {
    Card,
    Navigation,
  },
};
</script>

<style>
/* .background {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url("~/assets/images/background-2.jpeg");
  height: 100vh;
  width: 100vw;
  background-size: cover;
  background-attachment: scroll;
  background-position: center center;
  background-repeat: no-repeat;
} */

.background:after{
      content:"";
      position:fixed; /* stretch a fixed position to the whole screen */
      top:0;
      height:100vh; /* fix for mobile browser address bar appearing disappearing */
      left:0;
      right:0;
      z-index:0; /* needed to keep in the background */
      background: url("~/assets/images/background-2.jpeg") center center;
      -webkit-background-size: cover;
      -moz-background-size: cover;
      -o-background-size: cover;
      background-size: cover;
}

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  align-items: left;
  text-align: left;
  flex-direction: column;
}

.title {
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

section {
  margin-top: 10px;
  margin-bottom: 20px;
}

.languages {
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
}

section {
  z-index:100;
}
</style>

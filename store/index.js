import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      menu: {
         burgers: {
             cheeseburger: {
                title: "Cheeseburger",
                content: "Bullette (Rind), Käse, Salat, Tomaten, Mayonnaise, Ketchup",
                price: "12,00€"
             },
             hamburger: {
                title: "Hamburger",
                content: "Bullette (Rind), Salat, Tomaten, Mayonnaise, Ketchup",
                price: "12,00€"
             },

         }
      }
    },
    mutations: {
      en(state) {
        state.menu.burgers.cheeseburger.content = "Patty (Beef), Cheese, Salad, Tomatoes, Mayonnaise, Ketchup"
        state.menu.burgers.hamburger.content = "Patty (Beef), Salad, Tomatoes, Mayonnaise, Ketchup"
      },
      fr(state) {
        state.menu.burgers.cheeseburger.content = "Galette (bœuf), fromage, salade, tomates, mayonnaise, ketchup."
        state.menu.burgers.hamburger.content = "Galette (bœuf), salade, tomates, mayonnaise, ketchup"
      }
    },
  })
}

export default createStore
import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      menu: {
        entrees: {
          section: "Entrées",
          goatcheesesalad: {
            title: "Salade de chèvre chaud",
            art: "🥩",
            ingredients: "en feuille de brick, lardons, oignons sautés ",
            price: "14,50 €"
          },
          cuttlefishsalad: {
            title: "Salade de seiche",
            art: "🐟",
            ingredients: "aux olives noires et vinaigrette aux herbes du pays",
            price: "15,00 €"
          },
          tomatosalad: {
            title: "Salade de tomate « Coeur de boeuf »",
            art: "🥩",
            ingredients: "à la Burrata, pesto de basilic",
            price: "16,00 €"
          },
          caesarsalad: {
            title: "Salade César",
            art: "🥩",
            ingredients: "au blanc de poulet, croutons, parmesan ",
            price: "16,00 €"
          },
          tatar: {
            title: "Tartare de thon frais",
            art: "🐟",
            ingredients: "aux épices du pays, vinaigrette orientale",
            price: "14,00 €"
          },
        },
        plats: {
          section: "Plats",
          saute: {
            title: "Sauté de veau corse à la Myrte",
            art: "🥩",
            ingredients: "pomme mousseline à la « truffe d'été »",
            price: "19,00 €"
          },
          filet: {
            title: "Filet de Saint-Pierre",
            art: "🥩",
            ingredients: "pomme écrasées à la ciboulette, beurre blanc citronné, fleurettes de brocoli",
            price: "20,00 €"
          },
          moules: {
            title: "Moules fraîche de 'Diana'",
            art: "🐟",
            ingredients: "pomme écrasées à la ciboulette, beurre blanc citronné, fleurettes de brocoli",
            price: "14,50 €"
          },
          lasagne: {
            title: "Lasagne maison",
            art: "🥩",
            ingredients: "sur sauce tomate",
            price: "15,00 €"
          },
          saumon: {
            title: "Pavé de saumon",
            art: "🐟",
            ingredients: "sauce marinière, pomme écrasées à la ciboulette, fleurettes de brocoli ",
            price: "19,00 €"
          },
        },
        pasta: {
          section: "Pâtes « Rummo » ",
          truffe: {
            title: "Linguini à la crème de Truffe d'été",
            art: "🌱",
            ingredients: "-",
            price: "17,00 €"
          },
          fruitsdemer: {
            title: "Linguini aux fruits de mer à la sauce tomate",
            art: "🐟",
            ingredients: "Crevettes, Vonzgole, Moles, Noix de Saint-Jacques",
            price: "18,50 €"
          },
          carbonara: {
            title: "Linguini à la carbonara",
            art: "🥩",
            ingredients: "-",
            price: "16,00 €"
          },
        },
        grillades: {
          section: "Grillades",
          info: "Toutes nos grillades sont servies avec des légumes frais grillés ou frites",
          entrecote: {
            title: "Entrecôte de boeuf",
            art: "🥩",
            ingredients: "-",
            price: "21,00 €"
          },
          chimichurri: {
            title: "Pavé de thon frais « Chimichurri u Provençale»",
            art: "🐟",
            ingredients: "Sauce servie à part",
            price: "18,00 €"
          },
          loup: {
            title: "Loup grillé",
            art: "🐟",
            ingredients: "aux herbes",
            price: "22,00 €"
          },
          coquelet: {
            title: "Coquelet grillé entier",
            art: "🥩",
            ingredients: "en crapaudine",
            price: "15,00 €"
          },
          brochette: {
            title: "Brochette de grosses crevettes",
            art: "🐟",
            ingredients: "en marinade",
            price: "18,50 €"
          },
          gigot: {
            title: "Brochette de gigot d'agneau",
            art: "🐟",
            ingredients: "grillée au thym",
            price: "19,00 €"
          },
          assiette: {
            title: "Assiette végétarienne",
            art: "🌱",
            ingredients: "Assortiment de légumes frais du jour grillés et pommes de terre au choix",
            price: "14,00 €"
          },
          sauce: {
            title: "Sauce en supplément poivre ou Tome Corse",
            art: "🌱",
            ingredients: "-",
            price: "3,50 €"
          },
        },
        pizza: {
          section: "Pizza",
          margherita: {
            title: "Margherita",
            art: "🌱",
            ingredients: "Tomate, Mozzarella",
            price: "9,00 €"
          },
          hawaii: {
            title: "Hawaïenne",
            art: "🥩",
            ingredients: "Tomate, Mozzarella, Jambon, Ananas",
            price: "9,50 €"
          },
          napolitana: {
            title: "Napolitana",
            art: "🐟",
            ingredients: "Tomate, Mozzarella, Câpres, Anchois. Olives noires",
            price: "10,50 €"
          },
          regina: {
            title: "Regina",
            art: "🥩",
            ingredients: "Tomate, Mozzarella, Jambon, Champignons, Olives noires",
            price: "10,00 €"
          },
          quattroformaggi: {
            title: "Quatre Fromages",
            art: "🌱",
            ingredients: "Tomate, Mozzarella, Tome Corse, Chèvre, Parmesan",
            price: "11,00 €"
          },
          veggi: {
            title: "Végétarienne",
            art: "🌱",
            ingredients: "Tomate, Mozzarella, Courgettes. Aubergines, Poivrons, Champignons",
            price: "13,00 €"
          },
          diavolo: {
            title: "Diavolo",
            art: "🥩",
            ingredients: "Tomate, Mozzarella, Olives noires, Chorizo",
            price: "12,00 €"
          },
          capricciosa: {
            title: "Capricciosa",
            art: "🥩",
            ingredients: "Tomate, Mozzarella, Jambon, Champignons, Olives noires, Chorizo",
            price: "12,50 €"
          },
          burrata: {
            title: "Burrata",
            art: "🥩",
            ingredients: "Tomate, Mozzarella, Roquette, Tomates cerise, Burrata",
            price: "14,00 €"
          },
          pescatore: {
            title: "Pescatore",
            art: "🐟",
            ingredients: "Tomate, Mozzarella, Thon, Pepperoni, Olives noires",
            price: "12,00 €"
          },
          fruttidimare: {
            title: "Frutti di Mare",
            art: "🐟",
            ingredients: "Tomate, Mozzarella, Fruits de mer, Olives noires",
            price: "14,00 €"
          },
          jeanclaude: {
            title: "Jean Claude",
            art: "🌱",
            ingredients: "Crème, Tome Corse, Mozzarella, Œuf, Truffe d'été",
            price: "14,50 €"
          },
        },
        enfant: {
          section: "Menu Enfant",
          beurrenature: {
            title: "Pâtes au beurre nature",
            art: "🌱",
            ingredients: "-",
            price: "4,50 €"
          },
          steak: {
            title: "Steak haché frites",
            art: "🥩",
            ingredients: "-",
            price: "7,50 €"
          },
          nuggets: {
            title: "Nuggets de poulet frites",
            art: "🥩",
            ingredients: "-",
            price: "7,00 €"
          }
        },
        desserts: {
          section: "Desserts Maison",
          tartetatin: {
            title: "Tarte Tatin, chantilly ou crème anglaise",
            art: "🌱",
            ingredients: "-",
            price: "7,00 €"
          },
          tiramisu: {
            title: "Tiramisu",
            art: "🌱",
            ingredients: "-",
            price: "6,50 €"
          },
          brownie: {
            title: "Brownie au chocolat et noix de pécan",
            art: "🌱",
            ingredients: "-",
            price: "7,50 €"
          },
          creme: {
            title: "Crème brulée",
            art: "🌱",
            ingredients: "-",
            price: "6,50 €"
          },
          tartecitron: {
            title: "Tarte citron meringuée",
            art: "🌱",
            ingredients: "-",
            price: "7,00 €"
          },
          pizzanutella: {
            title: "Pizza Nutella",
            art: "🌱",
            ingredients: "-",
            price: "8,00 €"
          },
        }
      }
    },
    mutations: {
      en(state) {

        state.menu.entrees.section = "Starters"


        state.menu.entrees.goatcheesesalad.title = "Warm goat's cheese salad"
        state.menu.entrees.goatcheesesalad.ingredients = "in brick pastry, lardons, sautéed onions"

        state.menu.entrees.cuttlefishsalad.title = "Cuttlefish salad"
        state.menu.entrees.cuttlefishsalad.ingredients = "with black olives and local herbs vinaigrette"

        state.menu.entrees.tomatosalad.title = "Tomato salad 'Beef heart'"
        state.menu.entrees.tomatosalad.ingredients = "with Burrata cheese, basil pesto"
        
        state.menu.entrees.caesarsalad.title = "Caesar salad"
        state.menu.entrees.caesarsalad.ingredients = "with chicken breast, croutons, parmesan cheese"

        state.menu.entrees.tatar.title = "Tartar of fresh tuna"
        state.menu.entrees.tatar.ingredients = "with local spices, oriental dressing"

        state.menu.plats.section = "Dishes"


        state.menu.plats.saute.title = "Sauté of Corsican vea"
        state.menu.plats.saute.ingredients = "with Myrtle, mousseline apple with summer truffle"

        state.menu.plats.filet.title = "Fillet of Saint-Pierre"
        state.menu.plats.filet.ingredients = "crushed apple with chives, lemon butter, broccoli florets"
        
        state.menu.plats.moules.title = "Fresh mussels from 'Diana'"
        state.menu.plats.moules.ingredients = "Marinière or cream with Corsican tome"
        
        state.menu.plats.lasagne.title = "Homemade lasagne"
        state.menu.plats.lasagne.ingredients = "on tomato sauce"

        state.menu.plats.saumon.title = "Salmon steak"
        state.menu.plats.saumon.ingredients = "marinière sauce, crushed apple with chives, broccoli florets"

        state.menu.pasta.section = "Pasta"

        state.menu.pasta.truffe.title = "Linguini with summer truffle cream"

        state.menu.pasta.fruitsdemer.title = "Seafood linguini with tomato sauce"
        state.menu.pasta.fruitsdemer.ingredients = "Shrimps, Vonzgole, Moles, Scallops"

        state.menu.pasta.carbonara.title = "Linguini with carbonara sauce "
        state.menu.pasta.carbonara.ingredients = "-"

        state.menu.grillades.section = "Grill"

        state.menu.grillades.entrecote.title = "Entrecote of beef"

        state.menu.grillades.chimichurri.title = "Fresh tuna steak 'Chimichurri' or Provençale"
        state.menu.grillades.chimichurri.ingredients = "Sauce served on the side"

        state.menu.grillades.loup.title = "Grilled bass with herbs"
        state.menu.grillades.loup.ingredients = "-"

        state.menu.grillades.coquelet.title = "Whole grilled cockerel in a shell"
        state.menu.grillades.coquelet.ingredients = "-"

        state.menu.grillades.brochette.title = "Skewer of large prawns in marinade"
        state.menu.grillades.brochette.ingredients = "served separately"

        state.menu.grillades.gigot.title = "Skewer of leg of lamb grilled"
        state.menu.grillades.gigot.ingredients = "with thyme"
        
        state.menu.grillades.assiette.title = "Vegetarian plate"
        state.menu.grillades.assiette.ingredients = "Assortment of fresh grilled vegetables of the day and choice of potatoes"

        state.menu.grillades.sauce.title = "Extra sauce with pepper or Corsican Tome"

        state.menu.pizza.margherita.ingredients = "Tomato, Mozzarella"

        state.menu.pizza.hawaii.ingredients = "Tomato, Mozzarella, Ham, Pineapple"

        state.menu.pizza.napolitana.ingredients = "Tomato, Mozzarella, Capers, Anchovies, Black olives"

        state.menu.pizza.regina.ingredients = "Tomato, Mozzarella, Ham, Mushrooms, Black Olives"

        state.menu.pizza.quattroformaggi.ingredients = "Tomato, Mozzarella, Corsican Tome, Goat, Parmesan"

        state.menu.pizza.veggi.ingredients = "Tomato, Mozzarella, Courgettes, Aubergines, Peppers, Mushrooms"

        state.menu.pizza.diavolo.ingredients = "Tomato, Mozzarella, Black Olives, Chorizo"

        state.menu.pizza.capricciosa.ingredients = "Tomato, Mozzarella, Ham, Mushrooms, Black Olives, Chorizo"

        state.menu.pizza.burrata.ingredients = "Tomato, Mozzarella, Arugula, Cherry tomatoes, Burrata"

        state.menu.pizza.pescatore.ingredients = "Tomato, Mozzarella, Tuna, Pepperoni, Black olives"

        state.menu.pizza.fruttidimare.ingredients = "Tomato, Mozzarella, Seafood, Black olives"

        state.menu.pizza.jeanclaude.ingredients = "Cream, Corsican Tome, Mozzarella, Egg, Summer Truffle"

        state.menu.enfant.section = "For Kids"

        state.menu.enfant.beurrenature.title = "Pasta with butter "

        state.menu.enfant.steak.title ="Chopped steak and chips"

        state.menu.enfant.nuggets.title = "Fried chicken nuggets"

        state.menu.desserts.tartetatin.title = "Tarte Tatin, chantilly or custard"

        state.menu.desserts.tiramisu.title = "Tiramisu"

        state.menu.desserts.brownie.title = "Chocolate and pecan brownie"

        state.menu.desserts.creme.title = "Crème brulée"

        state.menu.desserts.tartecitron.title = "Lemon meringue pie"

        state.menu.desserts.pizzanutella.title = "Pizza Nutella"

      },
      es(state) {

        state.menu.entrees.section = "Arrancadores"


        state.menu.entrees.goatcheesesalad.title = "Ensalada tibia de queso de cabra"
        state.menu.entrees.goatcheesesalad.ingredients = "en hojaldre, lardones, cebollas salteadas"

        state.menu.entrees.cuttlefishsalad.title = "Ensalada de pulpo"
        state.menu.entrees.cuttlefishsalad.ingredients = "con aceitunas negras y vinagreta de hierbas locales"

        state.menu.entrees.tomatosalad.title = "Ensalada de tomate 'corazón de ternera'"
        state.menu.entrees.tomatosalad.ingredients = "on queso burrata, pesto de albahaca"
        
        state.menu.entrees.caesarsalad.title = "Ensalada César"
        state.menu.entrees.caesarsalad.ingredients = "con pechuga de pollo, picatostes y parmesano"

        state.menu.entrees.tatar.title = "Tartar de atún fresco"
        state.menu.entrees.tatar.ingredients = "con especias locales, aderezo oriental"

        state.menu.plats.section = "Platos principales"


        state.menu.plats.saute.title = "Salteado de ternera corsa"
        state.menu.plats.saute.ingredients = "con mirto, muselina de manzana con 'trufa de verano'"

        state.menu.plats.filet.title = "Filete de Saint-Pierre"
        state.menu.plats.filet.ingredients = "manzana triturada con cebollino, mantequilla de limón, floretes de brócoli"
        
        state.menu.plats.moules.title = "Mejillones frescos de 'Diana'"
        state.menu.plats.moules.ingredients = "marinière o crema con vino de Córcega"
        
        state.menu.plats.lasagne.title = "Lasaña casera"
        state.menu.plats.lasagne.ingredients = "sobre salsa de tomate"

        state.menu.plats.saumon.title = "Filete de salmón"
        state.menu.plats.saumon.ingredients = "salsa marinera, manzana triturada con cebollino, floretes de brócoli"

        state.menu.pasta.section = "Pasta"

        state.menu.pasta.truffe.title = "Linguini con crema de trufa de verano"

        state.menu.pasta.fruitsdemer.title = "Linguini con marisco y salsa de tomate"
        state.menu.pasta.fruitsdemer.ingredients = "gambas, vonzgole, moles, vieiras"

        state.menu.pasta.carbonara.title = "Linguini con salsa carbonara"

        state.menu.grillades.section = "A la parrilla"

        state.menu.grillades.entrecote.title = "Entrecot de ternera"

        state.menu.grillades.chimichurri.title = "Filete de atún fresco 'Chimichurri' o Provençale"
        state.menu.grillades.chimichurri.ingredients = "la salsa se sirve aparte"

        state.menu.grillades.loup.title = "Lubina a la parrilla con hierbas"

        state.menu.grillades.coquelet.title = "Gallo entero a la parrilla con cáscara"

        state.menu.grillades.brochette.title = "Brocheta de langostinos grandes en escabeche"
        state.menu.grillades.brochette.ingredients = "se sirve por separado"

        state.menu.grillades.gigot.title = "Brocheta de pierna de cordero a la parrilla"
        state.menu.grillades.gigot.ingredients = "con tomillo"
        
        state.menu.grillades.assiette.title = "Plato vegetariano"
        state.menu.grillades.assiette.ingredients = "elección de verduras frescas del día a la plancha y patatas a elegir"

        state.menu.grillades.sauce.title = "Salsa extra con pimienta o tomo corso"

        state.menu.pizza.margherita.ingredients = "tomate, mozzarella"

        state.menu.pizza.hawaii.ingredients = "tomate, mozzarella, jamón, piña"

        state.menu.pizza.napolitana.ingredients = "tomate, mozzarella, alcaparras, anchoas, aceitunas negras"

        state.menu.pizza.regina.ingredients = "tomate, mozzarella, jamón, champiñones, aceitunas negras"

        state.menu.pizza.quattroformaggi.ingredients = "tomate, mozzarella, dom corso, cabra, parmesano"

        state.menu.pizza.veggi.ingredients = "tomate, mozzarella, calabacín, berenjena, pimiento, champiñones"

        state.menu.pizza.diavolo.ingredients = "tomate, mozzarella, aceitunas negras, chorizo"

        state.menu.pizza.capricciosa.ingredients = "tomate, mozzarella, jamón, champiñones, aceitunas negras, chorizo"

        state.menu.pizza.burrata.ingredients = "tomate, mozzarella, rúcula, tomates cherry, burrata"

        state.menu.pizza.pescatore.ingredients = "tomate, mozzarella, atún, pepperoni, aceitunas negras"

        state.menu.pizza.fruttidimare.ingredients = "tomate, mozzarella, marisco, aceitunas negras"

        state.menu.pizza.jeanclaude.ingredients = "nata, tomate corso, mozzarella, huevo, trufa de verano"

        state.menu.enfant.section = "Menú Infantil"

        state.menu.enfant.beurrenature.title = "Pasta con mantequilla"

        state.menu.enfant.steak.title ="Filete picado y patatas fritas"

        state.menu.enfant.nuggets.title = "Nuggets de pollo frito"

        state.menu.desserts.tartetatin.title = "Tarte Tatin, Chantilly o Pudding"

        state.menu.desserts.tiramisu.title = "Tiramisú"

        state.menu.desserts.brownie.title = "Brownie de chocolate y nueces"

        state.menu.desserts.creme.title = "Crème brulée"

        state.menu.desserts.tartecitron.title = "Tarta de limón y merengue"

        state.menu.desserts.pizzanutella.title = "Pizza Nutella"

      },
      de(state) {
        
        state.menu.entrees.section = "Vorspeisen"


        state.menu.entrees.goatcheesesalad.title = "Warmer Ziegenkäsesalat"
        state.menu.entrees.goatcheesesalad.ingredients = "im Blätterteig, Schmalzstullen, sautierte Zwiebeln"

        state.menu.entrees.cuttlefishsalad.title = "Tintenfischsalat"
        state.menu.entrees.cuttlefishsalad.ingredients = "mit schwarzen Oliven und lokaler Kräutervinaigrette"

        state.menu.entrees.tomatosalad.title = "Tomatensalat 'Rinderherz'"
        state.menu.entrees.tomatosalad.ingredients = "mit Burrata-Käse, Basilikum-Pesto"
        
        state.menu.entrees.caesarsalad.title = "Caesar Salat"
        state.menu.entrees.caesarsalad.ingredients = "mit Hähnchenbrust, Croutons, Parmesan"

        state.menu.entrees.tatar.title = "Tartar von frischem Thunfisch"
        state.menu.entrees.tatar.ingredients = "mit lokalen Gewürzen, orientalisches Dressing"

        state.menu.plats.section = "Hauptspeisen"


        state.menu.plats.saute.title = "Sauté vom korsischen Kalb"
        state.menu.plats.saute.ingredients = "mit Myrte, Apfelmousseline mit Sommertrüffel"

        state.menu.plats.filet.title = "Filet vom Saint-Pierre"
        state.menu.plats.filet.ingredients = "zerdrückter Apfel mit Schnittlauch, Zitronenbutter, Brokkoliröschen"
        
        state.menu.plats.moules.title = "Frische Muscheln aus 'Diana'"
        state.menu.plats.moules.ingredients = "Marinière oder Sahne mit korsischem Wein"
        
        state.menu.plats.lasagne.title = "Hausgemachte Lasagne"
        state.menu.plats.lasagne.ingredients = "auf Tomatensauce"

        state.menu.plats.saumon.title = "Lachssteak"
        state.menu.plats.saumon.ingredients = "Sauce marinière, zerkleinerter Apfel mit Schnittlauch, Brokkoliröschen"

        state.menu.pasta.section = "Pasta"

        state.menu.pasta.truffe.title = "Linguini mit sommerlicher Trüffelcreme"

        state.menu.pasta.fruitsdemer.title = "Linguini mit Meeresfrüchten und Tomatensauce"
        state.menu.pasta.fruitsdemer.ingredients = "Garnelen, Vonzgole, Moles, Jakobsmuscheln"

        state.menu.pasta.carbonara.title = "Linguini mit Carbonara-Sauce"

        state.menu.grillades.section = "Gegrilltes"

        state.menu.grillades.entrecote.title = "Entrecote vom Rind"

        state.menu.grillades.chimichurri.title = "Frisches Thunfischsteak 'Chimichurri' oder Provençale"
        state.menu.grillades.chimichurri.ingredients = "Soße wird als Beilage serviert"

        state.menu.grillades.loup.title = "Gegrillter Wolfsbarsch mit Kräutern"

        state.menu.grillades.coquelet.title = "Ganz gegrilltes Hähnchen in der Schale"

        state.menu.grillades.brochette.title = "Spieß mit großen Garnelen in Marinade"
        state.menu.grillades.brochette.ingredients = "separat serviert"

        state.menu.grillades.gigot.title = "Spieß von der Lammkeule gegrillt"
        state.menu.grillades.gigot.ingredients = "mit Thymian"
        
        state.menu.grillades.assiette.title = "Vegetarischer Teller"
        state.menu.grillades.assiette.ingredients = "Auswahl an frischem gegrilltem Gemüse des Tages und Kartoffeln nach Wahl"

        state.menu.grillades.sauce.title = "Extra Soße mit Pfeffer oder korsischem Tome"

        state.menu.pizza.margherita.ingredients = "Tomate, Mozzarella"

        state.menu.pizza.hawaii.ingredients = "Tomate, Mozzarella, Schinken, Ananas"

        state.menu.pizza.napolitana.ingredients = "Tomate, Mozzarella, Kapern, Sardellen, schwarze Oliven"

        state.menu.pizza.regina.ingredients = "Tomate, Mozzarella, Schinken, Champignons, schwarze Oliven"

        state.menu.pizza.quattroformaggi.ingredients = "Tomate, Mozzarella, Korsischer Dom, Ziege, Parmesan"

        state.menu.pizza.veggi.ingredients = "TTomate, Mozzarella, Zucchini, Auberginen, Paprika, Champignons"

        state.menu.pizza.diavolo.ingredients = "Tomate, Mozzarella, schwarze Oliven, Chorizo"

        state.menu.pizza.capricciosa.ingredients = "TTomate, Mozzarella, Schinken, Champignons, schwarze Oliven, Chorizo"

        state.menu.pizza.burrata.ingredients = "Tomate, Mozzarella, Rucola, Kirschtomaten, Burrata"

        state.menu.pizza.pescatore.ingredients = "Tomate, Mozzarella, Thunfisch, Peperoni, schwarze Oliven"

        state.menu.pizza.fruttidimare.ingredients = "Tomate, Mozzarella, Meeresfrüchte, schwarze Oliven"

        state.menu.pizza.jeanclaude.ingredients = "Sahne, korsischer Tome, Mozzarella, Ei, Sommertrüffel"

        state.menu.enfant.section = "Kindermenü"

        state.menu.enfant.beurrenature.title = "Nudeln mit Butter"

        state.menu.enfant.steak.title ="Gehacktes Steak und Pommes"

        state.menu.enfant.nuggets.title = "Gebratene Hähnchen-Nuggets"

        state.menu.desserts.tartetatin.title = "Tarte Tatin, Chantilly oder Pudding"

        state.menu.desserts.tiramisu.title = "Tiramisu"

        state.menu.desserts.brownie.title = "Schokoladen-Pekannuss-Brownie"

        state.menu.desserts.creme.title = "Crème brulée"

        state.menu.desserts.tartecitron.title = "Zitronenbaiserkuchen"

        state.menu.desserts.pizzanutella.title = "Pizza Nutella"

      },
      it(state) {
        state.menu.entrees.section = "Avviamento"


        state.menu.entrees.goatcheesesalad.title = "Insalata calda di formaggio di capra"
        state.menu.entrees.goatcheesesalad.ingredients = "in pasta sfoglia, lardoni, cipolle saltate"

        state.menu.entrees.cuttlefishsalad.title = "Insalata di polpo"
        state.menu.entrees.cuttlefishsalad.ingredients = "con olive nere e vinaigrette alle erbe locali"

        state.menu.entrees.tomatosalad.title = "Insalata di pomodoro 'cuore di manzo'"
        state.menu.entrees.tomatosalad.ingredients = "con burrata, pesto di basilico"
        
        state.menu.entrees.caesarsalad.title = "Caesar Salad"
        state.menu.entrees.caesarsalad.ingredients = "con petto di pollo, crostini, parmigiano"

        state.menu.entrees.tatar.title = "Tartara di tonno fresco"
        state.menu.entrees.tatar.ingredients = "con spezie locali, condimento orientale"

        state.menu.plats.section = "Piatti principali"


        state.menu.plats.saute.title = "Sauté di vitello corso"
        state.menu.plats.saute.ingredients = "al mirto, mousseline di mele al tartufo estivo"

        state.menu.plats.filet.title = "Filetto di Saint-Pierre"
        state.menu.plats.filet.ingredients = "zmela schiacciata con erba cipollina, burro al limone, cimette di broccoli"
        
        state.menu.plats.moules.title = "Cozze fresche di 'Diana'"
        state.menu.plats.moules.ingredients = "marinière o crema con vino corso"
        
        state.menu.plats.lasagne.title = "Lasagne fatte in casa"
        state.menu.plats.lasagne.ingredients = "su salsa di pomodoro"

        state.menu.plats.saumon.title = "Bistecca di salmone"
        state.menu.plats.saumon.ingredients = "salsa marinière, mela schiacciata con erba cipollina, cimette di broccoli"

        state.menu.pasta.section = "Pasta"

        state.menu.pasta.truffe.title = "Linguine con crema di tartufo estivo"

        state.menu.pasta.fruitsdemer.title = "Linguine con frutti di mare e salsa di pomodoro"
        state.menu.pasta.fruitsdemer.ingredients = "gamberi, vonzgole, moli, capesante"

        state.menu.pasta.carbonara.title = "Linguine alla carbonara"

        state.menu.grillades.section = "Grigliata"

        state.menu.grillades.entrecote.title = "Entrecote di manzo"

        state.menu.grillades.chimichurri.title = "Bistecca di tonno fresco 'Chimichurri' o Provenzale"
        state.menu.grillades.chimichurri.ingredients = "la salsa è servita a lato"

        state.menu.grillades.loup.title = "Branzino alla griglia con erbe"

        state.menu.grillades.coquelet.title = "Gallo intero alla griglia nel guscio"

        state.menu.grillades.brochette.title = "piedino di gamberoni in marinata"
        state.menu.grillades.brochette.ingredients = "servito separatamente"

        state.menu.grillades.gigot.title = "SSpiedino di coscia d'agnello alla griglia"
        state.menu.grillades.gigot.ingredients = "con timo"
        
        state.menu.grillades.assiette.title = "Piatto vegetariano"
        state.menu.grillades.assiette.ingredients = "scelta di verdure fresche grigliate del giorno e patate a scelta"

        state.menu.grillades.sauce.title = "Salsa extra con pepe o tomo corso"

        state.menu.pizza.margherita.ingredients = "pomodoro, mozzarella"

        state.menu.pizza.hawaii.ingredients = "pomodoro, mozzarella, prosciutto, ananas"

        state.menu.pizza.napolitana.ingredients = "pomodoro, mozzarella, capperi, acciughe, olive nere"

        state.menu.pizza.regina.ingredients = "pomodoro, mozzarella, prosciutto, funghi, olive nere"

        state.menu.pizza.quattroformaggi.ingredients = "pomodoro, mozzarella, Dom Corso, capra, parmigiano"

        state.menu.pizza.veggi.ingredients = "pomodoro, mozzarella, zucchine, melanzane, peperoni, funghi"

        state.menu.pizza.diavolo.ingredients = "pomodoro, mozzarella, olive nere, chorizo"

        state.menu.pizza.capricciosa.ingredients = "pomodoro, mozzarella, prosciutto, funghi, olive nere, chorizo"

        state.menu.pizza.burrata.ingredients = "pomodoro, mozzarella, rucola, pomodorini, burrata"

        state.menu.pizza.pescatore.ingredients = "pomodoro, mozzarella, tonno, peperoni, olive nere"

        state.menu.pizza.fruttidimare.ingredients = "pomodoro, mozzarella, frutti di mare, olive nere"

        state.menu.pizza.jeanclaude.ingredients = "crema, tomo corso, mozzarella, uovo, tartufo estivo"

        state.menu.enfant.section = "Menu per bambini"

        state.menu.enfant.beurrenature.title = "Pasta al burro"

        state.menu.enfant.steak.title ="Bistecca tritata e patatine"

        state.menu.enfant.nuggets.title = "Crocchette di pollo fritte"

        state.menu.desserts.tartetatin.title = "Tarte Tatin, Chantilly o Pudding"

        state.menu.desserts.tiramisu.title = "Tiramisù"

        state.menu.desserts.brownie.title = "Brownie al cioccolato e noci pecan"

        state.menu.desserts.creme.title = "Crème brulée"

        state.menu.desserts.tartecitron.title = "Torta di meringa al limone"

        state.menu.desserts.pizzanutella.title = "Pizza Nutella"
      },
      fr(state) {
        state.menu.entrees.section = "Entrées"

        state.menu.entrees.goatcheesesalad.title = "Salade de chèvre chaud"
        state.menu.entrees.goatcheesesalad.ingredients = "en feuille de brick, lardons, oignons sautés"

        state.menu.entrees.cuttlefishsalad.title = "Salade de seiche"
        state.menu.entrees.cuttlefishsalad.ingredients = "aux olives noires et vinaigrette aux herbes du pays"

        state.menu.entrees.tomatosalad.title = "Salade de tomate « Coeur de boeuf »"
        state.menu.entrees.tomatosalad.ingredients = "cà la Burrata, pesto de basilic"
        
        state.menu.entrees.caesarsalad.title = "Salade César"
        state.menu.entrees.caesarsalad.ingredients = "au blanc de poulet, croutons, parmesan"

        state.menu.entrees.tatar.title = "Tartare de thon frais"
        state.menu.entrees.tatar.ingredients = "aux épices du pays, vinaigrette orientale"

        state.menu.plats.section = "Plats"


        state.menu.plats.saute.title = "Sauté de veau corse"
        state.menu.plats.saute.ingredients = "à la Myrte, pomme mousseline à la « truffe d'été »"

        state.menu.plats.filet.title = "Filet de Saint-Pierre"
        state.menu.plats.filet.ingredients = "pomme écrasées à la ciboulette, beurre blanc citronné, fleurettes de brocoli"
        
        state.menu.plats.moules.title = "Moules fraîche de 'Diana'"
        state.menu.plats.moules.ingredients = "Marinière ou crème à la tome Corse"
        
        state.menu.plats.lasagne.title = "Lasagne maison"
        state.menu.plats.lasagne.ingredients = "sur sauce tomate"

        state.menu.plats.saumon.title = "Pavé de saumon"
        state.menu.plats.saumon.ingredients = "sauce marinière, pomme écrasées à la ciboulette, fleurettes de brocoli"

        state.menu.pasta.section = "Pasta"

        state.menu.pasta.truffe.title = "Linguini à la crème de Truffe d'été"

        state.menu.pasta.fruitsdemer.title = "Linguini aux fruits de mer à la sauce tomate"
        state.menu.pasta.fruitsdemer.ingredients = "Crevettes, Vonzgole, Moles, Noix de Saint-Jacques"

        state.menu.pasta.carbonara.title = "Linguini à la carbonara"

        state.menu.grillades.section = "Grillades"

        state.menu.grillades.entrecote.title = "Entrecôte de boeuf"

        state.menu.grillades.chimichurri.title = "Pavé de thon frais « Chimichurri » ou Provençale"
        state.menu.grillades.chimichurri.ingredients = "Sauce servie à part"

        state.menu.grillades.loup.title = "Loup grillé aux herbes"

        state.menu.grillades.coquelet.title = "Coquelet grillé entier en crapaudine"

        state.menu.grillades.brochette.title = "Brochette de grosses crevettes"
        state.menu.grillades.brochette.ingredients = "en marinade"

        state.menu.grillades.gigot.title = "Brochette de gigot d'agneau grillée"
        state.menu.grillades.gigot.ingredients = "au thym"
        
        state.menu.grillades.assiette.title = "Assiette végétarienne"
        state.menu.grillades.assiette.ingredients = "Assortiment de légumes frais du jour grillés et pommes de terre au choix"

        state.menu.grillades.sauce.title = "Sauce en supplément poivre ou Tome Corse"

        state.menu.pizza.margherita.ingredients = "Tomate, Mozzarella"

        state.menu.pizza.hawaii.ingredients = "Tomate, Mozzarella, Jambon, Ananas"

        state.menu.pizza.napolitana.ingredients = "Tomate, Mozzarella, Câpres, Anchois. Olives noires"

        state.menu.pizza.regina.ingredients = "Tomate, Mozzarella, Jambon, Champignons, Olives noires"

        state.menu.pizza.quattroformaggi.ingredients = "Tomate, Mozzarella, Tome Corse, Chèvre, Parmesan"

        state.menu.pizza.veggi.ingredients = "Tomate, Mozzarella, Courgettes. Aubergines. Poivrons, Champignons"

        state.menu.pizza.diavolo.ingredients = "Tomate, Mozzarella, Olives noires, Chorizo"
        
        state.menu.pizza.capricciosa.ingredients = "Tomate, Mozzarella, Jambon, Champignons, Olives noires, Chorizo"

        state.menu.pizza.burrata.ingredients = "Tomate, Mozzarella, Roquette, Tomates cerise, Burrata"

        state.menu.pizza.pescatore.ingredients = "Tomate, Mozzarella, Thon, Pepperoni, Olives noires"

        state.menu.pizza.fruttidimare.ingredients = "Tomate, Mozzarella, Fruits de mer, Olives noires"

        state.menu.pizza.jeanclaude.ingredients = "Crème, Tome Corse, Mozzarella, Œuf, Truffe d'été"

        state.menu.enfant.section = "Menu Enfant"

        state.menu.enfant.beurrenature.title = "Pâtes au beurre nature"

        state.menu.enfant.steak.title ="Steak haché frites"

        state.menu.enfant.nuggets.title = "Nuggets de poulet frites"

        state.menu.desserts.tartetatin.title = "Tarte Tatin, chantilly ou crème anglaise"

        state.menu.desserts.tiramisu.title = "Tiramisu"

        state.menu.desserts.brownie.title = "Brownie au chocolat et noix de pécan"

        state.menu.desserts.creme.title = "Crème brulée"

        state.menu.desserts.tartecitron.title = "Tarte citron meringuée"

        state.menu.desserts.pizzanutella.title = "Pizza Nutella"
      },
    },
  })
}

export default createStore
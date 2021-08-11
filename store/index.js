import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      menu: {
        entrees: {
          section: "Entrées",
          goatcheesesalad: {
            title: "Salade de chèvre chaud",
            art: " ",
            ingredients: "en feuille de brick, lardons, oignons sautés ",
            price: "14,50 €"
          },
          cuttlefishsalad: {
            title: "Salade de seiche",
            art: " ",
            ingredients: "aux olives noires et vinaigrette aux herbes du pays",
            price: "15,00 €"
          },
          tomatosalad: {
            title: "Salade de tomate « Coeur de boeuf »",
            art: " ",
            ingredients: "à la Burrata, pesto de basilic",
            price: "16,00 €"
          },
          caesarsalad: {
            title: "Salade César",
            art: " ",
            ingredients: "au blanc de poulet, croutons, parmesan ",
            price: "16,00 €"
          },
          tatar: {
            title: "Tartare de thon frais",
            art: " ",
            ingredients: "aux épices du pays, vinaigrette orientale",
            price: "14,00 €"
          },
        },
        plats: {
          section: "Plats",
          saute: {
            title: "Sauté de veau à la Myrte",
            art: " ",
            ingredients: "pomme mousseline à la « truffe d'été »",
            price: "19,00 €"
          },
          filet: {
            title: "Filet de Saint-Pierre",
            art: " ",
            ingredients: "pomme écrasées à la ciboulette, beurre blanc citronné, fleurettes de brocoli",
            price: "20,00 €"
          },
          moules: {
            title: "Moules fraîche",
            art: " ",
            ingredients: "Marinière ou crème à la tome Corse",
            price: "14,50 €"
          },
          lasagne: {
            title: "Lasagne bolognaise",
            art: " ",
            ingredients: " ",
            price: "15,00 €"
          },
          saumon: {
            title: "Pavé de saumon",
            art: " ",
            ingredients: "sauce marinière, pomme écrasées à la ciboulette, fleurettes de brocoli ",
            price: "19,00 €"
          },
        },
        pasta: {
          section: "Pates « Rummo » ",
          truffe: {
            title: "Linguini à la crème de Truffes/Champignons",
            art: "🌱",
            ingredients: " ",
            price: "17,00 €"
          },
          fruitsdemer: {
            title: "Linguini aux fruits de mer à la sauce tomate",
            art: " ",
            ingredients: "Crevettes, Vonzgole, Moles, Noix de Saint-Jacques",
            price: "18,50 €"
          },
          carbonara: {
            title: "Linguini à la carbonara",
            art: " ",
            ingredients: " ",
            price: "16,00 €"
          },
        },
        grillades: {
          section: "Grillades",
          info: "Toutes nos grillades sont servies avec des légumes frais grillés ou frites",
          entrecote: {
            title: "Entrecôte de boeuf",
            art: " ",
            ingredients: " ",
            price: "21,00 €"
          },
          chimichurri: {
            title: "Pavé de thon frais « Chimichurri » ou Provençale",
            art: " ",
            ingredients: "Sauce servie à part",
            price: "18,00 €"
          },
          loup: {
            title: "Loup grillé aux herbes",
            art: " ",
            ingredients: " ",
            price: "22,00 €"
          },
          coquelet: {
            title: "Coquelet grillé entier en crapaudine",
            art: " ",
            ingredients: " ",
            price: "15,00 €"
          },
          brochette: {
            title: "Brochette de grosses crevettes",
            art: " ",
            ingredients: "en marinade",
            price: "18,50 €"
          },
          gigot: {
            title: "Brochette de gigot d'agneau",
            art: " ",
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
            ingredients: " ",
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
            art: " ",
            ingredients: "Tomate, Mozzarella, Jambon, Ananas",
            price: "9,50 €"
          },
          napolitana: {
            title: "Napolitana",
            art: " ",
            ingredients: "Tomate, Mozzarella, Câpres, Anchois. Olives noires",
            price: "10,50 €"
          },
          regina: {
            title: "Regina",
            art: " ",
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
            art: " ",
            ingredients: "Tomate, Mozzarella, Olives noires, Chorizo",
            price: "12,00 €"
          },
          capricciosa: {
            title: "Capricciosa",
            art: " ",
            ingredients: "Tomate, Mozzarella, Jambon, Champignons, Olives noires, Chorizo",
            price: "12,50 €"
          },
          burrata: {
            title: "Burrata",
            art: " ",
            ingredients: "Tomate, Mozzarella, Roquette, Tomates cerise, Burrata",
            price: "14,00 €"
          },
          pescatore: {
            title: "Pescatore",
            art: " ",
            ingredients: "Tomate, Mozzarella, Thon, Pepperoni, Olives noires",
            price: "12,00 €"
          },
          fruttidimare: {
            title: "Frutti di Mare",
            art: " ",
            ingredients: "Tomate, Mozzarella, Fruits de mer, Olives noires",
            price: "14,00 €"
          },
          jeanclaude: {
            title: "Jean Claude",
            art: "🌱",
            ingredients: "Crème, Tome Corse, Mozzarella, Œuf, Crème de Truffes/Champignons",
            price: "14,50 €"
          },
        },
        enfant: {
          section: "Menu Enfant",
          beurrenature: {
            title: "Pâtes au beurre nature",
            art: "🌱",
            ingredients: " ",
            price: "4,50 €"
          },
          steak: {
            title: "Steak haché frites",
            art: " ",
            ingredients: " ",
            price: "7,50 €"
          },
          nuggets: {
            title: "Nuggets de poulet frites",
            art: " ",
            ingredients: " ",
            price: "7,00 €"
          }
        },
        desserts: {
          section: "Desserts",
          tartetatin: {
            title: "Tarte Tatin, chantilly ou crème anglaise",
            art: "🌱",
            ingredients: " ",
            price: "7,00 €"
          },
          tiramisu: {
            title: "Tiramisu",
            art: "🌱",
            ingredients: " ",
            price: "6,50 €"
          },
          brownie: {
            title: "Brownie au chocolat et noix de pécan",
            art: "🌱",
            ingredients: " ",
            price: "7,50 €"
          },
          creme: {
            title: "Crème brulée",
            art: "🌱",
            ingredients: " ",
            price: "6,50 €"
          },
          tartecitron: {
            title: "Tarte citron meringuée",
            art: "🌱",
            ingredients: " ",
            price: "7,00 €"
          },
          pizzanutella: {
            title: "Pizza Nutella",
            art: "🌱",
            ingredients: " ",
            price: "8,00 €"
          },
        }
      }
    },
    mutations: {
      en(state) {

        state.menu.entrees.section = "Entrees"


        state.menu.entrees.goatcheesesalad.title = "Hot goat cheese salad"
        state.menu.entrees.goatcheesesalad.ingredients = "in brick pastry, bacon and sauted oinions"

        state.menu.entrees.cuttlefishsalad.title = "Cuttlefish salad"
        state.menu.entrees.cuttlefishsalad.ingredients = "with black olives and local herb vinaigrette"

        state.menu.entrees.tomatosalad.title = "'Beef heart' Tomato salad"
        state.menu.entrees.tomatosalad.ingredients = "with burrata basil pesto"
        
        state.menu.entrees.caesarsalad.title = "Chicken breast Cesar salad"
        state.menu.entrees.caesarsalad.ingredients = "with croutons and parmesan"

        state.menu.entrees.tatar.title = "Fresh tuna tartare"
        state.menu.entrees.tatar.ingredients = "with local spices, oriental vinaigrette"

        state.menu.plats.section = "Plats"


        state.menu.plats.saute.title = "Veal sauted"
        state.menu.plats.saute.ingredients = "with myrte mousseline potatoes truffle cream"

        state.menu.plats.filet.title = "Saint Pierre filet"
        state.menu.plats.filet.ingredients = "crushed potatoes with chives, lemon white butter, broccoli floret"
        
        state.menu.plats.moules.title = "Fresh mussels"
        state.menu.plats.moules.ingredients = "marinated or Corsican tome and pecorino cheese"
        
        state.menu.plats.lasagne.title = "Bolognese lasagna"
        state.menu.plats.lasagne.ingredients = " "

        state.menu.plats.saumon.title = "Salmon steak"
        state.menu.plats.saumon.ingredients = "marinated sauce, mashed potatoes with chives, broccoli florets"

        state.menu.pasta.section = "Pasta 'Rummo'"

        state.menu.pasta.truffe.title = "Linguini with truffle cream and mushroom"

        state.menu.pasta.fruitsdemer.title = "Linguini Seafood with tomato sauce"
        state.menu.pasta.fruitsdemer.ingredients = "Shrimps, Vonzgole, Moles, Scallops"

        state.menu.pasta.carbonara.title = "Linguini à la carbonara"
        state.menu.pasta.carbonara.ingredients = " "

        state.menu.grillades.section = "Grill"
        state.menu.grillades.info = "All our grilled meats are served with freshly grilled vegetables or chips"

        state.menu.grillades.entrecote.title = "Beef steak"

        state.menu.grillades.chimichurri.title = "Tuna Slice with chimichurri or provençal"
        state.menu.grillades.chimichurri.ingredients = "sauce served separately "

        state.menu.grillades.loup.title = "Grilled sea bass fish with herbs"
        state.menu.grillades.loup.ingredients = " "

        state.menu.grillades.coquelet.title = "Roasted cockerel in crapaudine mode"
        state.menu.grillades.coquelet.ingredients = " "

        state.menu.grillades.brochette.title = "Large shrimp skewer marinated"
        state.menu.grillades.brochette.ingredients = "served separately"

        state.menu.grillades.gigot.title = "Lamb skewer"
        state.menu.grillades.gigot.ingredients = "with thyme"
        
        state.menu.grillades.assiette.title = "Vegetarian plate"
        state.menu.grillades.assiette.ingredients = "fresh vegetables mix and potatoes"

        state.menu.grillades.sauce.title = "Sauce in addition"
        state.menu.grillades.sauce.ingredients = "Pepper or Corsican Tome"


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

        state.menu.enfant.beurrenature.title = "Plain butter pasta"

        state.menu.enfant.steak.title ="Minced steak and fries"

        state.menu.enfant.nuggets.title = "Fried chicken nuggets and fries"

        state.menu.desserts.tartetatin.title = "Tatin Tart hipped cream or custard"

        state.menu.desserts.tiramisu.title = "Tiramisu"

        state.menu.desserts.brownie.title = "Chocolate and pecan brownies"

        state.menu.desserts.creme.title = "Crème brulée"

        state.menu.desserts.tartecitron.title = "Lemon meringue pie"

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
        state.menu.grillades.info = "Alle unsere gegrillten Fleischsorten werden mit frisch gegrilltem Gemüse oder Pommes serviert"

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

        state.menu.grillades.sauce.title = "Extra Soße"
        state.menu.grillades.sauce.ingredients = "mit Pfeffer oder korsischem Tome"

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


        state.menu.entrees.goatcheesesalad.title = "Insalata con formaggio di capra (caldo)"
        state.menu.entrees.goatcheesesalad.ingredients = "in pasta sfoglia, bacon e cipolla stufata"

        state.menu.entrees.cuttlefishsalad.title = "Insalata di calamari"
        state.menu.entrees.cuttlefishsalad.ingredients = "con olive nere e vinaigrette alle erbe corse"

        state.menu.entrees.tomatosalad.title = "Insalata Caprese"
        state.menu.entrees.tomatosalad.ingredients = "con burrata, pomodoro 'cuore di bue' e pesto"
        
        state.menu.entrees.caesarsalad.title = "Insalata Cesare"
        state.menu.entrees.caesarsalad.ingredients = "con petto di pollo, croutons e parmigiano"

        state.menu.entrees.tatar.title = "Tartare di tonno fresco"
        state.menu.entrees.tatar.ingredients = "con spezie e vinaigrette orientale"

        state.menu.plats.section = "Piatti principali"


        state.menu.plats.saute.title = "Spezzatino di vitello"
        state.menu.plats.saute.ingredients = "al mirto con purè di patate al tartufo"

        state.menu.plats.filet.title = "Filetto di San Pietro"
        state.menu.plats.filet.ingredients = "con pure di patate con erba cipollina, burro al limone e cime di broccoli"
        
        state.menu.plats.moules.title = "Cozze"
        state.menu.plats.moules.ingredients = "Marinara / crema e pecorino corso"
        
        state.menu.plats.lasagne.title = "Lasagne Bolognese"
        state.menu.plats.lasagne.ingredients = " "

        state.menu.plats.saumon.title = "Trancio di salmone"
        state.menu.plats.saumon.ingredients = "in salsa marinata purè di patate con erbe cipollina e cime di broccoli"

        state.menu.pasta.section = 'Pasta "Rummo"'

        state.menu.pasta.truffe.title = "Linguine con crema di tartufo/funghi"

        state.menu.pasta.fruitsdemer.title = "Linguine ai frutti di mare"
        state.menu.pasta.fruitsdemer.ingredients = "Gamberi, vongole, cozze, capesante"

        state.menu.pasta.carbonara.title = "Linguine alla carbonara"

        state.menu.grillades.section = "Grigliata"
        state.menu.grillades.info = "Tutte le nostre carni alla griglia sono servite con verdure o patatine fritte appena grigliate"

        state.menu.grillades.entrecote.title = "Entrecote di manzo"

        state.menu.grillades.chimichurri.title = "Trancio di Tonno"
        state.menu.grillades.chimichurri.ingredients = "con salsa chimichurri / provenzale servito a lato"

        state.menu.grillades.loup.title = "Branzino alle erbe"

        state.menu.grillades.coquelet.title = "Galletto alla diavola"

        state.menu.grillades.brochette.title = "Spiedini code di Gambero marinate"
        state.menu.grillades.brochette.ingredients = "servito separatamente"

        state.menu.grillades.gigot.title = "Spiedino d'agnello"
        state.menu.grillades.gigot.ingredients = "con timo"
        
        state.menu.grillades.assiette.title = "Piatto Vegetariano"
        state.menu.grillades.assiette.ingredients = "con verdure del giorno e patate"

        state.menu.grillades.sauce.title = "Supplemento salsa al pepe / Tome corse"
        state.menu.grillades.sauce.ingredients = "crema e pecorino corso"

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
        state.menu.entrees.tomatosalad.ingredients = "à la Burrata, pesto de basilic"
        
        state.menu.entrees.caesarsalad.title = "Salade César"
        state.menu.entrees.caesarsalad.ingredients = "au blanc de poulet, croutons, parmesan"

        state.menu.entrees.tatar.title = "Tartare de thon frais"
        state.menu.entrees.tatar.ingredients = "aux épices du pays, vinaigrette orientale"

        state.menu.plats.section = "Plats"


        state.menu.plats.saute.title = "Sauté de veau à la Myrte"
        state.menu.plats.saute.ingredients = "pomme mousseline à la « truffe d'été »"

        state.menu.plats.filet.title = "Filet de Saint-Pierre"
        state.menu.plats.filet.ingredients = "pomme écrasées à la ciboulette, beurre blanc citronné, fleurettes de brocoli"
        
        state.menu.plats.moules.title = "Moules fraîche"
        state.menu.plats.moules.ingredients = "Marinière ou crème à la tome Corse"
        
        state.menu.plats.lasagne.title = "Lasagne bolognaise"
        state.menu.plats.lasagne.ingredients = " "

        state.menu.plats.saumon.title = "Pavé de saumon"
        state.menu.plats.saumon.ingredients = "sauce marinière, pomme écrasées à la ciboulette, fleurettes de brocoli"

        state.menu.pasta.section = "Pates « Rummo » "

        state.menu.pasta.truffe.title = "Linguini à la crème de Truffes/Champignons"

        state.menu.pasta.fruitsdemer.title = "Linguini aux fruits de mer à la sauce tomate"
        state.menu.pasta.fruitsdemer.ingredients = "Crevettes, Vonzgole, Moles, Noix de Saint-Jacques"

        state.menu.pasta.carbonara.title = "Linguini à la carbonara"

        state.menu.grillades.section = "Grillades"
        state.menu.grillades.info = "Toutes nos grillades sont servies avec des légumes frais grillés ou frites"

        state.menu.grillades.entrecote.title = "Entrecôte de boeuf"

        state.menu.grillades.chimichurri.title = "Pavé de thon frais « Chimichurri » ou Provençale"
        state.menu.grillades.chimichurri.ingredients = "Sauce servie à part"

        state.menu.grillades.loup.title = "Loup grillé aux herbes"

        state.menu.grillades.coquelet.title = "Coquelet grillé entier en crapaudine"

        state.menu.grillades.brochette.title = "Brochette de grosses crevettes"
        state.menu.grillades.brochette.ingredients = "en marinade"

        state.menu.grillades.gigot.title = "Brochette de gigot d'agneau"
        state.menu.grillades.gigot.ingredients = "grillée au thym"
        
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

        state.menu.pizza.jeanclaude.ingredients = "Crème, Tome Corse, Mozzarella, Œuf, Crème de Truffes/Champignons"

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
},)
}

export default createStore
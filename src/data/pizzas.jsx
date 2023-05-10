import {v4} from "uuid"
export const products = [{
    "id": v4(),
    "pizza_name": "MUZZARELLA",
    "description": "La pizza muzzarella es un plato clásico de la cocina italiana, que consiste en una base de masa de pizza cubierta con salsa de tomate y queso mozzarella de alta calidad. Horneamos nuestra pizza a alta temperatura para que la masa quede crujiente y el queso se funda y se dore ligeramente en la parte superior.",
    "price": 3600,
    "toppings": "Salsa de tomate, queso mozzarella, aceitunas",
    "crust_type": "Al molde",
    "size": "8 porciones",
    "delivery_time": 25,
    "vegetarian": true,
    "gluten_free": true,
    "img": require("./../assets/img/molde/MUZZARELLA.jpg")
  }, {
    "id": v4(),
    "pizza_name": "ESPECIAL DE JAMÓN",
    "description": "Preparamos nuestra masa de pizza diariamente y la cubrimos con nuestra salsa de tomate casera, queso mozzarella, jamón y otros ingredientes seleccionados cuidadosamente. Horneamos nuestra pizza a alta temperatura para que la masa quede crujiente en el exterior y suave en el interior, y para que el queso se funda y se dore ligeramente en la parte superior. ",
    "price": 5100,
    "toppings": "Salsa de tomate, queso mozzarella, jamón cocido y aceitunas",
    "crust_type": "Al molde",
    "size": "8 porciones",
    "delivery_time": 55,
    "vegetarian": false,
    "gluten_free": false,
    "img": require("./../assets/img/molde/ESPECIALJAMON.jpg")
  }, {
    "id": v4(),
    "pizza_name": "NAPOLITANA",
    "description": "Preparamos nuestra masa de pizza siguiendo la receta tradicional napolitana, utilizando solo ingredientes simples y de alta calidad. La cubrimos con nuestra salsa de tomate casera y queso mozzarella fresco, y la horneamos a alta temperatura en nuestro horno de leña para lograr una masa suave y esponjosa con un borde crujiente. ",
    "price": 4300,
    "toppings": "Salsa de tomate, queso mozzarella, rodajas de tomates y aceitunas",
    "crust_type": "Al molde",
    "size": "8 porciones",
    "delivery_time": 45,
    "vegetarian": true,
    "gluten_free": false,
    "img": require("./../assets/img/molde/NAPOLITANA.jpg")
  }, {
    "id": v4(),
    "pizza_name": "NAPOLITANA CON JAMÓN Y MORRÓN",
    "description": "Preparamos nuestra masa de pizza siguiendo la receta napolitana, utilizando solo ingredientes simples y de alta calidad. Cubrimos nuestra pizza con salsa de tomate casera, queso mozzarella fresco, jamón cocido y morrones asados. Horneamos nuestra pizza en nuestro horno de leña para lograr una masa suave y esponjosa con un borde crujiente. ",
    "price": 5200,
    "toppings": "Salsa de tomate, queso mozzarella, rodajas de tomates, jamón cocido, morrón y aceitunas",
    "crust_type": "Al molde",
    "size": "8 porciones",
    "delivery_time": 38,
    "vegetarian": false,
    "gluten_free": true,
    "img": require("./../assets/img/molde/NAPOLITANAJAMONMORRON.jpg")
  }, {
    "id": v4(),
    "pizza_name": "4 QUESOS",
    "description": "Nuestra pizza 4 quesos es la combinación perfecta de quesos de alta calidad que se funden en armonía en cada bocado. Preparamos nuestra masa de pizza con ingredientes simples y auténticos. La cubrimos con una mezcla de cuatro quesos diferentes: queso mozzarella fresco, queso roquefort, queso parmesano y queso provolone. Horneamos nuestra pizza en nuestro horno de leña para lograr una masa suave y esponjosa con un borde crujiente. Cada bocado de nuestra pizza 4 quesos es una experiencia deliciosa e irresistible que no te querrás perder.",
    "price": 4600,
    "toppings": "Salsa de tomate, queso mozzarella, queso roquefort, queso parmesano, queso provolone y aceitunas",
    "crust_type": "Al molde",
    "size": "8 porciones",
    "delivery_time": 34,
    "vegetarian": true,
    "gluten_free": false,
    "img": require("./../assets/img/molde/CUATROQUESOS.jpg")
  }, {
    "id": v4(),
    "pizza_name": "CANTIMPALO",
    "description": "Nuestra pizza de cantimpalo es una opción sabrosa y picante. Preparamos nuestra masa de pizza de manera tradicional, utilizando harina de trigo, levadura, agua y sal. Cubrimos nuestra pizza con una deliciosa salsa de tomate casera y agregamos generosas porciones de cantimpalo, un tipo de salami español, cortado en rodajas finas. También añadimos queso mozzarella fresco y horneamos la pizza en nuestro horno de leña para obtener una base crujiente y una cobertura perfectamente derretida.",
    "price": 4600,
    "toppings": "Salsa de tomate, queso mozzarella, salame cantimpalo y aceitunas",
    "crust_type": "Al molde",
    "size": "8 porciones",
    "delivery_time": 31,
    "vegetarian": false,
    "gluten_free": false,
    "img": require("./../assets/img/molde/CANTIMPALO.jpg")
  }, {
    "id": v4(),
    "pizza_name": "ANCHOAS",
    "description": "Comenzamos con una masa de pizza preparada de manera tradicional con harina de trigo, levadura, agua y sal. Agregamos una deliciosa salsa de tomate casera y cubrimos la pizza con generosas porciones de anchoas en aceite, cortadas en trozos pequeños. Para equilibrar el sabor salado de las anchoas, añadimos queso mozzarella fresco y horneamos la pizza en nuestro horno de leña para lograr una base crujiente y una cobertura perfectamente derretida.",
    "price": 4600,
    "toppings": "Salsa de tomate, queso mozzarella, anchoas y aceitunas",
    "crust_type": "Al molde",
    "size": "8 porciones",
    "delivery_time": 49,
    "vegetarian": false,
    "gluten_free": false,
    "img": require("./../assets/img/molde/ANCHOAS.jpeg")
  }, {
    "id": v4(),
    "pizza_name": "ESPECIAL CON ANANÁ",
    "description": "Empezamos con una masa de pizza tradicional hecha con harina de trigo, levadura, agua y sal. A continuación, cubrimos la pizza con una salsa de tomate suave y añadimos generosas porciones de ananá fresco cortado en rodajas. Para equilibrar el sabor dulce del ananá, agregamos jamón, queso mozzarella fresco y queso provolone rallado. Luego, horneamos la pizza en nuestro horno de leña para obtener una base crujiente y una cobertura perfectamente derretida. El resultado es una deliciosa combinación de sabores agridulces que seguro te encantará.",
    "price": 5200,
    "toppings": "Salsa de tomate, queso mozzarella, ananá, jamón cocido y aceitunas",
    "crust_type": "Al molde",
    "size": "8 porciones",
    "delivery_time": 19,
    "vegetarian": true,
    "gluten_free": false,
    "img": require("./../assets/img/molde/ANANA.jpg")
  }, {
    "id": v4(),
    "pizza_name": "FUGAZZA RELLENA",
    "description": "Nuestra pizza de fugazza rellena con 1 kg de queso muzzarella es una opción deliciosa y abundante. Comenzamos con una masa de pizza tradicional elaborada con harina de trigo, levadura, agua y sal. Luego, cubrimos la pizza con una abundante capa de cebolla cortada en juliana y salteada hasta que esté dorada y caramelizada. A continuación, añadimos queso mozzarella fresco y cubrimos la pizza con otra capa de masa de pizza. Finalmente, horneamos la pizza en nuestro horno de leña hasta que esté dorada y crujiente por fuera, y el queso esté derretido y burbujeante por dentro. ",
    "price": 5900,
    "toppings": "Salsa de tomate, 1kg de queso mozzarella, cebolla y aceitunas",
    "crust_type": "Al molde",
    "size": "8 porciones",
    "delivery_time": 47,
    "vegetarian": true,
    "gluten_free": false,
    "img": require("./../assets/img/molde/FUGAZZA.jpeg")
  }, {
    "id": v4(),
    "pizza_name": "FUGAZZA RELLENA ESPECIAL",
    "description": "Nuestra pizza de fugazza rellena especial con 1 kg de queso muzzarella es una opción aún más sabrosa y abundante. Comenzamos con una masa de pizza tradicional elaborada con harina de trigo, levadura, agua y sal. Luego, cubrimos la pizza con una abundante capa de cebolla cortada en juliana y salteada hasta que esté dorada y caramelizada. A continuación, agregamos tiras de jamón cocido, aceitunas verdes y negras, y cubrimos todo con queso mozzarella fresco. Después, cubrimos la pizza con otra capa de masa de pizza y horneamos en nuestro horno de leña hasta que esté dorada y crujiente por fuera y el queso esté derretido y burbujeante por dentro.",
    "price": 6400,
    "toppings": "Salsa de tomate, 1kg de queso mozzarella, cebolla, jamón cocido y aceitunas",
    "crust_type": "Al molde",
    "size": "8 porciones",
    "delivery_time": 58,
    "vegetarian": false,
    "gluten_free": false,
    "img": require("./../assets/img/molde/FUGAZZAESPECIAL.jpg")
  }, {
    "id": v4(),
    "pizza_name": "ESPECIAL CON PALMITOS",
    "description": "Comenzamos con una masa de pizza tradicional elaborada con harina de trigo, levadura, agua y sal. Luego, cubrimos la pizza con una salsa suave de tomate y añadimos palmitos frescos cortados en rodajas. Para dar un toque extra de sabor, agregamos jamón cocido en cubos y una generosa cantidad de queso mozzarella fresco. Finalmente, horneamos la pizza en nuestro horno de leña hasta que esté dorada y crujiente por fuera y el queso esté derretido y burbujeante por dentro. ",
    "price": 5200,
    "toppings": "Salsa de tomate, queso mozzarella, palmitos, jamón cocido y aceitunas",
    "crust_type": "Al molde",
    "size": "8 porciones",
    "delivery_time": 41,
    "vegetarian": false,
    "gluten_free": false,
    "img": require("./../assets/img/molde/PALMITOS.jpg")
  }, {
    "id": v4(),
    "pizza_name": "FUGAZZA",
    "description": "Nuestra pizza de fugazza rellena queso muzzarella es una opción deliciosa y abundante. Comenzamos con una masa de pizza tradicional elaborada con harina de trigo, levadura, agua y sal. Luego, cubrimos la pizza con una abundante capa de cebolla cortada en juliana y salteada hasta que esté dorada y caramelizada. A continuación, añadimos queso mozzarella fresco y cubrimos la pizza con otra capa de masa de pizza. Finalmente, horneamos la pizza en nuestro horno de leña hasta que esté dorada y crujiente por fuera, y el queso esté derretido y burbujeante por dentro. ",
    "price": 1200,
    "toppings": "Salsa de tomate, queso mozzarella, cebolla y aceitunas",
    "crust_type": "Al molde",
    "size": "1 porción",
    "delivery_time": 27,
    "vegetarian": true,
    "gluten_free": false,
    "img": require("./../assets/img/molde/FUGAZZA.jpeg")
  }, {
    "id": v4(),
    "pizza_name": "PIZZA POR PORCIÓN",
    "description": "(muzzarella, napolitana, cantimpalo, especial con jamón, muzzarella con anchoa, especial con ananá, napolitana especial, palmitos)",
    "price": 900,
    "toppings": "Según elección",
    "crust_type": "Al molde",
    "size": "1 porción",
    "delivery_time": 36,
    "vegetarian": false,
    "gluten_free": false,
    "img": require("./../assets/img/molde/PORCION.jpeg")
  }, {
    "id": v4(),
    "pizza_name": "MUZZARELLA",
    "description": "La pizza muzzarella es un plato clásico de la cocina italiana, que consiste en una base de masa de pizza cubierta con salsa de tomate y queso mozzarella de alta calidad. Horneamos nuestra pizza a alta temperatura para que la masa quede crujiente y el queso se funda y se dore ligeramente en la parte superior.",
    "price": 3600,
    "toppings": "Salsa de tomate, queso mozzarella, aceitunas",
    "crust_type": "A la piedra",
    "size": "8 porciones",
    "delivery_time": 25,
    "vegetarian": true,
    "gluten_free": false,
    "img": require("./../assets/img/piedra/MUZZARELLAP.png")
  }, {
    "id": v4(),
    "pizza_name": "ESPECIAL DE JAMÓN",
    "description": "Preparamos nuestra masa de pizza diariamente y la cubrimos con nuestra salsa de tomate casera, queso mozzarella, jamón y otros ingredientes seleccionados cuidadosamente. Horneamos nuestra pizza a alta temperatura para que la masa quede crujiente en el exterior y suave en el interior, y para que el queso se funda y se dore ligeramente en la parte superior. ",
    "price": 5100,
    "toppings": "Salsa de tomate, queso mozzarella, jamón cocido y aceitunas",
    "crust_type": "A la piedra",
    "size": "8 porciones",
    "delivery_time": 55,
    "vegetarian": false,
    "gluten_free": false,
    "img": require("./../assets/img/piedra/ESPECIALJAMONP.jpg")
  }, {
    "id": v4(),
    "pizza_name": "NAPOLITANA",
    "description": "Preparamos nuestra masa de pizza siguiendo la receta tradicional napolitana, utilizando solo ingredientes simples y de alta calidad. La cubrimos con nuestra salsa de tomate casera y queso mozzarella fresco, y la horneamos a alta temperatura en nuestro horno de leña para lograr una masa suave y esponjosa con un borde crujiente. ",
    "price": 4300,
    "toppings": "Salsa de tomate, queso mozzarella, rodajas de tomates y aceitunas",
    "crust_type": "A la piedra",
    "size": "8 porciones",
    "delivery_time": 45,
    "vegetarian": true,
    "gluten_free": false,
    "img": require("./../assets/img/piedra/NAPOLITANAP.jpg")
  }, {
    "id": v4(),
    "pizza_name": "NAPOLITANA CON JAMÓN Y MORRÓN",
    "description": "Preparamos nuestra masa de pizza siguiendo la receta napolitana, utilizando solo ingredientes simples y de alta calidad. Cubrimos nuestra pizza con salsa de tomate casera, queso mozzarella fresco, jamón cocido y morrones asados. Horneamos nuestra pizza en nuestro horno de leña para lograr una masa suave y esponjosa con un borde crujiente. ",
    "price": 5200,
    "toppings": "Salsa de tomate, queso mozzarella, rodajas de tomates, jamón cocido, morrón y aceitunas",
    "crust_type": "A la piedra",
    "size": "8 porciones",
    "delivery_time": 38,
    "vegetarian": false,
    "gluten_free": true,
    "img": require("./../assets/img/molde/NAPOLITANAJAMONMORRON.jpg")
  }, {
    "id": v4(),
    "pizza_name": "4 QUESOS",
    "description": "Nuestra pizza 4 quesos es la combinación perfecta de quesos de alta calidad que se funden en armonía en cada bocado. Preparamos nuestra masa de pizza con ingredientes simples y auténticos. La cubrimos con una mezcla de cuatro quesos diferentes: queso mozzarella fresco, queso roquefort, queso parmesano y queso provolone. Horneamos nuestra pizza en nuestro horno de leña para lograr una masa suave y esponjosa con un borde crujiente. Cada bocado de nuestra pizza 4 quesos es una experiencia deliciosa e irresistible que no te querrás perder.",
    "price": 4600,
    "toppings": "Salsa de tomate, queso mozzarella, queso roquefort, queso parmesano, queso provolone y aceitunas",
    "crust_type": "A la piedra",
    "size": "8 porciones",
    "delivery_time": 34,
    "vegetarian": true,
    "gluten_free": false,
    "img": require("./../assets/img/piedra/CUATROQUESOSP.jpg")
  }, {
    "id": v4(),
    "pizza_name": "CANTIMPALO",
    "description": "Nuestra pizza de cantimpalo es una opción sabrosa y picante. Preparamos nuestra masa de pizza de manera tradicional, utilizando harina de trigo, levadura, agua y sal. Cubrimos nuestra pizza con una deliciosa salsa de tomate casera y agregamos generosas porciones de cantimpalo, un tipo de salami español, cortado en rodajas finas. También añadimos queso mozzarella fresco y horneamos la pizza en nuestro horno de leña para obtener una base crujiente y una cobertura perfectamente derretida.",
    "price": 4600,
    "toppings": "Salsa de tomate, queso mozzarella, salame cantimpalo y aceitunas",
    "crust_type": "A la piedra",
    "size": "8 porciones",
    "delivery_time": 31,
    "vegetarian": false,
    "gluten_free": false,
    "img": require("./../assets/img/piedra/CANTIMPALOP.jpg")
  }, {
    "id": v4(),
    "pizza_name": "ANCHOAS",
    "description": "Comenzamos con una masa de pizza preparada de manera tradicional con harina de trigo, levadura, agua y sal. Agregamos una deliciosa salsa de tomate casera y cubrimos la pizza con generosas porciones de anchoas en aceite, cortadas en trozos pequeños. Para equilibrar el sabor salado de las anchoas, añadimos queso mozzarella fresco y horneamos la pizza en nuestro horno de leña para lograr una base crujiente y una cobertura perfectamente derretida.",
    "price": 4600,
    "toppings": "Salsa de tomate, queso mozzarella, anchoas y aceitunas",
    "crust_type": "A la piedra",
    "size": "8 porciones",
    "delivery_time": 49,
    "vegetarian": false,
    "gluten_free": false,
    "img": require("./../assets/img/piedra/ANCHOASP.jpg")
  }, {
    "id": v4(),
    "pizza_name": "ESPECIAL CON ANANÁ",
    "description": "Empezamos con una masa de pizza tradicional hecha con harina de trigo, levadura, agua y sal. A continuación, cubrimos la pizza con una salsa de tomate suave y añadimos generosas porciones de ananá fresco cortado en rodajas. Para equilibrar el sabor dulce del ananá, agregamos jamón, queso mozzarella fresco y queso provolone rallado. Luego, horneamos la pizza en nuestro horno de leña para obtener una base crujiente y una cobertura perfectamente derretida. El resultado es una deliciosa combinación de sabores agridulces que seguro te encantará.",
    "price": 5200,
    "toppings": "Salsa de tomate, queso mozzarella, ananá, jamón cocido y aceitunas",
    "crust_type": "A la piedra",
    "size": "8 porciones",
    "delivery_time": 19,
    "vegetarian": true,
    "gluten_free": false,
    "img": require("./../assets/img/piedra/ANANAP.jpg")
  }, {
    "id": v4(),
    "pizza_name": "FUGAZZETA",
    "description": "Nuestra pizza de fugazza con queso muzzarella es una opción deliciosa y abundante. Comenzamos con una masa de pizza tradicional elaborada con harina de trigo, levadura, agua y sal. Luego, cubrimos la pizza con una abundante capa de cebolla cortada en juliana y salteada hasta que esté dorada y caramelizada. A continuación, añadimos queso mozzarella fresco y cubrimos la pizza con otra capa de masa de pizza. Finalmente, horneamos la pizza en nuestro horno de leña hasta que esté dorada y crujiente por fuera, y el queso esté derretido y burbujeante por dentro. ",
    "price": 4600,
    "toppings": "Salsa de tomate, queso mozzarella, cebolla y aceitunas",
    "crust_type": "A la piedra",
    "size": "8 porciones",
    "delivery_time": 47,
    "vegetarian": true,
    "gluten_free": false,
    "img": require("./../assets/img/piedra/FUGAZZETAP.jpg")
  }, {
    "id": v4(),
    "pizza_name": "ESPECIAL CON PALMITOS",
    "description": "Comenzamos con una masa de pizza tradicional elaborada con harina de trigo, levadura, agua y sal. Luego, cubrimos la pizza con una salsa suave de tomate y añadimos palmitos frescos cortados en rodajas. Para dar un toque extra de sabor, agregamos jamón cocido en cubos y una generosa cantidad de queso mozzarella fresco. Finalmente, horneamos la pizza en nuestro horno de leña hasta que esté dorada y crujiente por fuera y el queso esté derretido y burbujeante por dentro. ",
    "price": 5200,
    "toppings": "Salsa de tomate, queso mozzarella, palmitos, jamón cocido y aceitunas",
    "crust_type": "A la piedra",
    "size": "8 porciones",
    "delivery_time": 41,
    "vegetarian": false,
    "gluten_free": false,
    "img": require("./../assets/img/piedra/PALMITOSP.jpeg")
  }, {
    "id": v4(),
    "pizza_name": "PROMO PALMITOS",
    "description": "Comenzamos con una masa de pizza tradicional elaborada con harina de trigo, levadura, agua y sal. Luego, cubrimos la pizza con una salsa suave de tomate y añadimos palmitos frescos cortados en rodajas. Para dar un toque extra de sabor, agregamos jamón cocido en cubos y una generosa cantidad de queso mozzarella fresco. Finalmente, horneamos la pizza en nuestro horno de leña hasta que esté dorada y crujiente por fuera y el queso esté derretido y burbujeante por dentro. ",
    "price": 6500,
    "toppings": "Pizza Especial con Palmitos + Gaseosa + 1 porción a elección",
    "crust_type": "Promos",
    "size": "1 unidad",
    "delivery_time": 41,
    "vegetarian": false,
    "gluten_free": false,
    "img": require("./../assets/img/promo/palmitosgaseosa.jpg")
  },  {
    "id": v4(),
    "pizza_name": "GASEOSA",
    "description": "Coca-Cola es una de las marcas más icónicas y reconocidas en todo el mundo. Desde su creación en 1886, la bebida gaseosa carbonatada ha sido disfrutada por millones de personas en todo el mundo.",
    "price": 900,
    "toppings": "1.5L",
    "crust_type": "Bebidas",
    "size": "1 unidad",
    "delivery_time": 15,
    "vegetarian": false,
    "gluten_free": false,
    "img": require("./../assets/img/bebida/cocacola.jpg")
  }]

  export const getProducts = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products)
      }, 150)
    })
  }

  export const getProductById = (productId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.find(prod => prod.id === productId))
      }, 500)
    })
  }

  export const getProductByCategory = (categoryId) => {
    categoryId=== "alapiedra" ? categoryId = "A la piedra" : 
      categoryId=== "almolde" ? categoryId = "Al molde" :
        categoryId = "promos" ? categoryId = "Promos" :
          categoryId = "bebidas" ? categoryId = "Bebidas" :
           categoryId = "postres" ? categoryId = "Postres" :  false;

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.find(prod => prod.crust_type === categoryId))
      }, 500)
    })
  }
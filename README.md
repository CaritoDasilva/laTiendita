# Frontend Technical Test :mag_right:

- [Requerimientos mínimos](#requerimientos-mínimos)
- [Correr la aplicación](#correr-aplicación)
- [Descripción del test](#descripción-del-test)
- [Reglas](#reglas-de-entrega)

## Resolución del Reto Técnico

- Se utilizo React para la resolución. Se hizo una consulta al catálogo con el método componentWillMount() para que sea lo primero que se ejecute al abrir la aplicación. Este método realiza una llmada asíncrona para traerse los productos y así estos puedan ser cargados en el componente de Product.
- Se utilizaron diferentes componentes para poder tener organizada la estructura de datos de manera eficiente y se utiliza el método de PROPS para poder pasar la información entre componentes.
- Para poder agregar y remover productos se utilizan los estados los cuales van a cambiar cada vez que haya alguna modificación, siendo éstas desencadenadas por los eventos onClick de los botones ADD y REMOVE.
- Los componentes ShowProducts y CardProducts se encargan de hacer un map del catálogo el cuál va a traer un arreglo nuevo con cada uno de los items, para que el componente de Product y ProductPlus puedan pintar las diferentes tarjetas en la pantalla.

## Correr aplicación

- Actaulizar el package.json para que pueda tomar los estilos de materialize.

```shell
$ npm install
```

- Correr Express

```shell
$ npm run dev
```

- Correr aplicación frontend con Webpack

```shell
$ npm run webpack
```

## Descripción del test

Se requiere implementar un carrito de compras simple, éste debe contar con dos secciones importantes:

- Una lista de ítems mostrando el catálogo de productos.
- Un carrito de compras que tenga todos los ítems que serán comprados por el usuario.

Las reglas del negocio son:

- Cada ítem del catálogo tiene un action button con texto `Add Cart`
- Cada ítem en el carro tiene un action button con texto `Remove`

# DEMO

-Se envía un DEMO adjunto en el correo del envío del desafío técnico.

const getState = ({
    getStore,
    getActions,
    setStore
}) => {
    return {
        store: {
            demo: [{
                    title: "FIRST",
                    background: "white",
                    initial: "white"
                },
                {
                    title: "SECOND",
                    background: "white",
                    initial: "white"
                }
            ],
            starships: [{
                    name: "FIRST",
                    url: "1",
                    initial: "white"
                },
                {
                    name: "SECOND",
                    url: "2",
                    initial: "white"
                }
            ],
            message: 'hola',
            misNaves: ['bm', 'nissan']
        },
        actions: {
            // Use getActions to call a function within a fuction
            exampleFunction: () => {
                getActions().changeColor(0, "green");
            },
            cambiarTexto: (nombreNave) => {
                console.log('cambiar texto desde FLUX')
                const store = getStore();
                if (store.misNaves.includes(nombreNave)) {
                    console.log('SI TIENES EL ELEMENTO')
                    setStore({
                        misNaves: store.misNaves.filter((nave) => nave != nombreNave)
                    });
                } else {
                    console.log('NO TIENES EL ELEMENTO')
                    setStore({
                        misNaves: [...store.misNaves, nombreNave]
                    });
                }
                setStore({
                    message: nombreNave
                });
            },
            loadSomeData: () => {
                console.log('detecte carga pagina desde flux')

                fetch('https://swapi.dev/api/starships')
                    .then((response) => response.json())
                    // .then((data)=> console.log(data.results))
                    .then((data) => setStore({
                        starships: data.results
                    }))
                /**
                	fetch().then().then(data => setStore({ "foo": data.bar }))
                */
            },
            changeColor: (index, color) => {
                //get the store
                const store = getStore();

                //we have to loop the entire demo array to look for the respective index
                //and change its color
                const demo = store.demo.map((elm, i) => {
                    if (i === index) elm.background = color;
                    return elm;
                });

                //reset the global store
                setStore({
                    demo: demo
                });
            }
        }
    };
};

export default getState;
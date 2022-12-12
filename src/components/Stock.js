import choiceVainilla from "../assets/products/choice-double-vainilla.png"
import choiceDDL from "../assets/products/choice-ddl.png"
import choiceAromatic from "../assets/products/choice-aromatic.png"
import choiceExotic from "../assets/products/choice-exotic.png"
import flandriaVainilla from "../assets/products/flandria-vainilla.png"
import lasHojasVainilla from "../assets/products/lashojas-vainilla.png"
import lasHojasChocolate from "../assets/products/lashojas-chocolate.png"
import flandriaSilver from "../assets/products/flandria-silver.png"
import flandriaOriginal from "../assets/products/flandria-original.png"
import flandriaVirginia from "../assets/products/flandria-virginia.png"
import ocbComun from "../assets/products/ocb-comun.png"
import ocbOrganica from "../assets/products/ocb-organica.png"
import ocbFiltrosComun from "../assets/products/filtros-ocb-comun.png"
import ocbFiltrosOrganico from "../assets/products/filtros-ocb-organico.png"

const BBDD = [
    {
        id:"1",
        title:"Choice",
        description:{
            sabor:"Vainilla",
            peso:"30g"
        },
        price: 1050,
        category: "tabaco",
        pictureUrl: choiceVainilla,
        stock: 10
    },
    {
        id:"2",
        title:"Choice",
        description:{
            sabor:"Dulce de leche",
            peso:"30g",
        },
        price: 1050,
        category: "tabaco",
        pictureUrl: choiceDDL,
        stock: 10
    },
    {
        id:"3",
        title:"Las Hojas",
        description:{
            sabor:"Vainilla",
            peso:"30g",
        },
        price: 750,
        category: "tabaco",
        pictureUrl: lasHojasVainilla,
        stock: 10
    },
    {
        id:"4",
        title:"Choice",
        description:{
            sabor:"Aromatic",
            peso:"30g",
        },
        price: 1150,
        category: "tabaco",
        pictureUrl: choiceAromatic,
        stock: 10
    },
    {
        id:"5",
        title:"Flandria",
        description:{
            sabor:"Vainilla",
            peso:"30g",
        },
        price: 1250,
        category: "tabaco",
        pictureUrl: flandriaVainilla,
        stock: 10
    },
    {
        id:"6",
        title:"Choice",
        description:{
            sabor:"Exotic",
            peso:"30g",
        },
        price: 1150,
        category: "tabaco",
        pictureUrl: choiceExotic,
        stock: 10
    },
    {
        id:"7",
        title:"Flandria",
        description:{
            sabor:"Silver",
            peso:"30g",
        },
        price: 1150,
        category: "tabaco",
        pictureUrl: flandriaSilver,
        stock: 10
    },
    {
        id:"8",
        title:"Las Hojas",
        description:{
            sabor:"Chocolate",
            peso:"30g",
        },
        price: 1150,
        category: "tabaco",
        pictureUrl: lasHojasChocolate,
        stock: 10
    },
    {
        id:"9",
        title:"Flandria",
        description:{
            sabor:"Original",
            peso:"30g",
        },
        price: 1150,
        category: "tabaco",
        pictureUrl: flandriaOriginal,
        stock: 10
    },
    {
        id:"10",
        title:"Flandria",
        description:{
            sabor:"Virginia",
            peso:"30g",
        },
        price: 1150,
        category: "tabaco",
        pictureUrl: flandriaVirginia,
        stock: 10
    },
    {
        id:"11",
        title:"Las Hojas",
        description:{
            sabor:"Chocolate",
            peso:"30g",
        },
        price: 1150,
        category: "tabaco",
        pictureUrl: lasHojasChocolate,
        stock: 10
    },
    {
        id: "12",
        title: "Sedas OCB comunes",
        description: "",
        price: 200,
        category: "seda",
        pictureUrl: ocbComun,
        stock: 10
    },
    {
        id: "13",
        title: "Sedas OCB organicas",
        description: "",
        price: 250,
        category: "seda",
        pictureUrl: ocbOrganica,
        stock: 10
    },
    {
        id:"14",
        title:"Filtros OCB comunes",
        description: "",
        price: 400,
        category: "filtro",
        pictureUrl: ocbFiltrosComun,
        stock: 10
    },
    {
        id:"15",
        title:"Filtros OCB organicos",
        description: "",
        price: 450,
        category: "filtro",
        pictureUrl: ocbFiltrosOrganico,
        stock: 10
    }
]

export default BBDD
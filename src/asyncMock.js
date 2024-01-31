const products = [ 

   {id: "1", name:"Remera Disaster", price: 20000, category:"Hombre",img:'../../images/Hombre/remera-disaster-beige.webp', stock:"3", description:"descripcion de remera"}, 
   {id: "2", name:"Remera Extreme", price: 20000, category:"Hombre", img:'../../images/Hombre/remera-extreme-negro.webp', stock:"3", description:"descripcion de remera"}, 
   {id: "3", name:"Remera Future", price: 20000, category:"Hombre", img:'../../images/Hombre/remera-future-blanco.webp', stock:"3", description:"descripcion de remera"}, 
   {id: "4", name:"Musculosa Butterfly", price: 16000, category:"Mujer", img:'../../images/Mujer/musculosa-butterfly-gris.webp',stock:"3", description:"descripcion de remera"}, 
   {id: "5", name:"Remera DateWash", price: 16000, category:"Mujer", img:'../../images/Mujer/remera-dateWash-negra.webp', stock:"3", description:"descripcion de remera"}, 
   {id: "6", name:"Remera Toronto", price: 16000, category:"Mujer", img:'../../images/Mujer/remera-toronto-negra.jpeg', stock:"3", description:"descripcion de remera"}, 
];

export const getProducts = () => {
   return new Promise((resolve) => {
       setTimeout(() => {
           resolve(products);
       }, 500);
   });
};

export const getProductById = (productId) => {
   return new Promise((resolve) => {
       setTimeout(() => {
           resolve(products.find(prod => prod.id === productId));
       }, 500);
   });
};

export const getProductByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId));
        }, 500);
    });
};
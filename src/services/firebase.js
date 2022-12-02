import { getFirestore, collection, addDoc, getDocs, getDoc, doc } from 'firebase/firestore' 
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCoeDLRL_b2x_zIZdAvBTSLPBR-JwD91a4",
  authDomain: "my-ecommerce-coderhouse.firebaseapp.com",
  projectId: "my-ecommerce-coderhouse",
  storageBucket: "my-ecommerce-coderhouse.appspot.com",
  messagingSenderId: "612820064529",
  appId: "1:612820064529:web:75f14a1dae230b498014b0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const dataBase = getFirestore();

const loadDataBase = async () =>{
    const promise = await fetch('./json/stock.json')
    const data = await promise.json()

    data.forEach(async (prod) => {
        await addDoc(collection(dataBase, 'productos'),{
            name:prod.name,
            price:prod.price,
            description:prod.description,
            img:prod.img,
            category:prod.idCategory,
            stock:prod.stock
        })
    });
}

const getProducts = async () => {
    const product = await getDocs(collection(dataBase,'productos'))
    const items = product.docs.map(prod => {
        return {...prod.data(),id:prod.id}
    }) 
    return items
}

const getOneProduct = async (id) => {
    const product = await getDoc(doc(dataBase,'productos',id))
    const item = {...product.data(),id:product.id}
    return item;
}

const createTicket = async (client, total, date) => {
    const ticket = await addDoc(collection(dataBase,"Orden-de-Compra"),{
        Date: date,
        Name: client.nombre,
        Email: client.email,
        DNI: client.dni,
        Tel: client.tel,
        TotalPrice: total        
    })
    return ticket;
}

const getTicket = async (id) => {
    const item = await getDoc(doc(dataBase,'Orden-de-Compra',id))
    const ticket = {...item.data(),id:item.id}
    return ticket
}

export {loadDataBase, getProducts, getOneProduct, createTicket, getTicket};
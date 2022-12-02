import { loadDataBase } from "./firebase";


export const BBDD = async (route) => {
    const response = await fetch(route);
    const data = await response.json();
    
    return data
  }

// loadDataBase();
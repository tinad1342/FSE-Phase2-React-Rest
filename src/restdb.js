  const baseURL = 'http://localhost:4000/customers/';

  export async function getAll(setCustomers) {
    const myInit = {
        method: 'GET',
        mode: 'cors' };
    const fetchData = async (url) => {
        try {
            const response = await fetch(url, myInit);
            if (!response.ok) {
                throw new Error(`Error fetching data: ${response.status}`);
            }
            const data = await response.json();
            setCustomers(data);
        } catch (error) {
            alert(error);
        }
    }
    fetchData(baseURL);
  }

// export function get(id) {
//     let result = null;
//     for( let item of items){
//         if(item.id === id){
//             result = item;
//         }
//     }
//   return result;
// }

// export function deleteById(id) {
//   let arrayIndex = getArrayIndexForId(id);
//   if( arrayIndex >= 0 && arrayIndex < items.length){
//     items.splice(arrayIndex,1);
//   }
// }

export async function deleteById(id, postOpCallback) {
    let url = baseURL + id;
    let myHeaders = new Headers({ "Content-Type": "application/json" });
    let body = JSON.stringify();
    var myInit = {
      method: 'DELETE',
      body: body,
      headers: myHeaders,
      mode: 'cors'
    };
    const deleteCustomer = async (url) => {
        try {
            const response = await fetch(url, myInit);
            if (!response.ok) {
                throw new Error(`Error fetching data: ${response.status}`);
            }
            const data = await response.json();
            postOpCallback(data);
        } catch (error) {
            alert(error);
        }
    }
    deleteCustomer(url);
  }

// export function post(item) {
//   let nextid = getNextId();
//   item.id = nextid;
//   items[items.length] = item;
// }

export async function post(customer, postOpCallback) {
    delete customer.id;
    let myHeaders = new Headers({ "Content-Type": "application/json" });
    let body = JSON.stringify(customer);
    var myInit = {
      method: 'POST',
      body: body,
      headers: myHeaders,
      mode: 'cors'
    };
    const postCustomer = async (url) => {
        try {
            const response = await fetch(url, myInit);
            if (!response.ok) {
                throw new Error(`Error fetching data: ${response.status}`);
            }
            const data = await response.json();
            postOpCallback(data);
        } catch (error) {
            alert(error);
        }
    }
    postCustomer(baseURL);
  }

// export function put(id, item) {
//   for( let i = 0; i < items.length; i++){
//     if(items[i].id === id){
//       items[i] = item;
//       return;
//     }
//   }
// }

export async function put(item, postOpCallback) {
    let url = baseURL + item.id;
    let myHeaders = new Headers({ "Content-Type": "application/json" });
    let body = JSON.stringify(item);
    var myInit = {
      method: 'PUT',
      body: body,
      headers: myHeaders,
      mode: 'cors'
    };
    const putCustomer = async (url) => {
        try {
            const response = await fetch(url, myInit);
            if (!response.ok) {
                throw new Error(`Error fetching data: ${response.status}`);
            }
            const data = await response.json();
            postOpCallback(data);
        } catch (error) {
            alert(error);
        }
    }
    putCustomer(url);
  }

// function getArrayIndexForId(id){
//   for( let i = 0; i < items.length; i++){
//     if(items[i].id === id){
//       return i;
//     }
//   }
//   return -1;  
// }


// function getNextId(){
//   let maxid = 0;
//   for( let item of items){
//     maxid = (item.id > maxid)?item.id:maxid;
//   }  
//   return maxid + 1;
// }





//crea un array nuevo con los elementos que cumplen con el callback

function myMap(arr, callback) 
    {
    let auxArray = new Array;
    console.log("callback,  " + callback);
    console.log("array que llega al map" + arr);
    for (var i = 0; i < arr.length; i++) {
        auxArray.push(callback(arr[i]));
    }
   return auxArray;
    }
//devuelve los elementos que cumplan con las condiciones dadas en el callback
function myFilter(array, callback) 
    {
    let auxArray = [];
    for (i = 0; i < array.length; i++) 
        {
       if (callback(array[i]) === true) 
           {
            auxArray.push(array[i]);
           }
        }
    return auxArray;
    }
//devuelve el primer elemento que cumple con la condicion dada en el callback

function myFind(arr, callback) 
    {
    let auxArray = [];
    for (let i = 0; i < arr.length; i++) 
        {
        if (callback(arr[i]) === true) 
            {
            auxArray.push(arr[i]);
            return arr[i];
            break;
            }
        }
    return auxArray;
    }
//retorna el indice de la ubicacion del elemento que se desea buscar
// acorde al callback enviado

function myFindIndex(arr, callback) 
    {
    let auxArray = []
    let result;
    for (let i = 0; i < arr.length; i++) 
        {
        if (callback(arr[i]) === true) 
        {
            result = i;
            auxArray.push(arr[i]);
            break;
        }
        }
    return result;
    }

//ejecuta el callback acorde a la cantidad de elementos 
//del array

function myForEach(arr, callback) 
    {
    auxArray=[];
    for (let i = 0; i < arr.length; i++) 
        {
            callback(arr[i]);
        }
    
    }

//el metodo contains retorna true o false
//acorde un elemento se encuentre en el array

function myContains(arr, callback) 
    {
    var present = false;
    auxArray = [];
    for (let i = 0; i < arr.length; i++) 
        {
        if (callback(arr[i]) === true) 
        {
            auxArray.push(arr[i]);
            present = true;
            break;
        }
        }
        if (present === true) 
            {
            return (true);
            }
     return present;
     }
//recibe el array en el primer dato y el atributo a manera de un string 
//solicita un array de los atributos del objeto y busca el atributo comparando
//con el string cuando el resultado sea true y enviamos al push del array aux el 
//atributo del objeto que concuerda
function myPluck(arr, atributo) 
    {
    let auxArray = new Array;
    for (var i = 0; i < arr.length; i++) 
        {
        remedy = Object.keys(arr[i]);
        for (var k = 0; k < remedy.length; k++) 
            {
            if (remedy[k] === atributo) 
                {
                auxArray.push(arr[i][atributo]);
                break
                }
            }
        }
    return auxArray;
    }
//El metodo withOut recibe el array a revisar en el primer elemento, 
//y los datos a eliminar dentro de un array
function myWithOut(arr, arr2) 
    {
    let auxArray = new Array;
    var exist = 0;
    console.log(arr2.length);
    for (var i = 0; i < arr.length; i++) 
        {
        exist = 0;
        for (var j = 0; j < arr2.length; j++) 
        {
            if (arr[i] === arr2[j]) 
                {
                exist = 1;
                }
        }
        if (exist == 0) 
            {
            auxArray.push(arr[i]);
            }
        }
    return auxArray;
    }

var prueba=[1,2,3,4,5,6,7,8,9,0,10,11,22,12,23,123,13];
console.log(myMap(prueba,elemento=>elemento * 6));
console.log(myFilter(prueba,elemento=>elemento>120));
console.log(myFind(prueba,(elemento=>elemento ==13)));
console.log(myFindIndex(prueba,(element=>element==0)));
console.log(myForEach(prueba,(element=>element*10)));

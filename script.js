const superMarket  = {
   name:'MyMarket', 
   phoneNumer: 7123233445, 
    products:[ 
   { name:"potato",  category: "Азық түлік",  price: 200,  stock: 1212 },
   { name:"tomato",  category: "Азық түлік",  price: 210,  stock: 1213 },
   { name:"Cherry",  category: "Азық түлік",  price: 400,  stock: 1214 },
   { name:"Mango",  category: "Азық түлік",  price: 2000,  stock: 1215 },
   { name:"Melon",  category: "Азық түлік",  price: 100,  stock: 1216 },
   ]
}
function changeName () {

    newName = prompt("Введите новое имя для маркета :")
    if(newName ) {
      superMarket.name === newName
      alert(`Имя маркеа изменено ${newName}` )
    }else {
        alert("Имя маркета не изменено")
    }
} 

function changePhone() {
    newNumber = prompt("Ввведите новый телефон номера:")
    if (newNumber) {
        superMarket.phoneNumer === newNumber
        alert(`номер маркеа изменено ${newNumber}`)
    }else {
        alert("Не сохранен ")
    }
}

function listProductNames() {
        superMarket.products.map ((product) => product.name.join('\n'))
        alert(`Все продукты сохранены ${products}`)


}
function addProduct() {
    const productName = prompt("Өнімнің атауын енгізіңіз:");
    const category = prompt("категориясын енгізіңіз:");
    const price = +prompt("Өнімнің бағасын енгізіңіз:");
    const stock = +prompt("Өнімнің санын енгізіңіз:");
  
    if (productName && category && !isNaN(price) && !isNaN(stock)) {
      superMarket.products.push({ productName, category, price, stock });
      alert("Жаңа өнім ");
    } else {
      alert("Өнім қосу сәтсіз аяқталды. Барлық өрістерді дұрыс толтырыңыз.");
    }
  }
   


 function applyDiscountToCategory() {
     category = prompt("категориясын енгізіңі")
     skidka = prompt (" жеңілдікті жазыныз:")

     superMarket.forEach(product => {
     skidka = ( productssts.price * product) / 100
     alert(skidka)

     });
  
  }
    


  function allMenu () {
  let menu = prompt ('1. Дүкен атауын өзгерту\n2. Телефон нөмірін өзгерту\n3. Өнімдердің атауын шығару\n4. Жаңа өнім қосу\n5. Категорияға жеңілдік жасау\n6. Шығу')
  do { 
        
    switch (menu ) {
    case "1":
    changeName(); 
    break;
    case "2":
     changePhone(); 
    break;
    case "3":
    listProductNames(); 
     break;
     case "4":
    addProduct(); 
    break;
    case "5":
      applyDiscountToCategory(); 
     break;
     case "6":
        break;
    }
}
    while(menu ) 
  }
  allMenu()
import React, {useState} from "react";
import "./styles.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import AddItem from "./components/AddItem";

function App(props) {


  const products = [
    {
      price : 9999,
      name : "Iphone 10",
      quantity: 0
    },
    {
      price : 18000,
      name : "Redmi 10",
      quantity: 0
    }
  ]

  const [productList, setProductList]  = useState(products);
  let [totalAmount, setTotalAmount] = useState(0)

  const incrementQuantity = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newProductList[index].quantity++;
    newTotalAmount += newProductList[index].price;
    setTotalAmount(newTotalAmount);
    setProductList(newProductList);
  };

  const decrementQuantity = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = [totalAmount];
    if (newProductList[index].quantity > 0) {
      newProductList[index].quantity--;
      newTotalAmount -= newProductList[index].price;
    }
    setTotalAmount(newTotalAmount);
    setProductList(newProductList);
  };


   const resetQuantity = () => {
     console.log(888)
    let newProductList = [...productList];
    newProductList.map((products) => {
      products.quantity = 0;
    })

    setProductList(newProductList);
    setTotalAmount(0)
   }


   const removeItem = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newTotalAmount -= newProductList[index].quantity * newProductList[index].price;
    newProductList.splice(index,1);
    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
   }


   const addItem = (pname, price) => {
     console.log('ppppppppp', pname, price)
    let newProductList = [...productList];
    newProductList.push({
      price : price,
      name : pname,
      quantity: 0
    })

    setProductList(newProductList);
   }
   

  return (
    <>
    <Navbar productList={productList} />
    <main className="container mt-5">
    <AddItem addItem={addItem}></AddItem>
    <ProductList productList={productList} incrementQuantity={incrementQuantity} decrementQuantity={decrementQuantity} removeItem={removeItem} />
    <Footer totalAmount = {totalAmount} resetQuantity={resetQuantity}/>
    </main>
    
    </>
  );
}

export default App;
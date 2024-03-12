import { useEffect } from "react";
import { useState } from "react";
import Botle from "./botle";



const Bottle = () => {

   const [water, setWater] = useState([])

   const [cart, setCart] = useState([]);

   useEffect(() => {

      fetch('bottle.json')
      .then(res => res.json())
      .then(data => setWater(data))


   }, [])

   const handleCart = Botle => {
 
      const newCart = [...cart, Botle]

      setCart(newCart)

   }
 

    return (
        <div className=" text-center ">

            <h1 className=" text-2xl text-center font-bold mt-10">bottles here : {water.length}  </h1>

            <h3 className=" text-xl font-bold">cart: {cart.length} </h3>

           <div className="grid grid-cols-3 gap-5"> 

           {

          water.map(water => <Botle   
          key={Bottle.id}
           water={water}
           handleCart={handleCart}
          ></Botle> )

         

           }


           </div>
            
        </div>
    );
};

export default Bottle;
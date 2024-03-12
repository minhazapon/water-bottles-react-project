


const Botle = ({water, handleCart}) => {
      
     const {name, img, price} = water;

    return (
         <div className=" border-[2px] border-sky-400 mt-5 p-5 rounded-xl flex justify-center items-center">

          <div>

          <h1>botle</h1>

          <h1> {name} </h1>

          <img className="h-[200px] w-[200px]" src={img} alt="" />

          <h1> ${price} </h1>
           
          <button onClick={() => handleCart(Botle)} className=" mt-2 h-[30px] w-[80px] bg-blue-500 rounded-lg font-bold text-white"> purchase </button>
         
          </div>  

        </div>
    );
};

export default Botle;
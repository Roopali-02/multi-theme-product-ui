import { useState, useEffect, useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext';

const Home = () => {
  const { theme } = useContext(ThemeContext);
  const [loading, setLoading] = useState(true);
  type Product = {
    id: number;
    title: string;
    price: number;
    image: string;
    rating:number;
    thumbnail: string;
    returnPolicy: string;
    brand: string;
    tags: string[];
  };
  const [products, setProducts] = useState<Product[]>([]);

   useEffect(()=>{
     const fetchProducts = async () => {
       try {
         const res = await fetch('https://dummyjson.com/products');
         const data = await res.json();
         setProducts(data.products);
       } catch (error) {
         console.error("Error fetching products:", error);
       } finally {
         setLoading(false);
       }
     };
     fetchProducts();
   },[])

  if (loading) {
    return (
      <section className="flex items-center justify-center h-screen">
        <div className="text-xl font-medium text-gray-600 animate-pulse">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"></div>
        </div>
      </section>
    );
  }

  return (
    <section className="p-2 space-y-6 w-full">
      <h1 className="text-3xl font-medium">Welcome to Theme Switcher</h1>
      <p className="text-base">
        This is a sample application demonstrating how to switch between multiple themes dynamically using Tailwind CSS and React.
      </p>
      {/* Card/Grid Section */}
      {theme === 'theme1' && (
        <div className="space-y-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {products.map((product) => (
            <div key={product.id} className="relative bg-slate-50 p-4 rounded shadow-xl border border-slate-200 transform transition hover:scale-105 hover:shadow-2xl space-y-3">
              <h2 className="text-xl font-semibold mb-1">{product.title}</h2>
              <p className='text-[#673AB7] font-medium'>{product.brand}</p>
              <p className="text-gray-700 mb-2">$ {product.price} | ⭐ {product.rating}</p>
              <img src={product.thumbnail} alt={product.title} className="w-40 h-40 object-cover mx-auto mb-12" />
              <div className="flex mt-4 absolute bottom-0 left-0 w-full justify-between gap-x-0.5">
                <button className="w-1/2 py-2 bg-[#11998e] text-white cursor-pointer font-medium">Buy Now</button>
                <button className="w-1/2 py-2 bg-[#2193b0] text-white cursor-pointer font-medium">Add to Bag</button>
              </div>
            </div>
          ))}
        </div>
      )}

      {theme === 'theme2' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-gray-800 text-white p-6 rounded-lg transform transition hover:scale-105 duration-300 ease-in-out space-y-3">
              <img src={product.thumbnail} alt={product.title} className="w-full h-48 object-contain my-2" />
              <h2 className="text-xl font-bold">{product.title}</h2>
              <p className="text-gray-300">$ {product.price} | ⭐ {product.rating}</p>
              <div className='flex gap-x-2'>
                {product.tags.map((tag)=>(
                   <div className='px-2 py-1 bg-stone-700 text-white rounded-xs'>{tag}</div>
                ))}
              </div>
              <div className="flex gap-2">
                <button className="w-1/2 py-2 bg-white text-black font-medium cursor-pointer">Buy Now</button>
                <button className="w-1/2 py-2 bg-gray-600 text-white font-medium cursor-pointer">Add to Bag</button>
              </div>
            </div>
          ))}
        </div>
      )}

      {theme === 'theme3' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 font-pacifico text-pink-800">
          {products.map((product) => (
            <div key={product.id} className="bg-pink-100 p-4 rounded-2xl shadow-lg hover:scale-105 transition">
              <h2 className="text-2xl mb-2">{product.title}</h2>
              <div className=''>{product.brand}</div>
              <img src={product.thumbnail} alt={product.title} className="w-40 h-40 mx-auto" />
              <div className='flex justify-between items-center'>
                <p className="text-xl mt-2">$ {product.price}</p>
                <p>⭐ {product.rating}</p>
              </div>
              <div className="flex mt-4 gap-x-0.5">
                <button className="w-1/2 py-2 bg-purple-600 text-white rounded-l-lg cursor-pointer">Buy Now</button>
                <button className="w-1/2 py-2 bg-purple-800 text-white rounded-r-lg cursor-pointer">Add to Bag</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}

export default Home
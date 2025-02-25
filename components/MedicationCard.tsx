// import { Medication } from "@/types";

// // Medication Card
// export const MedicationCard = ({ 
//     medication,
//     onAddToCart 
//   }: { 
//     medication: Medication;
//     onAddToCart: (medication: Medication) => void;
//   }) => (
//     <div className="rounded-lg border bg-white p-4 shadow-sm transition-shadow hover:shadow-md">
//       <Image
//         src={medication.image}
//         alt={medication.name}
//         className="mb-4 h-48 w-full rounded-lg object-cover"
//       />
//       <h3 className="text-lg font-semibold">{medication.name}</h3>
//       <p className="text-sm text-gray-600">{medication.genericName}</p>
//       <div className="mt-2 flex items-center justify-between">
//         <span className="text-lg font-bold text-orange-500">
//           ₦{medication.price.toLocaleString()}
//         </span>
//         {medication.inStock ? (
//           <span className="rounded-full bg-green-100 px-2 py-1 text-sm text-green-600">
//             In Stock
//           </span>
//         ) : (
//           <span className="rounded-full bg-red-100 px-2 py-1 text-sm text-red-600">
//             Out of Stock
//           </span>
//         )}
//       </div>
//       <button
//         onClick={() => onAddToCart(medication)}
//         disabled={!medication.inStock}
//         className="mt-4 w-full rounded-full bg-orange-500 py-2 text-white transition-colors hover:bg-orange-600 disabled:bg-gray-300"
//       >
//         Add to Cart
//       </button>
//     </div>
//   );



import { useCart } from "@/context/CartContext";
import { Medication } from "@/types";

const MedicationCard: React.FC<{ medication: Medication }> = ({ medication }) => {
  const { addToCart } = useCart();
  return (
      <div className="rounded-lg border bg-white p-4 shadow-sm transition-shadow hover:shadow-md">
       <Image
         src={medication.imageUrl}
         alt={medication.name}
         className="mb-4 h-48 w-full rounded-lg object-cover"
       />
       <h3 className="text-lg font-semibold">{medication.name}</h3>
       <p className="text-sm text-gray-600">{medication.genericName}</p>
       <div className="mt-2 flex items-center justify-between">
         <span className="text-lg font-bold text-orange-500">
           ₦{medication.price.toLocaleString()}
         </span>
         {medication.inStock ? (
           <span className="rounded-full bg-green-100 px-2 py-1 text-sm text-green-600">
             In Stock
           </span>
         ) : (
           <span className="rounded-full bg-red-100 px-2 py-1 text-sm text-red-600">
             Out of Stock
           </span>
         )}
       </div>
       {/* <button
         onClick={() => onAddToCart(medication)}
         disabled={!medication.inStock}
         className="mt-4 w-full rounded-full bg-orange-500 py-2 text-white transition-colors hover:bg-orange-600 disabled:bg-gray-300"
       >
         Add to Cart
       </button> */}
      <button onClick={() => addToCart(medication)}>Add to Cart</button>
     </div>
  );
};

export default MedicationCard;
// import { Pharmacy } from "@/types";


// // Pharmacy Card
// export const PharmacyCard = ({ 
//     pharmacy 
//   }: { 
//     pharmacy: Pharmacy 
//   }) => (
//     <div className="rounded-lg  w-500 bg-white p-4 shadow-sm">
//       <div className="items-start justify-between">
//         <div>
//         <Image
//          src={pharmacy.imageUrl}
//          alt={pharmacy.name}
//          className="mb-4 h-48 w-full rounded-lg object-cover"
//        />
//           <h3 className="text-lg font-semibold">{pharmacy.name}</h3>
//           <p className="text-sm text-gray-600">{pharmacy.address}</p>
//           <div className="mt-2 flex items-center gap-2">
//             <div className="flex text-yellow-400">
//               {Array(5).fill(null).map((_, i) => (
//                 <span key={i}>★</span>
//               ))}
//             </div>
//             <span className="text-sm text-gray-600">{pharmacy.rating}/5</span>
//           </div>
//         </div>
//         <button className="rounded-full bg-orange-500 px-4 py-2 text-white">
//           View
//         </button>
//       </div>
//       <div className="mt-4 flex items-center justify-between text-sm text-gray-600">
//         <span>{pharmacy.openingHours}</span>
//         {pharmacy.deliveryAvailable && (
//           <span className="rounded-full bg-green-100 px-2 py-1 text-green-600">
//             Delivery Available
//           </span>
//         )}
//       </div>
//     </div>
//   );
  
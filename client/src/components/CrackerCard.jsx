// import { useState } from "react";
// import QuickViewModal from "../components/CrackerQuickView";

// export default function CrackerCard({ item }) {
//   const [selected, setSelected] = useState(null);

//   const addToCart = (product) => {
//     let cart = JSON.parse(localStorage.getItem("cart")) || [];

//     const existing = cart.find((i) => i._id === product._id);

//     if (existing) {
//       existing.quantity += 1;
//     } else {
//       cart.push({ ...product, quantity: 1 });
//     }

//     localStorage.setItem("cart", JSON.stringify(cart));
//     window.dispatchEvent(new Event("cartUpdated"));
//   };

//   return (
//     <>
//       {/* ================= CARD ================= */}
//       <div
//         className="relative border border-orange-500 rounded-2xl shadow-lg
//         hover:shadow-blue-400 transition
//         bg-white p-6 flex flex-col
//         h-[80px] sm:h-[360px]"
//       >
//         {/* IMAGE */}
//         <div className="overflow-hidden rounded-xl h-36 sm:h-40">
//           <img
//             src={item.image || "/placeholder.jpg"}
//             alt={item.name}
//             onClick={() => setSelected(item)}
//             className="w-full h-full object-cover cursor-pointer
//             hover:scale-110 transition"
//           />
//         </div>

//         {/* DETAILS */}
//         <div className="flex-1 flex flex-col justify-between mt-2">
//           <div>
//             {/* NAME (FIXED HEIGHT) */}
//             <h3
//               className="font-semibold text-sm sm:text-md text-center
//               line-clamp-2 min-h-[40px]"
//             >
//               {item.name}
//             </h3>

//             {/* CATEGORY */}
//             <p className="text-xs sm:text-sm text-gray-500 text-center mt-1">
//               {item.category}
//             </p>

//             {/* PRICE */}
//             <div className="mt-2 flex justify-center gap-3 items-center">
//               <span className="line-through text-gray-400 text-sm">
//                 ₹{item.price}
//               </span>
//               <span className="text-orange-500 font-bold text-lg">
//                 ₹{item.offer}
//               </span>
//             </div>
//           </div>

//           {/* ACTIONS (ALWAYS BOTTOM) */}
//           <div className="flex gap-2 mt-3">
//             <button
//               onClick={() => addToCart(item)}
//               className="flex-1 py-2 bg-orange-400 hover:bg-orange-500
//               text-black font-bold rounded-lg transition"
//             >
//               ➕
//             </button>

//             <button
//               onClick={() => setSelected(item)}
//               className="flex-1 py-2 border border-orange-400
//               text-orange-400 font-bold rounded-lg
//               hover:bg-orange-400 hover:text-black transition"
//             >
//               👁
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* ================= QUICK VIEW MODAL ================= */}
//       {selected && (
//         <QuickViewModal
//           cracker={selected}
//           onClose={() => setSelected(null)}
//         />
//       )}
//     </>
//   );
// }

import { useState } from "react";
import QuickViewModal from "../components/CrackerQuickView";

export default function CrackerCard({ item }) {
  const [selected, setSelected] = useState(null);

  const addToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existing = cart.find(i => i._id === product._id);

    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    window.dispatchEvent(new Event("cartUpdated"));
  };

  return (
    <>
      {/* ================= CARD ================= */}
      <div
        className="
        bg-white border border-orange-500 rounded-2xl shadow
        hover:shadow-lg transition
        flex flex-col
        h-full
        "
      >
        {/* ================= IMAGE ================= */}
        <div className="relative overflow-hidden rounded-t-2xl aspect-[4/3]">
          <img
            src={item.image || "/placeholder.jpg"}
            alt={item.name}
            onClick={() => setSelected(item)}
            className="
            w-full h-full object-cover cursor-pointer
            sm:hover:scale-110 transition
            "
          />
        </div>

        {/* ================= CONTENT ================= */}
        <div className="flex flex-col flex-1 p-3 sm:p-4">
          {/* NAME */}
          <h3
            className="
            text-sm sm:text-base font-semibold text-center
            line-clamp-2 min-h-[40px]
            "
          >
            {item.name}
          </h3>

          {/* CATEGORY */}
          <p className="text-xs sm:text-sm text-gray-500 text-center mt-1">
            {item.category}
          </p>

          {/* PRICE */}
          <div className="flex justify-center gap-2 items-center mt-2">
            <span className="line-through text-gray-400 text-xs sm:text-sm">
              ₹{item.price}
            </span>
            <span className="text-orange-500 font-bold text-base sm:text-lg">
              ₹{item.offer}
            </span>
          </div>

          {/* PUSH BUTTONS TO BOTTOM */}
          <div className="mt-auto pt-3 flex gap-2">
            <button
              onClick={() => addToCart(item)}
              className="
              flex-1 py-2 rounded-lg font-bold
              bg-orange-400 hover:bg-orange-500
              text-black transition text-sm sm:text-base
              "
            >
              ➕
            </button>

            <button
              onClick={() => setSelected(item)}
              className="
              flex-1 py-2 rounded-lg font-bold
              border border-orange-400 text-orange-400
              hover:bg-orange-400 hover:text-black
              transition text-sm sm:text-base
              "
            >
              👁
            </button>
          </div>
        </div>
      </div>

      {/* ================= QUICK VIEW ================= */}
      {selected && (
        <QuickViewModal
          cracker={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </>
  );
}

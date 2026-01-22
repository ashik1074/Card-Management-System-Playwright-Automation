// Centralized test data for Card Application (Product & Scheme info)

// 🔁 Utility function to generate random numeric IDs
function generateRandomId(length = 10) {
  let result = '';
  for (let i = 0; i < length; i++) {
    result += Math.floor(Math.random() * 10); // digits only
  }
  return result;
}

export const cardApplicationData = {
  // ✅ User changes product + scheme here only
  productAndScheme: {



//>>>>>>>>>>>>>>>>>>>>>>>>Input only here<<<<<<<<<<<<<<<<<<<<<<<
    productName: 'Arekta Product', // 👈👈👈👈👈 Product to be selected from dropdown
    schemeName: 'VISA',            // 👈👈👈👈👈 Scheme to be selected from dropdown
//>>>>>>>>>>>>>>>>>>>>>>>>Input only here<<<<<<<<<<<<<<<<<<<<<<<

  
  },

  // ✅ Random IDs auto-generate on every run
  references: {
    applicationReferenceId: generateRandomId(10),
    referenceId: generateRandomId(12),
  },
};

//   Other Scheme Options:
//                 - MASTERCARD
//                 - VISA
//                 - UNION_PAY
//                 - AMEX

// Other Product Options:
//                 - NewProduct
//                 - Arekta Product
//                 - January 2026 Product Launch

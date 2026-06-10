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
    productName: 'Employee Card', // 👈👈👈👈👈 Product to be selected from dropdown
    schemeName: 'Visa',            // 👈👈👈👈👈 Scheme to be selected from dropdown
    cardType: 'Prepaid Cards',           // 👈👈👈👈👈 Card Type to be selected from dropdown (if applicable)
//>>>>>>>>>>>>>>>>>>>>>>>>Input only here<<<<<<<<<<<<<<<<<<<<<<<

// Sample Card Types: Prepaid Cards | Credit Cards | Debit Cards
// Sample Scheme Options: MASTERCARD | VISA | UNION_PAY | AMEX
// Sample Product Options:  Exclusive Platinum Card | Arekta Product | January 2026 Product Launch
  },

  // ✅ Random IDs auto-generate on every run
  references: {
    applicationReferenceId: generateRandomId(10),
    referenceId: generateRandomId(12),
  },
};


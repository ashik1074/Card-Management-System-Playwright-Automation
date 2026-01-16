// test-data/test.data.js
// Centralized test data file

export const schemeData = {
  schemeName: 'metronic Visa U.S.A Inc. V001', // 👈👈👈👈👈 User changes this value only
};

// Other Options:
// - metronic Mastercard
// - metronic Visa U.S.A Inc. V001
// - metronic China UnionPay Co.,
// - metronic American Express Company A000
// - metronic American Express Company A001

// Map full scheme label → short scheme name shown in BIN dropdown (if different)
const schemeNameMap = {
  'metronic Visa U.S.A Inc. V001': 'Visa U.S.A Inc.',
  // Add more mappings only if your BIN dropdown uses different text
  // 'metronic Mastercard': 'MASTERCARD',
};

// ✅ Export schemeSelection so other files can import it
export const schemeSelection = {
  name: schemeNameMap[schemeData.schemeName] || schemeData.schemeName, // fallback to original
};

export const binData = {
  productType: 'Credit',         // 👈👈👈👈👈 user selects Product Type (dropdown)
  marketSegment: 'Consumer',     // 👈👈👈👈👈 user selects Market Segment (dropdown)
  binType: 'Issuer BIN',         // 👈👈👈👈👈 user selects BIN Type (dropdown)
  radioOption: 'No',             // 👈👈👈👈👈 user selects Radio option (Yes/No)
};

// Other productType Options:
// - Credit
// - Debit
// - Prepaid

// Other marketSegment Options:
// - Consumer
// - Business
// - Commercial

// Other binType Options:
// - Issuer BIN
// - Acquire BIN

// Other radioOption Options:
// - Yes
// - No

// Generates a random numeric ID (digits only)
export function generateRandomIdNumber(length = 10) {
  let id = '';

  for (let i = 0; i < length; i++) {
    id += Math.floor(Math.random() * 10); // add digit 0–9
  }

  return id;
}
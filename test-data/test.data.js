// test-data/test.data.js
// Centralized test data file

/* =========================================================
   Scheme Selection Input Here
   ========================================================= */

export const schemeData = {
  schemeName: 'metronic China UnionPay Co.,', // 👈👈👈👈👈 USER changes this value only
  //Other Options:
  //               - metronic Visa U.S.A Inc. V001
  //               - metronic Mastercard
  //               - metronic China UnionPay Co.,
  //               - metronic American Express Company A000
  //               - metronic American Express Company A001
};

// Map full scheme label → short scheme name shown in BIN dropdown (if different)
const schemeNameMap = {
  'metronic Visa U.S.A Inc. V001': 'Visa U.S.A Inc.',
  'metronic China UnionPay Co.,': 'scheme China UnionPay Co.,',
  'metronic Mastercard': 'scheme Mastercard',
  'metronic American Express Company A000': 'scheme American Express',
  // Add more mappings ONLY if your BIN dropdown uses different text
  // 'metronic Mastercard': 'MASTERCARD',
};

export const schemeSelection = {
  name: schemeNameMap[schemeData.schemeName] || schemeData.schemeName,
};

/* =========================================================
   Utility Functions
   ========================================================= */

// Generates a random numeric string (digits only)
export function generateRandomIdNumber(length = 10) {
  let id = '';
  for (let i = 0; i < length; i++) {
    id += Math.floor(Math.random() * 10);
  }
  return id;
}

// Generates a random BIN name (alphabets + numbers, readable)
export function generateRandomBinName() {
  const prefixes = ['BIN', 'CARD', 'BANK', 'PAY', 'FIN'];
  const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
  const randomNumber = generateRandomIdNumber(6);

  return `${prefix}-${randomNumber}`; // e.g. BIN-483920
}

// Generates a random Card Range name
export function generateRandomCardRangeName() {
  // Example: CR-482913-7392
  return `CR-${generateRandomIdNumber(6)}-${generateRandomIdNumber(4)}`;
}

/* =========================================================
   BIN Configuration Input Here
   ========================================================= */

export const binData = {
  productType: 'Credit',     //👈👈👈👈👈 user selects Product Type (dropdown)
  marketSegment: 'Consumer', //👈👈👈👈👈 user selects Market Segment (dropdown)
  binType: 'Issuer BIN',     //👈👈👈👈👈 user selects BIN Type (dropdown)
  radioOption: 'No',         //👈👈👈👈👈 user selects Radio option (Yes/No)

  binName: generateRandomBinName(),    // ✅ random every run
  binValue: generateRandomIdNumber(6), // ✅ random 6-digit BIN value every run
};

/* =========================================================
   Card Range Configuration Input Here
   ========================================================= */

export const cardRangeData = {
  rangeName: generateRandomCardRangeName(), // ✅ random every run
  minValue: '00000000',               //👈👈👈👈👈 user sets Min Value
  maxValue: '00000999',               //👈👈👈👈👈 user sets Max Value
};

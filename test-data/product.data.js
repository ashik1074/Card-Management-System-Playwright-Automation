// test-data/product.before.data.js
// ✅ Only user-editable inputs live here (no runtime copied values)

export const productBeforeData = {
  // Start page for Card Range List
  rangeListUrl:
    'http://asp-portal-qa25.konasl.net:10443',

  // Login credentials
  credentials: {
    email: 'checker25@yopmail.com',
    password: 'Abc@1234',
  },

  // The Card Range name you want to search & open
  cardRangeName: 'CUP Platinum Employee Standard',

  // Where we will save runtime copied values for later tests
  runtimeFilePath: './runtime/runtime.product.json',
};

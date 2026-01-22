// test-data/policy.data.js
// Centralized test data for PIN Policy module

// ✅ Random policy name generator
export function generateRandomPolicyName(prefix = 'Policy') {
  const randomSuffix = Math.floor(100000 + Math.random() * 900000); // 6-digit number
  return `${prefix} ${randomSuffix}`;
}

export const pinPolicyData = {
  email: 'banking-cms-123@yopmail.com',
  password: 'Abc@1234',

  policyNamePrefix: 'Policy',

  pinLength: '4',
  reuseCount: '5',
  resetFrequencyType: 'Yearly',
  freeResetLimit: '5',
  numberOfAttempts: '5',
  blockDurationType: 'Days',
  blockDurationValue: '5',
  offsetGenerationRule: 'IBM 3624',
  pinDeliveryMethod: 'PIN Mailer',

  approvalSearchEvent: 'Pin Policy Creation',
};

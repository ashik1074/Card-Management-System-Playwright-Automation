// product-pages/product.create.page.js
import { productData, generateRandomProductName } from '../test-data/product.data.js';

import { fillProductBasic } from './product.basic.page.js';
import { fillProductPolicies } from './product.policies.page.js';
import { fillSchemeEnrollmentAndSubmit } from './product.schemeEnrollment.page.js';

export async function createProduct(page) {
  // ✅ Random product name each run
  const productName = generateRandomProductName(productData.productNamePrefix);

  // Step 1: Product Basic
  await fillProductBasic(page, productName);

  // Step 2: Policies
  await fillProductPolicies(page);

  // Step 3: Scheme Enrollment + Submit
  await fillSchemeEnrollmentAndSubmit(page);

  // return created product name (useful for logs/assertions)
  return productName;
}

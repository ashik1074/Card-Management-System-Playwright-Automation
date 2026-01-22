// ---------------- Environment selection (change only this) ----------------
export const runConfig = {

  //>>>>>>ASP List<<<<<<<<
  //CMS Portal 01 = cmsPortal01
  //ASP Portal QA25 = qa25
  //Banking CMS 123 = bankingCms123
  //Next Gen 02 = nextGen02

  //Place your ASP key from above list to here
  //                   ↓ 

//>>>>>>>>>>>>>>>>>>>>>Input Only here<<<<<<<<<<<<<<<<<<<<<<<
  activeEnvKey: 'bankingCms123', // 👈👈👈👈👈👈 Change only this when you want a different ASP
//>>>>>>>>>>>>>>>>>>>>>Input Only here<<<<<<<<<<<<<<<<<<<<<<<


};

// ---------------- Environments ----------------
export const environments = {
  cmsPortal01: {
    name: 'CMS Portal 01',
    baseUrl: 'http://cms-portal-01.konasl.net:10443',
    email: 'ashik1074@yopmail.com',
    password: 'Ashik@123',
  },

  qa25: {
    name: 'ASP Portal QA25',
    baseUrl: 'http://asp-portal-qa25.konasl.net:10443',
    email: 'checker25@yopmail.com',
    password: 'Abc@1234',
  },

  bankingCms123: {
    name: 'Banking CMS 123',
    baseUrl: 'http://banking-cms-123.konasl.net:10443',
    email: 'banking-cms-123@yopmail.com',
    password: 'Abc@1234',
  },

  nextGen02: {
    name: 'Next Gen 02',
    baseUrl: 'http://next-gen-02.konasl.net:10443',
    email: 'next-gen-admin@yopmail.com',
    password: 'Konasl@@1234',
  },
};

// ---------------- Other test data example (keep yours here) ----------------
export const cardAppData = {
  fullName: 'Demo User',
  // add other test data here...
};

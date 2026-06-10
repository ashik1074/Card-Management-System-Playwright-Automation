// ---------------- Environment selection (change only this) ----------------
export const runConfig = {

  //>>>>>>ASP List<<<<<<<<
  //CMS Portal 01 = cmsPortal01
  //ASP Portal QA25 = qa25
  //Banking CMS 123 = bankingCms123
  //Next Gen 02 = nextGen02
  //Next Gen 05 = nextGen05
  //Midland Bank Stage Demo = stageDemo
  //Dolon APU ASP = nextgen16
  //Anan bhai ASP QA32 = qa32
  //Standard Chartered Bank Bangladesh = scb_bd
  //Eastern Bank Limited Bangladesh = ebl_bd
  //CMS Dev = devEnv

  //Place your ASP key from above list to here
  //                   ↓ 
//>>>>>>>>>>>>>>>>>>>>>Input Only here<<<<<<<<<<<<<<<<<<<<<<<
  activeEnvKey: 'devEnv', // 👈👈👈👈👈👈 Change only this when you want a different ASP
//>>>>>>>>>>>>>>>>>>>>>Input Only here<<<<<<<<<<<<<<<<<<<<<<<

};

// ---------------- Environments ----------------
export const environments = {
  cmsPortal01: {
    name: 'CMS Portal 01',
    baseUrl: 'http://cms-portal-01.konasl.net:10443',
    email: 'ashik1074@yopmail.com',
    password: 'Ksl@12345',
  },



  
  stageDemo: {
    name: 'Midland Bank Stage Demo',
    baseUrl: 'http://mdbdemo.konasl.net:10443',
    email: 'cso@yopmail.com',
    password: 'Konasl@1234',
  },

    devEnv: {
    name: 'CMS Dev',
    baseUrl: 'http://asp-portal-dev1.konasl.net:10443',
    email: 'nazmul@yopmail.com',
    password: 'Konasl@12345',
  },


  ebl_bd: {
    name: 'Eastern Bank Limited Bangladesh',
    baseUrl: 'http://ebl-bd.konasl.net:10443/',
    email: 'ebl-bd@yopmail.com',
    password: 'Konasl@1234',
  },

  scb_bd: {
    name: 'Standard Chartered Bank Bangladesh',
    baseUrl: 'http://scb-bd.konasl.net:10443',
    email: 'scb-bd@yopmail.com',
    password: 'Konasl@123',
  },


  qa32: {
    name: 'Anan bhai ASP QA32',
    baseUrl: 'http://asp-portal-qa32.konasl.net:10443/',
    email: 'anan1@yopmail.com',
    password: 'Konasl@@123',
  },


  nextgen16: {
    name: 'Dolon APU ASP',
    baseUrl: 'http://next-gen-16.konasl.net:10443',
    email: 'tanni_3@yopmail.com',
    password: 'Konasl@@123',
  },
  
  
  qa25: {
    name: 'ASP Portal QA25',
    baseUrl: 'http://asp-portal-qa25.konasl.net:10443',
    email: 'maker25@yopmail.com',
    password: 'Abc@@1234',
  },

  bankingCms123: {
    name: 'Banking CMS 123',
    baseUrl: 'http://banking-cms-123.konasl.net:10443',
    email: 'banking-cms-123@yopmail.com',
    password: 'Ksl@12345',
  },

  nextGen05: {
    name: 'next-gen-05',
    baseUrl: 'http://next-gen-05.konasl.net:10443',
    email: 'nahar_1@yopmail.com',
    password: 'Konasl@@123',
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

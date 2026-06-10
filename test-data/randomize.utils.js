// Generates a random Father's Name (male names)
export function generateRandomFatherName() {
  const firstNames = [
    'Abdul', 'Mohammad', 'Rahim', 'Karim', 'Hasan',
    'Mahmud', 'Arif', 'Jamal', 'Kamal', 'Siddiq'
  ];

  const lastNames = [
    'Ahmed', 'Khan', 'Rahman', 'Islam',
    'Chowdhury', 'Hossain', 'Ali', 'Uddin'
  ];

  const first =
    firstNames[Math.floor(Math.random() * firstNames.length)];
  const last =
    lastNames[Math.floor(Math.random() * lastNames.length)];

  return `${first} ${last}`;
}

// Generates a random Mother's Name (female names)
export function generateRandomMotherName() {
  const firstNames = [
    'Ayesha', 'Fatema', 'Salma', 'Nusrat', 'Rubina',
    'Rashida', 'Shahana', 'Nasrin', 'Farhana', 'Sultana'
  ];

  const lastNames = [
    'Begum', 'Akter', 'Khatun', 'Banu',
    'Rahman', 'Islam', 'Ahmed'
  ];

  const first =
    firstNames[Math.floor(Math.random() * firstNames.length)];
  const last =
    lastNames[Math.floor(Math.random() * lastNames.length)];

  return `${first} ${last}`;
}


  export function getRandomFullName() {
    const firstNames = [
      'Ashik', 'Rahim', 'Karim', 'Hasan', 'Mahmud', 'Rafi', 'Sabbir', 'Fahim',
      'Nayeem', 'Tanvir', 'Imran', 'Arif', 'Sakib', 'Shakil', 'Arafat',
      'Sabbir', 'Riasat', 'Dhruba', 'Parvez', 'Zahid', 'Rakib', 'Amin',
      'Abir', 'Rahil', 'Robiul', 'Rafid', 'Hamza', 'Mahin',
      'Jaber', 'Muhammad', 'Rashid', 'Karim', 'Zawher', 'Samiul', 'Rayhan',
      'Abdul', 'Tariq', 'Alvee', 'Nazmul', 'Musa', 'Mokbul'
    ];

    const lastNames = [
      'Rahman', 'Islam', 'Khan', 'Ahmed', 'Hossain', 'Chowdhury', 'Mahmud',
      'Miah', 'Sarker', 'Uddin', 'Sheikh', 'Alam', 'Bhuiyan',
      'Malik', 'Ali', 'Hasan', 'Ansari', 'Farooq', 'Uddin',
      'Sorkar', 'Qureshi', 'Karim'
    ];
    const first = firstNames[Math.floor(Math.random() * firstNames.length)];
    const last = lastNames[Math.floor(Math.random() * lastNames.length)];

    return `${first} ${last}`;
  }


  export function generateRandomNumber(length = 10) {
  let result = '';
  for (let i = 0; i < length; i++) {
    result += Math.floor(Math.random() * 10); // digits only
  }
  return result;
}

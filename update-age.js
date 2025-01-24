const fs = require('fs');
const path = require('path');
const birthdate = new Date('2005-01-24'); // Replace with your birthdate

// Get current date
const today = new Date();
let age = today.getFullYear() - birthdate.getFullYear();
const month = today.getMonth();
const birthMonth = birthdate.getMonth();

if (month < birthMonth || (month === birthMonth && today.getDate() < birthdate.getDate())) {
  age--;
}

// Modify the content to update age
const filePath = path.resolve(__dirname, 'README.md'); // or the file where you want to update the age
let content = fs.readFileSync(filePath, 'utf8');
const updatedContent = content.replace(/age: \d+/, `age: ${age}`);

fs.writeFileSync(filePath, updatedContent);
console.log(`Updated age to: ${age}`);

import { readFileSync } from 'fs';

const filePath = './pages/payroll/agi.vue';

try {
  const content = readFileSync(filePath, 'utf8');
  console.log(content);
} catch (error) {
  console.error('Error reading file:', error);
} 
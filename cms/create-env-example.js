const fs = require('fs');
const path = require('path');

const envContent = `####################################
## General
####################################

PORT=8055
PUBLIC_URL="http://localhost:8055"
LOG_LEVEL="info"
LOG_STYLE="pretty"

####################################
## Database
####################################

DB_CLIENT="pg"
DB_HOST="127.0.0.1" 
DB_PORT="5432"
DB_DATABASE="redofy"
DB_USER="your_password_here"
DB_PASSWORD="your_password_here"

####################################
## Security
####################################

KEY="generate_random_string_here"
SECRET="generate_random_string_here"
ACCESS_TOKEN_TTL="15m"
REFRESH_TOKEN_TTL="7d"
CORS_ENABLED="true"
CORS_ORIGIN="true"

####################################
## Admin Account
####################################

ADMIN_EMAIL="your_email@example.com"
ADMIN_PASSWORD="your_password_here"

####################################
## Extensions
####################################

EXTENSIONS_PATH="./extensions"`;

fs.writeFileSync(path.join(__dirname, '.env'), envContent);
console.log('.env file created successfully'); 
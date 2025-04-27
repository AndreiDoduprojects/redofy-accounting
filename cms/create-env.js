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
DB_USER="postgres"
DB_PASSWORD="postgres"

####################################
## Security
####################################

KEY="replace-with-random-key"
SECRET="replace-with-random-secret"
ACCESS_TOKEN_TTL="15m"
REFRESH_TOKEN_TTL="7d"
CORS_ENABLED="true"
CORS_ORIGIN="true"

####################################
## Admin Account
####################################

ADMIN_EMAIL="admin@redofy.se"
ADMIN_PASSWORD="redofy-admin"

####################################
## Extensions
####################################

EXTENSIONS_PATH="./extensions"`;

fs.writeFileSync(path.join(__dirname, '.env'), envContent);
console.log('.env file created successfully'); 
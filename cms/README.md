# Redofy CMS

Redofy CMS is built on Directus and serves as the backend for the Redofy accounting platform, providing:

- Content management for the website
- API endpoints for the dashboard
- Financial data processing
- Swedish accounting-specific modules

## Getting Started

### Prerequisites

- Node.js 16+
- PostgreSQL 13+
- Yarn

### Installation

1. Create a PostgreSQL database named `redofy`
2. Set up the environment:

```bash
# Copy and modify .env for your environment
cp .env.example .env
```

3. Install dependencies and bootstrap Directus:

```bash
yarn install
yarn bootstrap
```

4. Start the Directus server:

```bash
yarn start
```

The CMS will be available at http://localhost:8055

## Extension Structure

The Redofy backend is organized around Swedish accounting requirements:

```
extensions/
├── modules/
│   ├── accounting/
│   │   ├── moms/           # BAS-IX XML generation
│   │   └── reports/        # PDF exports
│   └── payroll/
│       └── agi/            # Arbetsgivaravgift
└── shared/
    ├── database/           # Swedish schema
    └── ai/                 # Claude & chatGPT service
```

### Testing

Run the test suite with:

```bash
yarn test
```

## Database Schema

The database follows Swedish accounting standards with support for:

- BAS Chart of Accounts
- Swedish VAT handling (Moms)
- Employer contributions (Arbetsgivaravgift)
- SIE import/export

## Configuration

See `.env` for all configuration options. Key settings include:

- Database connection
- Admin credentials
- Extension paths

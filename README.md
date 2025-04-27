# Redofy Accounting System

Modern AI-powered accounting system for Swedish businesses.

## Project Structure

This is a monorepo containing the following packages:

- **website**: Main marketing website using Nuxt 3
- **cms**: Content management system for website content
- **ui-dashboard**: Customer dashboard interface
- **app**: Mobile app for on-the-go accounting

## Development

### Prerequisites

- Node.js 18+
- Yarn 4+

### Setup

```bash
# Install dependencies
yarn install

# Start the development server for website
yarn dev:website

# Start the development server for dashboard
yarn dev:dashboard

# Start the development server for CMS
yarn dev:cms

# Start the development server for app
yarn dev:app
```

## Design System

The project uses Redofy Morphic Design System - a comprehensive CSS framework with:

- CSS Variables for theming
- Layout utilities
- Component styling
- Dark/light mode support
- Integration with Tailwind CSS

## Tech Stack

- **Frontend**: Vue 3, Nuxt 3, TypeScript
- **Styling**: CSS, Tailwind CSS
- **State Management**: Pinia
- **API**: REST, GraphQL
- **Deployment**: Docker, Kubernetes

## License

Private - © Redofy Accounting

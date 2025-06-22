# CLICKSELLAR - AI-Powered Luxury E-commerce Platform

## Overview

CLICKSELLAR is a modern luxury e-commerce platform that combines AI-powered automation with advanced features like AR try-on capabilities, affiliate marketing, and comprehensive dashboard analytics. The application is built as a full-stack solution with a React frontend and Express.js backend, designed to serve high-end brands and e-commerce visionaries.

## System Architecture

### Technology Stack
- **Frontend**: React 18 with TypeScript, Vite build system
- **Backend**: Express.js with TypeScript, running on Node.js
- **Database**: PostgreSQL via Neon with Drizzle ORM
- **Authentication**: Session-based with express-session
- **Payment Processing**: Stripe integration for subscriptions and one-time payments
- **UI Framework**: Tailwind CSS with Radix UI components
- **State Management**: TanStack Query for server state management
- **Internationalization**: i18next with support for 5 languages (English, Spanish, French, Arabic, Chinese)

### Architecture Pattern
The application follows a monorepo structure with clear separation between client and server code:
- `/client` - React frontend application
- `/server` - Express.js backend API
- `/shared` - Shared TypeScript schemas and types
- `/public` - Static assets and localization files

## Key Components

### Frontend Architecture
- **Component Structure**: Modular React components with TypeScript
- **Routing**: Wouter for client-side routing
- **State Management**: React Context for authentication, TanStack Query for API data
- **UI Components**: Custom component library built on Radix UI primitives
- **Styling**: Tailwind CSS with custom luxury color scheme and gradients
- **Forms**: React Hook Form with Zod validation

### Backend Architecture
- **API Layer**: RESTful Express.js API with TypeScript
- **Database Layer**: Drizzle ORM with PostgreSQL
- **Authentication**: Session-based authentication with secure cookies
- **Middleware**: Request logging, JSON parsing, static file serving
- **Error Handling**: Centralized error handling with proper HTTP status codes

### Database Schema
The database uses PostgreSQL with the following main entities:
- **Users**: Authentication and profile management
- **Products**: E-commerce product catalog
- **Stores**: Multi-store platform integration
- **AI Team**: AI assistant management
- **Marketing Content**: AI-generated marketing materials

## Data Flow

### Authentication Flow
1. User registration/login through frontend forms
2. Credentials validated against database
3. Session created and stored server-side
4. Session cookie sent to client for subsequent requests

### Product Management Flow
1. Products created through dashboard interface
2. Data validated using Zod schemas
3. Stored in PostgreSQL via Drizzle ORM
4. Real-time updates via TanStack Query

### Payment Processing Flow
1. Stripe integration for subscription and one-time payments
2. Client-side Stripe Elements for secure card collection
3. Server-side payment intent creation and confirmation
4. User subscription status updated in database

## External Dependencies

### Core Dependencies
- **Database**: Neon PostgreSQL (serverless)
- **Payment Processing**: Stripe API
- **Email Service**: SendGrid (configured but not fully implemented)
- **AI Services**: OpenAI API (for AI marketing features)

### Development Dependencies
- **Build System**: Vite for frontend, esbuild for backend
- **Type Checking**: TypeScript with strict configuration
- **Database Migrations**: Drizzle Kit for schema management
- **Development Server**: tsx for TypeScript execution

## Deployment Strategy

### Production Environment
- **Platform**: Replit with autoscale deployment
- **Build Process**: 
  1. Frontend built with Vite to `/dist/public`
  2. Backend bundled with esbuild to `/dist/index.js`
- **Environment Variables**: DATABASE_URL, Stripe keys, session secrets
- **Health Checks**: Root endpoint returns server status

### Development Environment
- **Hot Reload**: Vite dev server with HMR
- **Database**: Shared Neon instance with development schema
- **Live Reload**: tsx for backend development

### Deployment Configuration
The application includes multiple production entry points for deployment reliability:
- `production-server.js` - Main production entry
- `start-production.mjs` - ESM production starter
- `index.mjs` - Root-level fallback entry

## Changelog

Changelog:
- June 17, 2025. Initial setup
- June 17, 2025. Fixed deployment issues:
  - Removed async IIFE causing early process exit
  - Fixed process.exit() calls in seed operations
  - Added production-specific signal handling
  - Implemented infinite loop for production persistence
  - Corrected AI team schema validation errors
- June 18, 2025. Updated showcase gallery with luxury images:
  - Added luxury fashion boutique with crystal chandeliers
  - Added premium auto showroom with digital sales tools
  - Added penthouse interior with floor-to-ceiling windows
  - Added AR shopping experience with virtual try-on technology
- June 18, 2025. Removed Shopify integration completely:
  - Transitioned to CLICKSELLAR proprietary store builder
  - Updated all components to reference native capabilities
  - Replaced external dependencies with internal systems
- June 18, 2025. Enhanced AI store generation system:
  - Built complete AI-powered store builder with luxury templates
  - Added Stripe checkout integration for product purchases
  - Implemented responsive storefront with shopping cart functionality
  - Generated 10 AI products per store with authentic Unsplash images
  - Integrated navigation with "Create Store" option in main menu
- June 18, 2025. Advanced inventory management and AI customization:
  - Created comprehensive inventory management dashboard with real-time tracking
  - Added AI customization interface with pricing strategies and brand settings
  - Implemented inventory logging system for stock adjustments and sales
  - Built AI behavior configuration with creativity levels and content tones
  - Enhanced product schema with inventory tracking and AI generation flags
- June 18, 2025. Transitioned to public store creation platform:
  - Removed authentication requirements from store generation
  - Made "Create Store" the primary call-to-action in navigation
  - Updated store creation to work without database persistence for instant demos
  - Enhanced CreateStore page as standalone interface with no signup requirements
  - Successfully tested public API generating complete stores with 10 products
- June 18, 2025. Centralized store builder into comprehensive dashboard:
  - Integrated advanced store builder directly into dashboard as tabbed interface
  - Created unified platform with Overview, Create Store, Products, Analytics, and Settings tabs
  - Replaced separate /create-store route with centralized dashboard experience
  - Enhanced navigation to emphasize Dashboard as primary hub for store management
  - Maintained all advanced customization features within authenticated dashboard environment
- June 18, 2025. Unified all dashboard interfaces into single comprehensive platform:
  - Consolidated 7 separate dashboard pages into one interface with tabbed navigation
  - Combined Overview, Create Store, Products, Analytics, AI Marketing, Affiliate, and Settings
  - Removed redundant routing and component files for cleaner architecture
  - Added comprehensive product management, AI marketing hub, affiliate program management
  - Implemented nested settings with store configuration, AI preferences, payments, and notifications
  - Created single source of truth for all dashboard functionality
- June 18, 2025. Fixed SPA routing for production deployment:
  - Resolved 404 errors on dashboard routes after deployment (dashboard/products, dashboard/ai-team, etc.)
  - Removed conflicting root route that served JSON instead of React app
  - Configured proper SPA fallback in production server to serve index.html for client-side routes
  - Added health check endpoint at /api/health for deployment monitoring
  - Ensured all dashboard pages work correctly in both development and production environments

## User Preferences

Preferred communication style: Simple, everyday language.
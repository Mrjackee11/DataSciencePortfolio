# Personal Portfolio Website

## Overview

This is a modern, full-stack personal portfolio website built with React, Express, and TypeScript. The application features a clean, professional design with a dark theme and showcases projects, skills, education, and contact information. It's designed to be deployed on Replit with PostgreSQL database support.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized production builds
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **State Management**: TanStack React Query for server state management
- **Theme System**: next-themes for dark/light mode support

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM with PostgreSQL
- **Session Management**: Built-in session handling with connect-pg-simple
- **Development**: Hot reload with Vite middleware integration

### Data Storage
- **Database**: PostgreSQL (configured via Neon Database)
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Storage Interface**: Abstract storage interface with in-memory fallback for development

## Key Components

### Frontend Components
1. **Navigation**: Sticky navigation with smooth scrolling and theme toggle
2. **Hero Section**: Landing page with personal branding and call-to-action
3. **About Section**: Personal description and key highlights
4. **Projects Section**: Filterable project showcase with categories
5. **Education Section**: Academic background with timeline
6. **Skills Section**: Technical skills with proficiency levels
7. **Contact Section**: Contact form with toast notifications

### Backend Components
1. **Express Server**: Main application server with middleware setup
2. **Route Handler**: Modular route registration system
3. **Storage Layer**: Abstracted data access with CRUD operations
4. **Vite Integration**: Development-only Vite middleware for HMR

### UI System
- **Design System**: Consistent component library based on Radix UI
- **Theming**: CSS custom properties with light/dark mode support
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Animations**: Smooth transitions and micro-interactions

## Data Flow

1. **Client Request**: User interacts with React components
2. **State Management**: React Query manages server state and caching
3. **API Communication**: RESTful API calls to Express backend
4. **Data Processing**: Express routes handle business logic
5. **Database Operations**: Drizzle ORM performs database queries
6. **Response**: JSON data sent back to client
7. **UI Update**: React components re-render with new data

## External Dependencies

### Frontend Dependencies
- **React Ecosystem**: React, React DOM, React Query
- **UI Libraries**: Radix UI components, Lucide React icons
- **Styling**: Tailwind CSS, Class Variance Authority, clsx
- **Forms**: React Hook Form with Zod validation
- **Utils**: date-fns, embla-carousel-react

### Backend Dependencies
- **Server**: Express.js with TypeScript support
- **Database**: Drizzle ORM, @neondatabase/serverless
- **Session**: connect-pg-simple for PostgreSQL sessions
- **Development**: tsx for TypeScript execution, esbuild for bundling

### Development Tools
- **Build**: Vite with React plugin
- **TypeScript**: Strict configuration with path mapping
- **Linting**: Built-in TypeScript checking
- **Database**: Drizzle Kit for schema management

## Deployment Strategy

### Production Build
1. **Frontend Build**: Vite builds optimized React application
2. **Backend Build**: esbuild bundles Express server
3. **Static Assets**: Client build output served by Express
4. **Database**: PostgreSQL instance with Drizzle migrations

### Replit Configuration
- **Runtime**: Node.js 20 with PostgreSQL 16 module
- **Development**: `npm run dev` starts both frontend and backend
- **Production**: `npm run build` then `npm run start`
- **Port Configuration**: Express serves on port 5000, proxied to port 80
- **Database**: Environment variable `DATABASE_URL` for PostgreSQL connection

### Environment Setup
- **Development**: Vite dev server with HMR and Express API
- **Production**: Express serves static files and API routes
- **Database**: Automatic schema push with `npm run db:push`

## Changelog

```
Changelog:
- June 14, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```
# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

PulsePro.ai is a Next.js 15 application focused on inspection management with internationalization support. It's a marketing website built with modern React patterns and TypeScript.

## Key Technologies & Architecture

- **Framework**: Next.js 15 (App Router) with TypeScript
- **Styling**: Tailwind CSS v4 with shadcn/ui components
- **Internationalization**: next-intl with support for English (en), French (fr), and Hindi (hi)
- **Database**: Prisma ORM with MySQL (configured but minimal schema)
- **Theme**: next-themes for dark/light mode
- **UI Components**: shadcn/ui (New York style) with Radix UI primitives
- **Icons**: Lucide React and RemixIcon
- **Package Manager**: Yarn (v1.22.22)

## Development Commands

```bash
# Development server
yarn dev

# Production build
yarn build

# Start production server
yarn start

# Lint code
yarn lint
```

## Project Structure

### Core Directories
- `src/app/[locale]/` - Localized pages using Next.js App Router
- `src/components/` - Reusable React components
- `src/components/ui/` - shadcn/ui components
- `src/i18n/` - Internationalization configuration
- `src/messages/` - Translation files (en.json, ar.json)

### Key Files
- `src/i18n/routing.ts` - Locale routing configuration (always show locale prefix)
- `src/middleware.ts` - Handles locale routing
- `components.json` - shadcn/ui configuration
- `prisma/schema.prisma` - Database schema (MySQL)

## Internationalization Setup

The app uses next-intl with:
- Supported locales: en, fr, hi
- Default locale: en
- URL structure: Always prefixed (e.g., `/en/about`, `/fr/about`)
- Messages stored in `src/messages/{locale}.json`

## Component Architecture

- **Layout**: Uses app/[locale]/layout.tsx with Navigation and Footer
- **Page Components**: Located in app/[locale]/page.tsx and subdirectories
- **Reusable Components**: Organized in src/components/ with clear separation between UI and business logic
- **UI Components**: shadcn/ui components in src/components/ui/

## Styling Approach

- Tailwind CSS v4 with CSS variables enabled
- Dark/light theme support via next-themes
- Component styling follows shadcn/ui patterns
- Global styles in src/globals.css

## Database & API

- Prisma configured for MySQL
- Minimal schema currently defined
- Ready for expansion with inspection-related models

## Build Configuration

- Standalone output for deployment flexibility
- Image optimization with WebP/AVIF support
- Security headers configured
- Performance optimizations for Next.js 15

## Development Guidelines

- All new pages should be created in the `app/[locale]/` directory
- Use the existing component patterns and shadcn/ui components
- Follow the established internationalization patterns
- Maintain TypeScript strict mode
- Use the configured path aliases (@/components, @/lib, etc.)

## Git Commit Guidelines

- Write clear, concise commit messages that describe the changes
- Do NOT include any Claude-related text such as "Generated with Claude Code" or "Co-Authored-By: Claude" in commit messages
- Keep commit messages professional and focused on the actual changes made
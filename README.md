# Frontend - Key Generator App

This is the frontend application for the Key Generator, built with Next.js 15, React 19, TypeScript, and Tailwind CSS.

## Project Structure

```
frontend/
├── src/
│   ├── app/              # Next.js app directory
│   │   ├── dashboard/    # Dashboard page (protected)
│   │   ├── login/        # Login page
│   │   ├── signup/       # Signup page
│   │   ├── globals.css   # Global styles
│   │   ├── layout.tsx    # Root layout
│   │   └── page.tsx      # Home page
│   └── components/       # Reusable components
├── public/               # Static assets
├── package.json          # Dependencies and scripts
├── tailwind.config.js    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── README.md             # This file
```

## Features

- **Modern UI**: Beautiful, responsive design with Tailwind CSS
- **Authentication**: User signup, login, and protected routes
- **Key Management**: Generate, copy, and revoke API keys
- **TypeScript**: Full type safety throughout the application
- **Responsive Design**: Works on all device sizes
- **State Management**: Local state management with React hooks

## Pages

### Home Page (`/`)
- Landing page with navigation to signup and login
- Clean, modern design with call-to-action buttons

### Signup Page (`/signup`)
- User registration form with email and password
- Password confirmation and validation
- Redirects to login after successful signup

### Login Page (`/login`)
- User authentication form
- JWT token storage in localStorage
- Redirects to dashboard after successful login

### Dashboard (`/dashboard`)
- Protected route requiring authentication
- Generate new API keys
- View all user's API keys with status
- Copy keys to clipboard
- Revoke keys with confirmation

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Dependencies

### Core
- **Next.js 15** - React framework with app router
- **React 19** - UI library
- **TypeScript** - Type safety

### Styling
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

### Development
- **ESLint** - Code linting
- **@types/*** - TypeScript type definitions

## API Integration

The frontend communicates with the backend API at `http://localhost:5000`:

- **Authentication**: `/api/auth/signup` and `/api/auth/login`
- **Keys**: `/api/keys/*` endpoints for key management

## State Management

The application uses React's built-in state management:
- `useState` for local component state
- `useEffect` for side effects and API calls
- `useRouter` for navigation
- `localStorage` for token persistence

## Security Features

- **Protected Routes**: Dashboard requires authentication
- **Token Storage**: JWT tokens stored securely in localStorage
- **Input Validation**: Form validation on both client and server
- **Error Handling**: Comprehensive error messages and user feedback

## Responsive Design

The application is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones
- All modern browsers

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Development Notes

- The app uses Next.js 15 with the app directory structure
- All pages are client-side rendered for dynamic functionality
- Tailwind CSS provides utility classes for styling
- TypeScript ensures type safety across the application
- API calls are made using the native `fetch` API 
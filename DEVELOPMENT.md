# Iraqi Real Estate App - Development Guide

## 🏗️ Architecture Overview

This project follows a modern, scalable architecture:

### Backend (Node.js + Express + MongoDB)
- **Authentication**: JWT-based with refresh tokens
- **Database**: MongoDB with Mongoose ODM
- **Real-time**: Socket.io for messaging
- **File Upload**: Multer + Cloudinary integration
- **Security**: Helmet, CORS, rate limiting
- **Validation**: Express-validator
- **Internationalization**: Arabic/English error messages

### Mobile App (React Native)
- **Navigation**: React Navigation v6
- **State Management**: React Query + Context API
- **Internationalization**: i18next with Arabic RTL support
- **Styling**: StyleSheet with theme support
- **Maps**: React Native Maps
- **Image Handling**: React Native Image Picker
- **Real-time**: Socket.io client

## 📁 Project Structure

```
iraqi-real-estate-app/
├── backend/                    # Node.js API server
│   ├── models/                 # Mongoose models
│   │   ├── User.js            # User schema with auth & profile
│   │   ├── Property.js        # Property listings schema
│   │   └── Message.js         # Messaging system schema
│   ├── routes/                # Express routes
│   │   ├── auth.js           # Authentication endpoints
│   │   ├── users.js          # User management (to be created)
│   │   ├── properties.js     # Property CRUD (to be created)
│   │   └── messages.js       # Messaging API (to be created)
│   ├── middleware/           # Custom middleware
│   │   ├── auth.js          # JWT authentication
│   │   └── errorHandler.js  # Global error handling
│   ├── .env.example         # Environment template
│   ├── package.json         # Dependencies
│   └── server.js           # Main server file
├── mobile/                   # React Native app
│   ├── src/
│   │   ├── components/      # Reusable UI components (to be created)
│   │   ├── screens/        # App screens (to be created)
│   │   ├── navigation/     # Navigation setup (to be created)
│   │   ├── context/        # React contexts (to be created)
│   │   ├── services/       # API and external services
│   │   │   ├── api.ts     # API service class
│   │   │   └── i18n.ts    # Internationalization setup
│   │   ├── utils/         # Utility functions (to be created)
│   │   └── types/         # TypeScript types (to be created)
│   ├── App.tsx           # Main app component
│   └── package.json      # Dependencies
├── setup.sh             # Automated setup script
├── README.md            # Project overview
└── DEVELOPMENT.md       # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+
- MongoDB
- React Native development environment
- iOS Simulator (macOS) or Android Emulator

### Quick Setup
```bash
# Clone and setup
git clone <your-repo>
cd iraqi-real-estate-app
./setup.sh
```

### Manual Setup

1. **Backend Setup**
```bash
cd backend
npm install
cp .env.example .env
# Edit .env with your configuration
npm run dev
```

2. **Mobile Setup**
```bash
cd mobile
npm install
# iOS (macOS only)
cd ios && pod install && cd ..
npx react-native run-ios

# Android
npx react-native run-android
```

## 🔧 Development Tasks

### Immediate Next Steps

1. **Complete Backend Routes**
   - [ ] User management (`routes/users.js`)
   - [ ] Property CRUD (`routes/properties.js`)
   - [ ] Messaging system (`routes/messages.js`)
   - [ ] File upload handling
   - [ ] Search and filtering

2. **Create Mobile UI Components**
   - [ ] Authentication screens (Login/Register)
   - [ ] Property listing components
   - [ ] Property detail screen
   - [ ] Search and filter UI
   - [ ] User profile screens
   - [ ] Messaging interface
   - [ ] Navigation setup

3. **Essential Features**
   - [ ] Image upload and management
   - [ ] Map integration
   - [ ] Push notifications
   - [ ] Offline support
   - [ ] Search functionality

### Backend Routes to Implement

```javascript
// Users
GET    /api/users/profile
PUT    /api/users/profile
POST   /api/users/avatar
GET    /api/users/:id

// Properties
GET    /api/properties
POST   /api/properties
GET    /api/properties/:id
PUT    /api/properties/:id
DELETE /api/properties/:id
POST   /api/properties/:id/images
POST   /api/properties/:id/favorite
DELETE /api/properties/:id/favorite

// Messages
GET    /api/messages/conversations
GET    /api/messages/conversations/:id
POST   /api/messages
PUT    /api/messages/:id/read

// Search
GET    /api/search/properties
GET    /api/search/users
```

### Mobile Screens to Create

```
src/screens/
├── Auth/
│   ├── LoginScreen.tsx
│   ├── RegisterScreen.tsx
│   └── ForgotPasswordScreen.tsx
├── Home/
│   ├── HomeScreen.tsx
│   └── SearchScreen.tsx
├── Property/
│   ├── PropertyListScreen.tsx
│   ├── PropertyDetailScreen.tsx
│   ├── AddPropertyScreen.tsx
│   └── EditPropertyScreen.tsx
├── Profile/
│   ├── ProfileScreen.tsx
│   ├── EditProfileScreen.tsx
│   └── SettingsScreen.tsx
├── Messages/
│   ├── ConversationListScreen.tsx
│   └── ChatScreen.tsx
└── Map/
    └── MapScreen.tsx
```

## 🎨 UI/UX Considerations

### Design System
- **Colors**: Blue theme (#1e40af primary)
- **Typography**: Support for Arabic fonts
- **Icons**: React Native Vector Icons
- **Layout**: RTL support for Arabic

### Iraqi Market Specifics
- **Currency**: Iraqi Dinar (IQD) formatting
- **Cities**: Major Iraqi cities predefined
- **Phone**: Iraqi phone number validation (+964)
- **Cultural**: Gender preferences for shared housing

## 🔐 Security Implementation

### Authentication Flow
1. JWT access tokens (7 days)
2. Refresh tokens (30 days)
3. Automatic token refresh
4. Secure storage (AsyncStorage)

### Data Protection
- Password hashing (bcrypt)
- Input validation
- Rate limiting
- CORS configuration
- Helmet security headers

## 🌐 Internationalization

### Supported Languages
- English (en) - Default
- Arabic (ar) - RTL support

### Implementation
- All UI text externalized
- Currency and date formatting
- Number formatting for Arabic
- RTL layout support

## 📊 Database Schema

### Key Collections
- **users**: User profiles and authentication
- **properties**: Property listings
- **messages**: Messaging system
- **conversations**: Message grouping

### Indexes for Performance
- City + property type searches
- User location lookups
- Message threading
- Full-text search

## 🧪 Testing Strategy

### Backend Testing
```bash
cd backend
npm test
```

### Mobile Testing
```bash
cd mobile
npm test
```

### Test Coverage Areas
- Authentication flows
- Property CRUD operations
- Search functionality
- Message sending/receiving
- File uploads

## 🚀 Deployment

### Backend Deployment
- Use environment variables for all config
- MongoDB Atlas for production database
- Cloudinary for image storage
- SSL certificate required

### Mobile App Deployment
- Build signed APK/IPA
- App Store / Google Play submission
- Code signing certificates
- App icons and splash screens

## 📈 Scalability Considerations

### Database Optimization
- Proper indexing strategy
- Query optimization
- Connection pooling
- Aggregation pipelines for analytics

### API Performance
- Response caching
- Pagination for lists
- Image optimization
- CDN for static assets

### Mobile Performance
- Image lazy loading
- Infinite scroll for listings
- Offline data caching
- Background sync

## 🔧 Development Tools

### Recommended VS Code Extensions
- ES7+ React/Redux/React-Native snippets
- Prettier
- ESLint
- Thunder Client (API testing)
- MongoDB for VS Code

### Useful Commands
```bash
# Backend development
npm run dev          # Start with nodemon
npm run test         # Run tests
npm run lint         # Check code style

# Mobile development
npm start            # Start Metro bundler
npm run ios          # Run on iOS simulator
npm run android      # Run on Android emulator
npm run lint         # Check code style
```

## 📝 Code Style

### Backend (JavaScript)
- Use ES6+ features
- Async/await over promises
- Descriptive variable names
- Comprehensive error handling

### Mobile (TypeScript)
- Strict TypeScript configuration
- Interface definitions for all data
- Component prop typing
- Functional components with hooks

## 🤝 Contributing

1. Create feature branches
2. Write tests for new functionality
3. Update documentation
4. Follow existing code style
5. Test on both platforms (iOS/Android)

## 📞 Support

For questions about Iraqi real estate market requirements or technical implementation, refer to the project documentation or create an issue in the repository.

---

**Happy Development! 🏠📱**

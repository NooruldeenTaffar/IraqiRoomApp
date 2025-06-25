# Iraqi Real Estate App (BaytIraqi)

A mobile application for the Iraqi real estate market, allowing users to post and search for rental properties.

## Features

- Post listings for rooms, houses, and apartments
- Search by city, price range, and property type
- User profiles for tenants and landlords
- Messaging system between users
- Arabic language support
- Iraqi Dinar (IQD) currency formatting
- Map view for property locations
- User verification system

## Tech Stack

- **Mobile**: React Native
- **Backend**: Node.js + Express.js
- **Database**: MongoDB
- **Authentication**: JWT
- **Maps**: React Native Maps
- **Internationalization**: react-i18next

## Project Structure

```
iraqi-real-estate-app/
├── mobile/                 # React Native app
├── backend/               # Node.js API server
├── shared/                # Shared utilities and types
└── docs/                  # Documentation
```

## Getting Started

### Prerequisites

- Node.js (v16+)
- React Native CLI
- MongoDB
- iOS Simulator / Android Emulator

### Backend Setup

```bash
cd backend
npm install
cp .env.example .env
# Configure your environment variables
npm run dev
```

### Mobile Setup

```bash
cd mobile
npm install
# iOS
npx react-native run-ios
# Android
npx react-native run-android
```

## Major Iraqi Cities Supported

- Baghdad (بغداد)
- Erbil (أربيل)
- Basra (البصرة)
- Mosul (الموصل)
- Najaf (النجف)
- Karbala (كربلاء)
- Sulaymaniyah (السليمانية)
- Duhok (دهوك)

## Currency

All pricing is in Iraqi Dinar (IQD) with proper formatting and localization.

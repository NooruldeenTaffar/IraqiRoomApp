#!/bin/bash

# Iraqi Real Estate App Setup Script

echo "🏠 Setting up Iraqi Real Estate App..."
echo "======================================"

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 16+ first."
    exit 1
fi

# Check if MongoDB is installed
if ! command -v mongod &> /dev/null; then
    echo "⚠️  MongoDB is not installed. Please install MongoDB first."
    echo "   macOS: brew install mongodb-community"
    echo "   Ubuntu: sudo apt install mongodb"
fi

# Check if React Native CLI is installed
if ! command -v react-native &> /dev/null; then
    echo "⚠️  React Native CLI is not installed. Installing..."
    npm install -g react-native-cli
fi

echo ""
echo "📦 Installing backend dependencies..."
cd backend
npm install
echo "✅ Backend dependencies installed!"

echo ""
echo "📱 Installing mobile dependencies..."
cd ../mobile
npm install

# iOS setup (if on macOS)
if [[ "$OSTYPE" == "darwin"* ]]; then
    echo ""
    echo "🍎 Setting up iOS dependencies..."
    cd ios
    pod install
    cd ..
    echo "✅ iOS dependencies installed!"
fi

cd ..

echo ""
echo "📝 Creating environment files..."

# Create backend .env file
if [ ! -f backend/.env ]; then
    cp backend/.env.example backend/.env
    echo "✅ Created backend/.env from template"
    echo "⚠️  Please update backend/.env with your configuration"
else
    echo "✅ backend/.env already exists"
fi

echo ""
echo "🎉 Setup complete!"
echo ""
echo "Next steps:"
echo "==========="
echo "1. Start MongoDB:"
echo "   mongod"
echo ""
echo "2. Update backend/.env with your configuration"
echo ""
echo "3. Start the backend server:"
echo "   cd backend && npm run dev"
echo ""
echo "4. Start the mobile app:"
echo "   cd mobile && npm start"
echo "   Then run: npm run ios or npm run android"
echo ""
echo "🔗 API will be available at: http://localhost:5000"
echo "📚 API documentation: http://localhost:5000/api/health"
echo ""
echo "Happy coding! 🚀"

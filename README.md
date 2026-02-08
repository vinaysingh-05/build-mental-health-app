# Mental Health Web App - Full Stack

Complete MERN stack mental health application with React/Next.js frontend and Node.js/Express backend.

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ 
- MongoDB (local or Atlas cloud)
- npm or pnpm

### Setup Instructions

#### 1. **Setup Backend**

```bash
cd backend
npm install
cp .env.example .env
npm run dev
```

Backend runs on: **http://localhost:5000**

#### 2. **Setup Frontend**

```bash
# Open new terminal from root directory
npm install
npm run dev
```

Frontend runs on: **http://localhost:3000**

---

## 📋 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user  
- `GET /api/auth/me` - Get current user profile (Protected)

### Stress Data
- `POST /api/stress/add` - Add stress data (Protected)
- `GET /api/stress/latest` - Get latest stress entry (Protected)
- `GET /api/stress/history` - Get 30-day history (Protected)

### Support
- `GET /api/support/tips?level=HIGH` - Get mental health tips

---

## 🔐 Authentication

All protected endpoints require JWT token in header:

```
Authorization: Bearer <token>
```

---

## 🗄️ Database Schema

### User Model
```
{
  name: String,
  email: String (unique),
  password: String (hashed),
  createdAt: Date
}
```

### StressData Model
```
{
  userId: ObjectId,
  mood: Number (1-5),
  sleepHours: Number,
  screenTimeHours: Number,
  academicLoad: Number (1-5),
  stressLevel: "LOW" | "MODERATE" | "HIGH",
  createdAt: Date
}
```

---

## 📊 Stress Level Calculation

- **HIGH**: sleep < 4 AND screenTime > 8 AND mood ≤ 2, OR 3+ bad factors
- **MODERATE**: 2+ moderate risk factors
- **LOW**: Healthy values across all metrics

---

## 📂 Project Structure

```
build-mental-health-app/
├── backend/
│   ├── src/
│   │   ├── server.js
│   │   ├── app.js
│   │   ├── config/db.js
│   │   ├── models/
│   │   ├── routes/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   └── utils/
│   ├── package.json
│   └── .env
├── app/
├── components/
├── package.json
└── tsconfig.json
```

---

## 🛠️ Environment Variables

### Backend (.env)
```
MONGODB_URI=mongodb://localhost:27017/mental-health
JWT_SECRET=your_secret_key_change_in_production
PORT=5000
NODE_ENV=development
```

### MongoDB Options
- **Local**: `mongodb://localhost:27017/mental-health`
- **Atlas Cloud**: `mongodb+srv://user:password@cluster.mongodb.net/mental-health`

---

## 🚀 Running Both Servers

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
```

**Terminal 2 - Frontend:**
```bash
npm run dev
```

Then open **http://localhost:3000** in browser.

---

## 📝 API Examples

### Register
```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"name":"John","email":"john@example.com","password":"pass123"}'
```

### Login
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"john@example.com","password":"pass123"}'
```

### Add Stress Data (Protected)
```bash
curl -X POST http://localhost:5000/api/stress/add \
  -H "Authorization: Bearer TOKEN_HERE" \
  -H "Content-Type: application/json" \
  -d '{
    "mood": 2,
    "sleepHours": 3,
    "screenTimeHours": 9,
    "academicLoad": 5
  }'
```

### Get Tips
```bash
curl http://localhost:5000/api/support/tips?level=HIGH
```

---

## ✅ Features

✅ JWT Authentication with bcrypt  
✅ MongoDB with Mongoose  
✅ Smart stress analysis  
✅ Mental health tips API  
✅ Error handling & validation  
✅ CORS enabled  
✅ Environment variables  
✅ Production-ready code  

---

## 🆘 Troubleshooting

**MongoDB Connection Error?**
- Ensure MongoDB is running: `mongod`
- Or update `MONGODB_URI` in `.env` to use MongoDB Atlas

**Port Already in Use?**
- Change `PORT` in backend `.env`
- Frontend port: modify in `next.config.mjs` or use `PORT=3001 npm run dev`

**npm ERR?**
- Clear cache: `npm cache clean --force`
- Delete node_modules: `rm -r node_modules && npm install`

---

Made with ❤️ for mental health awareness

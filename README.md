# BasaFinder Backend

Welcome to the **BasaFinder Backend** repository! This backend service powers the BasaFinder platform, facilitating rental listings, user authentication, payments, and more.

## 🚀 Features
- User Authentication (JWT-based)
- Role-based Access Control (Admin, Landlord, Tenant)
- Rental Listings Management
- Payment Integration
- Secure Data Validation with Zod
- Error Handling & Logging
- Deployed with **Vercel / Render**

---

## 🛠️ Installation & Setup
### Prerequisites
- **Node.js** (>=16.x)
- **MongoDB** (Local or Atlas)
- **Vercel / Render / Railway** (For Deployment)

### Clone the Repository
```sh
git clone https://github.com/your-repo/basafinder-backend.git
cd basafinder-backend
```

### Install Dependencies
```sh
npm install
```

### Set Up Environment Variables
Create a `.env` file in the root directory and add:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_ACCESS_SECRET=your_jwt_secret
JWT_REFRESH_SECRET=your_refresh_secret
CORS_ORIGIN=https://basa-finder-client.vercel.app
```

### Run the Server
```sh
npm run dev
```
Server will be running on `http://localhost:5000`

---

## 📌 API Endpoints
### Authentication
| Method | Endpoint           | Description         |
|--------|-------------------|---------------------|
| POST   | `/api/v1/auth/register` | Register a new user |
| POST   | `/api/v1/auth/login`    | Login user & get token |
| GET    | `/api/v1/auth/me`      | Get current user |

### Rentals & Listings
| Method | Endpoint             | Description        |
|--------|---------------------|--------------------|
| GET    | `/api/v1/listings`   | Get all listings  |
| POST   | `/api/v1/listings`   | Create new listing |
| GET    | `/api/v1/listings/:id` | Get listing by ID |

### Payments
| Method | Endpoint            | Description       |
|--------|--------------------|------------------|
| GET    | `/api/v1/payment/my-payments` | View user payments |
| GET    | `/api/v1/payment/all-payments` | Admin: View all payments |
| POST   | `/api/v1/payment/checkout` | Initiate payment |

---

## 🔐 Security & CORS Setup
Ensure CORS policy is properly configured in `server.js`:
```js
app.use(cors({
  origin: process.env.CORS_ORIGIN,
  credentials: true
}));
```

---

## 🚀 Deployment
### Deploying to Vercel / Render
1. Push the code to GitHub
2. Link repository with **Vercel / Render**
3. Set environment variables
4. Deploy 🚀

### Continuous Deployment
- Use **GitHub Actions** or **Render Auto Deploy** for automatic deployments.

---

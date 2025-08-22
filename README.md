# 🐍 Snake Explorer

A Next.js project to **discover, learn, and manage snake species**.  
It includes authentication with **NextAuth**, image upload via **imgbb**, and snake data storage in **MongoDB**.  

---

## 🚀 Features
- 🔐 Google Authentication with NextAuth  
- 📝 Add new snake details with image upload  
- 🖼️ Image storage using [imgbb API](https://api.imgbb.com/)  
- 📦 Data storage in MongoDB  
- 📊 Dashboard for managing snakes  
- 🎨 TailwindCSS + modern responsive UI  

---

## ⚙️ Setup & Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/snake-explorer.git
   cd snake-explorer
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Setup environment variables**  
   Create a file named **`.env.local`** in the root folder and add:
   ```env
   MONGODB_URL=your-mongodb-url
   DB_NAME=your-database-name

   GOOGLE_CLIENT_ID=your-client-id.apps.googleusercontent.com
   GOOGLE_CLIENT_SECRET=your-google-client-secret

   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your-random-secret

   NEXT_PUBLIC_IMGBB_KEY=your-imgbb-api-key
   ```

4. **Run the project locally**
   ```bash
   npm run dev
   ```

   App will be available at 👉 `http://localhost:3000`

---

## 📍 Route Summary

| Route | Description |
|-------|-------------|
| `/` | Home page with **hero section** & intro |
| `/dashboard/add-snake` | Form to add a new snake (protected, requires login) |
| `/api/snakes` | API route to add snakes into MongoDB |
| `/api/auth/[...nextauth]` | NextAuth route handler for authentication |
| `/snakes` (optional if you add later) | List all snakes stored in the database |

---

## 🛠️ Tech Stack
- **Next.js 13 (App Router)**
- **NextAuth.js** for authentication  
- **MongoDB** for database  
- **TailwindCSS** for styling  
- **imgbb API** for image uploads  

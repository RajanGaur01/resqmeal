# ResQMeal 🍲✨

[![React](https://img.shields.io/badge/React-19.0-61DAFB?style=flat&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.2-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1-06B6D4?style=flat&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Firebase](https://img.shields.io/badge/Firebase-Auth%20%26%20Firestore-FFCA28?style=flat&logo=firebase&logoColor=black)](https://firebase.google.com/)
[![Google Gemini AI](https://img.shields.io/badge/Google_Gemini-GenAI-8E75C2?style=flat&logo=google&logoColor=white)](https://ai.google.dev/)
[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](LICENSE)

> **ResQMeal** is a real-time, AI-powered surplus food rescue and redistribution ecosystem. It bridges the gap between food donors (restaurants, caterers, banquet halls, individuals) and verified NGOs/shelters to prevent food waste and combat hunger in local communities.

---

## 🌟 Key Features

### 🏢 For Non-Governmental Organizations (NGOs)
- **Live Food Rescue Map**: Interactive geospatial map identifying real-time surplus food listings nearby.
- **Pickup Coordination & Routing**: Track food pickups, manage verification codes, and log logistics smoothly.
- **Nearby Food Alerts**: Instant notifications for available meals matching target capacity and dietary types.
- **Impact & Metrics Tracking**: Visualize meals distributed, families nourished, and CO₂ emissions diverted.

### 🍽️ For Food Donors
- **Quick Food Donation Portal**: Seamless workflow to list surplus meals, packaging details, and pickup windows.
- **AI-Assisted Classification**: Integrates Google Gemini AI to analyze food categories, suggest shelf-life duration, and optimize matchings.
- **Donation History & Analytics**: Monitor past donations, frequency, and collective contribution impact.
- **Status Tracking**: Live updates on NGO claim status and scheduled pickup timings.

### 🔒 Enterprise-Grade Experience
- **Role-Based Portals**: Dedicated onboarding, registration workflows, and isolated dashboards for Donors and NGOs.
- **Firebase Authentication & Firestore**: Secure cloud persistence and real-time synchronization.
- **Modern Responsive Design**: Fluid animations with Tailwind CSS and Motion.

---

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript, React Router v7
- **Styling & UI**: Tailwind CSS v4, Motion (Framer Motion), Lucide Icons, React Hot Toast
- **Data Visualization**: Recharts
- **Backend & Storage**: Firebase Authentication, Cloud Firestore, Firebase Storage
- **AI Engine**: Google Gen AI SDK (`@google/genai`)
- **Build Tool**: Vite 6

---

## 📁 Project Structure

```text
resqmeal/
├── public/                # Static assets (favicons, banners)
├── src/
│   ├── components/        # Reusable UI components & layouts
│   │   ├── donor/         # Donor portal: dashboard, donate form, history, analytics
│   │   ├── ngo/           # NGO portal: dashboard, live map, pickups, requests, impact
│   │   ├── Auth.tsx       # Authentication & login flow
│   │   ├── Hero.tsx       # Landing page hero banner & CTA
│   │   ├── Navbar.tsx     # Navigation bar & status
│   │   └── ...            # Role selection, onboarding forms & dialogs
│   ├── lib/
│   │   └── firebase.ts    # Firebase client initialization
│   ├── App.tsx            # Main application router
│   ├── main.tsx           # Application entry point
│   └── index.css          # Tailwind CSS style definitions
├── .env.example           # Template for environment variables
├── package.json           # Dependencies and project scripts
├── tsconfig.json          # TypeScript compiler configuration
└── vite.config.ts         # Vite build configuration
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 18+ recommended)
- `npm` or `yarn` / `pnpm`

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/RajanGaur01/resqmeal.git
   cd resqmeal
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env.local` file in the root directory by copying `.env.example`:
   ```bash
   cp .env.example .env.local
   ```
   Fill in your Firebase and Gemini credentials:
   ```env
   # Google Gemini API (Optional)
   VITE_GEMINI_API_KEY="your-gemini-api-key"

   # Firebase Configuration
   VITE_FIREBASE_API_KEY="your-firebase-api-key"
   VITE_FIREBASE_AUTH_DOMAIN="your-app.firebaseapp.com"
   VITE_FIREBASE_PROJECT_ID="your-project-id"
   VITE_FIREBASE_STORAGE_BUCKET="your-app.firebasestorage.app"
   VITE_FIREBASE_MESSAGING_SENDER_ID="your-sender-id"
   VITE_FIREBASE_APP_ID="your-app-id"
   VITE_FIREBASE_MEASUREMENT_ID="your-measurement-id"
   ```

4. **Start Development Server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## ☁️ Deploying to Vercel

This repository is pre-configured for seamless zero-config deployment on [Vercel](https://vercel.com):

1. **Import Project into Vercel**:
   - Go to your [Vercel Dashboard](https://vercel.com/new).
   - Select **Import Git Repository** and select `RajanGaur01/resqmeal`.
   - Vercel automatically detects Vite as the framework.

2. **Add Environment Variables in Vercel**:
   Before deploying, expand the **Environment Variables** panel in Vercel and add:
   - `VITE_FIREBASE_API_KEY`
   - `VITE_FIREBASE_AUTH_DOMAIN`
   - `VITE_FIREBASE_PROJECT_ID`
   - `VITE_FIREBASE_STORAGE_BUCKET`
   - `VITE_FIREBASE_MESSAGING_SENDER_ID`
   - `VITE_FIREBASE_APP_ID`
   - `VITE_FIREBASE_MEASUREMENT_ID`
   - `VITE_GEMINI_API_KEY` (optional)

3. **Deploy**:
   - Click **Deploy**.
   - Client-side routing is handled out-of-the-box via `vercel.json`.

---

## 📦 Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Launches the local Vite development server with hot-reload |
| `npm run build` | Compiles and builds the production bundle into `/dist` |
| `npm run preview` | Previews the production build locally |
| `npm run lint` | Type-checks the codebase using TypeScript (`tsc --noEmit`) |

---

## 🤝 Contributing

Contributions are always welcome! If you have suggestions or improvements:

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'feat: Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

---

## 📄 License

Distributed under the Apache 2.0 License. See `LICENSE` for more information.

---

<p align="center">
  Developed with ❤️ by <a href="https://github.com/RajanGaur01">Rajan Gaur</a>
</p>

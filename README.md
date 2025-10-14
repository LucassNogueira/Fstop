# F-Stop - Formula 1 Hub

A modern, full-stack Formula 1 application built with Next.js 14, TypeScript, and Material UI. Track drivers, teams, circuits, and stay updated with the latest F1 news.

## 🏎️ Features

- **Driver Standings**: View current driver rankings with detailed statistics
- **Team Standings**: Follow your favorite F1 teams and their performance
- **Circuit Information**: Explore all F1 circuits with detailed race information
- **User Favorites**: Save your favorite drivers, teams, and circuits
- **Next Race Info**: Stay informed about upcoming races
- **News Section**: Read the latest F1 news and updates
- **User Authentication**: Secure login and registration with Firebase
- **Responsive Design**: Beautiful UI that works on all devices

## 🛠️ Technologies Used

### Frontend
- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe code
- **Material UI**: Modern, accessible UI components
- **TanStack Query**: Efficient data fetching and caching
- **date-fns**: Date manipulation and formatting

### Backend & Services
- **Firebase**: Authentication and Firestore database
- **Formula 1 API**: Real-time F1 data from api-sports.io

### State Management
- **React Context**: Global auth state
- **TanStack Query**: Server state management

## 📋 Prerequisites

Before you begin, ensure you have:
- Node.js 18+ installed
- npm or yarn package manager
- A Firebase project set up
- Formula 1 API key from [api-sports.io](https://api-sports.io/)

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd fstop-nextjs
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env.local` file in the root directory:

```bash
cp .env.example .env.local
```

Fill in your credentials:

```env
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

# Formula 1 API
NEXT_PUBLIC_F1_API_KEY=your_f1_api_key_here
```

### 4. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
fstop-nextjs/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── drivers/           # Driver standings page
│   │   ├── teams/             # Team standings page
│   │   ├── circuits/          # Circuits page
│   │   ├── logged/            # Authenticated home page
│   │   ├── login/             # Login page
│   │   ├── signup/            # Sign up page
│   │   ├── profile/           # User profile page
│   │   ├── news/              # News page
│   │   └── layout.tsx         # Root layout
│   │
│   └── shared/                # Shared resources
│       ├── components/        # Reusable UI components
│       │   ├── NavBar.tsx
│       │   ├── Footer.tsx
│       │   ├── DriverCard.tsx
│       │   ├── TeamCard.tsx
│       │   ├── CircuitCard.tsx
│       │   ├── NextRace.tsx
│       │   ├── FavDriver.tsx
│       │   └── NewsCard.tsx
│       │
│       ├── contexts/          # React contexts
│       │   └── AuthContext.tsx
│       │
│       ├── hooks/             # Custom hooks
│       │   └── queries/       # TanStack Query hooks
│       │       ├── useGetDriverStandings.tsx
│       │       ├── useGetTeamStandings.tsx
│       │       ├── useGetRaces.tsx
│       │       ├── useGetDriverDetails.tsx
│       │       └── useGetTeamDetails.tsx
│       │
│       ├── types/             # TypeScript types
│       │   └── f1Types.ts
│       │
│       ├── utils/             # Utility functions
│       │   ├── axiosInstance.ts
│       │   ├── firebase.ts
│       │   ├── authUtils.ts
│       │   └── imageData.ts
│       │
│       ├── theme/             # Material UI theme
│       │   └── theme.ts
│       │
│       └── providers/         # Provider components
│           └── Providers.tsx
│
├── public/                    # Static assets
│   └── media/                # Images and media files
│       ├── halfbodyimg/      # Driver images
│       ├── newsimg/          # News images
│       └── trackimg/         # Circuit images
│
└── package.json
```

## 🔑 API Information

### Formula 1 API
This app uses the Formula 1 API from [api-sports.io](https://api-sports.io/):

**Endpoints Used:**
- `/rankings/drivers` - Driver standings
- `/rankings/teams` - Team standings
- `/races` - Race information and circuits
- `/drivers` - Detailed driver information
- `/teams` - Detailed team information

**API Features:**
- Real-time F1 data
- Driver statistics
- Team information
- Circuit details
- Race schedules

### Firebase
Used for:
- User authentication (email/password)
- Firestore database for user profiles
- Storing user favorites (drivers, teams, circuits)

## 🎨 Design Philosophy

This project follows Next.js 14 best practices as outlined in the docs:

- **App Router**: Leveraging Next.js 14 App Router
- **Server Components**: Where appropriate for performance
- **TypeScript**: Fully typed for better DX
- **Material UI**: Consistent, accessible design system
- **TanStack Query**: Efficient data fetching with caching
- **Folder Structure**: Feature-based organization

## 📝 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

## 👤 Author

Lucas Nogueira
- LinkedIn: [lucas-nogueira](https://www.linkedin.com/in/lucas-nogueira-34aa41228/)

## 🙏 Acknowledgments

- Formula 1 API by [api-sports.io](https://api-sports.io/)
- Next.js team for the amazing framework
- Material UI for the component library
- Firebase for authentication and database services

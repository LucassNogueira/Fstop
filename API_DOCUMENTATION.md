# API Documentation - F-Stop Application

## Overview

This document details all the APIs used in the F-Stop Formula 1 application.

---

## 1. Formula 1 API (api-sports.io)

**Base URL:** `https://v1.formula-1.api-sports.io`

**Provider:** [api-sports.io](https://api-sports.io/)

**Authentication:** API Key via headers
- Header: `x-rapidapi-key`
- Host: `x-rapidapi-host: api-formula-1.p.rapidapi.com`

### Endpoints Used

#### Driver Standings
```
GET /rankings/drivers?season={year}
```
**Purpose:** Fetch current driver standings for a specific season

**Response Type:** `DriverStanding[]`

**Example Response:**
```json
{
  "response": [
    {
      "position": 1,
      "driver": {
        "id": 25,
        "name": "Max Verstappen",
        "abbr": "VER",
        "number": 1,
        "image": "https://..."
      },
      "team": {
        "id": 1,
        "name": "Red Bull Racing",
        "logo": "https://..."
      },
      "points": 575,
      "wins": 19,
      "behind": null,
      "season": 2024
    }
  ]
}
```

**Used in:** 
- `/drivers` page
- `useGetDriverStandings` hook

---

#### Team Standings
```
GET /rankings/teams?season={year}
```
**Purpose:** Fetch current team/constructor standings

**Response Type:** `TeamStanding[]`

**Used in:**
- `/teams` page
- `useGetTeamStandings` hook

---

#### Driver Details
```
GET /drivers?name={driverName}
```
**Purpose:** Get detailed information about a specific driver

**Response Type:** `DriverDetails`

**Example Response:**
```json
{
  "response": [
    {
      "id": 25,
      "name": "Max Verstappen",
      "nationality": "Dutch",
      "birthdate": "1997-09-30",
      "birthplace": "Hasselt, Belgium",
      "career_points": "2586.5",
      "grands_prix_entered": "183",
      "podiums": "98",
      "highest_race_finish": {
        "position": 1,
        "number": 52
      },
      "world_championships": "3"
    }
  ]
}
```

**Used in:**
- Driver comparison feature
- Favorite driver details
- `useGetDriverDetails` hook

---

#### Team Details
```
GET /teams?id={teamId}
```
**Purpose:** Get detailed information about a specific team

**Response Type:** `TeamDetails`

**Used in:**
- Favorite team details
- `useGetTeamDetails` hook

---

#### Races & Circuits
```
GET /races?season={year}&type={raceType}
```
**Purpose:** Fetch race schedule and circuit information

**Parameters:**
- `season`: Year (e.g., 2024)
- `type`: "race" | "qualifying" | "practice"

**Response Type:** `Race[]`

**Example Response:**
```json
{
  "response": [
    {
      "id": 1234,
      "competition": {
        "id": 1,
        "name": "Bahrain Grand Prix",
        "location": {
          "country": "Bahrain",
          "city": "Sakhir"
        }
      },
      "circuit": {
        "id": 2,
        "name": "Bahrain International Circuit",
        "image": "https://..."
      },
      "laps": {
        "total": 57
      },
      "distance": "308.238 Kms",
      "date": "2024-03-02T15:00:00+00:00",
      "status": "Scheduled"
    }
  ]
}
```

**Used in:**
- `/circuits` page
- Next Race component
- `useGetRaces` hook

---

## 2. Firebase Services

**Provider:** Google Firebase

**Services Used:**

### Firebase Authentication
**Purpose:** User authentication and session management

**Methods Used:**
- `createUserWithEmailAndPassword` - User registration
- `signInWithEmailAndPassword` - User login
- `signOut` - User logout
- `onAuthStateChanged` - Auth state listener
- `sendEmailVerification` - Email verification

**Configuration:**
```typescript
{
  apiKey: NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: NEXT_PUBLIC_FIREBASE_APP_ID
}
```

---

### Cloud Firestore
**Purpose:** Store user profiles and preferences

**Collection:** `Users`

**Document Structure:**
```typescript
{
  uid: string;
  displayName: string;
  firstName: string;
  lastName: string;
  email: string;
  favDriver: DriverDetails | null;
  favTrack: Race | null;
  favTeam: TeamDetails | null;
  halfImg: HalfBodyImage | null;
  trackImg: TrackImage | null;
}
```

**Operations Used:**
- `doc()` - Reference document
- `getDoc()` - Fetch document
- `setDoc()` - Create document
- `updateDoc()` - Update document

**Used in:**
- User profile management
- Storing favorite selections
- Auth context

---

## API Configuration

### Environment Variables Required

```env
# Formula 1 API
NEXT_PUBLIC_F1_API_KEY=your_api_key

# Firebase
NEXT_PUBLIC_FIREBASE_API_KEY=your_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

---

## API Client Configuration

### F1 API Client
Located in: `src/shared/utils/axiosInstance.ts`

```typescript
export const f1ApiInstance = axios.create({
  baseURL: 'https://v1.formula-1.api-sports.io',
  headers: {
    'x-rapidapi-key': process.env.NEXT_PUBLIC_F1_API_KEY,
    'x-rapidapi-host': 'api-formula-1.p.rapidapi.com',
  },
});
```

**Features:**
- Centralized error handling
- Response interceptors
- Type-safe API calls with generics

---

## Rate Limits & Considerations

### Formula 1 API
- Check your api-sports.io plan for rate limits
- Free tier typically has limited requests per day
- Implement caching with TanStack Query (configured for 5-minute stale time)

### Firebase
- Authentication: 50,000 monthly active users (free tier)
- Firestore: 50,000 reads/20,000 writes per day (free tier)
- Real-time listeners are optimized to minimize reads

---

## Error Handling

All API calls include error handling:

```typescript
try {
  const response = await makeF1APICall({...});
  return response.data;
} catch (error) {
  console.error('API call error:', error);
  throw error;
}
```

Errors are propagated to React Query which provides:
- `isError` state
- `error` object
- Automatic retry logic
- Error boundaries support

---

## Data Caching Strategy

Using TanStack Query for optimal performance:

```typescript
{
  staleTime: 1000 * 60 * 5,  // 5 minutes
  refetchOnWindowFocus: false,
}
```

**Query Keys:**
- `['rankings', 'drivers', season]` - Driver standings
- `['rankings', 'teams', season]` - Team standings
- `['races', season, type]` - Races
- `['drivers', driverName]` - Driver details
- `['teams', teamId]` - Team details

---

## API Testing

For testing API endpoints, you can use:

```bash
# Driver Standings
curl -X GET "https://v1.formula-1.api-sports.io/rankings/drivers?season=2024" \
  -H "x-rapidapi-key: YOUR_KEY" \
  -H "x-rapidapi-host: api-formula-1.p.rapidapi.com"
```

---

## Additional Resources

- [Formula 1 API Documentation](https://api-sports.io/documentation/formula-1/v1)
- [Firebase Documentation](https://firebase.google.com/docs)
- [TanStack Query Documentation](https://tanstack.com/query/latest)


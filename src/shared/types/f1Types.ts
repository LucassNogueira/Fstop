// Driver Types
export interface Driver {
  id: number;
  name: string;
  abbr: string;
  number: number;
  image: string;
}

export interface Team {
  id: number;
  name: string;
  logo: string;
}

export interface DriverStanding {
  position: number;
  driver: Driver;
  team: Team;
  points: number;
  wins: number;
  behind: number | null;
  season: number;
}

export interface DriverDetails extends Driver {
  nationality: string;
  birthdate: string;
  birthplace: string;
  career_points: string;
  grands_prix_entered: string;
  podiums: string;
  highest_race_finish: {
    position: number;
    number: number;
  };
  world_championships: string;
  teams?: Team[];
}

// Team Types
export interface TeamStanding {
  position: number;
  team: Team;
  points: number;
  season: number;
}

export interface TeamDetails extends Team {
  base: string;
  first_team_entry: string;
  world_championships: string;
  pole_positions: string;
  fastest_laps: string;
  president: string;
  director: string;
}

// Circuit Types
export interface Circuit {
  id: number;
  name: string;
  image: string;
}

export interface Competition {
  id: number;
  name: string;
  location: {
    country: string;
    city: string;
  };
}

export interface Race {
  id: number;
  competition: Competition;
  circuit: Circuit;
  season: number;
  type: string;
  laps: {
    current: number | null;
    total: number;
  };
  fastest_lap: any;
  distance: string;
  timezone: string;
  date: string;
  weather: string | null;
  status: string;
}

// User Types
export interface TrackImage {
  id: number;
  img: string;
}

export interface UserDocument {
  uid: string;
  displayName: string;
  firstName: string;
  lastName: string;
  email: string;
  favDriver: DriverDetails | null;
  favTrack: Race | null;
  favTeam: TeamDetails | null;
  trackImg: TrackImage | null;
}

// API Response Types
export interface F1ApiResponse<T> {
  get: string;
  parameters: any;
  errors: any[];
  results: number;
  response: T;
}


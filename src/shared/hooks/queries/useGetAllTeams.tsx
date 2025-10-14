import { useQuery } from '@tanstack/react-query';
import { makeF1APICall } from '@/shared/utils/axiosInstance';
import { F1ApiResponse, TeamDetails } from '@/shared/types/f1Types';

/**
 * Fetch ALL team details in a single API call
 * This is cached by React Query to avoid repeated API calls
 */
export const useGetAllTeams = () => {
  return useQuery<TeamDetails[]>({
    queryKey: ['teams', 'all'],
    queryFn: async () => {
      const response = await makeF1APICall<F1ApiResponse<TeamDetails[]>>({
        url: `/teams`,
        method: 'GET',
      });
      return response.response;
    },
    // Cache for 1 hour since team data doesn't change often
    staleTime: 1000 * 60 * 60,
    // Keep in cache even when not being used
    gcTime: 1000 * 60 * 60 * 24, // 24 hours
  });
};

/**
 * Helper function to find a specific team from the cached list
 */
export const findTeamById = (
  teams: TeamDetails[] | undefined,
  id: number
): TeamDetails | undefined => {
  if (!teams || !id) return undefined;
  return teams.find((team) => team.id === id);
};

/**
 * Helper function to find a specific team by name from the cached list
 */
export const findTeamByName = (
  teams: TeamDetails[] | undefined,
  name: string
): TeamDetails | undefined => {
  if (!teams || !name) return undefined;
  return teams.find(
    (team) => team.name.toLowerCase() === name.toLowerCase()
  );
};


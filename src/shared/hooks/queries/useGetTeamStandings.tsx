import { useQuery } from '@tanstack/react-query';
import { makeF1APICall } from '@/shared/utils/axiosInstance';
import { F1ApiResponse, TeamStanding } from '@/shared/types/f1Types';

export const useGetTeamStandings = (season: number = 2023) => {
  return useQuery<TeamStanding[]>({
    queryKey: ['rankings', 'teams', season],
    queryFn: async () => {
      const response = await makeF1APICall<F1ApiResponse<TeamStanding[]>>({
        url: `/rankings/teams?season=${season}`,
        method: 'GET',
      });
      return response.response;
    },
  });
};


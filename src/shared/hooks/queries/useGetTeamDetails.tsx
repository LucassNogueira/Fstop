import { useQuery } from '@tanstack/react-query';
import { makeF1APICall } from '@/shared/utils/axiosInstance';
import { F1ApiResponse, TeamDetails } from '@/shared/types/f1Types';

export const useGetTeamDetails = (teamId: number, enabled: boolean = true) => {
  return useQuery<TeamDetails>({
    queryKey: ['teams', teamId],
    queryFn: async () => {
      const response = await makeF1APICall<F1ApiResponse<TeamDetails[]>>({
        url: `/teams?id=${teamId}`,
        method: 'GET',
      });
      return response.response[0];
    },
    enabled: enabled && !!teamId,
  });
};


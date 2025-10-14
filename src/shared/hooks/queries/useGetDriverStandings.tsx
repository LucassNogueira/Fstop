import { useQuery } from '@tanstack/react-query';
import { makeF1APICall } from '@/shared/utils/axiosInstance';
import { F1ApiResponse, DriverStanding } from '@/shared/types/f1Types';

export const useGetDriverStandings = (season: number = 2023) => {
  return useQuery<DriverStanding[]>({
    queryKey: ['rankings', 'drivers', season],
    queryFn: async () => {
      const response = await makeF1APICall<F1ApiResponse<DriverStanding[]>>({
        url: `/rankings/drivers?season=${season}`,
        method: 'GET',
      });
      return response.response;
    },
  });
};


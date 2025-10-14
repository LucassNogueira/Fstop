import { useQuery } from '@tanstack/react-query';
import { makeF1APICall } from '@/shared/utils/axiosInstance';
import { F1ApiResponse, Race } from '@/shared/types/f1Types';

export const useGetRaces = (season: number = 2023, type: string = 'race') => {
  return useQuery<Race[]>({
    queryKey: ['races', season, type],
    queryFn: async () => {
      const response = await makeF1APICall<F1ApiResponse<Race[]>>({
        url: `/races?season=${season}&type=${type}`,
        method: 'GET',
      });
      return response.response;
    },
  });
};


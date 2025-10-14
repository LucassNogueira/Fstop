import { useQuery } from '@tanstack/react-query';
import { makeF1APICall } from '@/shared/utils/axiosInstance';
import { F1ApiResponse, DriverDetails } from '@/shared/types/f1Types';

export const useGetDriverDetails = (driverName: string, enabled: boolean = true) => {
  return useQuery<DriverDetails>({
    queryKey: ['drivers', driverName],
    queryFn: async () => {
      const response = await makeF1APICall<F1ApiResponse<DriverDetails[]>>({
        url: `/drivers?name=${driverName}`,
        method: 'GET',
      });
      return response.response[0];
    },
    enabled: enabled && !!driverName,
  });
};


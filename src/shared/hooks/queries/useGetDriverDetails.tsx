import { useQuery } from '@tanstack/react-query';
import { makeF1APICall } from '@/shared/utils/axiosInstance';
import { F1ApiResponse, DriverDetails } from '@/shared/types/f1Types';

/**
 * Fetch specific driver details by name
 * React Query automatically caches each result
 * Subsequent requests for the same driver use cached data (instant!)
 */
export const useGetDriverDetails = (driverName: string | null) => {
  return useQuery<DriverDetails | null>({
    queryKey: ['driver', 'details', driverName],
    queryFn: async () => {
      if (!driverName) return null;
      
      console.log('Fetching driver details for:', driverName);
      const response = await makeF1APICall<F1ApiResponse<DriverDetails[]>>({
        url: `/drivers`,
        method: 'GET',
        params: { search: driverName },
      });
      
      const driver = response.response?.[0];
      console.log('Driver found:', driver?.name || 'Not found');
      return driver || null;
    },
    // Only fetch if we have a driver name
    enabled: !!driverName,
    // Cache for 1 hour - driver details don't change often
    staleTime: 1000 * 60 * 60,
    gcTime: 1000 * 60 * 60 * 24, // Keep in cache for 24 hours
  });
};

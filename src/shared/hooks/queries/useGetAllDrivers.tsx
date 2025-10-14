import { useQuery } from '@tanstack/react-query';
import { makeF1APICall } from '@/shared/utils/axiosInstance';
import { F1ApiResponse, DriverDetails } from '@/shared/types/f1Types';

/**
 * Fetch ALL driver details in a single API call
 * This is cached by React Query to avoid repeated API calls
 */
export const useGetAllDrivers = () => {
  return useQuery<DriverDetails[]>({
    queryKey: ['drivers', 'all'],
    queryFn: async () => {
      const response = await makeF1APICall<F1ApiResponse<DriverDetails[]>>({
        url: `/drivers`,
        method: 'GET',
      });
      return response.response;
    },
    // Cache for 1 hour since driver data doesn't change often
    staleTime: 1000 * 60 * 60,
    // Keep in cache even when not being used
    gcTime: 1000 * 60 * 60 * 24, // 24 hours (formerly cacheTime in v4)
  });
};

/**
 * Helper function to find a specific driver from the cached list
 */
export const findDriverByName = (
  drivers: DriverDetails[] | undefined,
  name: string
): DriverDetails | undefined => {
  if (!drivers || !name) return undefined;
  return drivers.find(
    (driver) => driver.name.toLowerCase() === name.toLowerCase()
  );
};

/**
 * Helper function to find a specific driver by ID from the cached list
 */
export const findDriverById = (
  drivers: DriverDetails[] | undefined,
  id: number
): DriverDetails | undefined => {
  if (!drivers || !id) return undefined;
  return drivers.find((driver) => driver.id === id);
};


import { useQuery } from '@tanstack/react-query';
import { makeF1APICall } from '@/shared/utils/axiosInstance';
import { F1ApiResponse, DriverDetails } from '@/shared/types/f1Types';

/**
 * Fetch ALL drivers from the F1 API using search parameter
 * Using search="" or a common letter returns multiple drivers
 * This is cached by React Query to avoid repeated API calls
 */
export const useGetAllDrivers = () => {
  return useQuery<DriverDetails[]>({
    queryKey: ['drivers', 'all'],
    queryFn: async () => {
      console.log('Fetching all drivers using search parameter...');
      // Try using search with a common letter to get multiple results
      const response = await makeF1APICall<F1ApiResponse<DriverDetails[]>>({
        url: `/drivers`,
        method: 'GET',
        params: { search: 'a' }, // Search for 'a' should return many drivers
      });
      console.log('API Response:', response);
      console.log('Drivers count:', response.response?.length || 0);
      
      // If that doesn't work well, we might need to fetch multiple times
      // For now, return what we get
      return response.response || [];
    },
    // Cache for 1 hour since driver data doesn't change often
    staleTime: 1000 * 60 * 60,
    // Keep in cache even when not being used
    gcTime: 1000 * 60 * 60 * 24, // 24 hours
    retry: 2,
    retryDelay: 1000,
  });
};

/**
 * Helper function to find a specific driver from the cached list
 * Supports partial matching and handles name variations
 */
export const findDriverByName = (
  drivers: DriverDetails[] | undefined,
  name: string
): DriverDetails | undefined => {
  if (!drivers || !name) return undefined;
  
  const searchName = name.toLowerCase().trim();
  
  // Try exact match first
  let driver = drivers.find(
    (d) => d.name.toLowerCase().trim() === searchName
  );
  
  // If no exact match, try partial match (handles "Max Verstappen" vs "Verstappen")
  if (!driver) {
    driver = drivers.find((d) => {
      const driverName = d.name.toLowerCase().trim();
      return driverName.includes(searchName) || searchName.includes(driverName);
    });
  }
  
  // If still no match, try matching by last name only
  if (!driver) {
    const lastName = searchName.split(' ').pop() || '';
    driver = drivers.find((d) => 
      d.name.toLowerCase().includes(lastName)
    );
  }
  
  return driver;
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


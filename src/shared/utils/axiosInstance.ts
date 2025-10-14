import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

// F1 API instance
export const f1ApiInstance = axios.create({
  baseURL: 'https://v1.formula-1.api-sports.io',
  headers: {
    'x-rapidapi-key': process.env.NEXT_PUBLIC_F1_API_KEY,
    'x-rapidapi-host': 'api-formula-1.p.rapidapi.com',
  },
});

// Generic API call function
interface APICallConfig extends AxiosRequestConfig {
  url: string;
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
}

export async function makeF1APICall<T = any>(
  config: APICallConfig
): Promise<T> {
  try {
    const response: AxiosResponse<T> = await f1ApiInstance({
      method: config.method || 'GET',
      ...config,
    });
    return response.data;
  } catch (error) {
    console.error('API call error:', error);
    throw error;
  }
}

// Response interceptor for error handling
f1ApiInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('F1 API Error:', error);
    return Promise.reject(error);
  }
);


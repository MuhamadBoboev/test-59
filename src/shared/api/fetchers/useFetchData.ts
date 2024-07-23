import { useQuery, UseQueryOptions, QueryKey } from 'react-query';
import axios from 'axios';

// Общий хук для запроса данных
const useFetchData = <T>(
  url: string,
  queryKey: QueryKey,
  options?: UseQueryOptions<T>
) => {
  return useQuery<T>({
    queryKey,
    queryFn: async () => {
      const { data } = await axios.get<T>(url);
      return data;
    },
    refetchOnMount: false,
    ...options,
  });
};

export default useFetchData;

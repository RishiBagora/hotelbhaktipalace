import useSWR from 'swr';

const API_URL = "https://script.googleusercontent.com/macros/echo?user_content_key=AY5xjrRrZhD4wAcrzWHVKzZuNCxuAjh7vb2e2CnJBlWPWMFvQwpZ-EKyCDbLt2ZOvtL98YU_PsvZ6er37yDiZlsBIcnJuwpkAx-0kzWwF1yerjSv1Qfhyy6VXlMmB3Cje8CpJdQkFptMOxpkWEbO4Ta-9HUifb7qQyLKw1mRkWB1tVG15m6eqr89rbzPbpafsXNyAUrrATwsfhghNcByR7fdAvG5mQudWurFvjORMiTx0l8knC27Bfmkyke8xUYD3AS2hJn67ADnCXa6Q-5V971vID6ewZknX-gpy0-tO3C-&lib=MzW1xZewC-WxKIgXUYkqKBkZBVE5x3Mle";

// Fetcher function jo data layega
const fetcher = (...args) => fetch(...args).then(res => {
  if (!res.ok) throw new Error("Network error!");
  return res.json();
});

export default function useRooms() {
  // revalidateOnFocus: false se baar-baar window switch karne par fetch nahi hoga
  const { data, error, isLoading } = useSWR(API_URL, fetcher, {
    revalidateOnFocus: false,
    dedupingInterval: 60000, // 1 minute tak cache pakka rahega
  });

  return {
    rooms: data || [], // Agar data nahi hai toh empty array
    loading: isLoading,
    error
  };
}
// import { AxiosRequestConfig } from "axios";
// import { useState, useEffect } from "react";
// import apiClient from "../services/api-client";
// import { FetchResponse } from "../types/interfaces";

// function useFetchData<T>(
//   endpoint: string,
//   requestConfig?: AxiosRequestConfig,
//   dependencies?: any[] | null
// ) {
//   const [data, setData] = useState<T[]>([]);
//   const [errors, setErrors] = useState("");
//   const [isLoading, setIsLoading] = useState(false);

//   function fetchData() {
//     setIsLoading(true);
//     apiClient
//       .get<FetchResponse<T>>(endpoint, { ...requestConfig })
//       .then((res) => {
//         setData(res.data.recipes);
//         setIsLoading(false);
//       })
//       .catch((err) => {
//         setErrors(err.message);
//         setIsLoading(false);
//       });
//   }

//   useEffect(
//     () => {
//       fetchData();
//     },
//     dependencies ? [...dependencies] : []
//   );

//   return { data, errors, isLoading };
// }

// export default useFetchData;

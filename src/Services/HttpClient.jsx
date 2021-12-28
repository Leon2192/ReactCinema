const API = "https://api.themoviedb.org/3";

export function get(path) {
  return fetch(API + path, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNDg4N2U1NThlZTA5NGMwZDFiNDgxMGQ1YWUxMzIzNyIsInN1YiI6IjYxY2E1NTY2YTA1NWVmMDAxYzRhMWJjZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.w50IuUVRsB1rwlmCv6DGI1YYJs4d5AONwqV1aWIv2cs",
      "Content-Type": "application/json;charset=utf-8",
    },
  }).then((result) => result.json());
}
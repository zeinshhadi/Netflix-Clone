const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYTRiNTU2MTJhMzRjYmFmYmE2NjI3YTUyYjJkYmMxNiIsInN1YiI6IjY1NTkxMWU4Y2EwZTE3MDBhZGJmYTM2NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mqrJ1J4kH5A2pKOIT_mx7pGBxEMIjoW_7qDnn2Us1bw",
  },
};

export const fetchData = async () => {
  const response = await fetch("https://api.themoviedb.org/3/genre/movie/list?language=en", options)
    .then((response) => response.json())
    .then((response) => {
      console.log(response.genres);
      return response;
    })
    .catch((err) => console.error(err));
};

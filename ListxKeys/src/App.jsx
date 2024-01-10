export default function App(){
  const movies = [
    { id: "ksdg182733", name: "The departed" },
    { id: "fe3f18273f", name: "Hot Fuzz" },
    { id: "asdgsdf3dr", name: "Real Steel" },
    { id: "rsdg182as3", name: "Big Lebowski" },
    { id: "ysdg18273w", name: "Blade Runner" },
    { id: "isdg18df6", name: "The Princess Bride" },
    { id: "osdg1827sdf6", name: "Mission Impossible" },
    { id: "csdg18e343", name: "Catch Me if you can" },
    { id: "dsdg18276", name: "High School Musical" },
    { id: "esdg182732", name: "The Princess Bride" },
    { id: "7ads76asd98", name: "Fart" },
  ];
  const longMovies = movies.filter((movie) => movie.name.length > 12);
  const shortMovies = movies.filter((movie) => movie.name.length < 10);


  return (
    <div>
      <h1>Long Movies</h1>
      <ul>
        {longMovies.map((movie) => {
          return <li key={movie.id}>{movie.name}</li>
        })}
      </ul>
      <h2>Short Movies</h2>
      <ol>
        {shortMovies.map((movie) => {
          return <li key={movie.id}>{movie.name}</li>
        })}
      </ol>
    </div>
  );
}
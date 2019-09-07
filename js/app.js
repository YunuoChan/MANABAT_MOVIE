// Whatever you want here...
$(function(){ 
        var movieList = $('#movie-list');
    
        
      const MOVIESSSS = async () =>{
      try{
           const Movies = await MOVIE_ALL.getMOVIES();
            await Movies.forEach(function(resupot) {

                MovieList(resupot.title, resupot.poster, resupot.plot, resupot.genres);
                console.log(resupot.title, resupot.poster, resupot.plot, resupot.genres);
            });
           

      }
      catch(err){
        alert(err);
               
      }
     }

    function MovieList(movie, poster , plot, genres){
        if(poster) {
      var list = `<li>
                  <a href="">
                    <img src="${poster}"></img>
                     </a>
                    <h3>${movie}</h3>
                    <h5>${plot}</h5>
                    <h5>${genres}</h5>
                </li>`

        }
      movieList.append(list);
    }
    MOVIESSSS();
})
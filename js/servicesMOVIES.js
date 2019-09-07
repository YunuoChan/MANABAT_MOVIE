var MOVIE_ALL = {
    getMOVIES: function(){
            return $.ajax({
                type: 'get',
                url: ALLMOVIE_API
            });
        },
}
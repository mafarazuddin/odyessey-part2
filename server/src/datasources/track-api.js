const {RESTDataSource} = require("@apollo/datasource-rest");

class TrackAPI extends RESTDataSource {
    baseURL = 'https://odyssey-lift-off-rest-api.herokuapp.com/';

    getTracksForHome()
    {
       return this.get("tracks");
    }

    getAuthor(authorid){
        this.get(`author/${authorid}`);
    }
}

module.exports = TrackAPI;
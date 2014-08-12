var User = Backbone.Model.extend({
  
  // give model url attribute for server to handle
  url: '/userInfo',

  average: function() {
    var gamesPlayed = this.get('lifetimeStats').wins + this.get('lifetimeStats').losses;
    console.log('gamesPlayed: ', gamesPlayed);
    gamesPlayed = 10;

    var aveStats = {
      gamesPlayed: gamesPlayed,
      kills: this.get('lifetimeStats').kills / gamesPlayed,
      deaths: this.get('lifetimeStats').deaths / gamesPlayed,
      damageDealt: this.get('lifetimeStats').damageDealt / gamesPlayed,
      minesCaptured: this.get('lifetimeStats').minesCaptured / gamesPlayed,
      diamondsEarned: this.get('lifetimeStats').diamondsEarned / gamesPlayed,
      healthRecovered: this.get('lifetimeStats').healthRecovered / gamesPlayed,
      gravesRobbed: this.get('lifetimeStats').gravesRobbed / gamesPlayed
    }; 
    return aveStats;
  }

});
angular
  .module("footballTournamentApp")
  .service("TournamentService", function () {
    var service = this;

    service.createTournament = function (name, teams) {
      var tournament = {
        name: name,
        teams: teams.map(function (team) {
          return { name: team, score: 0 };
        }),
      };
      return tournament;
    };

    service.updateScore = function (tournament, team, score) {
      var teamToUpdate = tournament.teams.find((t) => t.name === team.name);
      if (teamToUpdate) {
        teamToUpdate.score = score;
      }
    };
  });

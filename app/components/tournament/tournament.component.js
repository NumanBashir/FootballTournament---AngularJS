angular.module("footballTournamentApp").component("tournament", {
  templateUrl: "app/components/tournament/tournament.template.html",
  controller: function (TournamentService) {
    var vm = this;
    vm.teams = [];
    vm.tournaments = [];

    vm.addTeam = function (team) {
      vm.teams.push(team);
      vm.newTeam = "";
    };

    vm.createTournament = function (name) {
      var tournament = TournamentService.createTournament(name, vm.teams);
      vm.tournaments.push(tournament);
      vm.teams = [];
    };

    vm.updateScore = function (tournament, team, score) {
      TournamentService.updateScore(tournament, team, score);
    };
  },
});

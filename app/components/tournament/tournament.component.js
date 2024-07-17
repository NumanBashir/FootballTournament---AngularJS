angular.module("footballTournamentApp").component("tournament", {
  templateUrl: "app/components/tournament/tournament.template.html",
  controller: function (TournamentService) {
    var vm = this;
    vm.teams = [];
    vm.numberOfTeams = 0;

    vm.generateTeams = function () {
      vm.teams = [];
      for (var i = 1; i <= vm.numberOfTeams; i++) {
        vm.teams.push({ id: i, name: "Team " + i });
      }
      vm.numberOfTeams = 0;
    };
  },
});

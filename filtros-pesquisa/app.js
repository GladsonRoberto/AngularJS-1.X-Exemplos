angular.module('aplicacao', [])
.controller('PesquisaCtrl', function($scope) {
  $scope.dados = [{nome: "João Pedro",profissao: "Analista de Sistemas"}, {nome: "Maria Aparecida",profissao: "Analista Financeiro"}, {nome: "Ana Beatriz",profissao: "Jornalista"}, {nome: "Gabriela Finiz",profissao: "Cineasta"}, {nome: "Miguel",profissao: "Vendedor"}, {nome: "Maria Clara",profissao: "Pesquisadora"}];
});
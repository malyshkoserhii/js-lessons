// Ланцюг викликів - chaining

const numbersForChaining = [1, 5, 2, 4, 3];

const res = numbersForChaining
  .filter(function (num) {
    return num > 2;
  })
  .map(function (num) {
    return num * 3;
  })
  .sort(function (a, b) {
    return a - b;
  });

console.log(res);

const players = [
    { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false, rank: 100 },
    { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true, rank: 300},
    { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true, rank: 800 },
    { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false, rank: 550 },
    { id: "player-5", name: "Chelsy", timePlayed: 80, points: 48, online: true, rank: 950 },
  ];

  //  Сортуємо тих хто онлайн по рангу

  const onlineAndSorted = players
  .filter(function(player) {
      return player.online;
  })
  .sort(function(prevPlayer, nextPlayer) {
    //   return prevPlayer.rank - nextPlayer.rank;
      return nextPlayer.rank - prevPlayer.rank;
  });

  console.table(onlineAndSorted);

 
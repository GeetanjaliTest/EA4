function handlePlayerArrowCollision() {
  for (var i = 0; i < playerArrows.length; i++) {
    var baseCollision = Matter.SAT.collides(
      playerArrows[i].body,
      computerBase.body
    );

    var archerCollision = Matter.SAT.collides(
      playerArrows[i].body,
      computerArcher.body
    );

    var computerCollision = Matter.SAT.collides(
      playerArrows[i].body,
      computer.body
    );

    if (
      baseCollision.collided ||
      archerCollision.collided ||
      computerCollision.collided
    ) {
      console.log("Player arrow Collided"); 
      }
    }
  

}

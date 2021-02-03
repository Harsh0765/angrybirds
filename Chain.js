class Chain {
  constructor(BodyA, BodyB) {
    var options = {
      bodyA: BodyA,
      bodyB: BodyB,
      length: 10,
      stiffness: 0.05,
    };

    this.chain = Matter.Constraint.create(options);

    World.add(world, this.chain);
  }

  display() {
    var pointA, pointB;
    pointA = this.chain.bodyA.position;
    pointB = this.chain.bodyB.position;

    line(pointA.x, pointA.y, pointB.x, pointB.y);
  }
}

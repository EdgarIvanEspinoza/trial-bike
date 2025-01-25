import * as CANNON from 'cannon-es';

export function initPhysics(world) {
  world.gravity.set(0, -9.81, 0);

  const groundBody = new CANNON.Body({ mass: 0, shape: new CANNON.Plane() });
  groundBody.quaternion.setFromEuler(-Math.PI / 2, 0, 0);
  world.addBody(groundBody);
}

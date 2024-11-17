import type { ParticleEmitter } from 'littlejsengine';

let _particleEmitter: ParticleEmitter;

export const setParticleEmitter = (particleEmitter: ParticleEmitter) =>
  (_particleEmitter = particleEmitter);

export const getParticleEmitter = () => _particleEmitter;

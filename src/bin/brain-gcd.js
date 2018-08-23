#!/usr/bin/env node
import brainGame from '..';
import gameGCD from '../games/gameGCD';

const description = 'Find the greatest common divisor of given numbers.\n';
brainGame(gameGCD, description);

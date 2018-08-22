#!/usr/bin/env node
import brainGame from '..';
import brainCalc from '../games/gameCalc';

const description = 'What is the result of the expression?\n';
brainGame(brainCalc, description);

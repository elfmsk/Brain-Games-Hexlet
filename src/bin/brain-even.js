#!/usr/bin/env node
import brainGame from '..';
import brainEven from '../games/gameEven';

const description = 'Answer "yes" if number even otherwise answer "no".\n';
brainGame(brainEven, description);

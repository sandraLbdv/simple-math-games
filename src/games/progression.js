import { cons } from '@hexlet/pairs';
import getRandomNum from '../utils';
import game from '..';

const gameDescription = 'What number is missing in the progression?';

const progressionLength = 10;

const generateGameData = () => {
  const commonDifference = getRandomNum(1, 10);
  const missedMemberIndex = getRandomNum(0, progressionLength - 1);
  const firstMember = getRandomNum(1, 10);

  let question = '';
  const expectedAnswer = firstMember + commonDifference * missedMemberIndex;

  for (let i = 0; i < progressionLength; i += 1) {
    const currentMember = firstMember + commonDifference * i;

    if (i === missedMemberIndex) {
      question = `${question} ..`;
    } else {
      question = `${question} ${currentMember}`;
    }
  }

  return cons(question.trim(), expectedAnswer);
};

export default () => game(generateGameData, gameDescription);

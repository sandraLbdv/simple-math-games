import readlineSync from 'readline-sync';
import { getRandomInt, compareAnswers } from '..';

export default () => {
  const commonDifference = getRandomInt(1, 10);
  const missedMemberNumber = getRandomInt(1, 10);
  const firstMember = getRandomInt(1, 10);

  let progression = '';
  let missedMember;

  for (let i = 1, progressionMember = firstMember; i <= 10;
    i += 1, progressionMember += commonDifference) {
    if (i === missedMemberNumber) {
      progression = `${progression} .. `;
      missedMember = progressionMember;
    } else {
      progression = `${progression} ${progressionMember}`;
    }
  }

  console.log(`Question: ${progression}`);

  const expectedAnswer = missedMember;
  const receivedAnswer = readlineSync.question('Your answer: ');

  return compareAnswers(expectedAnswer, Number(receivedAnswer));
};

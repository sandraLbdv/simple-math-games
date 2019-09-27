import {
  getRandomInt, isAnswerCorrect, getUserAswer, askQuestion, game,
} from '..';

export const gameDescription = 'What number is missing in the progression?\n';

export const gameRealisation = () => {
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

  const gameQuestion = `${progression}`;
  askQuestion(gameQuestion);

  const expectedAnswer = missedMember;
  const receivedAnswer = getUserAswer();

  return isAnswerCorrect(expectedAnswer, Number(receivedAnswer));
};

export default () => game(gameRealisation, gameDescription);

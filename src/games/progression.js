import { cons } from '@hexlet/pairs';
import { getRandomNum, game } from '..';

const gameDescription = 'What number is missing in the progression?\n';

const gameRealisation = () => {
  const commonDifference = getRandomNum(1, 10);
  const missedMemberIndex = getRandomNum(1, 10);
  const firstMember = getRandomNum(1, 10);

  let progression = '';
  let missedMember;

  const membersCount = 10;

  for (let i = 1; i <= membersCount; i += 1) {
    const currentMember = firstMember + commonDifference * i;

    if (i === missedMemberIndex) {
      progression = `${progression} ..`;
      missedMember = currentMember;
    } else {
      progression = `${progression} ${currentMember}`;
    }
  }

  return cons(progression, missedMember);
};

export default () => game(gameRealisation, gameDescription);

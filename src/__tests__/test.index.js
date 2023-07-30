import Team from '../index';

test('Добавление персонажа', () => {
  const result = new Set(['Character1']);
  const team = new Team();
  expect(team.add('Character1')).toEqual(result);
});

test('ошибка дублирования', () => {
  const team = new Team();
  expect(() => {
    team.add('Character1');
    team.add('Character1');
  }).toThrow('The character has already been added');
});

test('добавление произвольного количества персонажей', () => {
  const result = new Set(['Character1', 'Character2', 'Character3']);
  const team = new Team();
  expect(team.addAll('Character1', 'Character2', 'Character3')).toEqual(result);
});

test('конвертация Set в массив', () => {
  const result = ['Character1', 'Character2', 'Character3'];
  const team = new Team();
  team.addAll('Character1', 'Character2', 'Character3');
  expect(team.toArray()).toEqual(result);
});

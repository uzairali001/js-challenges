import challenges from '../src/mapChallenges';

const { squareNumbers, doubleNumbers, convertToStrings, capitalizeWords, incrementByIndex, extractProperty, booleanTransformation, formatDates,
  addPrefix, createHtmlElements } = challenges;

test('squares each number in the array', () => {
  const numbers = [1, 2, 3, 4];
  const squared = squareNumbers(numbers);
  expect(squared).toEqual([1, 4, 9, 16]);
});

test('doubles each number in the array', () => {
  const numbers = [1, 2, 3, 4];
  const doubled = doubleNumbers(numbers);
  expect(doubled).toEqual([2, 4, 6, 8]);
});

test('converts each number to a string', () => {
  const numbers = [1, 2, 3, 4];
  const strings = convertToStrings(numbers);
  expect(strings).toEqual(["1", "2", "3", "4"]);
});

test('capitalizes each word in the array', () => {
  const words = ['apple', 'banana', 'cherry'];
  const capitalized = capitalizeWords(words);
  expect(capitalized).toEqual(["Apple", "Banana", "Cherry"]);
});

test('increments each number by its index', () => {
  const numbers = [10, 20, 30, 40];
  const incremented = incrementByIndex(numbers);
  expect(incremented).toEqual([10, 21, 32, 43]);
});

test('extracts the name property from each object', () => {
  const users = [{ name: 'Alice' }, { name: 'Bob' }, { name: 'Charlie' }];
  const names = extractProperty(users);
  expect(names).toEqual(["Alice", "Bob", "Charlie"]);
});

test('determines if each number is even', () => {
  const numbers = [1, 2, 3, 4];
  const isEven = booleanTransformation(numbers);
  expect(isEven).toEqual([false, true, false, true]);
});

test('formats each date string into a Date object', () => {
  const dates = ['2024-12-18', '2024-12-19'];
  const dateObjects = formatDates(dates);
  expect(dateObjects).toEqual([new Date('2024-12-18'), new Date('2024-12-19')]);
});

test('adds a prefix to each string in the array', () => {
  const items = ['Table', 'Chair', 'Lamp'];
  const prefixed = addPrefix(items);
  expect(prefixed).toEqual(["Furniture: Table", "Furniture: Chair", "Furniture: Lamp"]);
});

test('creates HTML list item elements for each string', () => {
  const fruits = ['Apple', 'Banana', 'Cherry'];
  const listItems = createHtmlElements(fruits);
  expect(listItems).toEqual(["<li>Apple</li>", "<li>Banana</li>", "<li>Cherry</li>"]);
});

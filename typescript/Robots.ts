/*
Instructions
Manage robot factory settings.

When a robot comes off the factory floor, it has no name.

On initial boot, a random name is generated in the format of:
- two uppercase letters followed by three digits, such as RX837 or BC811.

Every once in a while we need to reset a robot to its factory settings,
- which means that its name gets wiped
The next time you ask, that robot will respond with a new random name.

Release names should clear the robot name data store.

Constraints:
- Names must be random and should not follow a predictable sequence. 
- Solution must ensure that every existing robot has a unique name
  - i.e. handle groups of robot instances and manage naming collisions
*/

// create a robot object with props
// - id
// - name
// need a random letter generator
// maintain a name cache or Set (add, has, clear, delete) to ensure unique names

const _ALPHABET = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];
const robotRoster = new Set();
const genLetter = (): string => _ALPHABET[Math.floor(Math.random() * 26)];
const genNumber = (): number => Math.floor(Math.random() * 10);
function nameGenerator(id: string = ''): string {
  if (id.length && !robotRoster.has(id)) {
    robotRoster.add(id);
    return id;
  }
  id = `${genLetter()}${genLetter()}${genNumber()}${genNumber()}${genNumber()}`;
  return nameGenerator(id);
}

export class Robot {
  private id: string = '';

  constructor() {
    this.id = '';
  }
  // returns robot id, creates and sets if no id exists
  public get name(): string {
    !this.id.length && (this.id = nameGenerator());
    return this.id;
  }

  // resets robot's id property, name remains on roster to prevent re-use
  public resetName(): void {
    this.id = '';
    console.log(
      `robot's name has successfully been cleared! id-name property is:`,
      this.id
    );
  }

  // empties the roster list
  public static releaseNames(): void {
    robotRoster.clear();
  }
}

console.log('roster init', robotRoster)
const tester1 = new Robot()
const tester2 = new Robot()
console.log('roster 1', robotRoster)

console.log('test1', tester1.name)
console.log('roster 2', robotRoster)

console.log('test1 should still be the same name', tester1.name)
console.log('roster 3', robotRoster)

console.log('test2', tester2.name)
console.log('roster 4', robotRoster)

tester1.resetName()
console.log('test1 should have new name', tester1.name)


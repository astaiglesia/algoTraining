/** GRADE SCHOOL <sorting> <managing userbases>
 * 
Instructions
Given students' names along with the grade that they are in, create a roster for the school.

In the end, you should be able to:

Add a student's name to the roster for a grade
"Add Jim to grade 2."
"OK."
Get a list of all students enrolled in a grade
"Which students are in grade 2?"
"We've only got Jim just now."
Get a sorted list of all students in all grades. Grades should sort as 1, 2, 3, etc., and students within a grade should be sorted alphabetically by name.
"Who all is enrolled in school right now?"
"Let me think. We have Anna, Barb, and Charlie in grade 1, Alex, Peter, and Zoe in grade 2 and Jim in grade 5. So the answer is: Anna, Barb, Charlie, Alex, Peter, Zoe and Jim"
Note that all our students only have one name. (It's a small town, what do you want?)

For bonus points
Did you get the tests passing and the code clean? If you want to, these are some additional things you could try:

If you're working in a language with mutable data structures and your implementation allows outside code to mutate the school's internal DB directly, see if you can prevent this. Feel free to introduce additional tests.
Then please share your thoughts in a comment on the submission. Did this experiment make the code better? Worse? Did you learn anything from it?
 */

interface StudentBase {
  [grade: string]: Student[]
}
interface NamesRoster {
  [grade: string]: string[]
}

class GradeSchool {
  studentBase: StudentBase = {};                           // instantiates with a studentbase collection
  
  #findOneAndDeleteBy(id: string): boolean {    
    for (const grade in this.studentBase) {      
      const target: number | undefined = this.studentBase[grade].findIndex(student => student.id === id);
      if (target < 0) continue;
      this.studentBase[grade].splice(target, 1);
      return true;
    }
    return false;
  }
  roster(): NamesRoster {                                  // sort all students alphabetically by grade
    const sortedNamesByGrade: NamesRoster = {};            // extract names from studentbase + format output per spec
    for (const grade in this.studentBase) {
      sortedNamesByGrade[grade] = this.studentBase[grade]
        .map((student: Student): string => student.name)
        .sort();
    }
    return sortedNamesByGrade;
  }
  add(                                                    // add a new Student to the roster
    name: string,
    grade: string | number, 
    age: number | undefined = undefined, 
    id: string | undefined = name
  ): void {
    const newStudent = new Student(name, grade, age, id)
    if (!this.studentBase[grade]) this.studentBase[grade] = [];
    this.#findOneAndDeleteBy(name)                        // mitigate duplicate id's (spec'd by name)
    this.studentBase[grade].push(newStudent)    
  }
  
  grade(grade: string | number): string[] {               // evals to a sorted list of all student names for a specified grade
    return this.studentBase[grade]?.map((student: Student): string => student.name)
               .sort() || [];
  }
}

// implement a student class for scaling and reusability 
class Student {
  name: string
  grade: string | number
  age?: number | undefined
  id?: string | undefined

  constructor(
    name: string, 
    grade: string | number, 
    age: number | undefined = undefined, 
    id: string | undefined = undefined
  ) {
    this.name = name
    this.grade = grade
    this.age = age
    this.id = id
  }
}

// tests
const newSchool = new GradeSchool()
newSchool.add('Jim', 2)
newSchool.add('Jenny', 'pre-kindergarten')
newSchool.add('Kathryn', 5)

console.log(newSchool)
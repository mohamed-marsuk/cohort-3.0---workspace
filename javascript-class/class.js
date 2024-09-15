// class - it is a blueprint for creating objects
//         define what properties and methods they have 
//         use a constructor for defining properties
// cosntructor - special method of class 
//                accept argument and assigning properties

class Student ()
{
    // step 3:
        // instance variables
        constructor(name,age,cgpa)
        {
                this.name = name;
                this.age = age;
                this.cgpa = cgpa;
        }



// step 1:
        brilliant()
        {
            console.log("he scored high marks");
        }
        poor()
        {
            console.log("he scored low marks");
        }
    


}
// step 2:
let stu1 = new Student("marsuk",12,7.7); // Student is class name;
let stu2 = new Student("leo das",12,6.7);
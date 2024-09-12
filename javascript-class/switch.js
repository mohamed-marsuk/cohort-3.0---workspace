// switch -  statememt that examines a value for 
//           match against many case clauses,
//           more efficient that else if statements

let grade = "A";
switch(grade)
{
    case "A":
        console.log("great!");
        break;
        case "B":
            console.log("WELL!");
            break;
            case "C":
                console.log("OKAY");
                break;
                case "D":
                    console.log("FAIR!");
                    break;
                    case "E":
                        console.log("FAIL!");
                        break;
                        default:
                            console.log(grade,"invalid!");
}
// Switch Challenge

let job = "Devoloper";
let salary = 0;

// Switch
switch (job) {
    case "Manager":
        salary = 8000;
        break;
    case job == "It" || job == "support":
        salary = 6000;
        break;
    case "Devoloper":
    case "Desinger" :
        salary = 7000;
        break;
    default:
        salary = 4000;
        break;
}

// If and Else

if (job === "Manager") 
    salary = 8000;
else if(job === "It" || job === "support")
    salary = 6000;
else if(job === "Devoloper" || job === "Designer")
    salary = 7000;
else
    salary = 4000;
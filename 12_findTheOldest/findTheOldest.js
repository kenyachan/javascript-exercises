const findTheOldest = function(people) {
    let oldest;

    people.forEach(person => {
        if (oldest === undefined) {
            oldest = person;
        } else if (getAge(person) > getAge(oldest)) {
            oldest = person;
        }
    });

    return oldest;
};

function getAge(person) {
    if (person.yearOfDeath) {
        return person.yearOfDeath - person.yearOfBirth;
    }

    return age = new Date().getFullYear() - person.yearOfBirth;
}

// Do not edit below this line
module.exports = findTheOldest;

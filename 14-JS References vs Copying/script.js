

    // start with strings, numbers and booleans
    let age = 100;
    let age2 = 100;
    console.log(age, age2);

    age = 200
    console.log(age, age2);

    let name = 'Ross';
    let name2 = name;
    console.log(name, name2);

    name = 'Rossy G';
    console.log(name, name2);


    // Let's say we have an array
    const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

    // and we want to make a copy of it.
    const team = players;
    console.log(players, team)

    // You might think we can just do something like this:

    team[3] = 'Ross'; // As teams if a ref of players... the update goes all the way back to src

    // however what happens when we update that array?

    // now here is the problem!

    // oh no - we have edited the original array too!

    // Why? It's because that is an array reference, not an array copy. They both point to the same array!

    // So, how do we fix this? We take a copy instead!

    const team2 = players.slice();
    team2[3] = 'Wes';

    const team3 = [].concat(players);
    team3[1] = 'Scott';


    console.log(players, team2, team3)


    // one way

    // or create a new array and concat the old one in

    // or use the new ES6 Spread
    const team4 = [...players];
    team4[1] = 'Spyro';

    console.log(players, team4);

    const team5 = Array.from(players);
    team5[3] = 'Tony';

    console.log(players, team5);

    // now when we update it, the original one isn't changed

    console.clear();

    // The same thing goes for objects, let's say we have a person object

    // with Objects
    const person = {
        name: 'Wes Bos',
        age: 80
    };

    // and think we make a copy:
    const captain = person;
    captain.number = 1;

    // console.log(person);
    // console.log(captain);

    // how do we take a copy instead?
    const cap2 = Object.assign({}, person, { number: 44, age: 12 });

    console.log(person);
    console.log(cap2);


    // We will hopefully soon see the object ...spread

    // Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
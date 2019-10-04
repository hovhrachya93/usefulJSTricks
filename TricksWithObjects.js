// 1.Ensure Array Values
     //Ever worked on a grid where the raw data needs to be recreated with the possibility that
     //columns length might mismatch for each row? Well, I have! For ensuring the length equality
     //between the mismatching rows you can use Array.fill method.

{
  ////
  let array = Array(5).fill('');
  console.log(array);
  ////
}


// 2.Get Array Unique Values
     //ES6 provides a couple of very neat ways of extracting the unique values from an array.
     //Unfortunately, they do not do well with arrays filled with non-primitive types.

{
  ////
  const cars = [
    'Mazda',
    'Ford',
    'Renault',
    'Opel',
    'Mazda'
  ]
  const uniqueWithArrayFrom = Array.from(new Set(cars));
  console.log(uniqueWithArrayFrom);

  const uniqueWithSpreadOperator = [...new Set(cars)];
  console.log(uniqueWithSpreadOperator);
  ////
}   
    

// 3.Merge Objects and Array of Objects Using Spread Operator
     //Object merging is not a rare task and there is a great chance you've done this in the past and
     //that you will do it in the future. The difference is that in the past you did most of the work
     //manually, but now and in the future, you will use new ES6 features.

{
  ////
  const product = { name: 'Milk', packaging: 'Plastic', price: '5$' }
  const manufacturer = { name: 'Company Name', address: 'The Company Address' }
  const productManufacturer = { ...product, ...manufacturer };
  console.log(productManufacturer);
  // outputs { name: "Company Name", packaging: "Plastic", price: "5$", address: "The Company Address" }     
  // merging an array of objects into one
  const cities = [
    { name: 'Yerevan', visited: 'no' },
    { name: 'Gyumri', visited: 'no' },
    { name: 'Vanadzor', visited: 'yes' },
    { name: 'Abovyan', visited: 'yes' },
    { name: 'Artashat', visited: 'no' },
    { name: 'Sevan', visited: 'yes' },
    { name: 'Ararat', visited: 'yes' },
  ];

  const result = cities.reduce((accumulator, item) => {
    return {
      ...accumulator,
      [item.name]: item.visited
    }
  }, {});

  console.log(result);
  ////
}    


// 4.Map the Array (without the Array.map)
     //Did you know that there is another way of mapping the array values which doesn't include the
     //Array.map method?

{
  ////
  const cities = [
    { name: 'Yerevan', visited: 'no' },
    { name: 'Gyumri', visited: 'no' },
    { name: 'Vanadzor', visited: 'yes' },
    { name: 'Abovyan', visited: 'yes' },
    { name: 'Artashat', visited: 'no' },
    { name: 'Sevan', visited: 'yes' },
    { name: 'Ararat', visited: 'yes' },
  ];

  const cityNames = Array.from(cities, ({ name }) => name);
  console.log(cityNames);
  ////
}


// 5.Conditional Object Properties
     //It's no longer needed to create two different objects based on a condition in order for it to
     //have a certain property. For this purpose, the spread operator is the perfect fit.

{
  ////
  const getUser = (emailIncluded) => {
    return {
      name: 'John',
      surname: 'Doe',
      ...emailIncluded && { email: 'john@doe.com' }
    }
  }

  const user = getUser(true);
  console.log(user);

  const userWithoutEmail = getUser(false);
  console.log(userWithoutEmail);
  ////
}


// 6.Destructuring the Raw Data
     //Have you ever worked with an object with too much data in it? I'm pretty sure you have.
     //Probably the most common situation is when we have a user object containing the overall data
     //together with details. Here we can call the new ES destructuring feature to the rescue. Let's
     //back up this with an example.

{
  ////
  const rawUser = {
    name: 'John',
    surname: 'Doe',
    email: 'john@doe.com',
    displayName: 'SuperCoolJohn',
    joined: '2016-05-05',
    image: 'path-to-the-image',
    followers: 45

  }
  //The object above can be represented in a more contextual manner by splitting into two, like this:
  let user = {}, userDetails = {};
  ({ name: user.name, surname: user.surname, ...userDetails } = rawUser);

  console.log(user);
  console.log(userDetails);
  ////
}


// 7.Dynamic Property Names
     //Back in the days, we would first have to declare an object and then assign a property if that
     //property name needed to be dynamic. This was not possible to achieve in a declarative
     //manner. These days are behind us and with the ES6 features, we can do this.

{
  ////
  const dynamic = 'email';
  let user = {
    name: 'John',
    [dynamic]: 'john@doe.com'
  }
  console.log(user);
  ////
}


// 8.String Interpolation
     //Last but not least is the new way of concatenating strings. The use-case where this can really
     //shine is if you're building a template based helper components. It makes dynamic template
     //concatenation a lot easier.

{
  ////
  const user = {
    name: 'Nikol',
    surname: 'Pashinyan',
    details: {
      email: 'nikol_pashinyan@gmali.com',
      displayName: 'nikol',
      joined: '2016-05-05',
      image: 'path-to-the-image',
      followers: 75000
    }
  }

  const printUserInfo = (user) => {
    const text = `The user is ${user.name} ${user.surname}. Email: ${user.details.email}. Display Name: ${user.details.displayName}. ${user.name} has ${user.details.followers} followers.`
    console.log(text);
  }
  printUserInfo(user);
  ////
}
    
    
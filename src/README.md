/\*The curly braces are a special syntax to let the JSX parser know that it needs to interpret the contents in between them as JavaScript instead of a string.

You need them when you want to use a JavaScript expression like a variable or a reference inside JSX. Because if you use the standard double quote syntax like so:

var css = { color: red }

<h1 style="css">Hello world</h1>

JSX doesn't know you meant to use the variable css in the style attribute instead of the string.
And by placing the curly braces around the variable css, you are telling the parser
"take the contents of the variable css and put them here". (Technically its evaluating the content)

This process is generally referred to as "interpolation".\*/

map will actually return stuff. If you wanted to do somethings to another array, object or piece of code you could use forEach. But since you want to return something that ends up being shown on the DOM. Use map.

Also, don't forget to return whatever you're mapping. It's a common mistake because you don't need to use the return for forEach.

import { robots /_, cats_/ } from './robots'; if robots.js has multiple exports

{/_<Card id={robots[0].id} name={robots[0].name} email={robots[0].email} />
<Card id={cats[0].id} name={cats[0].name} email={cats[0].email} />
<Card id={cats[1].id} name={cats[1].name} email={cats[1].email} />
<Card id={robots[1].id} name={robots[1].name} email={robots[1].email} />_/}

import React from 'react';
import Card from './card.js';
// import { robots, cats } from './robots';
const CardList = ({ robots }) => {
const cardArray = robots.forEach((robot, i) => {
return <Card id={robots[i].id} name={robots[i].name} email={robots[i].email} key={i} />;
}); // forEach ends here
return <div>{cardArray}</div>;
};

export default CardList;

import React from 'react';
import Card from './card.js';
// import { robots, cats } from './robots';
const CardList = ({ robots }) => {
const cardArray = robots.map((robot, i) => {
return (
<Card
        id={robots[i].id}
        name={robots[i].name}
        email={robots[i].email}
        key={i}
      />
);
}); // forEach ends here
return <div>{cardArray}</div>;
};

export default CardList;

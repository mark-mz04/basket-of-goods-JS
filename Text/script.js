let text =
  "One: 'Hi Mary.' Two: 'Oh, hi.' One: 'How are you doing?' Two: 'I'm doing alright. How about you?' One: 'Not too bad. The weather is great isn't it?' Two: 'Yes. It's absolutely beautiful today.' One: 'I wish it was like this more frequently.' Two: 'Me too.' One: 'So where are you going now?' Two: 'I'm going to meet a friend of mine at the department store.' One: 'Going to do a little shopping?' Two: 'Yeah, I have to buy some presents for my parents.' One: 'What's the occasion?' Two: 'It's their anniversary.' One: 'That's great. Well, you better get going. You don't want to be late.' Two: 'I'll see you next time.' One: 'Sure. Bye.'";

let reg1 = new RegExp("'", "ig");
let reg2 = /(\s'\b)/gi;
let reg3 = /(\.')/gi;
let reg4 = /(\?')/gi;

let result = text.replace(reg1, '"');
console.log(result);
result = text.replace(reg2, ' "');
//   console.log(result);
result = result.replace(reg3, '."');
//   console.log(result);
result = result.replace(reg4, '?"');
console.log(result);

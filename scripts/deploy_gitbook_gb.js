console.log("Commit and push to gitbook master");

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question('Introduzca el mensaje representativo del commit ', (answer) => {
  
  var simpleGit = require('simple-git')();
	simpleGit.add('.')
         .commit(answer).push('gitbook', 'master');

  console.log('commited!');
  rl.close();
});

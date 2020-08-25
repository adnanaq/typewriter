const sentence = 'hello there from lighthouse labs';

let num = 0
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, num)
  num += 50
}
setTimeout(() => {
  console.log('\n')
}, num)
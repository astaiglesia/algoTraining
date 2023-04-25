/* --- execute Bash < ### get working locally - works on codewars (node 8.. but shouldn't matter)>
inputs: command: string, callback: func
output: void
givens:
- assume callback follows the (error, data) parameter 
- child_process.exec(command[, options][, callback])
    - Spawns a shell then executes the command within that shell, buffering any generated output. 
    - The command string passed to the exec function is processed directly by the shell 
        and special characters (vary based on shell) need to be dealt with accordingly
- If a callback function is provided, it is called with the arguments (error, stdout, stderr). 
    - On success, error will be null. 
    - On error, error will be an instance of Error.
    - The stdout and stderr arguments passed to the callback will contain the stdout 
        and stderr output of the child process.
*/
const { exec } = require('node:child_process');
const stream = require('node:stream');

function stream2String(stream) {
  const chunks = [];
  return new Promise((resolve, reject) => {
    stream.on('data', (chunk) => chunks.push(Buffer.from(chunk)));
    stream.on('error', (err) => reject(err));
    stream.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
  })
}

async function executeBash(command, callback) {
  
  const { error, stdout } = await exec(command);
  const result = await stream2String(stdout)
  
  (error) ? callback(error) : callback(null, result);
}





// testing
const printer = (err, data) => err 
  ? console.log(`an error occured: `, err)
  : console.log(`shell command was successfully executed. data returned:`, data)

console.log(executeBash('expr 1 + 2', printer))
// `shell command was successfully executed. data returned: 3`
console.log(executeBash('echo "reach out and touch faith"', printer))    
// `shell command was successfully executed. data returned: 'reach out ...'`
console.log(executeBash('asdf "throws error"', printer))    
// `shell command was successfully executed. data returned: 'reach out ...'`
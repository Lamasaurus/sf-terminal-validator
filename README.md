# sf-terminal-validator
Sfvalidator implemented to validate one or a batch of url's

## Features
 - Validate 1 or a whole file of URLs
 - Give aliases to URLs 
 - Color coded output in tables

## Usage
For validating one URL it is as simple as:

```
node index.js <URL> <Optional alias>
```

For validating a file full of URLs just use:

```
node index.js --file <File path>
```

The file itself should have a URL and optional alias on seperate lines, like this:

```
<URL> <Optional alias>
<URL> <Optional alias>
...
```
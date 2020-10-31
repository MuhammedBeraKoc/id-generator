const fs = require('fs')

const style = `
    <style>
        * {
            font-family: monospace;
        }
    
        body {
            margin: 40px;
        }
        
        a {
            color: rgba(38,132,255,0.8);
        }
        
        code {
            background-color: rgba(38,132,255,0.1);
            border-radius: 2px;
            padding: 4px 8px;
            display: inline-block;
            color: #2684FF;
            font-weight: bold;
        }
        
        h2 {
            font-family: monospace;
            font-size: 2rem;
            color: #2684ff;
        }
        
        table {
            border-collapse:separate; 
            border-spacing: 0 1em;
        }
        
        th {
            min-width: 5vw;
        }
        
        td {
            text-align: center;
        }
    </style>
    `

const content = fs.readFileSync('views/docs.ejs')
const configuredHTML = `
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="icon" href="/public/favicon.ico">
    ${style}
    <title>ID Generator</title>
</head>
<body>
    ${content}
</body>
</html>
`

const prettify = require('pretty')

fs.writeFile(
    'views/docs.ejs',
    prettify(configuredHTML),
    {
        encoding: 'utf8',
    },
    (err) => {
        if (err) console.log(err)
        else console.log('docs.ejs is configured.')
    }
)

const fetch = require('node-fetch')
const express = require('express')
const app = express()

app.use(express.static(__dirname))

async function requestJSON(url)
{  
    const response = await fetch(url)
    const json = await response.json()

    return json
}

async function periodicTable()
{
    const json = await requestJSON('https://raw.githubusercontent.com/ianhuezo/Periodic-Table-JSON/master/PeriodicTableJSON.json')
    const elementProperties = json['elements'].map(async (obj) => {
        //A shortened version of what I want from the JSON
        if(obj.name == 'Mercury (element)'){
            obj.name = 'Mercury';
        }
        return {name: obj['name'],
                number: obj['number'],
                symbol: obj['symbol'],
                discovered: JSON.parse(JSON.stringify(obj['discovered_by'])),
                description: JSON.parse(JSON.stringify(obj['summary'])),
                atomic_mass: obj['atomic_mass'],
                source: obj['source'],
                xPos: Number(obj['xpos']),
                yPos: Number(obj['ypos'])
                }
    })
    return await Promise.all(elementProperties)
}

app.get('/', async function (req, res) {
    try{
        const table = await periodicTable()
        res.render(__dirname + '/index.pug',{elements: table})
    }
    catch(e){
        res.send('Internal Server Error 500')
    }
})
 
app.listen(3000)
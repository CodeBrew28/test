const fetch = require('node-fetch')


async function main() {
    const data = await fetch('https://uiuc.now.sh')
    console.log("hi");

}

main()

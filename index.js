// @ts-nocheck
const fs = require('fs').promises
const path = require('path')
const fileOperation = async () => {
  try {
    const data = await fs.readFile(path.join(__dirname, 'starter.txt'), 'utf8')
    console.log(data)
    await fs.unlink(path.join(__dirname,'starter.txt'))
    await fs.writeFile(path.join(__dirname, 'newStarter.txt'), data)
    await fs.appendFile(path.join(__dirname, 'newStarter.txt'), '\n\n josue add new data to newStarter directory.')
    await fs.rename(path.join(__dirname,'newStarter.txt'),path.join(__dirname,'newUpdates.txt'))

    const newData = await fs.readFile(path.join(__dirname, 'newUpdates.txt'), 'utf8')
    console.log(newData)

  } catch (err) {
    console.log(err)
  }
}
fileOperation()
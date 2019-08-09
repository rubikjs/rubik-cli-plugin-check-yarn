module.exports = (Command, options) => {
  class SubCommand extends Command {
    async run () {
      if (process.env.npm_execpath.indexOf('yarn') !== -1) {
        console.log('Please use yarn.')
        process.exit(1)
      }
    }
    get description () {
      return 'Check whether use the yarn run.'
    }
  }
  return SubCommand
}

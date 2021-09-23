/**
 * See the webpack docs for more information about plugins:
 * https://webpack.js.org/contribute/writing-a-plugin/#basic-plugin-architecture
 */

class TestPlugin {
  apply(compiler) {
    compiler.hooks.done.tap('TestPlugin', (
      stats /* stats is passed as an argument when done hook is tapped.  */
    ) => {
      console.log('I am a test plugin and I run when stuff\'s done');
    });
  }
}

module.exports = TestPlugin;

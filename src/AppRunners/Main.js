module.exports = {
    name: 'Main',
    service: __,
    dependencies: ['ApplicationRunner']
};

function __(ApplicationRunner) {
    class Main extends ApplicationRunner {

        run() {
            console.log('Hello, World!');
        }
    }

    return Main;
}
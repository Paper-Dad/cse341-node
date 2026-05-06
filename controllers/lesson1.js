const benRoute = (req, res) => {
    res.send('Hello Ben!');
};

const owenRoute = (req, res) => {
    res.send('Hello Owen!');
};

const scarlettRoute = (req, res) => {
    res.send('Hello Scarlett!');
}

module.exports = {
    benRoute,
    owenRoute,
    scarlettRoute
};
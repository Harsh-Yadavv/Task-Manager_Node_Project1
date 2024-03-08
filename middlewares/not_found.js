const notFound = (req, res) => {
    res.status(404).send('Oops! The thing you are looking for does not exist.');
}

module.exports = notFound;
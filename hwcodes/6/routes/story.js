const express = require("express");
const router = express.Router();

router.get("/", async(req, res) => {
    try {
        const story = {
          "storyTitle": "How to solve the traffic jams problem?",
          "story": "As standards of people's living rise and the economy grow, the number of vehicles has been increasing a lot in big cities. This situation results in more and more traffic jams on the street. Heavy traffic has become a main concern of the society. \nPeople have come up with a number of solutions to solve the problem. One is to improve public transportation. For example, the government can open up more bus routes and subway routes and reduce their ticket price. In this case, more and more people would take public transportation instead of driving their cars. But clearly, this will cost a lot and need generous funding of the government. \nAnother way to relieve traffic congestions is to charge extra congestion fee and impose car restriction measure to control vehicle flow, such as restrictions based on the last digit of license plate numbers. However, one drawback to this approach is that the wealthy people may buy more cars to get available access every day. And it will be inconvenient for people who need drive cars in some emergency situation."
        }
        res.json(story);
    } catch (e) {
        res.status(500).send();
    }
});

module.exports = router;

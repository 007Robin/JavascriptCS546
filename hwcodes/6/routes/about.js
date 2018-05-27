const express = require("express");
const router = express.Router();

router.get("/", async(req, res) => {
    try {
        const about = {
            "name": "Xin Song",
            "cwid": "10431021",
            "biography": "Xin Song is a graduate student at Stevens Institute of Technology. She majors in Computer Science . Her student ID is 10431021. She came to the United State last fall. \nBefore that, she lived in China. She was born in the city of JingBian in Shaanxi. She got a bachelor's degree in China. The four-year-long study laid a solid foundation in science for her. She decides to pursue a career in Computer science in the US.",
            "favoriteShows": ["Prison Break", "Friends", "The Vampire Diaries", "The Ellen DeGeneres Show","Daily Show with Jon Stewart"],
            "hobbies": ["Travel", "Watching movies", "Listening to music", "Writing", "Swimming"]
        }
        res.json(about);
    } catch (e) {
        res.status(500).send();
    }
});

module.exports = router;

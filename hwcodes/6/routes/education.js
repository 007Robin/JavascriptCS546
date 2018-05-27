const express = require("express");
const router = express.Router();

router.get("/", async(req, res) => {
    try {
        const education = [
            {
              "schoolName": "Yulin High School",
              "degree": "High School Diploma",
              "favoriteClass": "Math",
              "favoriteMemory": "I met my best friend in high school. At that time, I was a fat girl. My friend, Dan, always encouraged me to lose weight. She even bought a weight scale for me. Then she showed me a healthy diet plan. Finally, I lose weight successfully. "
            },
            {
                "schoolName": "University of Science and Technology Beijing",
                "degree": "Bachelor Degree",
                "favoriteClass": "Computer Graphics",
                "favoriteMemory": "In computer graphics class, the professor showed many impressive designs related to computer vision. I really love that, so I have done much research by myself. At last, I published a paper about Facial Expression Recognization Based on Video and got a full score in that class."
            },
            {
                "schoolName": "Stevens Institute of Technology",
                "degree": "Master Degree",
                "favoriteClass": "C++ Programming",
                "favoriteMemory": "In Stevens Institute of Technology this spring, I received an invitation to a Morgan Stanley job interview, which made me very excited. I prepared a lot for that interview. Finally, I got an intern offer successfully."
            }
        ]
        res.json(education);
    } catch (e) {
        res.status(500).send();
    }
});

module.exports = router;

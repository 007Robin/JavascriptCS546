function checkIsProperNumber(val, variableName) {
    if(typeof val !== "number") {
        throw `${variableName} is not a number`; 
    }
    if(isNaN(val)) {
        throw `${variableName} is NaN`;
    }
    if(val === null) {
        throw `${variableName} is null`;
    }
    if(val === 0) {
        throw `${variableName} can't be zero`;
    }
	if(val < 0){
		throw `${variableName} can't be less than 0`;
	}
}

module.exports = {

    volumeOfRectangularPrism : (length, width, height) => {   
        checkIsProperNumber(length, "length");
        checkIsProperNumber(width, "width");
        checkIsProperNumber(height, "height");

        return length * width * height;

    },

    surfaceAreaOfRectangularPrism : (length, width, height) => {   
        checkIsProperNumber(length, "length");
        checkIsProperNumber(width, "width");
        checkIsProperNumber(height, "height");

        return 2 * (length * width + length * height + width * height);
    },

    volumeOfSphere : (radius) => {
        checkIsProperNumber(radius, "radius");
        return 4 / 3 * Math.PI * Math.pow(radius, 3);
    },

    surfaceAreaOfSphere : (radius) => {
        checkIsProperNumber(radius, "radius");
        return 4 * Math.PI * radius * radius;
    }

};

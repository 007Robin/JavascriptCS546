function isArray(object)
{
    if (object.constructor === Array) return true;
    else return false;
}

module.exports = {
    deepEquality : (obj1, obj2) => {
        if (obj1 == null || typeof obj1 != "object")
            throw  `obj1 should be provided and should be an object.`;
        if( obj2 == null || typeof obj2 != "object")
            throw  `obj1 should be provided and should be an object.`;
        var Obj1_pro = 0, Obj2_pro = 0;
        for(var i in obj1) {
            Obj1_pro++;
        }
        for(var j in obj2) {
            Obj2_pro++;
            if(!(j in obj1) || obj1[j] !== obj2[j])
                return false;
        }
        return Obj1_pro == Obj2_pro;
    },

    uniqueElements : (arr) => {
        if(arr == null) {
            throw `arr is a null, input arr again`;
        }
		if(!isArray(arr)) {
			throw `arr should be an Array`;
		}
		var s1 = new Set();
		for(var i = 0; i < arr.length; ++i) {
			s1.add(arr[i]);
		}
		return s1.size;
      
    },

    countOfEachCharacterInString : (str) => {
		if(str == null) {
			throw `str is a null, input str again`;
		}
		if(typeof str !== 'string') {
			throw `str should be a string`
		}
        var charMap = new Map();
        for(var i = 0; i < str.length; ++i) {
            if(charMap.has(str[i])) {
                charMap.set(str[i], charMap.get(str[i]) + 1);
            }
            else{
                charMap.set(str[i], 1);
            }
		}
		return charMap;
    }

};

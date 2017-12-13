
var easyformat = (() => {	
	var publicFunctions = {};

	/**
	* @description Check if date is date valid
	* @param {String|Object} input String or instance of Object Date
	* @return {boolean} If return true, date Valid otherwise false
	*/
	publicFunctions.isDate = (input) => {
		let dateValided;

		if(!input) return false;
		if(input == "Invalid Date") return false;

		if(!(input instanceof Date)){
			dateValided = new Date(input+" 00:00:00");

			let d = dateValided.getDate() <= 9 ? "0"+dateValided.getDate() : dateValided.getDate();
			let m = (dateValided.getMonth()+1) <= 9 ? "0"+(dateValided.getMonth()+1) : dateValided.getMonth()+1;
			let y = dateValided.getFullYear();
			
			dateValided = y+'-'+m+'-'+d;
		}

		if(dateValided == "Invalid Date") return false;

		if(!(input instanceof Date) && dateValided != input) return false;

		return  true;
	};

	/**
	* @description Must extract part of date to Year, Month or Day
	* @param {String|Object} input Must to be String or instance of Object Date
	* @param {String} part Is a element of a date
	* @return {String} return part of a date (e.g, Year, Month, Day)
	* @exemple
	* // extractDatePart('2017-12-08', 'd') return day
	* // extractDatePart('2017-12-08', 'm') return month
	* // extractDatePart('2017-12-08', 'y') return year
	*/
	publicFunctions.extractDatePart = (input, part) => {
		if(!publicFunctions.isDate(input)) return false;

		let inpuDate = !(input instanceof Date) ? new Date(input+' 00:00:00') : input;

		let dateManipulation = {
			d : inpuDate.getDate() <= 9 ? "0"+inpuDate.getDate() : inpuDate.getDate(),
			m : (inpuDate.getMonth()+1) <= 9 ? "0"+(inpuDate.getMonth()+1) : inpuDate.getMonth()+1,
			y : inpuDate.getFullYear()
		};

		return dateManipulation[part];
	};

	/**
	* @description Convert Date to format a wanted
	* @param {String|Object} input String or instance of Object Date
	* @param {String} formatDate Date Format 
	* @return {String} Must to return a date with pattern the informed in formatDate
	*/
	publicFunctions.formatDate = (input, formatDate) => {
		if(!publicFunctions.isDate(input)) return false;

		let dateManipulation = {
			d : publicFunctions.extractDatePart(input, 'd'),
			m : publicFunctions.extractDatePart(input, 'm'),
			y : publicFunctions.extractDatePart(input, 'y')
		};

		return formatDate.replace(/[^-?\/]/gi, function(str){
			return dateManipulation[str];
		});
	};

	return publicFunctions;

})();


module.exports = easyformat;
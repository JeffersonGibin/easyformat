
var easyformat = (() => {	
	var publicFunctions = {};


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
window.onload = function(event) {
	// alert('test');
	var options = {
	  valueNames: [ 'project_tags' ]
	};

	var projectsList = new List('projects', options);


	var clearFilters = function() {
		filterWeb.className = "btn";
		filterMobile.className = "btn";
		filterClear.className = "btn";
	};

	var toggleFilter = function(obj, tag) {
		return function() { 
			console.log("1"+tag);
			clearFilters();
			obj.className = "btn active";
			filterByTag(tag);
		}
	};

	var filterByTag = function(tag){
		console.log("2"+tag);
		projectsList.filter(function(item) {
			if (item.values().project_tags.contains(tag)) {
				return true;
			} else {
				return false;
			}
		});
		return false;
	};



	var filterWeb = document.getElementById('filter-web');
	var filterMobile = document.getElementById('filter-mobile');
	var filterClear = document.getElementById('filter-clear');

	filterWeb.addEventListener('click', toggleFilter(filterWeb, "WEB"));
	filterMobile.addEventListener('click', toggleFilter(filterMobile, "MOBILE"));
	filterClear.addEventListener('click', toggleFilter(filterClear, ""));
}
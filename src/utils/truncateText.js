function truncateText(str, limit, end) {
	limit = limit ? limit : 100;
	end = end ? end : '...';
	str = str.split(' ');
	if (str.length > limit) {
		var cutTolimit = str.slice(0, limit);
		return cutTolimit.join(' ') + ' ' + end;
	}

	return str.join(' ');
}

export default truncateText;

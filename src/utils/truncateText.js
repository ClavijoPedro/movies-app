function truncateText(str, limit = 100, end = '...') {
	str = str.split(' ');
	if (str.length > limit) {
		const cutTolimit = str.slice(0, limit);
		return cutTolimit.join(' ') + end;
	}

	return str.join(' ');
}

export default truncateText;

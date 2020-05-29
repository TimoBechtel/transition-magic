export const translateX = (from, to) => {
	if (to === undefined) {
		to = from;
		from = 0;
	}
	return {
		propertyName: 'transform',
		computedValue: (newValue) => `translateX(${newValue}px)`,
		sourceValue: from,
		targetValue: to,
	};
};

export const translateY = (from, to) => {
	if (to === undefined) {
		to = from;
		from = 0;
	}
	return {
		propertyName: 'transform',
		computedValue: (newValue) => `translateY(${newValue}px)`,
		sourceValue: from,
		targetValue: to,
	};
};

export const rotate = (from, to) => {
	if (to === undefined) {
		to = from;
		from = 0;
	}
	return {
		propertyName: 'transform',
		computedValue: (newValue) => `rotate(${newValue}deg)`,
		sourceValue: from,
		targetValue: to,
	};
};

export const scale = (from, to) => {
	if (to === undefined) {
		to = from;
		from = 1;
	}
	return {
		propertyName: 'transform',
		computedValue: (newValue) => `scale(${newValue})`,
		sourceValue: from,
		targetValue: to,
	};
};

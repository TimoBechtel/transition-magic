import { PropertyDefinition } from './transition';

export function translateX(from: number, to: number): PropertyDefinition;
export function translateX(to: number): PropertyDefinition;
export function translateX(from: number, to?: number): PropertyDefinition {
	if (to === undefined) {
		to = from;
		from = 0;
	}
	return {
		propertyName: 'transform',
		computedValue: (newValue: number) => `translateX(${newValue}px)`,
		sourceValue: from,
		targetValue: to,
	};
}

export function translateY(from: number, to: number): PropertyDefinition;
export function translateY(to: number): PropertyDefinition;
export function translateY(from: number, to?: number): PropertyDefinition {
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
}

export function rotate(from: number, to: number): PropertyDefinition;
export function rotate(to: number): PropertyDefinition;
export function rotate(from: number, to?: number): PropertyDefinition {
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
}

export function scale(from: number, to: number): PropertyDefinition;
export function scale(to: number): PropertyDefinition;
export function scale(from: number, to?: number): PropertyDefinition {
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
}

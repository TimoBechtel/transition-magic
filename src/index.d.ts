declare module 'transition-magic';

interface TransitionAPI {
	/**
	 *	Add transition keyframe with CSS properties
	 * @param cssProperties Definitions for transitioning CSS properties
	 * @param start keyframe starting point in percent (beween 0 and 1)
	 * @param end keyframe end point in percent (beween 0 and 1)
	 * @returns TransitionAPI for chaining
	 */
	addKeyframe(
		cssProperties: PropertyDefinition[],
		start: number,
		end: number
	): TransitionAPI;
	/**
	 * draw next frame
	 */
	next(): void;
	/**
	 * draw previous frame
	 */
	previous(): void;
	/**
	 * draw specific frame
	 * @param frame frame number
	 */
	set(frame: number): void;
}

/**
 * Defines how a CSS property is transitioned
 */
interface PropertyDefinition {
	/**
	 * css property name
	 * @example opacity
	 */
	propertyName: string;
	/**
	 * defines how a css property value is generated
	 */
	computedValue: (newValue: number) => string;
	/**
	 * starting css value
	 */
	sourceValue: number;
	/**
	 * target css value
	 */
	targetValue: number;
}

/**
 * Creates a transitional object
 * @param element
 * @param duration duration in frames
 */
export function Transition(
	element: HTMLElement,
	duration: number
): TransitionAPI;

// TransitionDefinition templates
export function rotate(from: number, to?: number): PropertyDefinition;
export function scale(from: number, to?: number): PropertyDefinition;
export function translateX(from: number, to?: number): PropertyDefinition;
export function translateY(from: number, to?: number): PropertyDefinition;

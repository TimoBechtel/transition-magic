import { UniversalElementSelector } from '@compactjs/uea';
/**
 * Creates a transitional object
 * @param element
 * @param duration duration in frames
 */
export declare function Transition(selector: UniversalElementSelector, duration: number): TransitionAPI;
interface TransitionAPI {
    /**
     *	Add transition keyframe with CSS properties
     * @param cssProperties Definitions for transitioning CSS properties
     * @param start keyframe starting point in percent (beween 0 and 1)
     * @param end keyframe end point in percent (beween 0 and 1)
     * @returns TransitionAPI for chaining
     */
    addKeyframe(cssProperties: PropertyDefinition[], start: number, end: number): TransitionAPI;
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
declare type WritableStyleProperties = WritablePart<HTMLElement['style']>;
/**
 * Defines how a CSS property is transitioned
 */
export interface PropertyDefinition {
    /**
     * css property name
     * @example opacity
     */
    propertyName: keyof WritableStyleProperties;
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
declare type IfEquals<X, Y, A, B> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2 ? A : B;
declare type WritableKeysOf<T> = {
    [P in keyof T]: IfEquals<{
        [Q in P]: T[P];
    }, {
        -readonly [Q in P]: T[P];
    }, P, never>;
}[keyof T];
declare type WritablePart<T> = Pick<T, WritableKeysOf<T>>;
export {};

import { between, map } from './utils';

const applyStyles = (element, styles) => {
	Object.entries(styles).forEach(([prop, style]) => {
		element.style[prop] = style;
	});
};

export const Transition = (element, duration) => {
	const keyFrames = [];
	let currentFrame = 0;
	let outOfFrame = false;
	const update = () => {
		const styles = {};
		keyFrames.forEach((keyframe) => {
			const properties = keyframe.css;
			if (
				between(
					currentFrame,
					duration * keyframe.start,
					duration * keyframe.end
				)
			) {
				properties.forEach((prop) => {
					const newValue = map(
						currentFrame,
						duration * keyframe.start,
						duration * keyframe.end,
						prop.sourceValue,
						prop.targetValue
					);
					if (styles[prop.propertyName] === undefined)
						styles[prop.propertyName] = '';
					styles[prop.propertyName] += prop.computedValue(newValue) + ' ';
				});
			} else {
				properties.forEach((prop) => {
					const newValue =
						currentFrame < duration * keyframe.start
							? prop.sourceValue
							: prop.targetValue;
					if (styles[prop.propertyName] === undefined)
						styles[prop.propertyName] = '';
					styles[prop.propertyName] += prop.computedValue(newValue) + ' ';
				});
			}
		});
		applyStyles(element, styles);
	};
	return {
		addKeyframe(cssProperties, start, end) {
			keyFrames.push({
				css: cssProperties,
				start,
				end,
			});
			return this;
		},
		next() {
			if (currentFrame < duration) {
				currentFrame++;
				requestAnimationFrame(update);
			}
		},
		previous() {
			if (currentFrame > 0) {
				currentFrame--;
				requestAnimationFrame(update);
			}
		},
		set(frame) {
			if (between(frame, 0, duration)) {
				currentFrame = frame;
				requestAnimationFrame(update);
				outOfFrame = false;
			} else {
				if (!outOfFrame) {
					currentFrame = frame;
					requestAnimationFrame(update);
					outOfFrame = true;
				}
			}
		},
	};
};

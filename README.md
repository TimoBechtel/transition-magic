<h1 align="center">🧙‍♂️ transition-master</h1>
<h3 align="center">Programatically set css transition progress</h3>
<p align="center">
  <a href="https://www.npmjs.com/package/transition-master" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/transition-master.svg">
  </a>
  <a href="https://github.com/TimoBechtel/transition-master/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/github/license/TimoBechtel/transition-master" />
  </a>
</p>
<p align="center">
  ·
  <a href="https://github.com/TimoBechtel/transition-master#readme">Homepage</a>
  ·
  <a href="https://timobechtel.github.io/transition-master">View Demo</a>
  ·
  <a href="https://github.com/TimoBechtel/transition-master/issues">Report Bug / Request Feature</a>
  ·
</p>

## Table of Contents

- [Installation](#Install)
- [Usage](#usage)
- [Test](#run-tests)
- [Contact](#contact)
- [Contributing](#Contributing)
- [License](#license)

## Install

### NPM:

```sh
npm install transition-master
```

### Other:

Download https://unpkg.com/transition-master/dist/index.umd.js and link it in your html head:

```html
<script src="index.umd.js"></script>
```

## Usage

### As module:

```javascript
import { Transition } from 'transition-master';
```

Or when linked in html head:

```javascript
const { Transition } = transitionMaster;
```

### Example:

Checkout the [demo](https://timobechtel.github.io/transition-master).

### Quick start:

1. Create a transitionable object:

```javascript
const animation = Transition(document.getElementById('my-elem'), 100);
```

2. Use the addKeyframe method to add keyframes. It takes a property definition object, which defines how a css property is transitioned as well as a relative starting and end point.

You can use one (or more) of the predefined property defintion creation functions:

```javascript
animation
	.addKeyframe([rotate(30), translateX(100)], 0, 0.7)
	.addKeyframe([scale(1.2)], 0.3, 1);
```

Or define custom property definitions:

```javascript
animation.addKeyframe(
	[
		// property defintion
		{
			propertyName: 'background-color',
			computedValue: (newValue) => `rgb(${newValue}, 150, 150)`,
			sourceValue: 0,
			targetValue: 255,
		},
	],
	// relative starting/end point (between 0 and 1)
	0,
	0.7
);
```

3. Now you can

Render the next / previous frame:

```js
animation.next();
animation.previous();
```

Or set the progress manually:

```js
animation.set(100);
```

### Docs:

```ts
/**
 * Creates a transitional object
 * @param element
 * @param duration duration in frames
 */
function Transition(element: HTMLElement, duration: number): TransitionAPI;

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

// TransitionDefinition templates
function rotate(from: number, to?: number): PropertyDefinition;
function scale(from: number, to?: number): PropertyDefinition;
function translateX(from: number, to?: number): PropertyDefinition;
function translateY(from: number, to?: number): PropertyDefinition;
```

## Run tests

```sh
npm run test
```

## Contact

👤 **Timo Bechtel**

- Website: https://timobechtel.com
- Twitter: [@TimoBechtel](https://twitter.com/TimoBechtel)
- GitHub: [@TimoBechtel](https://github.com/TimoBechtel)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />

1. Check [issues](https://github.com/TimoBechtel/transition-master/issues)
1. Fork the Project
1. Create your Feature Branch (`git checkout -b feat/AmazingFeature`)
1. Test your changes `npm run test`
1. Commit your Changes (`git commit -m 'feat: add amazingFeature'`)
1. Push to the Branch (`git push origin feat/AmazingFeature`)
1. Open a Pull Request

### Commit messages

This project uses semantic-release for automated release versions. So commits in this project follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0-beta.2/) guidelines. I recommend using [commitizen](https://github.com/commitizen/cz-cli) for automated commit messages.

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Distributed under the [MIT](https://github.com/TimoBechtel/transition-master/blob/master/LICENSE) License.

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_

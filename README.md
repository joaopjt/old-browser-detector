# Old Browser Detector

⚡ The fastest way to detect if user is in a old browser client.
Proudly optmized version of the [OldBrowserDetector](https://github.com/korylprince/OldBrowserDetector).

## Getting Started

**Download** the script file clicking [here](http://github.com/joaopjt/old-browser-detector/blob/master/dist/oldbrowserdetector.min.js)

OR

**Install package** via npm:
```bash
npm install old-browser-detector
```
---

### Creating instance
```html
<script src="oldbrowserdetector.min.js"></script> // Import downloaded script file
<script type="text/javascript">
  var Detector = new oldBrowserDetector(null, function() {
    alert('Old Browser Detected.');
  });

  Detector.detect();
</script>
```

You can import the module with ES6 syntax too:

```javascript
// const Validator = require('old-browser-detector');
import OldBrowserDetector from 'old-browser-detector';

const Detector = new OldBrowserDetector(null, function() {
  alert('Old browser detected.');
});

Detector.detect(); // Return `true` if old browser is detected.
```
---
### Versions (optional)

The versions allowed object are optional, if passed by, it should be an **object**:

```javascript
import OldBrowserDetector from 'old-browser-detector';

const Detector = new OldBrowserDetector({ i: 11 });
```

**You can detect an specified version for mobile users too:**

Passing an object inside the browser object key, with keys *d* and *m* (desktop and mobile respectively),
the library will detect the browser version according to the device the client is using:

```javascript
import OldBrowserDetector from 'old-browser-detector';

const Detector = new OldBrowserDetector({ s: { d: 8, m: 3 } });
```

> When you use that option, the two keys ('d' and 'm') are **required**

To define versions, the keys for browsers avaiable are:

|Object Key      |Default (Desktop) |Default (Mobile)|Browser                  |
|----------------|------------------|----------------|-------------------------|
|`i`             |11                |11              | Internet Explorer       |
|`f`             |20                |20              | Firefox                 |
|`c`             |20                |20              | Chrome                  |
|`o`             |10.6              |10.6            | Opera                   |
|`s`             |8                 |3               | Safari                  |
|`n`             |10                |10              | Netscape                |

---

## API
### ``oldBrowserDetector``(``Versions``, ``Callback``)

**Versions**
> Type: **Object**
>
> Object with the minimun detection version for browsers.


**Callback**
> Type: **Function**
>
> Callback function trigged if browser version or minor is detected. It is called with the first param containing the browser information Object:
> { n: BrowserType, v: Version, t: DisplayName }

### ``.getBrowser()``

> The function return an object with the browser Type, Version and Display Name. Exemple:

```javascript
  import OldBrowserDetector from 'old-browser-detector';

  OldBrowserDetector.getBrowser(); // return an Object { n: BrowserSingleLetterCode, v: Version, t: DisplayName }
```

### ``.detect()``

> The function detect if the browser is an old one, and call the callback if `true` is being returned. Exemple:

```javascript
  const Detector = new OldBrowserDetector(null, function(b) {
    console.log(b); // Object: { n: BrowserType, v: Version, t: DisplayName }
  });

  Detector.detect(); // Returns true and call callback if old browser detected
```

**

## Contribute

In first of all, fork the repo.

After clone the fork, make sure of use node `v6.11.4`. Install the dependencies, and **rollup** globally.
To build files, use the `rollup -c`.

Then, make a pull request with a nice description of changes.

## License

[MIT License](https://opensource.org/licenses/MIT).

## Made with ❤️ by
- [João Julio](http://github.com/joaopjt)

> Be part of this list too, contribute with us :)

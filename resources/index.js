const names={
  i:'Internet Explorer',
  f:'Firefox',
  o:'Opera',
  s:'Apple Safari',
  n:'Netscape Navigator',
  c:'Chrome',
  x:'Other'
};
const defaultOptions = { i:11, f:20, c:20, o:10.6, s: { d: 8, m: 3 }, n:10 };

export default class OldBrowserDetector {
  constructor(options = {}, cb) { 
    this.options = (options) ? Object.assign(defaultOptions, options) : defaultOptions;
    this.cb = (cb) ? cb : (b) => console.log(`Old Browser Detected: ${b}`);
  }

  static getBrowser() {
      // detect browser type (n), version (v), display name (t)
      var n,v,t,ua = navigator.userAgent;
      var isMobile = (/ipad|ipod|iphone|android/i.test(ua));

      if (/bot|googlebot|slurp|mediapartners|adsbot|bingbot|google web preview|like firefox|chromeframe|seamonkey|opera mini|min|meego|netfront|moblin|maemo|arora|camino|flot|k-meleon|fennec|kazehakase|galeon|epiphany|rekonq|symbian|webos/i.test(ua)) n="x";
      else if (/Trident.(\d+\.\d+)/i.test(ua)) n="io";
      else if (/MSIE.(\d+\.\d+)/i.test(ua)) n="i";
      else if (/Chrome.(\d+\.\d+)/i.test(ua)) n="c";
      else if (/Firefox.(\d+\.\d+)/i.test(ua)) n="f";
      else if (/Version.(\d+.\d+).{0,10}Safari/i.test(ua))    n="s";
      else if (/Safari.(\d+)/i.test(ua)) n="so";
      else if (/Opera.*Version.(\d+\.?\d+)/i.test(ua)) n="o";
      else if (/Opera.(\d+\.?\d+)/i.test(ua)) n="o";
      else if (/Netscape.(\d+)/i.test(ua)) n="n";
      else return {n:"x",v:0,t:names[n]};

      if (n=="x") {
        return { n: "x", v:0, t:names[n] }
      };

      v = new Number(RegExp.$1);

      if (n=="so") {
          v=((v<100) && 1.0) || ((v<130) && 1.2) || ((v<320) && 1.3) || ((v<520) && 2.0) || ((v<524) && 3.0) || ((v<526) && 3.2) || 4.0;
          n = "s";
      }

      if (n=="i" && v==7 && window.XDomainRequest) { 
        v=8;
      }

      if (n=="io") {
          n="i";
          if (v>5) v=10;
          else if (v>4) v=9;
          else if (v>3.1) v=8;
          else if (v>3) v=7;
          else v=9;
      }

      return { n, v, t: names[n]+" "+v, isMobile };
  }

  detect() {
    const browser = OldBrowserDetector.getBrowser();
    let version = 0;

    if (typeof this.options[browser['n']] === "object") {
      if (browser.isMobile) {
        version = this.options[browser['n']].m;
      } else {
        version = this.options[browser['n']].d;
      }
    } else {
      version = this.options[browser['n']];
    }

    if (browser['n'] === 'x' || browser['v'] <= version) {
      this.cb.call(null, browser);

      return true;
    }

    return false;
  }
}

export default function StatusBar() {
    return (
      <nav className="statusbar mono" aria-label="Section navigation">
    <div className="container statusbar__inner">
      <span className="statusbar__host">[august@krys]</span>
      <ol className="statusbar__tabs" id="statusbar-tabs">
        <li><a href="#hero"       data-section="hero"      ><span className="tab__num">0</span>:hero</a></li>
        <li><a href="#think"      data-section="think"     ><span className="tab__num">1</span>:how-i-think</a></li>
        <li><a href="#principles" data-section="principles"><span className="tab__num">2</span>:principles</a></li>
        <li><a href="#proof"      data-section="proof"     ><span className="tab__num">3</span>:proof</a></li>
        <li><a href="#harness"    data-section="harness"   ><span className="tab__num">4</span>:harness</a></li>
        <li><a href="#detail"     data-section="detail"    ><span className="tab__num">5</span>:resume</a></li>
      </ol>
      <span className="statusbar__right">j/k: scroll · g/G: top/bottom · <span id="clock">00:00</span></span>
    </div>
  </nav>
    );
  }
  
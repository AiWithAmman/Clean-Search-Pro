import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const Landing = () => {
  const { hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 80);
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <div className="csp-root" data-testid="landing-page">
      <div className="csp-bg-base" />
      <Nav />

      {/* ─── HERO ─── */}
      <section className="csp-hero" id="top" data-testid="hero-section">
        <div className="csp-hero-bg" />
        <div className="csp-hero-grid" />
        <div className="csp-hero-layout">
          <div className="csp-hero-copy">
            <div className="csp-eyebrow" data-testid="hero-eyebrow">
              <span className="csp-eyebrow-dot" />
              Chrome Extension · Free to install
            </div>
            <h1 className="csp-headline">
              Search results<br />
              <span className="csp-headline-faded">without</span><br />
              <em>the noise.</em>
            </h1>
            <p className="csp-sub">
              Block AI Overviews, sponsored ads, and tracking junk
              from Google, Bing, Yahoo &amp; DuckDuckGo — with one click.
            </p>

            <div className="csp-features-grid">
              <div className="csp-feat"><span className="csp-feat-icon">🤖</span><span>Block AI Overviews</span></div>
              <div className="csp-feat"><span className="csp-feat-icon">💰</span><span>Block Sponsored Ads</span></div>
              <div className="csp-feat"><span className="csp-feat-icon">🪄</span><span>Close Ads Anywhere</span></div>
              <div className="csp-feat"><span className="csp-feat-icon">🕵️</span><span>Strip Tracking Params</span></div>
            </div>

            <div className="csp-cta-row">
              <a href="#" className="csp-btn-primary" data-testid="hero-cta-install">Add to Chrome — It's Free</a>
              <a href="#pricing" className="csp-btn-ghost" data-testid="hero-cta-upgrade">Upgrade to Pro ↗</a>
            </div>
            <div className="csp-free-note">
              Free forever · <span>Pro features from $4/mo</span> · Cancel anytime
            </div>
          </div>

          {/* RIGHT — POPUP MOCKUP */}
          <div className="csp-popup-wrap" aria-hidden>
            <div className="csp-popup">
              <div className="csp-p-header">
                <div className="csp-p-logo-area">
                  <div className="csp-p-icon">🚫</div>
                  <div>
                    <div className="csp-p-name">Clean Search Pro</div>
                    <div className="csp-p-sub">// BLOCK THE NOISE</div>
                  </div>
                </div>
                <div className="csp-p-toggle-wrap">
                  <span className="csp-p-toggle-label">ON</span>
                  <div className="csp-p-toggle" />
                </div>
              </div>

              <div className="csp-p-status">
                <div className="csp-p-status-left">
                  <div className="csp-p-dot" />
                  <span className="csp-p-engine">engine: <span>google</span></span>
                </div>
                <div className="csp-p-stats">
                  <div className="csp-p-stat">
                    <div className="csp-p-stat-num">12</div>
                    <div className="csp-p-stat-lbl">session</div>
                  </div>
                  <div className="csp-p-stat">
                    <div className="csp-p-stat-num">847</div>
                    <div className="csp-p-stat-lbl">total</div>
                  </div>
                </div>
              </div>

              <div className="csp-p-section">
                <div className="csp-p-sect-head">
                  <span className="csp-p-sect-title">Search Filters</span>
                  <span className="csp-p-badge-free">FREE</span>
                </div>

                {[
                  { icon: "🤖", name: "Block AI Overview", desc: "Google's AI answer box" },
                  { icon: "💰", name: "Block Sponsored Ads", desc: "Paid results & banners" },
                  { icon: "🪄", name: "Close Ads Anywhere", desc: "Adds ✕ button on any ad" },
                ].map((r) => (
                  <div className="csp-p-row" key={r.name}>
                    <div className="csp-p-row-left">
                      <span className="csp-p-row-icon">{r.icon}</span>
                      <div>
                        <div className="csp-p-row-name">{r.name}</div>
                        <div className="csp-p-row-desc">{r.desc}</div>
                      </div>
                    </div>
                    <div className="csp-p-mini-tog" />
                  </div>
                ))}

                <div className="csp-p-meter">
                  <div className="csp-p-meter-top">
                    <span className="csp-p-meter-lbl">Ad closes today</span>
                    <span className="csp-p-meter-count">2 / 5</span>
                  </div>
                  <div className="csp-p-meter-bar"><div className="csp-p-meter-fill" style={{ width: "40%" }} /></div>
                  <div className="csp-p-meter-hint">3 closes left today · <a href="#pricing">Go Pro for unlimited</a></div>
                </div>
              </div>

              <div className="csp-p-upgrade">
                <div>
                  <div className="csp-p-upgrade-title">Unlock Pro Features</div>
                  <div className="csp-p-upgrade-sub">$4/mo · cancel anytime</div>
                </div>
                <div className="csp-p-upgrade-btn">Upgrade →</div>
              </div>

              <div className="csp-p-section">
                <div className="csp-p-sect-head">
                  <span className="csp-p-sect-title">Pro Filters</span>
                  <span className="csp-p-badge-pro">PRO</span>
                </div>
                {[
                  { icon: "🔷", name: "Block Bing AI Overview", desc: "Bing Copilot sidebar" },
                  { icon: "❓", name: 'Block "People Also Ask"', desc: "Accordion question boxes" },
                  { icon: "📰", name: "Block Top Stories", desc: "News carousel in results" },
                ].map((r) => (
                  <div className="csp-p-row csp-locked" key={r.name}>
                    <div className="csp-p-row-left">
                      <span className="csp-p-row-icon">{r.icon}</span>
                      <div>
                        <div className="csp-p-row-name">{r.name}</div>
                        <div className="csp-p-row-desc">{r.desc}</div>
                      </div>
                    </div>
                    <span className="csp-p-lock">🔒</span>
                  </div>
                ))}
              </div>

              <div className="csp-p-footer">
                <span className="csp-p-footer-btn">↻ Reload tab</span>
                <span className="csp-p-footer-ver">v1.0.0 · free</span>
              </div>
            </div>

            <div className="csp-stat-badge">847 ads blocked<span>all time</span></div>
            <div className="csp-badge2">Google · Bing · Yahoo · DDG<span>all engines supported</span></div>
          </div>
        </div>
      </section>

      {/* ─── BEFORE / AFTER ─── */}
      <section className="csp-compare" id="compare" data-testid="compare-section">
        <div className="csp-compare-topbar">
          <span className="csp-topbar-tag">Same search query</span>
          <h2 className="csp-topbar-headline">Two completely <em>different</em> experiences</h2>
          <span className="csp-topbar-tag">Clean Search Pro</span>
        </div>

        <div className="csp-cols">
          <div className="csp-divider" />
          <div className="csp-arrow-mid">→</div>

          <div className="csp-side csp-before">
            <div className="csp-side-header">
              <div>
                <div className="csp-side-label">❌ Without extension</div>
                <div className="csp-side-sub">A typical Google search result page</div>
              </div>
              <div className="csp-status-pill">Extension off</div>
            </div>

            <div className="csp-items">
              {[
                ["🤖", "AI Overview (takes up 5 full screens)", "Google's generated summary before any results"],
                ["💰", "3–5 Sponsored ads at the very top", "Paid placements disguised as organic results"],
                ["🛒", "Shopping product carousel", "Paid product listings injected mid-page"],
                ["📰", "Top Stories news carousel", "News widgets distracting from your query"],
                ["❓", '"People Also Ask" accordions', "Filler questions padding out the page"],
                ["🔗", "URLs full of ?utm_source=junk&fbclid=…", "Tracking parameters on every single link"],
                ["📦", "Knowledge panel sidebar", "Wikipedia-style box stealing half the screen"],
              ].map(([icon, text, sub]) => (
                <div className="csp-item" key={text}>
                  <span className="csp-item-no">✗</span>
                  <span className="csp-item-icon">{icon}</span>
                  <div>
                    <div className="csp-item-text">{text}</div>
                    <div className="csp-item-sub">{sub}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="csp-side-footer">
              <div>
                <div className="csp-sf-stat csp-stat-red">~40%</div>
                <div className="csp-sf-stat-lbl">of page is actual results</div>
              </div>
              <div className="csp-sf-note">You scroll past all of this<br />just to find what you searched for</div>
            </div>
          </div>

          <div className="csp-side csp-after">
            <div className="csp-side-header">
              <div>
                <div className="csp-side-label">✅ With Clean Search Pro</div>
                <div className="csp-side-sub">The same page, immediately cleaned up</div>
              </div>
              <div className="csp-status-pill">Active on google.com</div>
            </div>

            <div className="csp-items">
              {[
                ["🔍", "10 pure organic results, right at the top", "Exactly what you searched for, nothing else"],
                ["🤖", "AI Overview collapsed instantly on load", "Zero generated summaries cluttering your view"],
                ["💰", "Zero sponsored ads — ever", "No paid placements pretending to be results"],
                ["🕵️", "Clean URLs — tracking params stripped", "UTM, fbclid, gclid removed from every link"],
                ["⚡", "Noticeably faster page load", "Less to render = faster time to first result"],
                ["🌐", "Works on Google, Bing, Yahoo & DuckDuckGo", "All four major search engines covered"],
                ["🪄", "Close ads anywhere on the web", "✕ button injected onto ads across any site"],
              ].map(([icon, text, sub]) => (
                <div className="csp-item" key={text}>
                  <span className="csp-item-yes">✓</span>
                  <span className="csp-item-icon">{icon}</span>
                  <div>
                    <div className="csp-item-text">{text}</div>
                    <div className="csp-item-sub">{sub}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="csp-side-footer">
              <div>
                <div className="csp-sf-stat csp-stat-green">100%</div>
                <div className="csp-sf-stat-lbl">of page is actual results</div>
              </div>
              <div className="csp-sf-note csp-text-right">Your answer is right there<br />the moment the page loads</div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FEATURES ─── */}
      <section className="csp-features" id="features" data-testid="features-section">
        <div className="csp-features-dots" />
        <div className="csp-features-top">
          <div>
            <div className="csp-top-title">Every feature. <span>Zero bloat.</span></div>
            <div className="csp-top-sub">Toggle independently per search engine · Works on Google, Bing, Yahoo &amp; DuckDuckGo</div>
          </div>
          <div className="csp-top-right">
            <div className="csp-legend">
              <div className="csp-legend-dot csp-bg-green" />
              <span>Free</span>
            </div>
            <div className="csp-legend">
              <div className="csp-legend-dot csp-bg-gold" />
              <span>Pro · $4/mo</span>
            </div>
          </div>
        </div>

        <div className="csp-feat-grid">
          {[
            { accent: "var(--csp-red)", badge: "free", icon: "🤖", title: "Block AI Overview", desc: "Google's massive AI-generated answer block is collapsed instantly when the page loads — before you even see it. Reclaim the top of your results page.", detail: "Runs at document_start, zero flicker" },
            { accent: "var(--csp-gold)", badge: "free", icon: "💰", title: "Block Sponsored Ads", desc: "Removes paid search results and banner ads on page load. No more scanning past \"Sponsored\" labels to find the actual answers you searched for.", detail: "Works on all 4 major search engines" },
            { accent: "var(--csp-blue)", badge: "free", icon: "🪄", title: "Close Ads Anywhere", desc: "Injects a ✕ dismiss button onto ads across any website you visit — not just search engines. 5 free closes per day. Go Pro for unlimited.", detail: "5 free closes/day → unlimited with Pro" },
            { accent: "var(--csp-teal)", badge: "pro", locked: true, icon: "🔷", title: "Block Bing AI", desc: "Collapses the Bing Copilot AI sidebar and answer boxes automatically. Pure organic Bing results, every time.", detail: "Unlock with Pro" },
            { accent: "var(--csp-purple)", badge: "pro", locked: true, icon: "🕵️", title: "Strip Tracking Params", desc: "Removes UTM codes, fbclid, gclid, and all major tracking parameters from every link. Clean URLs, less data given away.", detail: "Unlock with Pro" },
            { accent: "var(--csp-red)", badge: "pro", locked: true, icon: "✏️", title: "Custom CSS Rules", desc: "Enter any CSS selector and we'll hide it — on any page. Block \"People Also Ask\", shopping carousels, news widgets, or anything else you hate.", detail: "Unlock with Pro" },
          ].map((c, i) => (
            <div
              key={c.title}
              className={`csp-card ${c.locked ? "csp-card-locked" : ""}`}
              style={{ "--csp-accent": c.accent }}
              data-testid={`feature-card-${i}`}
            >
              <span className={`csp-card-badge ${c.badge === "free" ? "csp-badge-free" : "csp-badge-pro"}`}>
                {c.badge.toUpperCase()}
              </span>
              <div className="csp-card-icon">{c.icon}</div>
              <div className="csp-card-title">{c.title}</div>
              <div className="csp-card-desc">{c.desc}</div>
              <div className="csp-card-detail">{c.detail}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── PRICING ─── */}
      <section className="csp-pricing" id="pricing" data-testid="pricing-section">
        <div className="csp-pricing-header">
          <div className="csp-eyebrow csp-eyebrow-gold">
            <span className="csp-eyebrow-dot csp-eyebrow-dot-gold" />
            Simple pricing
          </div>
          <h2 className="csp-pricing-title">Free forever. <em>Pro when you're ready.</em></h2>
        </div>

        <div className="csp-pricing-layout">
          {/* FREE */}
          <div className="csp-col csp-col-free" data-testid="pricing-free">
            <div className="csp-col-header">
              <div className="csp-col-tag">Get started</div>
              <div className="csp-col-name">Free</div>
              <div className="csp-col-price">$0 <span className="csp-col-price-sub">forever</span></div>
              <div className="csp-col-note">No credit card needed</div>
            </div>
            <div className="csp-col-body">
              <div className="csp-feat-list">
                {[
                  ["yes", <>Block AI Overviews on Google</>],
                  ["yes", <>Block sponsored ads on Google</>],
                  ["yes", <>Close Ads Anywhere <span className="csp-muted">· 5/day limit</span></>],
                  ["no", <>Bing AI Overview blocking</>],
                  ["no", <>Strip tracking params from URLs</>],
                  ["no", <>Block &ldquo;People Also Ask&rdquo;</>],
                  ["no", <>Block Top Stories &amp; carousels</>],
                  ["no", <>Custom CSS block rules</>],
                  ["no", <>Unlimited ad closes per day</>],
                ].map(([type, text], i) => (
                  <div className="csp-feat-item" key={i}>
                    <span className={`csp-feat-check ${type === "yes" ? "csp-check-yes" : "csp-check-no"}`}>
                      {type === "yes" ? "✓" : "—"}
                    </span>
                    <span className={`csp-feat-text ${type === "no" ? "csp-dim" : ""}`}>{text}</span>
                  </div>
                ))}
              </div>

              <div className="csp-divider-line" />

              <div className="csp-review">
                <div className="csp-stars">★★★★★</div>
                <div className="csp-review-text">&ldquo;Finally a clean Google. The AI overview blocking alone is worth it — I didn't realize how much of my screen it was eating.&rdquo;</div>
                <div className="csp-review-author">— Chrome Web Store review</div>
              </div>
            </div>
            <div className="csp-col-footer">
              <a href="#" className="csp-btn csp-btn-free" data-testid="pricing-free-cta">Add to Chrome — Free</a>
            </div>
          </div>

          {/* PRO */}
          <div className="csp-col csp-col-pro" data-testid="pricing-pro">
            <div className="csp-col-header">
              <div className="csp-popular-pill">✦ Most popular</div>
              <div className="csp-col-tag">Full access</div>
              <div className="csp-col-name">Pro</div>
              <div className="csp-col-price">$4 <span className="csp-col-price-sub-gold">/month</span></div>
              <div className="csp-col-note">Cancel anytime · billed monthly</div>
            </div>
            <div className="csp-col-body">
              <div className="csp-feat-list">
                {[
                  <>Everything in Free</>,
                  <><strong>Bing AI Overview</strong> blocking</>,
                  <><strong>Strip tracking params</strong> from all URLs</>,
                  <>Block &ldquo;People Also Ask&rdquo; boxes</>,
                  <>Block Top Stories &amp; news carousels</>,
                  <>Block Shopping carousels &amp; product ads</>,
                  <>Block Knowledge Panels</>,
                  <><strong>Custom CSS rules</strong> — block anything</>,
                  <><strong>Unlimited</strong> ad closes per day</>,
                ].map((text, i) => (
                  <div className="csp-feat-item" key={i}>
                    <span className="csp-feat-check csp-check-gold">✓</span>
                    <span className="csp-feat-text">{text}</span>
                  </div>
                ))}
              </div>

              <div className="csp-divider-line" />

              <div className="csp-guarantee">
                <span className="csp-guarantee-icon">🛡️</span>
                <span>7-day money-back guarantee. No questions asked.</span>
              </div>
            </div>
            <div className="csp-col-footer">
              <a href="#" className="csp-btn csp-btn-pro" data-testid="pricing-pro-cta">Upgrade to Pro →</a>
            </div>
          </div>

          {/* ENGINES */}
          <div className="csp-col csp-col-ent" data-testid="pricing-engines">
            <div className="csp-col-header">
              <div className="csp-col-tag">Supported everywhere</div>
              <div className="csp-col-name">4 Engines</div>
              <div className="csp-col-price csp-col-price-small">All major search engines covered</div>
            </div>
            <div className="csp-col-body">
              <div className="csp-feat-list csp-mb-md">
                {[
                  ["Google", "Full filter support"],
                  ["Bing", "AI & ad blocking"],
                  ["Yahoo", "Ad & tracker removal"],
                  ["DuckDuckGo", "Ad blocking"],
                ].map(([name, desc]) => (
                  <div className="csp-feat-item" key={name}>
                    <span className="csp-feat-check csp-check-yes">✓</span>
                    <span className="csp-feat-text"><strong>{name}</strong> · {desc}</span>
                  </div>
                ))}
              </div>

              <div className="csp-divider-line" />

              <div className="csp-mb-md">
                <div className="csp-why-title">Why people switch</div>
                <div className="csp-feat-list">
                  {[
                    "The first search result is now actually the first result",
                    "No more clicking \"Sponsored\" links by mistake",
                    "Pages load noticeably faster without all the junk",
                    "One toggle to disable temporarily — no uninstall needed",
                  ].map((text, i) => (
                    <div className="csp-feat-item" key={i}>
                      <span className="csp-why-num">{String(i + 1).padStart(2, "0")}</span>
                      <span className="csp-feat-text">{text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="csp-divider-line" />

              <div className="csp-review">
                <div className="csp-stars">★★★★★</div>
                <div className="csp-review-text">&ldquo;Upgraded to Pro for the URL cleaner. Worth every penny — I didn't realize how much tracking data I was handing over on every click.&rdquo;</div>
                <div className="csp-review-author">— Pro subscriber, via email</div>
              </div>
            </div>
            <div className="csp-col-footer">
              <a href="#" className="csp-btn csp-btn-ext" data-testid="pricing-engines-cta">Add to Chrome — Free</a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Landing;

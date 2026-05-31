import { useEffect } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="csp-root csp-privacy-root" data-testid="privacy-page">
      <div className="csp-bg-base" />
      <Nav />

      <div className="csp-pp-wrapper">
        <div className="csp-pp-hero">
          <div className="csp-pp-eyebrow">Legal</div>
          <h1 className="csp-pp-title">Privacy <span>Policy</span></h1>
          <div className="csp-pp-meta">
            <span>Clean Search Pro</span>
            <span className="csp-pp-meta-sep">·</span>
            <span>Last updated: June 1, 2025</span>
            <span className="csp-pp-meta-sep">·</span>
            <span>v1.0</span>
          </div>
        </div>

        <div className="csp-tldr" data-testid="tldr-card">
          <div className="csp-tldr-title">// TL;DR — the short version</div>
          <div className="csp-tldr-list">
            {[
              <>We do <strong>not</strong> collect your search queries, browsing history, or any personal data.</>,
              <>All filtering happens locally in your browser. Nothing leaves your device.</>,
              <>Your settings are stored in Chrome's built-in sync storage — we never see them.</>,
              <>We don't sell data. We don't share data. We don't have data to sell or share.</>,
              <>Pro users pay via Stripe. We only see what Stripe tells us: that payment succeeded.</>,
            ].map((text, i) => (
              <div className="csp-tldr-item" key={i}>
                <span className="csp-tldr-bullet">✓</span>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* SECTIONS */}
        <Section num="01" title="Who we are">
          <p>Clean Search Pro is a browser extension for Google Chrome that removes AI Overviews, sponsored ads, tracking parameters, and other unwanted content from search engine results pages. The extension is developed and maintained as an independent product.</p>
          <p>This Privacy Policy explains what data we collect (very little), how we use it (minimally), and your rights regarding it. If you have questions, reach out at <a href="mailto:privacy@cleansearchpro.com">privacy@cleansearchpro.com</a>.</p>
        </Section>

        <Section num="02" title="What the extension does — and doesn't — see">
          <p>The extension operates entirely within your browser using Chrome's extension APIs. Here is a plain-English breakdown of the data it touches:</p>

          <table className="csp-data-table">
            <thead>
              <tr>
                <th>Data type</th>
                <th>Does the extension access it?</th>
                <th>Is it sent anywhere?</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Your search queries", "red", "No", "Never read or stored", "Never"],
                ["Browsing history", "red", "No", "Not accessed", "Never"],
                ["Page content / DOM", "blue", "Local only", "Only to find and hide elements", "Never"],
                ["Extension settings", "green", "Yes", "To apply your toggles", "Chrome sync only (Google)"],
                ["Daily ad-close count", "blue", "Local only", "For the free tier limit", "Never"],
                ["Blocks-per-session count", "blue", "Local only", "Displayed in the popup", "Never"],
                ["IP address", "red", "No", "Not collected", "Never"],
                ["Name / email / identity", "red", "No", "Not collected by extension", "Never"],
              ].map(([data, color, tag, desc, sent]) => (
                <tr key={data}>
                  <td>{data}</td>
                  <td><span className={`csp-tag csp-tag-${color}`}>{tag}</span> {desc}</td>
                  <td>{sent}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="csp-highlight">
            <strong>In plain terms:</strong> the extension is a local filter. It reads the page DOM to find elements matching our CSS selectors, hides them, and increments a counter. That's it. No network requests are made by the extension itself for any filtering or analytics purpose.
          </div>
        </Section>

        <Section num="03" title="Chrome permissions explained">
          <p>The extension requests the following Chrome permissions. Here's why each one is needed:</p>
          <table className="csp-data-table">
            <thead><tr><th>Permission</th><th>Why it's needed</th></tr></thead>
            <tbody>
              <tr><td><code>storage</code></td><td>Saves your toggle settings and daily ad-close count locally and via Chrome sync. We never access this data — Chrome manages it.</td></tr>
              <tr><td><code>activeTab</code></td><td>Lets the popup read which URL is active, so we can show the correct search engine name. No page content is read.</td></tr>
              <tr><td><code>tabs</code></td><td>Used only to reload the current tab when you click "Reload tab" in the popup.</td></tr>
              <tr><td>Host permissions<br /><span className="csp-muted">google.com, bing.com, yahoo.com, duckduckgo.com</span></td><td>Required to inject the content script that performs the actual filtering on search result pages. Without this the extension can't do anything.</td></tr>
            </tbody>
          </table>
          <p>We request only the minimum permissions required to make the extension work. We do not request <code>history</code>, <code>bookmarks</code>, <code>cookies</code>, <code>webRequest</code>, or any broad host permissions.</p>
        </Section>

        <Section num="04" title="Chrome sync storage">
          <p>Your extension settings (which filters are on or off, any custom CSS rules you've added) are saved using <strong>Chrome's built-in <code>chrome.storage.sync</code> API</strong>. This means:</p>
          <p>If you're signed into Chrome, Google may sync this data across your devices — the same way Chrome syncs bookmarks and passwords. This is governed by <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google's Privacy Policy</a>, not ours.</p>
          <p>We have no access to your sync storage. We cannot read it, modify it remotely, or retrieve it. It lives entirely within Chrome's infrastructure.</p>
        </Section>

        <Section num="05" title="Pro subscriptions & payments">
          <p>If you upgrade to Clean Search Pro's paid tier, payment is processed by <strong>Stripe</strong>, a third-party payment processor. We do not handle or store your credit card details.</p>
          <p>When a payment is completed, Stripe notifies us that a subscription is active for a given customer account. We store only:</p>
          <div className="csp-highlight">
            <strong>Email address</strong> — to identify your account and send receipts<br />
            <strong>Subscription status</strong> — active, cancelled, or past-due<br />
            <strong>Subscription period</strong> — start and end dates for billing
          </div>
          <p>This data is used solely to activate and manage your Pro license. It is not sold, shared with advertisers, or used for any marketing purpose beyond transactional emails directly related to your subscription.</p>
          <p>Stripe's privacy practices are governed by the <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer">Stripe Privacy Policy</a>.</p>
        </Section>

        <Section num="06" title="Analytics & crash reporting">
          <p>The current version of Clean Search Pro (<strong>v1.0.0</strong>) contains <strong>no analytics, telemetry, or crash reporting</strong> of any kind. We do not use Google Analytics, Mixpanel, Sentry, or any equivalent service within the extension itself.</p>
          <p>This may change in future versions — for example, we may add opt-in crash reporting to help diagnose bugs. If we do, we will update this policy, notify users via a version changelog, and make any such reporting strictly opt-in.</p>
        </Section>

        <Section num="07" title="Website analytics">
          <p>Our marketing website (cleansearchpro.com) may use privacy-respecting analytics to understand general traffic — for example, how many people visit the pricing page. If we use analytics on the website, it will not track individual users across sessions and will not use cookies for advertising purposes.</p>
          <p>This policy does not govern the website; it governs the Chrome extension specifically. The extension makes no requests to our website during normal operation.</p>
        </Section>

        <Section num="08" title="Data retention & deletion">
          <p><strong>Extension data:</strong> All locally stored data (settings, counters) is deleted automatically when you remove the extension from Chrome. You can also clear it manually via Chrome's extension storage settings.</p>
          <p><strong>Subscription data:</strong> If you cancel your Pro subscription and request account deletion, we will delete your email address and subscription records from our systems within 30 days. To request deletion, email <a href="mailto:privacy@cleansearchpro.com">privacy@cleansearchpro.com</a>.</p>
          <p><strong>Free users:</strong> We hold no data about you. There is nothing to delete.</p>
        </Section>

        <Section num="09" title="Children's privacy">
          <p>Clean Search Pro is not directed at children under the age of 13. We do not knowingly collect any personal information from children. If you believe a child has provided us with personal data, please contact us and we will delete it promptly.</p>
        </Section>

        <Section num="10" title="Changes to this policy">
          <p>We may update this Privacy Policy from time to time. When we do, we'll update the "Last updated" date at the top of this page and, for material changes, note the update in the Chrome Web Store changelog.</p>
          <p>Continued use of the extension after changes take effect constitutes your acceptance of the revised policy. If you disagree with any changes, you may uninstall the extension at any time.</p>
        </Section>

        <Section num="11" title="Your rights">
          <p>Depending on your location, you may have rights under GDPR, CCPA, or similar laws — including the right to access, correct, or delete personal data we hold about you. Since we collect almost no personal data, most of these rights are satisfied by default.</p>
          <p>For any privacy-related requests or questions, contact us at <a href="mailto:privacy@cleansearchpro.com">privacy@cleansearchpro.com</a>. We'll respond within 30 days.</p>
        </Section>

        <hr className="csp-hr" />

        <div className="csp-contact-card" data-testid="contact-card">
          <div>
            <div className="csp-contact-title">Questions about this policy?</div>
            <div className="csp-contact-sub">We'll respond within 30 days · privacy@cleansearchpro.com</div>
          </div>
          <a href="mailto:privacy@cleansearchpro.com" className="csp-contact-btn" data-testid="contact-cta">Get in touch →</a>
        </div>
      </div>

      <Footer />
    </div>
  );
};

const Section = ({ num, title, children }) => (
  <div className="csp-pp-section">
    <div className="csp-pp-section-num">{num}</div>
    <h2 className="csp-pp-section-title">{title}</h2>
    {children}
  </div>
);

export default PrivacyPolicy;

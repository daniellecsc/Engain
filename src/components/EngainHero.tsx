export default function EngainHero() {
  return (
    <div className="hero-root">
        {/* Background layers */}
        <div className="bg-grid" />
        <div className="bg-circle-top" />
        <div className="bg-circle-bl" />
        <div className="bg-circle-tr" />

        <div className="hero-content">
        {/* ── NAVBAR ── */}
        <div className="navbar-wrap">
          <nav className="navbar">
            {/* Logo */}
            <div className="nav-logo">
              <div className="nav-logo-icon">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle cx="5" cy="5" r="2.5" fill="white"/>
                  <circle cx="11" cy="5" r="2.5" fill="white"/>
                  <circle cx="8" cy="11" r="2.5" fill="white"/>
                </svg>
              </div>
              <span>engain</span>
            </div>

            {/* Links */}
            <ul className="nav-links">
              <li><a href="#">Why Engain?</a></li>
              <li><a href="#">Features</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">How it works</a></li>
              <li><a href="#">FAQ</a></li>
              <li>
                <a href="#" className="nav-resources">
                  Resources
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{marginLeft:3}}>
                    <path d="M3 4.5l3 3 3-3" stroke="#333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </li>
            </ul>

            {/* Buttons */}
            <div className="nav-btns">
              <button className="btn-outline">
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <polygon points="6.5,1 8,5 12,5.5 9,8 10,12 6.5,10 3,12 4,8 1,5.5 5,5" fill="#facc15"/>
                </svg>
                Get Started
              </button>
              <button className="btn-orange-nav">
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <rect x="1" y="2" width="11" height="9" rx="1.5" fill="white" fillOpacity="0.3"/>
                  <rect x="1" y="2" width="11" height="3.5" rx="1" fill="white"/>
                </svg>
                Get a Demo
              </button>
            </div>
          </nav>
        </div>

        {/* ── HERO BODY ── */}
        <div className="hero">
          {/* LEFT */}
          <div className="hero-left">
            {/* Trust badge */}
            <div className="trust-badge">
              <div className="badge-star">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <polygon points="6,1 7.5,4.5 11,5 8.5,7.5 9.2,11 6,9.3 2.8,11 3.5,7.5 1,5 4.5,4.5" fill="white"/>
                </svg>
              </div>
              <div className="badge-shield">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M6 1L10.5 3v3.5C10.5 9.5 6 11 6 11S1.5 9.5 1.5 6.5V3L6 1z" stroke="white" strokeWidth="1.2" fill="none"/>
                </svg>
              </div>
              <span>Trusted by 1750+ Brands</span>
            </div>

            {/* Headline */}
            <h1 className="hero-headline">
              Get new customers &amp;<br/>
              build LLM visibility with the
            </h1>

            {/* Pill */}
            <div className="hero-pill-wrap">
              <div className="hero-pill">
                <span>#1 Reddit Marketing Software</span>
              </div>
            </div>

            {/* Features */}
            <ul className="features">
              <li className="feature-item">
                <div className="feature-icon">
                  <span style={{color:'white',fontWeight:800,fontSize:14,lineHeight:1}}>r/</span>
                </div>
                <span>See exact Reddit threads where people want to buy your product</span>
              </li>
              <li className="feature-item">
                <div className="feature-icon">
                  <svg width="22" height="18" viewBox="0 0 22 18" fill="none">
                    <rect x="0" y="0" width="22" height="18" rx="3" fill="rgba(255,255,255,0.25)"/>
                    <circle cx="7" cy="7" r="2.5" fill="white" fillOpacity="0.9"/>
                    <circle cx="15" cy="7" r="2.5" fill="white" fillOpacity="0.9"/>
                    <path d="M3 15c0-2.2 1.8-4 4-4h8c2.2 0 4 1.8 4 4" stroke="white" strokeWidth="1.2" strokeOpacity="0.9" fill="none"/>
                  </svg>
                </div>
                <span>Post &amp; comment from thousands of aged, high-karma Reddit accounts</span>
              </li>
              <li className="feature-item">
                <div className="feature-icon">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <rect x="0" y="0" width="20" height="20" rx="4" fill="rgba(255,255,255,0.25)"/>
                    <circle cx="10" cy="10" r="5" stroke="white" strokeWidth="1.5"/>
                    <path d="M7 10l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span>Auto-upvote your posts to the top of any subreddit</span>
              </li>
              <li className="feature-item">
                <div className="feature-icon">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <rect x="0" y="0" width="20" height="20" rx="4" fill="rgba(255,255,255,0.25)"/>
                    <circle cx="10" cy="10" r="5" stroke="white" strokeWidth="1.5"/>
                    <path d="M10 7v3l2 2" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <span>Track brand &amp; competitor mentions across Reddit</span>
              </li>
            </ul>

            {/* CTA buttons */}
            <div className="hero-ctas">
              <button className="btn-hero-demo">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                  <rect x="1" y="2" width="13" height="11" rx="2" fill="white" fillOpacity="0.3"/>
                  <rect x="1" y="2" width="13" height="4" rx="1.5" fill="white"/>
                </svg>
                Get a Demo
              </button>
              <button className="btn-hero-start">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <polygon points="7,1 8.8,5.2 13,5.7 10,8.5 10.9,12.7 7,10.5 3.1,12.7 4,8.5 1,5.7 5.2,5.2" fill="#facc15"/>
                </svg>
                Get Started
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="hero-right">
            {/* Dashboard mockup card */}
            <div className="mockup-card">
              <div className="db">
                {/* Top bar */}
                <div className="db-topbar">
                  <div className="db-logo">
                    <div className="db-logo-icon">
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <circle cx="3" cy="3" r="1.8" fill="white"/>
                        <circle cx="7" cy="3" r="1.8" fill="white"/>
                        <circle cx="5" cy="7.5" r="1.8" fill="white"/>
                      </svg>
                    </div>
                    <span>engain</span>
                  </div>
                  <span className="db-project">Project C</span>
                  <div className="db-discovering">● Discovering</div>
                </div>

                <div className="db-body">
                  {/* Sidebar */}
                  <div className="db-sidebar">
                    <div className="db-nav-item">Inbox</div>
                    <div className="db-nav-item active">Opportunities</div>
                    <div className="db-nav-item">New Opport...</div>
                    <div className="db-nav-item">My Rounds</div>
                    <div className="db-sidebar-section">Actions</div>
                    <div className="db-nav-item">Social Search</div>
                    <div className="db-nav-item">Time Table</div>
                    <div className="db-nav-item">Software</div>
                    <div style={{marginTop:'auto',paddingTop:8}}>
                      <div className="db-nav-item" style={{fontSize:8,color:'#aaa'}}>Campaign Marketing</div>
                    </div>
                  </div>

                  {/* Main */}
                  <div className="db-main">
                    <div className="db-main-header">
                      <div className="db-main-title">SEO Opportunities</div>
                      <div className="db-ai-msg">
                        I&apos;m browsing Reddit now and looking at when people search for keywords related to your product and competitors. Soon this will generate the opportunities most predictive of your product &amp; if these align with those opportunities...
                      </div>
                      <div className="db-tag-row">
                        <span className="db-tag db-tag-orange">High Intent</span>
                        <span className="db-tag db-tag-gray">My Keywords</span>
                        <span className="db-tag db-tag-gray">Competitor Keywords</span>
                      </div>
                    </div>

                    <div className="db-filter-bar">
                      <span>13 results found</span>
                      <span>Sort by: Relevance ▾</span>
                    </div>

                    <div className="db-cards">
                      {/* Card 1 - with play button */}
                      <div className="db-card highlighted">
                        <div className="db-card-top">
                          <div style={{flex:1}}>
                            <div className="db-card-meta">
                              <span className="db-r">r/</span>
                              <span className="db-subreddit">Marketing</span>
                              <span className="db-live">Live</span>
                            </div>
                            <div className="db-card-title">What&apos;s the ROI on running TikTok ads in 2025?</div>
                            <div className="db-card-stats">
                              <span>↑ 847</span>
                              <span>💬 124</span>
                              <span>My keywords</span>
                            </div>
                          </div>
                          <div className="db-play-btn">
                            <svg width="12" height="14" viewBox="0 0 12 14" fill="white">
                              <polygon points="1,1 11,7 1,13"/>
                            </svg>
                          </div>
                        </div>
                      </div>

                      {/* Card 2 */}
                      <div className="db-card">
                        <div className="db-card-meta">
                          <span className="db-r">r/</span>
                          <span className="db-subreddit">Chatbots</span>
                        </div>
                        <div className="db-card-title">What&apos;s the ROI on trying / AI ads in 2025?</div>
                        <div className="db-card-body">
                          The founder honestly challenges to be inspired by real from here. This can help you understand the situation better and make more informed decisions.
                        </div>
                        <div className="db-progress">
                          <div className="db-progress-fill" style={{width:'65%'}}/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating envelope icon */}
            <div className="floating-envelope">
              <svg width="36" height="28" viewBox="0 0 36 28" fill="none">
                <rect x="1" y="1" width="34" height="26" rx="4" fill="white" fillOpacity="0.9"/>
                <path d="M1 5l17 11L35 5" stroke="#f15829" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
            </div>
          </div>
        </div>
        </div>{/* hero-content */}
    </div>
  );
}

import EngainLogo from './EngainLogo';

export default function EngainHero() {
  return (
    <div className='hero-root'>
      {/* Background layers */}
      <div className='bg-blocks-left'>
        <img src='/bg2left.png' alt='' />
      </div>

      {/* Background left */}
      <div className='bg-blocks-left'>
        <img src='/bg2left.png' alt='' />
      </div>

      {/* Background right */}
      <div className='bg-blocks-right'>
        <img src='/bg3right.png' alt='' />
      </div>

      <div className='hero-content'>
        {/* ── NAVBAR ── */}
        <div className='navbar-wrap'>
          <nav className='navbar'>
            {/* Logo */}
            <div className='nav-logo'>
              <div className='w-6 h-6'>
                <img src='/logo-engain.png' alt='' />
              </div>
              <span>engain</span>
            </div>

            {/* Links */}
            <ul className='nav-links'>
              <li>
                <a href='#'>Why Engain?</a>
              </li>
              <li>
                <a href='#'>Features</a>
              </li>
              <li>
                <a href='#'>Pricing</a>
              </li>
              <li>
                <a href='#'>How it works</a>
              </li>
              <li>
                <a href='#'>FAQ</a>
              </li>
              <li>
                <a href='#' className='nav-resources'>
                  Resources
                  <svg
                    width='12'
                    height='12'
                    viewBox='0 0 12 12'
                    fill='none'
                    style={{ marginLeft: 3 }}
                  >
                    <path
                      d='M3 4.5l3 3 3-3'
                      stroke='#333'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </a>
              </li>
            </ul>

            {/* Buttons */}
            <div className='nav-btns'>
              <button className='btn-outline'>
                <div className='w-2.5 h-2.5'>
                  <img src='/lightning.png' alt='' />
                </div>
                Get Started
              </button>
              <button className='btn-orange-nav'>
                <div className='w-4 h-4'>
                  <img src='/calendar.png' alt='' />
                </div>
                Get a Demo
              </button>
            </div>
          </nav>
        </div>

        {/* ── HERO BODY ── */}
        <div className='hero'>
          {/* LEFT */}
          <div className='hero-left'>
            {/* Trust badge */}
            <div className='trust-badge'>
              <div className='w-6 h-6'>
                <img src='/trustpilot.png' alt='' />
              </div>
              <span>|</span>
              <div className='w-6 h-6'>
                <img src='/trustpilot2.png' alt='' />
              </div>
              <span>Trusted by 1750+ Brands</span>
            </div>

            {/* Headline */}
            <h1 className='hero-headline'>
              Get new customers &amp;
              <br />
              build LLM visibility with the
            </h1>

            {/* Pill */}
            <div className='hero-pill-wrap'>
              <div className='hero-pill'>
                <span>#1 Reddit Marketing Software</span>
              </div>
            </div>

            {/* Features */}
            <ul className='features'>
              <li className='feature-item'>
                <div className='feature-outline'>
                  <div className='w-3 h-3'>
                    <img src='/reddit-slash.png' alt='' />
                  </div>
                </div>
                <span>
                  See exact Reddit threads where people want to buy your product
                </span>
              </li>
              <li className='feature-item'>
                <div className='feature-outline'>
                  <div className='w-3 h-3'>
                    <img
                      src='/accounts-dp.png'
                      alt=''
                      className='absolute bottom-0 left-1/2 -translate-x-1/2'
                    />
                  </div>
                </div>
                <span>
                  Post &amp; comment from thousands of aged, high-karma Reddit
                  accounts
                </span>
              </li>
              <li className='feature-item'>
                <div className='feature-outline'>
                  <div className='w-3 h-3'>
                    <img src='/arrow-up.png' alt='' />
                  </div>
                </div>
                <span>Auto-upvote your posts to the top of any subreddit</span>
              </li>
              <li className='feature-item'>
                <div className='feature-outline'>
                  <div className='w-3 h-3'>
                    <img src='/at.png' alt='' />
                  </div>
                </div>
                <span>Track brand &amp; competitor mentions across Reddit</span>
              </li>
            </ul>

            {/* CTA buttons */}
            <div className='hero-ctas'>
              <button className='btn-orange-nav'>
                <div className='w-4.5 h-4.5'>
                  <img src='/calendar.png' alt='' />
                </div>
                Get a Demo
              </button>
              <button className='btn-outline'>
                <div className='w-2.5 h-2.5'>
                  <img src='/lightning.png' alt='' />
                </div>
                Get Started
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div className='relative'>
            <img src='/thumbnail.png' alt='' />
            <button
              className='absolute top-1/2 left-1/2
                        -translate-x-1/2 -translate-y-1/2
                        w-[12%] aspect-square
                        rounded-full'
            >
              <img
                src='/play-button.png'
                alt=''
                className='w-full h-full cursor-pointer'
              />
            </button>
          </div>
        </div>
      </div>
      {/* hero-content */}
    </div>
  );
}

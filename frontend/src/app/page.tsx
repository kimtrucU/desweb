export default function HomePage() {
  return (
    <>
      


<div className="topbar" id="topbar">
  <div className="container topbar-inner">
    <span className="tb-item">
      <svg className="tb-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
      <strong>Opening Hours:</strong>&nbsp;MON – SUN 8am – 6pm
    </span>
    <div className="tb-right">
      <a href="tel:5127965783" className="tb-item">
        <svg className="tb-icon green" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 11a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
        (512) 796-5783
      </a>
      <a href="mailto:info@kimthedogtrainer.com" className="tb-item">
        <svg className="tb-icon green" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
        info@kimthedogtrainer.com
      </a>
    </div>
  </div>
</div>


<header className="navbar" id="navbar">
  <div className="container navbar-inner">
    <a href="#" className="logo-link">
      <img src="/images/logo.png" alt="Kim The Dog Trainer" className="logo-img" />
    </a>
    <nav className="nav-links" id="navLinks">
      <a href="#hero"     className="nav-link active"  id="nl-home">HOME</a>
      <a href="#services" className="nav-link"          id="nl-group">GROUP &amp; PRIVATE OBEDIENCE</a>
      <a href="#puppy"    className="nav-link"          id="nl-puppy">PUPPY TRAINING</a>
      <a href="#behavior" className="nav-link"          id="nl-behavior">BEHAVIOR MODIFICATION</a>
      <a href="#about"    className="nav-link"          id="nl-about">ABOUT US</a>
      <a href="#blog"     className="nav-link"          id="nl-blog">BLOG</a>
    </nav>
    <button className="hamburger" id="hamburger" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>
  </div>
</header>


<section className="hero" id="hero">
  <div className="hero-bg">
    <img src="/images/hero.png" alt="Kim with her Husky" className="hero-img" />
    <div className="hero-overlay"></div>
  </div>
  <div className="container hero-content">
    <div className="hero-text">
      <h1 className="hero-title">Expert Dog Training,<br /><span className="hero-big">AUSTIN STYLE</span></h1>
    </div>
    <div className="consult-card" id="consultation">
      <h2 className="consult-title">CUSTOMIZED<br />CONSULTATION</h2>
      <form className="consult-form" id="consultForm" noValidate>
        <input type="text"  id="f-name"    className="c-inp" placeholder="Your name"            required />
        <input type="email" id="f-email"   className="c-inp" placeholder="Email address"        required />
        <input type="tel"   id="f-phone"   className="c-inp" placeholder="Contact number"       required />
        <input type="text"  id="f-dog"     className="c-inp" placeholder="Your dog's name, age &amp; breed" required />
        <div className="sel-wrap">
          <select id="f-interest" className="c-inp c-sel" required>
            <option value="" disabled>I'm interested in...</option>
            <option>Group Obedience</option>
            <option>Private Obedience</option>
            <option>Puppy Training</option>
            <option>Behavior Modification</option>
            <option>Other</option>
          </select>
          <svg className="sel-arr" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"/></svg>
        </div>
        <button type="submit" className="btn-request" id="btnRequest">REQUEST NOW</button>
        <p className="c-privacy">
          <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          WE DO NOT SHARE YOUR INFORMATION
        </p>
      </form>
    </div>
  </div>
  <div className="picket-fence"></div>
</section>


<section className="services-sec" id="services">
  <div className="container">
    <h2 className="sec-title">Services We Offer</h2>
    <div className="svc-grid">
      <div className="svc-card" id="svc-puppy">
        <div className="svc-img-wrap"><img src="/images/svc_puppy.png"     alt="Puppy Training" /></div>
        <div className="svc-tag green-tag">Puppy Training</div>
      </div>
      <div className="svc-card" id="svc-group">
        <div className="svc-img-wrap"><img src="/images/svc_obedience.png" alt="Group Obedience" /></div>
        <div className="svc-tag green-tag">Group Obedience</div>
      </div>
      <div className="svc-card" id="svc-private">
        <div className="svc-img-wrap"><img src="/images/svc_private.png"   alt="Private Lessons" /></div>
        <div className="svc-tag green-tag">Private Lessons</div>
      </div>
      <div className="svc-card" id="svc-board">
        <div className="svc-img-wrap"><img src="/images/svc_behavior.png"  alt="Board &amp; Train" /></div>
        <div className="svc-tag green-tag">Board &amp; Train</div>
      </div>
    </div>
    <p className="svc-note">Sign up for a complimentary consultation or give us a call <a href="tel:5127965783">(512) 796-5783</a></p>
  </div>
</section>


<section className="why-sec" id="about">
  <div className="container">
    
    <div className="why-header">
      <h2 className="why-heading">Why Choose Kim</h2>
      <p className="why-desc">Kim Roche is a Certified Pet Dog Trainer in Austin, TX. Over the past two decades, she has helped thousands of dogs of all breeds, temperaments and sizes with her simple, compassionate and effective methods. Find out why so veterinarians, rescue groups, pet sitters, doggy daycares and even other dog trainers recommend Kim to their clients!</p>
    </div>
    
    <div className="why-inner">
      <div className="why-visual">
        <div className="why-video-wrap">
          <img src="/images/hero.png" alt="Kim training a dog" className="why-img" />
          <button className="play-btn" aria-label="Play video">
            <svg viewBox="0 0 24 24" fill="white" width="26" height="26"><polygon points="5 3 19 12 5 21 5 3"/></svg>
          </button>
        </div>
      </div>
      <div className="why-text">
        <ul className="why-list">
          <li><span className="chk"></span>Positive, Force Free, Reward Based Training</li>
          <li><span className="chk"></span>Multiple Training Methods &amp; Training Guarantee</li>
          <li><span className="chk"></span>Specializes in Aggressive Behaviors</li>
          <li><span className="chk"></span>Certified from National Canine Learning Center</li>
          <li><span className="chk"></span>No Discrimination For Any Dog Behavior or Breed</li>
          <li><span className="chk"></span>5 Star Reviews from Happy Dog Owners</li>
        </ul>
      </div>
    </div>
  </div>
</section>


<section className="discover-bar" id="behavior">
  <div className="discover-inner">

    
    <div className="db-dog-wrap">
      <img src="/images/grad_dog.png" alt="Graduation dog mascot" className="db-dog-img" />
    </div>

    
    <div className="db-headline">
      <div className="db-green-bar"></div>
      <div className="db-headline-text">
        <p className="db-pre">WE'LL<br />HELP YOU</p>
        <p className="db-keyword">DISCOVER</p>
      </div>
    </div>

    
    <div className="db-benefits">

      
      <div className="db-benefit">
        <svg className="db-icon" viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          
          <circle cx="18" cy="8" r="6" fill="currentColor"/>
          <rect x="14" y="16" width="8" height="18" rx="3" fill="currentColor"/>
          <rect x="12" y="34" width="5" height="14" rx="2" fill="currentColor"/>
          <rect x="19" y="34" width="5" height="14" rx="2" fill="currentColor"/>
          <rect x="10" y="22" width="14" height="4" rx="2" fill="currentColor" transform="rotate(-20 17 24)"/>
          
          <path d="M24 28 Q46 22 52 24" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2"/>
          
          <ellipse cx="60" cy="44" rx="12" ry="8" fill="currentColor"/>
          <circle cx="68" cy="32" r="8" fill="currentColor"/>
          <path d="M60 28 Q58 20 55 22" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M68 26 Q70 18 73 20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M52 44 Q48 50 50 52" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        </svg>
        <span>RELAXED &amp;<br />ATTENTIVE DOGS</span>
      </div>

      <svg className="db-chevron" viewBox="0 0 12 24" fill="none"><path d="M2 2 L10 12 L2 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>

      
      <div className="db-benefit">
        <svg className="db-icon" viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          
          <circle cx="20" cy="8" r="6" fill="currentColor"/>
          <path d="M14 18 Q14 26 20 28 Q26 26 26 18 Z" fill="currentColor"/>
          <path d="M20 28 L16 42 L22 42 L20 36 L24 42 L30 42 L26 28 Z" fill="currentColor"/>
          
          <path d="M26 22 Q38 18 44 20" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
          
          <circle cx="54" cy="24" r="7" fill="currentColor"/>
          <path d="M52 20 Q50 12 47 14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M56 20 Q58 12 61 14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          <ellipse cx="54" cy="38" rx="10" ry="7" fill="currentColor"/>
          <path d="M44 36 L38 44" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          <path d="M64 36 L70 44" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        </svg>
        <span>STRONG<br />RELATIONSHIPS</span>
      </div>

      <svg className="db-chevron" viewBox="0 0 12 24" fill="none"><path d="M2 2 L10 12 L2 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>

      
      <div className="db-benefit">
        <svg className="db-icon" viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          
          <circle cx="16" cy="8" r="6" fill="currentColor"/>
          <path d="M10 20 Q16 18 22 20 L24 34 L18 34 L16 28 L12 34 L6 34 Z" fill="currentColor"/>
          
          <path d="M10 24 Q6 30 4 34" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round"/>
          <path d="M22 22 Q26 26 28 22" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round"/>
          
          <path d="M12 34 L8 50" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
          <path d="M20 34 L24 50" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
          
          <path d="M28 22 Q44 16 54 20" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2"/>
          
          <ellipse cx="62" cy="40" rx="13" ry="8" fill="currentColor"/>
          <circle cx="72" cy="30" r="7" fill="currentColor"/>
          <path d="M68 26 Q66 18 63 20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M74 26 Q76 18 79 20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M50 42 L46 52" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          <path d="M56 44 L54 54" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          <path d="M68 44 L66 54" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          <path d="M74 44 L78 54" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        </svg>
        <span>CLEAR<br />COMMUNICATION</span>
      </div>
    </div>

    
    <div className="db-right">
      <p className="db-call">Give us a call <a href="tel:5127965783" className="db-phone">(512) 796-5783</a></p>
      <a href="#consultation" className="db-btn" id="discoverCta">REQUEST A CONSULTATION</a>
    </div>

  </div>
  <div className="db-teal-line"></div>
</section>



<section className="schedule-sec" id="puppy">
  <div className="container">

    
    <p className="schedule-eyebrow">Class Schedule</p>
    <h2 className="sec-title" style={{marginBottom: '10px'}}>Schedule &amp; Upcoming Classes</h2>
    <div className="schedule-underline"></div>
    <p className="schedule-subtitle">Choose the class that best fits your dog's stage of development and register today.</p>

    
    <div className="sb-tabs" id="sbTabs">
      <button className="sb-tab" data-tab="puppy-preschool">Puppy Preschool</button>
      <button className="sb-tab" data-tab="middle-school">Middle School</button>
      <button className="sb-tab" data-tab="finishing-school">Finishing School</button>
      <button className="sb-tab" data-tab="upcoming">Upcoming Classes</button>
    </div>

    
    <div className="sb-frame">
      <div className="sb-board">

        
        <span className="sb-deco sb-deco-tl">🦴</span>
        <span className="sb-deco sb-deco-tr">🐾</span>
        <span className="sb-deco sb-deco-br">🐕</span>

        
        <h3 className="sb-title" id="sbBoardTitle">Puppy Preschool (Puppies 2 – 6 months old)</h3>
        <div className="sb-divider"></div>

        
        <div className="sb-table-wrap">
          <table className="sb-table" id="sbTable">
            <thead>
              <tr>
                <th>Class</th>
                <th>Schedule</th>
                <th>Time</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody id="sbTbody">
              
            </tbody>
          </table>
        </div>

        
        <div className="sb-cards" id="sbCards">
          
        </div>

        <p className="sb-footer-note">* Schedules subject to change. Contact us to confirm availability.</p>
      </div>
    </div>

  </div>
</section>



<section className="after-sec" id="after">
  <div className="container">
    <h2 className="sec-title">After Our Training</h2>
    <p className="sec-sub">Your dog will come home with these amazing new skills — and a whole new confidence.</p>
    <div className="after-wheel">
      <div className="after-col after-left">
        <div className="after-item"><div className="aft-ic">🐕</div><div className="aft-txt"><strong>Loose-Leash Walking</strong><p>No more pulling on walks</p></div></div>
        <div className="after-item"><div className="aft-ic">🎯</div><div className="aft-txt"><strong>Reliable Recall</strong><p>Come when called every time</p></div></div>
        <div className="after-item"><div className="aft-ic">🛑</div><div className="aft-txt"><strong>Sit &amp; Stay</strong><p>Solid obedience commands</p></div></div>
      </div>
      <div className="after-center">
        <div className="after-dog-circle">
          <img src="/images/svc_puppy.png" alt="Happy trained dog" />
        </div>
      </div>
      <div className="after-col after-right">
        <div className="after-item after-item-r"><div className="aft-txt right-txt"><strong>Socialization Skills</strong><p>Friendly with dogs &amp; people</p></div><div className="aft-ic">🤝</div></div>
        <div className="after-item after-item-r"><div className="aft-txt right-txt"><strong>Focus &amp; Attention</strong><p>Responds to your cues</p></div><div className="aft-ic">👁️</div></div>
        <div className="after-item after-item-r"><div className="aft-txt right-txt"><strong>Calm Behavior</strong><p>Reduced anxiety &amp; stress</p></div><div className="aft-ic">😌</div></div>
      </div>
    </div>
    <p className="after-cta-text">Schedule your free consultation or give us a call <a href="tel:5127965783">(512) 796-5783</a></p>
  </div>
</section>


<section className="trust-sec">
  <div className="container trust-inner">
    <div className="trust-badge"><div className="badge-circle">NACSW</div><span>Certified</span></div>
    <div className="trust-badge"><div className="badge-circle">APDT</div><span>Member</span></div>
    <div className="trust-badge"><div className="badge-circle">CPDT<br/>KA</div><span>Certified</span></div>
    <div className="trust-badge"><div className="badge-circle">AVSAB</div><span>Aligned</span></div>
    <div className="trust-badge"><div className="badge-circle">CCT</div><span>Certified</span></div>
  </div>
</section>


<section className="testi-sec" id="testimonials">
  <div className="container">
    <h2 className="sec-title">Our Satisfied Customers</h2>
    <p className="sec-sub">We are very proud and honored to share some of the wonderful results our clients have experienced.</p>
    <div className="testi-grid">
      <div className="testi-card" id="testi-1">
        <div className="testi-head">
          <div className="testi-avatar">🧑</div>
          <div><strong>Sarah M.</strong><br/><span>Austin, TX</span></div>
        </div>
        <div className="testi-stars">★★★★★</div>
        <p>"Kim completely transformed our rescue dog Max. He went from uncontrollable lunging to walking calmly on leash in just 4 weeks. Absolute miracle worker!"</p>
      </div>
      <div className="testi-card" id="testi-2">
        <div className="testi-head">
          <div className="testi-avatar">👩</div>
          <div><strong>James &amp; Linda K.</strong><br/><span>Round Rock, TX</span></div>
        </div>
        <div className="testi-stars">★★★★★</div>
        <p>"Our Husky was a handful but Kim's patience and expertise made all the difference. The puppy classes were worth every penny. Highly recommend!"</p>
      </div>
      <div className="testi-card" id="testi-3">
        <div className="testi-head">
          <div className="testi-avatar">👨</div>
          <div><strong>Roberto V.</strong><br/><span>Cedar Park, TX</span></div>
        </div>
        <div className="testi-stars">★★★★★</div>
        <p>"The behavior modification program saved our dog's life. Kim addressed his aggression issues professionally and compassionately. We're forever grateful."</p>
      </div>
    </div>
  </div>
</section>


<section className="blog-sec" id="blog">
  <div className="container">
    <h2 className="sec-title">From Our Blog</h2>
    <div className="blog-grid">
      <article className="blog-card" id="blog-1">
        <div className="blog-img-wrap"><img src="/images/blog1.png" alt="Dog collar article" /></div>
        <div className="blog-body">
          <span className="blog-cat">Training Tips</span>
          <h3>Choosing the Right Collar for Your Dog</h3>
          <p>Not all collars are created equal. Learn which collar type is safest and most effective for your dog's size and temperament.</p>
          <a href="#" className="read-more">Read More →</a>
        </div>
      </article>
      <article className="blog-card" id="blog-2">
        <div className="blog-img-wrap"><img src="/images/blog2.png" alt="Dog expression article" /></div>
        <div className="blog-body">
          <span className="blog-cat">Dog Behavior</span>
          <h3>Understanding Your Dog's Expressions</h3>
          <p>Learn to read the subtle signals your dog sends every day and deepen your communication and bond with them.</p>
          <a href="#" className="read-more">Read More →</a>
        </div>
      </article>
      <article className="blog-card" id="blog-3">
        <div className="blog-img-wrap"><img src="/images/blog3.png" alt="Treat training article" /></div>
        <div className="blog-body">
          <span className="blog-cat">Puppy Care</span>
          <h3>Building Good Habits with Treat Rewards</h3>
          <p>Positive reinforcement with treats is powerful — when used correctly. Here's how to train smart and avoid over-treating.</p>
          <a href="#" className="read-more">Read More →</a>
        </div>
      </article>
      <article className="blog-card" id="blog-4">
        <div className="blog-img-wrap"><img src="/images/blog4.png" alt="Dog park article" /></div>
        <div className="blog-body">
          <span className="blog-cat">Socialization</span>
          <h3>Dog Park Do's and Don'ts</h3>
          <p>Dog parks can be wonderful — or overwhelming. Follow these tips to make every visit safe and enjoyable for your pup.</p>
          <a href="#" className="read-more">Read More →</a>
        </div>
      </article>
    </div>
    <div className="blog-dots">
      <span className="dot active"></span><span className="dot"></span><span className="dot"></span>
    </div>
  </div>
</section>


<div className="email-bar">
  <div className="container email-bar-inner">
    <div className="email-bar-left">
      <div className="email-dog-icon">🐕</div>
      <p>Sign up for our emails to stay in the know about all that we do! Keep training going &amp; get valuable tips in your inbox.</p>
    </div>
    <form className="email-form" id="emailForm">
      <input type="email" id="sub-email" placeholder="Your email address" className="email-inp" required />
      <button type="submit" className="btn-sub" id="btnSub">FREE CONSULTATION</button>
    </form>
  </div>
</div>


<footer className="footer" id="footer">
  <div className="container footer-grid">
    <div className="fc">
      <img src="/images/logo.png" alt="Kim The Dog Trainer" className="f-logo" />
      <p>Expert dog training in Austin, TX. Building confident dogs and happy families since 2009.</p>
      <div className="social-row">
        <a href="#" className="soc-btn" aria-label="Facebook">f</a>
        <a href="#" className="soc-btn" aria-label="Twitter">𝕏</a>
        <a href="#" className="soc-btn" aria-label="Instagram">📷</a>
        <a href="#" className="soc-btn" aria-label="YouTube">▶</a>
      </div>
    </div>
    <div className="fc">
      <h4>Quick Links</h4>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#blog">Blog</a></li>
        <li><a href="#consultation">Contact</a></li>
      </ul>
    </div>
    <div className="fc">
      <h4>Services</h4>
      <ul>
        <li><a href="#">Group Obedience</a></li>
        <li><a href="#">Puppy Training</a></li>
        <li><a href="#">Behavior Modification</a></li>
        <li><a href="#">Board &amp; Train</a></li>
        <li><a href="#">Private Lessons</a></li>
      </ul>
    </div>
    <div className="fc">
      <h4>Contact Us</h4>
      <ul className="fc-contact">
        <li>
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 11a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
          (512) 796-5783
        </li>
        <li>
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          info@kimthedogtrainer.com
        </li>
        <li>
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
          Austin, Texas
        </li>
        <li>
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          Mon–Sun: 8am – 6pm
        </li>
      </ul>
    </div>
  </div>
  <div className="footer-bottom">
    <div className="container">© 2026 Kim The Dog Trainer. All Rights Reserved.</div>
  </div>
</footer>


<div className="sticky-bar" id="stickyBar">
  <a href="tel:5127965783" className="sticky-phone">
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 11a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
    (512) 796-5783
  </a>
  <a href="#consultation" className="sticky-consult">FREE CONSULTATION →</a>
</div>


<div className="toast" id="toast"></div>


    </>
  );
}


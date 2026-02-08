import { useState } from 'react'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('introduction')

  const tabs = [
    { id: 'introduction', label: 'Introduction' },
    { id: 'scale', label: 'Scale of Danger' },
    { id: 'history', label: 'History' },
    { id: 'purpose', label: 'Purpose & Strategy' },
    { id: 'analysis', label: 'Analysis' },
    { id: 'conclusion', label: 'Conclusion' },
    { id: 'works-cited', label: 'Works Cited' }
  ]

  return (
    <div className="app">
      <header className="website-header">
        <div className="header-content">
          {/* <div className="header-top-bar">
            <span className="project-badge">English 112 Project 1</span>
            <span className="header-date">December 2024</span>
          </div> */}
          <div className="header-main">
            <div className="header-icon-wrapper">
              <span className="header-icon">🔒</span>
            </div>
            <h1>Think Before You Click</h1>
            <p className="header-subtitle">A Rhetorical Analysis of the Pause Take9 Campaign</p>
          </div>
        </div>
      </header>

      <nav className="tabs-navigation">
        <div className="tabs-container">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </nav>

      <main className="content">
        {activeTab === 'introduction' && (
        <section className="section intro-section">
          <div className="section-header">
            <span className="section-number">01</span>
            <h2>Introduction</h2>
            <div className="section-underline"></div>
          </div>
          <div className="image-container">
            <img src="/images/pic-1.jpeg" alt="Cybersecurity awareness illustration" className="section-image" />
          </div>
          <p className="lead-paragraph">
            The internet is part of everyday life for communication, learning, and entertainment. But as internet use grows, online threats like phishing, scams, and fraud are increasing.
          </p>
          <p>
            Globally, 3.4 billion phishing emails are sent every day (Keepnet Labs). This means many users face unsafe links regularly. Phishing is connected to over 80% of cyber attacks and data breaches (Verizon). More than 90% of successful cyber attacks start with a phishing email (Keepnet Labs). These attacks can steal personal information, bank details, and passwords. They also cause financial loss. In the United States alone, scammers stole $16.6 billion in 2024 (Federal Bureau of Investigation). This shows how costly online crime has become.
          </p>
          <p>
            The Think Before You Click cybersecurity campaign teaches people to pause and think before clicking links or opening attachments ("Pause Take9"). It promotes simple habits that help users protect themselves from scams and cyber threats. This analysis looks at how the Pause Take9 campaign website communicates its message and persuades users to adopt safer online behaviors.
          </p>
        </section>
        )}

        {activeTab === 'scale' && (
        <section className="section">
          <div className="section-header">
            <span className="section-number">02</span>
            <h2>Understanding the Scale of Online Danger</h2>
            <div className="section-underline"></div>
          </div>
          <div className="stat-box highlight-box">
            <div className="stat-item">
              <span className="stat-number">3.4B</span>
              <span className="stat-label">Phishing Emails Daily</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">80%+</span>
              <span className="stat-label">Attacks from Phishing</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">$16.6B</span>
              <span className="stat-label">Stolen in 2024 (U.S.)</span>
            </div>
          </div>
          <p>
            Online threats have reached very high levels that affect millions of people worldwide. Every single day, billions of phishing emails flood inboxes (Keepnet Labs). These emails target individuals and organizations with schemes designed to steal personal information, compromise security, and drain financial resources. According to cybersecurity research, about 80% to 90% of all cyber attacks begin with phishing attempts (Verizon). This makes phishing one of the most dangerous threats online.
          </p>
          <p>
            The financial impact of cybercrime is huge. According to the Federal Bureau of Investigation's 2024 Internet Crime Report, U.S. cybercrime losses reached $16.6 billion (Federal Bureau of Investigation). This reflects a crisis that affects millions of Americans every year. Beyond individual victims, these attacks threaten critical infrastructure, businesses, and national security. Phishing attacks can steal personal information, bank details, and passwords (CISA). This causes not only financial loss but also identity theft and long term security problems.
          </p>
          <p>
            Given this reality, cybersecurity awareness has changed from a technical concern into an everyday necessity for all internet users. The average person must now navigate a digital world that criminals have designed to exploit hesitation, fear, and confusion. This includes college students, working professionals, and retirees. This is why campaigns like Think Before You Click are essential. They help ordinary people protect themselves in a digital environment that is becoming more hostile.
          </p>
        </section>
        )}

        {activeTab === 'history' && (
        <section className="section">
          <div className="section-header">
            <span className="section-number">03</span>
            <h2>History of the Campaign</h2>
            <div className="section-underline"></div>
          </div>
          
          <div className="history-grid">
            <div className="history-card">
              <div className="history-icon">📅</div>
              <h3>Campaign Launch</h3>
              <p>The campaign known as Pause Take9 began in 2022.</p>
            </div>
            <div className="history-card">
              <div className="history-icon">👤</div>
              <h3>Founded By</h3>
              <p>Started by Craig Newmark Philanthropies in partnership with cybersecurity experts and public safety organizations.</p>
            </div>
            <div className="history-card">
              <div className="history-icon">🎯</div>
              <h3>The Reason</h3>
              <p>The campaign was created because online scams and phishing attacks are rising quickly, and many people do not understand how to recognize unsafe links.</p>
            </div>
          </div>

          <p>
            The Pause Take9 campaign is a coordinated national effort launched in 2022 ("Pause Take9"). It aims to combat the growing threat of cyber attacks through public awareness and behavior change. Craig Newmark Philanthropies created it. This is a philanthropic organization committed to supporting journalism, transparency, and cybersecurity. The campaign was created in partnership with Wondros and a coalition of the nation's top cybersecurity organizations. It is part of a larger $100 million cybersecurity pledge aimed at strengthening America's defenses against malicious actors.
          </p>
          <p>
            The campaign was created because online scams and phishing attacks are rising quickly ("Pause Take9"). Many people do not understand how to recognize unsafe links. The initiative addresses a critical gap in cybersecurity strategy. While technical solutions like firewalls and antivirus software remain important, human behavior often represents the weakest link in security chains. The campaign therefore focuses on empowering ordinary individuals to make better decisions in moments of vulnerability.
          </p>
          <p>
            The website itself is accessible at PauseTake9.org ("Pause Take9"). It functions as the campaign's central hub and embodies principles of accessibility and clarity designed for a general audience. When visitors land on the site, they encounter a bold, minimalist design. The campaign's core message is prominently displayed: "9 Seconds for a Safer World." The site uses clean typography and simple illustrations. These include abstract images of computer screens and symbolic representations of digital awareness. The professional color scheme conveys both seriousness and approachability.
          </p>
        </section>
        )}

        {activeTab === 'purpose' && (
        <section className="section">
          <div className="section-header">
            <span className="section-number">04</span>
            <h2>Campaign Purpose and Strategy</h2>
            <div className="section-underline"></div>
          </div>
          
          <div className="purpose-box">
            <h3>Pause Before You Click</h3>
            <p>Take a moment to check if a link or message looks suspicious.</p>
          </div>

          <div className="image-container">
            <img src="/images/pic2.jpg" alt="Pause Take9 campaign visual" className="section-image" />
          </div>

          <p>
            The purpose of the campaign is to raise awareness about internet safety and help people avoid online risks ("Pause Take9"). The campaign uses simple messages and clear examples to teach users how to protect themselves. The Think Before You Click campaign teaches people to pause and think before clicking links or opening attachments. It promotes simple habits that help users protect themselves from scams and cyber threats.
          </p>
          <p>
            The cybersecurity campaign uses logical facts, trusted sources, and emotional impact to communicate its message. It shows real statistics about how many phishing attacks occur and the financial losses they cause (Keepnet Labs; Federal Bureau of Investigation). The website uses statistics and scientific reasoning to justify its core recommendation ("Pause Take9"). The explanation of the nine second pause is rooted in neuroscience about stress response and decision making. This provides a logical foundation for the specific timeframe. The site does not simply say that pausing helps. It explains the reasoning. In high stress situations, the human brain can switch between reactive and reflective modes. A brief delay allows reflection to engage.
          </p>
          <p>
            The campaign is supported by experts, which makes its message credible ("Pause Take9"). The website clearly identifies its coalition of partner organizations. It draws on institutional credibility from groups recognized as legitimate cybersecurity authorities. Craig Newmark's reputation as both a tech founder and philanthropist contributes personal credibility. The site's professional design, clear language, and absence of commercial pitch all communicate that the source operates from genuine concern rather than profit motive. The presentation of the campaign as a public service positions the communicators as servants of the public good rather than self interested actors.
          </p>
          <p>
            The campaign also appeals to people's desire to stay safe and avoid losing their personal information or money ("Pause Take9"). The site acknowledges the genuine anxiety many people feel about cyber threats. It begins with the statement "Cyber threats are everywhere. And getting sneakier." This validates audience concern and creates a sense of shared vulnerability. However, the campaign balances fear with a message of agency and empowerment. The idea that ordinary individuals can meaningfully improve their security through simple actions reduces paralysis and encourages action rather than despair.
          </p>
          <p>
            The website's language is intentionally simple and accessible ("Pause Take9"). It is designed for college age users and general internet users rather than cybersecurity professionals. It explains technical concepts like password managers and software updates in plain English. Clickable definitions appear when users hover over terms. The website guides users through practical steps they can take immediately. These include using password managers, updating software, and recognizing suspicious messages (CISA). It provides links to specific tools like Apple's Password App, Google Password Manager, LastPass, and 1Password. This removes barriers to action by giving users concrete options.
          </p>
          
          <div className="insight-box">
            <p><strong>Key Insight:</strong> Knowing that billions of phishing emails are sent daily highlights why online safety education is necessary (Keepnet Labs).</p>
          </div>
        </section>
        )}

        {activeTab === 'analysis' && (
        <section className="section">
          <div className="section-header">
            <span className="section-number">05</span>
            <h2>Campaign Analysis</h2>
            <div className="section-underline"></div>
          </div>
          <p>
            The Pause Take9 website shows significant strengths as a persuasive and educational tool for promoting cybersecurity awareness among general audiences ("Pause Take9"). Its greatest strength is clarity through simplicity. The core message is to pause for 9 seconds. This is immediately memorable, actionable, and applicable to every online interaction. It does not require technical knowledge or expensive tools. This memorability gives the campaign staying power in users' minds. It is likely to influence behavior long after a single visit.
          </p>
          <p>
            The website's accessibility extends beyond language clarity to inclusive design ("Pause Take9"). Information appears presented as expandable cards and flip back definitions. These let users engage at their own pace and depth level. For someone completely new to cybersecurity concepts, this gradual exposure prevents overwhelm while building competence. The campaign succeeds particularly well in reframing cybersecurity. It changes from a technical specialist concern to a human behavior and community responsibility issue.
          </p>
          <p>
            The specific, actionable recommendations include using a password manager and updating your software ("Pause Take9"). These are combined with direct links to free tools. This addresses a major barrier for non technical users. They often do not know where to start or what tools are safe to use. The recognition that threats change constantly and requiring regular site updates demonstrates commitment to ongoing education rather than one time messaging.
          </p>
          <p>
            However, the campaign has potential limitations. Despite its excellence in explaining what to do and why, the website may still underestimate how challenging behavior change actually is. Providing information is necessary but not sufficient. Many people who understand the risks and recommendations still fail to implement them consistently. Additionally, while the site's reach through airport ads, billboards, and social media is substantial, truly reaching populations most vulnerable to scams requires sustained, multilingual, and community based efforts beyond a website. This includes elderly users, non English speakers, and those with limited internet access.
          </p>
          <p>
            The website's greatest achievement may be cultural. It normalizes cybersecurity awareness as a routine practice for everyone, not just IT specialists or paranoid users. By making the 9 second pause feel natural and achievable, Pause Take9 attempts to shift how millions of people approach online interactions daily.
          </p>
        </section>
        )}

        {activeTab === 'conclusion' && (
        <section className="section conclusion-section">
          <div className="section-header">
            <span className="section-number">06</span>
            <h2>Conclusion</h2>
            <div className="section-underline"></div>
          </div>
          <p>
            In conclusion, the Think Before You Click campaign is important because it addresses a real and growing online threat ("Pause Take9"). Cyber attacks and phishing scams affect millions of people worldwide. They cause financial loss and stolen information. With billions of phishing emails sent daily (Keepnet Labs) and cyber attacks beginning with phishing in 80% to 90% of cases (Verizon), every internet user is a potential target.
          </p>
          <p>
            The campaign's simple message helps people build safer online habits ("Pause Take9"). By increasing awareness and teaching protective actions, the campaign supports safer internet use and reduces the risk of cybercrime. The Pause Take9 campaign addresses this urgent need through its website and integrated multimedia approach. It uses a message simple enough to remember yet grounded in genuine psychological and cybersecurity insight.
          </p>
          <p>
            By encouraging a nine second pause before clicking, downloading, or sharing, the campaign provides ordinary internet users with a practical tool ("Pause Take9"). This tool interrupts the manipulative tactics that cyber criminals rely upon. The website itself embodies principles of accessibility, credibility, and clarity. These make cybersecurity awareness achievable for audiences with no technical background. As cyber threats continue to evolve and become more sophisticated, campaigns like this become ever more valuable. They empower individuals to take concrete protective action for national resilience and personal security. Everyone connected to the internet has a role to play in cybersecurity defense. Pause Take9 reminds us that this role often begins with taking just nine seconds to think before we act.
          </p>
        </section>
        )}

        {activeTab === 'works-cited' && (
        <section className="section works-cited">
          <h2>Works Cited</h2>
          <ul className="works-cited-list">
            <li>
              <strong>"Pause Take9: Think Before You Click."</strong> Craig Newmark Philanthropies, 2022, <a href="https://pausetake9.org/" target="_blank" rel="noopener noreferrer">https://pausetake9.org/</a>
            </li>
            <li>
              <strong>Federal Bureau of Investigation.</strong> "FBI Releases 2024 Internet Crime Report." FBI, 2024, <a href="https://www.fbi.gov/news/press-releases/fbi-releases-annual-internet-crime-report" target="_blank" rel="noopener noreferrer">https://www.fbi.gov/news/press-releases/fbi-releases-annual-internet-crime-report</a>
            </li>
            <li>
              <strong>Verizon.</strong> "2023 Data Breach Investigations Report." Verizon Enterprise, 2023, <a href="https://www.verizon.com/business/resources/reports/dbir/" target="_blank" rel="noopener noreferrer">https://www.verizon.com/business/resources/reports/dbir/</a>
            </li>
            <li>
              <strong>Keepnet Labs.</strong> "Top Phishing Statistics and Trends You Must Know." Keepnet Labs, 2023, <a href="https://keepnetlabs.com/blog/top-phishing-statistics-and-trends-you-must-know" target="_blank" rel="noopener noreferrer">https://keepnetlabs.com/blog/top-phishing-statistics-and-trends-you-must-know</a>
            </li>
            <li>
              <strong>Cybersecurity and Infrastructure Security Agency (CISA).</strong> "Recognize and Report Phishing." CISA, <a href="https://www.cisa.gov/secure-our-world/recognize-and-report-phishing" target="_blank" rel="noopener noreferrer">https://www.cisa.gov/secure-our-world/recognize-and-report-phishing</a>
            </li>
          </ul>
        </section>
        )}
      </main>

      <footer className="website-footer">
        <div className="footer-content">
          <p>&copy; 2026 Mugisha Juste. All rights reserved.</p>
          <p className="footer-subtitle">Cybersecurity Awareness Campaign Analysis</p>
        </div>
      </footer>
    </div>
  )
}

export default App

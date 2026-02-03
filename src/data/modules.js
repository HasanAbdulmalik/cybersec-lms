export const modulesData = {
  1: {
    title: "The Essentials",
    subtitle: "Foundations of Information Security",
    content: `
      <div className="space-y-8">
        <section>
          <h3 className="prose-content">1. Introduction & Historical Context</h3>
          <p>
            Information Security (InfoSec) is not a modern invention. From the <strong>Caesar Cipher</strong> used by Julius Caesar to encrypt military messages (shifting letters by 3 positions), to the <strong>Enigma Machine</strong> of WWII which used rotor mechanics to create polyalphabetic substitution ciphers, the need to protect information has driven technological evolution. 
          </p>
          <p>
            Today, we define InfoSec as the practice of preventing unauthorized access, use, disclosure, disruption, modification, inspection, recording, or destruction of information. It is not just an IT problem; it is a business survival imperative.
          </p>
        </section>

        <section>
          <h3 className="prose-content">2. Security Governance: Rules of the Road</h3>
          <p>
            Before buying firewalls, an organization must define its rules. This hierarchy is critical for compliance (GDPR, HIPAA):
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-300">
             <li><strong>Policies (The "Why"):</strong> High-level management directives. Mandatory. (e.g., "All users must have strong passwords").</li>
             <li><strong>Standards (The "What"):</strong> Specific technologies/metrics. Mandatory. (e.g., "Passwords must be 12+ chars, complex").</li>
             <li><strong>Procedures (The "How"):</strong> Step-by-step instructions. (e.g., "Go to settings -> change password -> enter new password").</li>
             <li><strong>Guidelines:</strong> Recommended advice. Discretionary. (e.g., "Best practices for choosing a password").</li>
          </ul>
        </section>

        <section>
          <h3 className="prose-content">3. The CIA Triad: A Deep Dive</h3>
          <p>
            The <strong>CIA Triad</strong> is the core model for security policy development. It balances three competing demands:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-300">
            <li><strong>Confidentiality (Privacy):</strong> Ensuring data is accessible <em>only</em> to those authorized. 
              <br/><em>Controls:</em> Encryption (AES-256 for data at rest, TLS 1.3 for data in transit), Access Control Lists (ACLs), Steganography.
              <br/><em>Failure Example:</em> If a laptop is stolen but the drive is unencrypted, confidentiality is lost. The 2017 Equifax Breach (147 million SSNs exposed) was a catastrophic failure of confidentiality.
            </li>
            <li><strong>Integrity (Trust):</strong> Ensuring data is accurate and unchanged. 
              <br/><em>Controls:</em> Hashing (SHA-256), Digital Signatures, Version Control.
              <br/><em>Failure Example:</em> A Stuxnet attack altering centrifuge speeds while reporting "normal" status to the operators.
            </li>
            <li><strong>Availability (Uptime):</strong> Ensuring data is accessible when needed. 
              <br/><em>Controls:</em> Redundancy (RAID), Load Balancing, Disaster Recovery Sites, DDoS mitigation.
              <br/><em>Failure Example:</em> The 2016 Dyn DDoS attack taking down Netflix and Twitter by swamping DNS servers.
            </li>
          </ul>
        </section>

        <section>
          <h3 className="prose-content">4. Identification, Authentication, Authorization</h3>
          <p>
            These distinct processes form the "Access Control" lifecycle:
          </p>
          <ol className="list-decimal pl-6 space-y-2 text-slate-300">
             <li><strong>Identification:</strong> Claiming an identity (e.g., entering a Username). "I am User X." This is public information.</li>
             <li><strong>Authentication:</strong> Proving that identity. "I can prove I am User X."
                <ul className="list-disc pl-4 mt-2 text-slate-400 text-sm">
                   <li><em>Something you Know:</em> Password, PIN (Weakest, easily stolen).</li>
                   <li><em>Something you Have:</em> Smart Card, Token, Phone (2FA/MFA). Harder to steal.</li>
                   <li><em>Something you Are:</em> Biometrics (Fingerprint, Face ID, Retina). Hardest to fake but raises privacy concerns.</li>
                </ul>
             </li>
             <li><strong>Authorization:</strong> Granting permissions based on that verified identity. "User X is allowed to read File Y." 
                <br/><em>Principle of Least Privilege:</em> Users should only have access to what they strictly need to do their job. If a marketing intern doesn't need database admin rights, they shouldn't have them.
             </li>
             <li><strong>Accounting (Auditing):</strong> Tracking what User X did. "User X read File Y at 10:00 AM." This provides non-repudiation.</li>
          </ol>
        </section>
      </div>
    `,
    quiz: [
      { question: "Which component of the CIA Triad ensures data is not altered?", options: ["Confidentiality", "Integrity", "Availability", "Authorization"], correct: 1 },
      { question: "Entering your username is an example of:", options: ["Identification", "Authentication", "Authorization", "Accounting"], correct: 0 },
      { question: "Entering your password is an example of:", options: ["Identification", "Authentication", "Authorization", "Accounting"], correct: 1 },
      { question: "What is the primary goal of Confidentiality?", options: ["Uptime", "Accuracy", "Privacy", "Non-repudiation"], correct: 2 },
      { question: "RAID arrays and redundant power supplies primarily support:", options: ["Confidentiality", "Integrity", "Availability", "Authentication"], correct: 2 },
      { question: "Which document type is mandatory and technology-specific?", options: ["Policy", "Standard", "Guideline", "Procedure"], correct: 1 },
      { question: "The Principle of Least Privilege falls under:", options: ["Identification", "Authentication", "Authorization", "Accounting"], correct: 2 },
      { question: "Which is a 'Something You Are' authentication factor?", options: ["Password", "Smart Card", "Fingerprint", "PIN"], correct: 2 },
      { question: "Which is a 'Something You Have' authentication factor?", options: ["Retina Scan", "YubiKey/Token", "Mother's Maiden Name", "Voice Print"], correct: 1 },
      { question: "If an attacker deletes a database, they have compromised:", options: ["Confidentiality", "Integrity", "Availability", "Non-repudiation"], correct: 2 }
    ],
    assignment: {
      type: "simulation",
      title: "Physical Security Challenge",
      description: "You are walking into the office and see a USB drive labeled 'Executive Salaries 2024' on the ground in the parking lot. What do you do?",
      options: ["Pick it up and plug it in to find the owner", "Leave it there", "Pick it up and hand it to IT Security immediately"],
      correctAnswer: 2,
      successMessage: "Correct! This is a 'USB Drop' attack. Never plug unknown drives into your computer. Giving it to IT allows them to analyze it safely.",
      failureMessage: "Incorrect. Plugging it in could install malware (like a HID keyboard attack) instantly. Leaving it allows someone else to fall for the trap.",
    }
  },
  2: {
    title: "The Arsenal",
    subtitle: "Taxonomy of Malware & Threat Vectors",
    content: `
      <div className="space-y-8">
        <section>
          <h3 className="prose-content">1. Malware Taxonomy</h3>
          <p>
            "Malware" (Malicious Software) is an umbrella term. We categorize it by <em>behavior</em> and <em>propagation method</em>:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-300">
            <li><strong>Virus:</strong> Code that attaches to a host file (like a .exe or .doc) and spreads when the host is executed. Requires human action (double-clicking).</li>
            <li><strong>Worm:</strong> Self-replicating malware that spreads across networks automatically using exploits (e.g., SMB vulnerabilities). <em>Does not</em> require a host file or human action. Example: <strong>WannaCry</strong> used the EternalBlue exploit to infect 200,000+ computers.</li>
            <li><strong>Trojan Horse:</strong> Disguises itself as legitimate software (e.g., a "Free Antivirus" or Game Crack) to trick users into installing it. Once inside, it opens a backdoor (RAT - Remote Access Trojan) for the attacker.</li>
            <li><strong>Ransomware:</strong> Encrypts user files using strong cryptography (often AES+RSA) and demands payment (usually Bitcoin) for the decryption key. Modern ransomware also exfiltrates data for "double extortion" (pay or we leak it).</li>
            <li><strong>Rootkit:</strong> Burrows deep into the OS kernel (Ring 0) to hide its presence and remove logs. It can intercept system calls to hide files, processes, and network connections from antivirus tools.</li>
          </ul>
        </section>

        <section>
            <h3 className="prose-content">2. Spyware & Privacy Invaders</h3>
            <p>
                Not all malware destroys data; some just watch.
            </p>
             <ul className="list-disc pl-6 space-y-2 text-slate-300">
                <li><strong>Keyloggers:</strong> Hardware or software that records every keystroke. Used to steal passwords and credit card numbers.</li>
                <li><strong>Adware:</strong> Forces unwanted advertising popup. Often bundled with "free" software.</li>
                <li><strong>Botnets (Zombies):</strong> A network of infected machines controlled by a "Bot Herder". Used for DDoS attacks or mining cryptocurrency. Your computer might be slow because it's mining crypto for a criminal!</li>
             </ul>
        </section>
        
        <section>
          <h3 className="prose-content">3. Social Engineering: Hacking the Human</h3>
          <p>
            Humans are often the weakest link. Technical controls cannot stop a user from voluntarily handing over their password. Social Engineering exploits cognitive biases:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-300">
            <li><strong>Authority:</strong> "This is the CEO, wire this money now." People obey authority figures.</li>
            <li><strong>Urgency:</strong> "Your account will be suspended in 5 minutes." Urgency shuts down critical thinking.</li>
            <li><strong>Scarcity:</strong> "Only 2 spots left for this prize." FOMO (Fear Of Missing Out).</li>
            <li><strong>Trust/Familiarity:</strong> Attackers research victims (OSINT) to appear as friends or colleagues.</li>
          </ul>
        </section>

        <section>
          <h3 className="prose-content">4. Phishing Indicators</h3>
          <p>
            Phishing is the most common entry vector (90%+ of breaches). Look for:
          </p>
           <ul className="list-disc pl-6 space-y-2 text-slate-300">
            <li><strong>Generic Greetings:</strong> "Dear Customer" instead of your name.</li>
            <li><strong>Mismatched URLs:</strong> Hovering over a link shows "paypal-secure-login.com" instead of "paypal.com".</li>
            <li><strong>Spoofed Senders:</strong> "admin@amaz0n.com" (Zero instead of letter O).</li>
            <li><strong>Unexpected Attachments:</strong> Invoices or Shipping Labels you didn't request.</li>
          </ul>
        </section>
      </div>
    `,
    quiz: [
      { question: "Which malware self-replicates without human intervention?", options: ["Virus", "Worm", "Trojan", "Adware"], correct: 1 },
      { question: "Malware that hides deeply in the OS kernel is a:", options: ["Spyware", "Ransomware", "Rootkit", "Keylogger"], correct: 2 },
      { question: "A 'Trojan Horse' is defined by:", options: ["Self-replication", "Encryption capability", "Disguise/Masquerade", "Network speed"], correct: 2 },
      { question: "What is the primary motivation for Ransomware?", options: ["Destruction", "Espionage", "Financial Extortion", "Fame"], correct: 2 },
      { question: "Trying to trick a CEO into sending money is called:", options: ["Bulk Phishing", "Whaling", "Vishing", "Spam"], correct: 1 },
      { question: "'Smishing' uses which communication medium?", options: ["Email", "SMS/Text", "Voice Call", "Social Media"], correct: 1 },
      { question: "Pretexting involves:", options: ["Creating a fake scenario/persona", "Breaking encryption", "Guessing passwords", "Stealing laptops"], correct: 0 },
      { question: "Which tool specifically records your typing?", options: ["Keylogger", "Ransomware", "Adware", "Worm"], correct: 0 },
      { question: "A Logic Bomb executes when:", options: ["A specific condition/time is met", "A user clicks a link", "A file is downloaded", "Randomly"], correct: 0 },
      { question: "Polymorphic malware is difficult to detect because:", options: ["It uses deep fakes", "It changes its code/signature frequently", "It is invisible", "It stays offline"], correct: 1 }
    ],
    assignment: {
      type: "workshop",
      title: "Phishing Forensics",
      description: "Analyze the email header below and determine the threat. Look closely at the Return-Path.",
      scenario: "Return-Path: <admin@paypa1-support.com>\nReceived: from unknown-server.ru\nSubject: URGENT: Quick Action Required",
      options: ["Mark as Safe", "Report as Phishing"],
      correctAnswer: 1,
      successMessage: "Correct! 'paypa1' is a classic typo-squatting domain, and the urgency is a red flag.",
      failureMessage: "Incorrect. The domain 'paypa1' uses a number 1 instead of an L. This is a spoofed domain.",
    }
  },
  3: {
    title: "The Pathways",
    subtitle: "Networks, Wireless & Vulnerabilities",
    content: `
      <div className="space-y-8">
        <section>
          <h3 className="prose-content">1. Network Layers & Attacks</h3>
          <p>
            The <strong>OSI Model</strong> (Open Systems Interconnection) helps us map checks and attacks to 7 distinct layers:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-300">
            <li><strong>Layer 1 (Physical):</strong> Cables, Hubs. Attacks: Wiretapping, cutting cables, jamming Wi-Fi.</li>
            <li><strong>Layer 2 (Data Link):</strong> MAC Addresses, Switches. Attacks: MAC Spoofing, ARP Poisoning (redirecting traffic on a LAN).</li>
            <li><strong>Layer 3 (Network):</strong> IP Addresses, Routers. Attacks: IP Spoofing, Ping of Death, Route Injection.</li>
            <li><strong>Layer 4 (Transport):</strong> TCP/UDP Ports. Attacks: SYN Flood (DoS), Port Scanning (Nmap).</li>
            <li><strong>Layer 7 (Application):</strong> HTTP, FTP, DNS. Attacks: SQL Injection, XSS, Buffer Overflow, Ransomware.</li>
          </ul>
        </section>
        
        <section>
          <h3 className="prose-content">2. Wireless Security Evolution</h3>
          <p>
            Wi-Fi encryption has evolved to address broken standards. Using the wrong one leaves you wide open:
          </p>
           <ul className="list-disc pl-6 space-y-2 text-slate-300">
            <li><strong>WEP (Wired Equivalent Privacy), 1999:</strong> Deprecated. Uses static keys (RC4) with short initialization vectors. Can be cracked in minutes using Aircrack-ng. <strong>DO NOT USE.</strong></li>
            <li><strong>WPA (Wi-Fi Protected Access), 2003:</strong> Introduced TKIP (Temporal Key Integrity Protocol) to rotate keys. Improved but still vulnerable to dictionary attacks.</li>
            <li><strong>WPA2, 2004:</strong> The current standard. Uses <strong>AES-CCMP</strong> encryption. Robust, but vulnerable to KRACK (Key Reinstallation) attacks and offline dictionary attacks on the handshake.</li>
            <li><strong>WPA3, 2018:</strong> The new standard. Uses SAE (Simultaneous Authentication of Equals) to prevent offline dictionary attacks. Supports Forward Secrecy.</li>
          </ul>
        </section>

        <section>
            <h3 className="prose-content">3. Bluetooth Risks</h3>
            <p>
                Mobile devices are vulnerable through Bluetooth as well:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-300">
                <li><strong>Bluejacking:</strong> Sending unsolicited messages to a device (Annoyance).</li>
                <li><strong>Bluesnarfing:</strong> Stealing data (contacts, emails) from a device (Theft).</li>
                <li><strong>Bluebugging:</strong> Taking full control of the device (Admin Access).</li>
            </ul>
        </section>

        <section>
          <h3 className="prose-content">4. Web Vulnerabilities (OWASP Top 10)</h3>
          <p>
            <strong>SQL Injection (SQLi):</strong> Inserting malicious SQL queries into input fields to manipulate the database. 
            <br/><em>Example:</em> Entering \`' OR '1'='1\` into a login field might trick the database into returning "True" for the password check, logging the attacker in as Admin.
            <br/><br/>
            <strong>Cross-Site Scripting (XSS):</strong> Injecting malicious JavaScript into a trusted website. When other users visit the page, the script executes in their browser, potentially stealing their Session Cookies or Authorization Tokens.
          </p>
        </section>
      </div>
    `,
    quiz: [
      { question: "Which Wi-Fi standard is considered obsolete and easily cracked?", options: ["WPA2", "WPA3", "WEP", "802.1X"], correct: 2 },
      { question: "SQL Injection primarily attacks which layer of the OSI model?", options: ["Physical", "Network", "Application", "Transport"], correct: 2 },
      { question: "WPA2 uses which encryption algorithm?", options: ["RC4", "DES", "AES", "Twofish"], correct: 2 },
      { question: "Stealing data via Bluetooth is called:", options: ["Bluejacking", "Bluesnarfing", "Redtoothing", "Whitelisting"], correct: 1 },
      { question: "What is the newest Wi-Fi security standard?", options: ["WEP2", "WPA2-Advanced", "WPA3", "Secure-Fi"], correct: 2 },
      { question: "A 'SYN Flood' is a type of what attack?", options: ["Phishing", "DoS (Denial of Service)", "SQL Injection", "XSS"], correct: 1 },
      { question: "XSS stands for:", options: ["Extreme Secure Socket", "Cross-Site Scripting", "XML Site Std", "X-Ray Security System"], correct: 1 },
      { question: "Man-in-the-Middle (MitM) attacks are most common on:", options: ["Wired LANs", "Unencrypted Public Wi-Fi", "VPNs", "Air-gapped networks"], correct: 1 },
      { question: "Which tool is commonly used for Network Scanning?", options: ["Photoshop", "Nmap", "Word", "Excel"], correct: 1 },
      { question: "Buffer Overflow allows attackers to:", options: ["Overflow the Wi-Fi signal", "Crash a program or execute code", "Clean the memory", "Format the hard drive"], correct: 1 }
    ],
    assignment: {
      type: "simulation",
      title: "Router Config Specialist",
      description: "You are setting up a new office router. Which configuration provides the Maximum Security?",
      options: ["WEP + Broadcast SSID", "WPA2 + Default Password", "WPA3 + Strong Password + Disable WPS", "Open Network + Captive Portal"],
      correctAnswer: 2,
      successMessage: "Correct! WPA3 is the latest standard, and disabling WPS prevents brute-force attacks.",
      failureMessage: "Incorrect. WEP is broken, Default passwords are known, and Open networks have no encryption.",
    }
  },
  4: {
    title: "The Adversaries",
    subtitle: "Threat Actors & The Kill Chain",
    content: `
       <div className="space-y-8">
        <section>
          <h3 className="prose-content">1. The Cyber Kill Chain</h3>
          <p>
            Developed by Lockheed Martin, this framework describes the 7 stages of a targeted cyber attack. The defender's goal is to break the chain at any stage:
          </p>
          <ol className="list-decimal pl-6 space-y-2 text-slate-300">
             <li><strong>Reconnaissance:</strong> Research. Harvesting email addresses, LinkedIn profiles, conference info, Shodan scans (OSINT).</li>
             <li><strong>Weaponization:</strong> Coupling an exploit (e.g., Code to crash PDF reader) with a backdoor (Payload) into a deliverable file.</li>
             <li><strong>Delivery:</strong> Delivering the weaponized bundle to the victim (Email attachment, USB drive, Malicious website).</li>
             <li><strong>Exploitation:</strong> Triggering the weapon's code. e.g., Victim opens the PDF, vulnerability is exploited.</li>
             <li><strong>Installation:</strong> Installing malware on the asset (Backdoor, Keylogger) to maintain persistence.</li>
             <li><strong>C2 (Command & Control):</strong> Malware calls home to the attacker's server to ask for instructions.</li>
             <li><strong>Actions on Objectives:</strong> The actual goal. Data exfiltration, encryption (Ransomware), or destruction.</li>
          </ol>
        </section>
        
        <section>
          <h3 className="prose-content">2. Threat Actor Profiles</h3>
          <p>
            Understanding <em>who</em> is attacking helps determine <em>why</em>:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-300">
             <li><strong>Nation States (APTs - Advanced Persistent Threats):</strong> Highly funded, patient, use custom "Zero-Day" exploits. Goals: Espionage, Geopolitical advantage, IP Theft. (e.g., APT28, Lazarus Group).</li>
             <li><strong>Cybercriminals:</strong> Profit-driven. Use ransomware, botnets. Opportunistic (will hack anyone vulnerable). Organized like businesses with HR and Helpdesks.</li>
             <li><strong>Hacktivists:</strong> Ideologically motivated. Goals: Political statement, chaos. Use DDoS, defacement, doxxing. (e.g., Anonymous).</li>
             <li><strong>Script Kiddies:</strong> Unskilled individuals using tools written by others. Dangerous due to unpredictability and volume.</li>
             <li><strong>Insiders:</strong> Disgruntled employees. Have authorized access, making them very dangerous.</li>
          </ul>
        </section>

        <section>
            <h3 className="prose-content">3. The Insider Threat: The Enemy Within</h3>
            <p>
                Security controls often face outwards (Firewalls), but what if the attacker is already inside?
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-300">
                <li><strong>Malicious Insider:</strong> Intentionally steals data for profit or revenge (e.g., Snowden, Levandowski).</li>
                <li><strong>Negligent Insider:</strong> Accidentally leaves an S3 bucket open or loses a laptop. (Most common).</li>
                <li><strong>Compromised Insider:</strong> A normal employee whose credentials were stolen via Phishing.</li>
            </ul>
        </section>
      </div>
    `,
    quiz: [
      { question: "Which phase of the Kill Chain involves researching the target?", options: ["Weaponization", "Reconnaissance", "Exploitation", "Installation"], correct: 1 },
      { question: "Establishing a 'C2' channel stands for:", options: ["Computer 2 Computer", "Command & Control", "Cyber & Crime", "Code & Compile"], correct: 1 },
      { question: "An APT (Advanced Persistent Threat) is typically:", options: ["A lone teen", "A Nation-State/State-Sponsored Group", "A script kiddie", "An accident"], correct: 1 },
      { question: "The final stage of the Kill Chain is:", options: ["Delivery", "Installation", "Actions on Objectives", "Weaponization"], correct: 2 },
      { question: "OSINT stands for:", options: ["Operating System INTerface", "Open Source Intelligence", "Over Site INTernet", "Online Security INT"], correct: 1 },
      { question: "Who is the most dangerous threat actor because they have authorized access?", options: ["Script Kiddie", "Insider", "Hacktivist", "Botnet"], correct: 1 },
      { question: "Who are 'Script Kiddies'?", options: ["Expert coders", "Unskilled attackers using existing tools", "Government agents", "AI bots"], correct: 1 },
      { question: "Doxxing is the practice of:", options: ["Encrypting files", "Publishing private info publicly", "Deleting logs", "Patching systems"], correct: 1 },
      { question: "A Botnet is:", options: ["A network of infected computers (Zombies)", "A secure network", "A robot helper", "A firewall"], correct: 0 },
      { question: "Blue Teams are: ", options: ["Attackers", "Defenders", "Auditors", "Managers"], correct: 1 }
    ],
    assignment: {
      type: "case_study",
      title: "Attribution Analysis",
      description: "Malware was found on a server. It had been sitting dormant for 6 months, slowly exfiltrating partial jet engine blueprints at night to a foreign IP. The malware code was completely custom (Zero-day). Who is the most likely actor?",
      options: ["Script Kiddie", "Cybercriminal (Ransomware)", "Nation-State (Espionage)"],
      correctAnswer: 2,
      successMessage: "Correct! Long dwell time (patience), specific IP theft (blueprints), and custom zero-day exploits are hallmarks of an APT (Nation State).",
      failureMessage: "Incorrect. Cybercriminals usually want quick money (Ransomware). Script kiddies don't write custom zero-days.",
    }
  },
  5: {
    title: "The Shield",
    subtitle: "Cryptography & Defense Frameworks",
    content: `
      <div className="space-y-8">
        <section>
          <h3 className="prose-content">1. Cryptography Basics</h3>
          <p>
            Cryptography protects confidentiality and integrity.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-300">
            <li><strong>Symmetric Encryption:</strong> Uses the <strong>SAME key</strong> for encryption and decryption. Very fast. Used for bulk data (Hard Drives, VPN tunnels). Algorithms: AES, DES (Obsolete). 
            <br/><em>Problem:</em> How do you share the key securely?</li>
            <li><strong>Asymmetric Encryption (Public Key):</strong> Uses <strong>TWO keys</strong>. A Public key (scrambles) and a Private key (unscrambles). Slower. Solves the key exchange problem. Algorithms: RSA, ECC (Elliptic Curve).</li>
            <li><strong>Hashing:</strong> One-way math. You cannot "decrypt" a hash. Used to verify integrity (checksums) or store passwords safely. Algorithms: SHA-256, MD5 (Obsolete).</li>
          </ul>
        </section>

        <section>
          <h3 className="prose-content">2. Defense-in-Depth (The Onion Approach)</h3>
          <p>
            Never rely on a single control. If the Firewall fails, the Antivirus should catch it. If AV fails, MFA should stop the login.
          </p>
           <ul className="list-disc pl-6 space-y-2 text-slate-300">
            <li><strong>Physical:</strong> Cameras, Guards, Locks, Fences.</li>
            <li><strong>Technical (Logical):</strong> Firewalls, IPS, Encryption, MFA, VLANs.</li>
            <li><strong>Administrative:</strong> Policies, Awareness Training, Background Checks, NDAs.</li>
          </ul>
        </section>

        <section>
            <h3 className="prose-content">3. Zero Trust Architecture</h3>
            <p>
                The old model was "Trust but Verify". The new model is <strong>"Never Trust, Always Verify"</strong>.
            </p>
            <p>
                In Zero Trust, simply being "inside the network" grants you no privileges. Every request is authenticated, authorized, and encrypted, regardless of where it comes from. Google's "BeyondCorp" is a famous implementation of this.
            </p>
        </section>

        <section>
          <h3 className="prose-content">4. Incident Response Lifecycle (NIST 800-61)</h3>
          <p>
            When a breach happens, follow the plan:
          </p>
          <ol className="list-decimal pl-6 space-y-2 text-slate-300">
             <li><strong>Preparation:</strong> Staffing, Tooling, Playbooks. (Do this BEFORE the attack).</li>
             <li><strong>Detection & Analysis:</strong> Monitoring logs, IDS alerts. Determining "Is this a real incident?"</li>
             <li><strong>Containment, Eradication, Recovery:</strong> 
                <br/><em>Containment:</em> Stop the bleeding (Unplug the server).
                <br/><em>Eradication:</em> Remove the malware/rootkit.
                <br/><em>Recovery:</em> Restore from clean backups and patch the vulnerability.
             </li>
             <li><strong>Post-Incident Activity:</strong> Lessons Learned. updating policies so it doesn't happen again.</li>
          </ol>
        </section>
      </div>
    `,
    quiz: [
      { question: "Symmetric Encryption uses:", options: ["A Public/Private Key Pair", "The Same Key for Encryption/Decryption", "No Keys", "Hashing only"], correct: 1 },
      { question: "Asymmetric Encryption allows for:", options: ["Faster processing", "Secure Key Exchange / Public Key Cryptography", "Smaller file sizes", "More passwords"], correct: 1 },
      { question: "Defense-in-Depth means:", options: ["Using one very strong firewall", "Layering multiple security controls", "Using deep learning", "Hiding servers underground"], correct: 1 },
      { question: "Which is a 'Technical' control?", options: ["Security Guard", "Acceptable Use Policy", "Firewall", "Door Lock"], correct: 2 },
      { question: "Which is an 'Administrative' control?", options: ["Antivirus", "Encryption", "Security Awareness Training", "Biometrics"], correct: 2 },
      { question: "The 'Post-Incident Activity' phase focuses on:", options: ["Assigning blame", "Lessons Learned / Improvement", "Restoring backups", "Paying the ransom"], correct: 1 },
      { question: "The motto of Zero Trust is:", options: ["Trust but Verify", "Never Trust, Always Verify", "Trust Everyone", "Block Everything"], correct: 1 },
      { question: "IPS stands for:", options: ["Intrusion Prevention System", "Internet Protocol Service", "Internal Policy Server", "Identity Provider"], correct: 0 },
      { question: "A VPN provides:", options: ["Faster internet", "An encrypted tunnel for data", "Free Wi-Fi", "Virus protection"], correct: 1 },
      { question: "Steganography is the art of:", options: ["Cracking passwords", "Hiding data within other data (e.g., images)", "Encrypting hard drives", "Writing malware"], correct: 1 }
    ],
    assignment: {
      type: "playbook",
      title: "IR Lifecycle Manager",
      description: "A ransomware alert just fired (Detection). You have confirmed machines are being encrypted. What is your IMMEDIATE next step?",
      options: ["Eradication (Delete the virus)", "Containment (Isolate infected systems)", "Recovery (Restore Backup)", "Post-Incident (Meeting)"],
      correctAnswer: 1,
      successMessage: "Correct! You must CONTAIN the spread first (unplug/isolate) before you try to fix it.",
      failureMessage: "Incorrect. If you try to delete (Eradicate) or Restore before Containment, the virus will just re-infect the recovered files.",
    }
  }
};

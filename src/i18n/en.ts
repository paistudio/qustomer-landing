// English copy (default language). Indonesian lives in id.ts and must match this shape.
type Msg = { tag: string; msg: string };

export const en = {
  lang: 'en' as 'en' | 'id',
  ogLocale: 'en_US',
  langName: 'English',
  meta: {
    title: 'Lead Handling Team for WhatsApp & Customer Chats | Qustomer',
    description:
      'Qustomer is the team that sets up and runs your WhatsApp, website, social and email enquiries around your process. Fast replies, booking and follow-up.',
  },
  a11y: { skip: 'Skip to content', langSwitch: 'Language', mainNav: 'Main' },
  nav: [
    { label: 'What we do', href: '/what-we-do' },
    { label: 'How we work', href: '#process' },
    { label: 'Team', href: '#team' },
    { label: 'FAQ', href: '#faq' },
  ],
  cta: 'Book a call',

  hero: {
    eyebrow: 'The leads & chat team for service businesses',
    h1: 'We reply, book, and follow up on your customer chats.',
    lead: 'WhatsApp, website, Instagram and email. Set up around how you already work, then run with you.',
    differ: ['Not an agency.', 'Not a contractor.', 'Not just a tool.', 'Part of your team.'],
    primary: 'Book a discovery call',
    secondary: 'How we work',
    cloud: [
      { tag: 'WhatsApp', msg: 'Is Saturday still open?' },
      { tag: 'WhatsApp', msg: 'How much is the first session?' },
      { tag: 'Website', msg: 'Can I get a quote?' },
      { tag: 'Instagram', msg: 'Where are you located?' },
      { tag: 'Email', msg: 'Can I reschedule to Friday?' },
      { tag: 'WhatsApp', msg: 'Do you have any promos?' },
      { tag: 'Website', msg: "I'd like to book a visit" },
      { tag: 'Instagram', msg: 'What time do you open?' },
      { tag: 'WhatsApp', msg: 'Thanks, see you tomorrow!' },
      { tag: 'Email', msg: 'Sending my details as asked' },
      { tag: 'WhatsApp', msg: 'Is there parking nearby?' },
      { tag: 'Website', msg: 'Do you offer a trial?' },
    ] as Msg[],
    anchor: { tag: 'WhatsApp', msg: 'Hi, can I book a visit this Saturday?' } as Msg,
  },

  channels: {
    eyebrow: 'One record per customer',
    h2: 'We bring every channel into one customer record',
    p: 'A customer messages you on WhatsApp on Monday, fills in your website form on Thursday and replies to an email on Friday. We set it up so that is one person with one history, not three scattered chats.',
    listTitle: 'What we keep for every customer',
    list: [
      'Name and contact details',
      'Where they came from',
      'The full conversation, across channels',
      'Where they are in your pipeline',
      'What happens next, and when',
    ],
    pills: ['WhatsApp', 'Website chat', 'Social media', 'Email'],
    laneCaption: 'One customer, one history',
    anchor: { tag: 'WhatsApp', msg: 'Hi, can I book a visit this Saturday?' } as Msg,
  },

  assistant: {
    h2: 'We build an assistant around your business, then run it with you',
    items: [
      { t: 'Answers common questions', d: 'Prices, hours, location, how it works. We write the answers with you, and it never guesses beyond them.' },
      { t: 'Follows up on schedule', d: 'Leads that go quiet get a nudge at the timing you choose, and never outside quiet hours.' },
      { t: 'Sends offers on schedule', d: 'Promos and next-step offers reach the customers they fit, when you decide.' },
      { t: 'Books the appointment', d: 'It checks your calendar, offers open slots and confirms. Reminders go out before the visit.' },
      { t: 'Hands over to your team', d: 'Price talks, complaints and anything it is unsure about go to a person, with a summary of the chat.' },
    ],
    note: 'Every answer, schedule and handover rule is written with you and changes when your business does. It says it is automated whenever someone asks. It never negotiates and never closes the sale. That stays with you.',
    laneCaption: 'Replies in seconds',
    anchor: { tag: 'Assistant', msg: 'Yes! Saturday 10:00 is open. Shall I hold it for you?' } as Msg,
  },

  funnel: {
    h2: 'From first message to booked, and past it',
    lead: 'Follow one enquiry down the funnel. We shape the stages to your own sales process, and handle, track and show you every step.',
    step: 'Step',
    stages: [
      { t: 'Enquiry arrives', d: 'From WhatsApp, your website, social media or email. Saved the moment it lands.', tag: 'WhatsApp', msg: 'Hi, can I book a visit this Saturday?' },
      { t: 'Instant reply', d: 'The assistant answers within seconds, at any hour.', tag: 'Assistant', msg: 'Happy to help! Which service are you after?' },
      { t: 'Qualified', d: 'A few natural questions find out what they need and whether it is a fit.', tag: 'Qualified', msg: 'First visit, facial, Saturday.' },
      { t: 'Booked', d: 'A time goes into your calendar. They get a confirmation and reminders.', tag: 'Booked', msg: 'Saturday 10:00 ✓' },
      { t: 'Followed up', d: 'We chase no-shows and quiet leads until it is a yes or a clear no.', tag: 'Follow-up', msg: 'Thanks for coming! How was your visit?' },
    ],
  },

  process: {
    eyebrow: 'How we work',
    h2: 'We build it around your business, not the other way round',
    lead: 'There is no fixed package to squeeze into. We learn how you sell, set everything up to match, and stay to run it with you.',
    steps: [
      { t: 'Learn how you work', d: 'We sit down with you and map how enquiries are handled today: who replies, what gets asked, where leads get lost.' },
      { t: 'Build it to fit', d: 'We set up your channels, customer record, assistant answers, follow-ups and booking rules around your services, hours and tone.' },
      { t: 'Launch with your team', d: 'We go live alongside your people, not instead of them. You see every conversation and can take over whenever you want.' },
      { t: 'Keep improving', d: 'We review what customers ask and where leads stall, then adjust scripts, timing and offers as your business changes.' },
    ],
    tailorTitle: 'What we shape to your business',
    tailor: ['Services and prices', 'Opening and quiet hours', 'Booking and calendar rules', 'Tone and language', 'Follow-up timing', 'Offers and promos', 'Pipeline stages', 'Handover rules'],
  },

  team: {
    h2: 'Part of your team, not another tool to manage',
    notsTitle: 'What we are not',
    nots: [
      'A chatbot you have to configure.',
      'A CRM licence.',
      'A dashboard you log into and run yourself.',
      'An ads agency that hands over leads and disappears.',
    ],
    we: 'We sit inside your customer conversations and your existing customer list. We stay until every lead is booked, shows up, and is followed up again if they do not buy. You keep the relationship and the close.',
    storiesTitle: 'Two ways businesses come to us',
    stories: [
      { t: 'You run ads', d: 'You pay for every click, but a slow reply loses the lead. We answer straight away and book them in.' },
      { t: 'Your leads come from everywhere else', d: 'Your real customers already message you: after a treatment, at an exhibition, from a referral. Most go cold because nobody follows up or offers the next step. We do.' },
    ],
  },

  faq: {
    h2: 'Questions we get asked',
    items: [
      { q: 'Is Qustomer software or a service?', a: 'A service. You do not buy software or learn a new tool. We set up the system for your business and run your customer conversations with you.' },
      { q: 'Can you fit this to our business process?', a: 'Yes, that is the job. We start from how you already work and set up the channels, answers, schedules and handover rules to match. If something does not fit, we change the setup, not your process.' },
      { q: 'Which channels do you support?', a: 'WhatsApp is our main channel, through the official WhatsApp Business Platform. Website forms and chat, social media and email are saved into the same customer record.' },
      { q: 'Will the assistant say things I have not approved?', a: 'No. It answers only from information you approve, such as services, hours and FAQs. If it does not know, it hands over to your team instead of guessing.' },
      { q: 'Can customers talk to a real person?', a: 'Any time. They can ask for a person, and the assistant also hands over on price talks, complaints and anything it is unsure about. Your team sees a summary of the chat.' },
      { q: 'Which languages does it speak?', a: 'Bahasa Indonesia and English.' },
      { q: 'What do I need to get started?', a: 'A conversation. We look at how your enquiries are handled today, show you what is slipping through, and plan from there.' },
    ],
  },

  finalCta: {
    h2: "See what's slipping through your chats",
    p: 'Tell us where your enquiries come from. We will look at how they are handled today and show you what is getting lost.',
    button: 'Book a discovery call',
    note: 'No pitch. Just a conversation.',
  },

  services: {
    metaTitle: 'What We Do: Lead & Chat Handling Services | Qustomer',
    metaDescription: 'Everything Qustomer sets up and runs for you: one customer record, instant replies, qualification, booking, follow-up and handover. Built around your process.',
    label: 'What we do',
    eyebrow: 'What we do',
    h1: 'Everything we set up and run for you',
    lead: 'From the first message to the follow-up after the visit. We build each part around how you already work, then run it with you.',
    pointsLabel: 'What we handle',
    groups: [
      { t: 'Capture every enquiry', d: 'Nothing gets lost between channels.', points: ['WhatsApp through the official WhatsApp Business Platform', 'Website chat and forms, social media and email saved into the same place', 'One customer record with the full history across channels'], vis: ['WhatsApp', 'Website', 'Social media', 'Email', 'One customer record'] },
      { t: 'Reply in seconds', d: 'Customers get an answer while they are still interested.', points: ['Answers written with you and approved by you, never guessed', 'Prices, hours, location, how it works, any hour of the day', 'Bahasa Indonesia and English'], vis: ['Hi, are you open on Saturday?', 'Yes! 9:00 to 17:00. Want me to book you in?', 'Replied in seconds'] },
      { t: 'Qualify the lead', d: 'Your team talks to people who are a fit.', points: ['A few natural questions about what they need', 'Leads labelled by your own criteria', 'Stages that follow your sales process'], vis: ['Hi, I want a first visit.', 'Service: facial', 'When: this Saturday', 'First visit: yes', 'Qualified'] },
      { t: 'Book the appointment', d: 'From "interested" to a time in your calendar.', points: ['Checks your calendar and offers open slots', 'Confirmation and reminders before the visit', 'Rescheduling handled in the same chat'], vis: ['Saturday', '10:00', '11:00', '13:00', 'Booked ✓'] },
      { t: 'Follow up until a clear answer', d: 'Quiet leads and no-shows do not just disappear.', points: ['Nudges at timing you choose, never outside quiet hours', 'No-show recovery and post-visit check-ins', 'Win-back messages and offers sent on your schedule'], vis: ['Day 1', 'Thanks for asking! Want to book a time?', 'Day 3', 'Still interested? Saturday is open.', 'Yes, 10:00 please!'] },
      { t: 'Hand over to your team', d: 'People take over when it matters.', points: ['Price talks, complaints and sensitive topics go to a person', 'Handover includes a summary of the chat', 'Customers can ask for a person at any time'], vis: ['Can I get a discount?', 'Handed to your team', 'Asked about price', 'Chat summary attached'] },
      { t: 'See what is happening', d: 'You know where every lead stands.', points: ['Funnel view: enquiry, replied, qualified, booked, followed up', 'Full conversation history per customer', 'Regular reviews of what customers ask and where leads stall'], vis: ['Enquiry', 'Replied', 'Qualified', 'Booked', 'Followed up'] },
      { t: 'Built and run with you', d: 'A team, not a tool you have to manage.', points: ['We learn how you sell and set everything up to match', 'We launch alongside your people, not instead of them', 'We keep adjusting scripts, timing and offers as your business changes'], vis: ['Learn', 'Build', 'Launch', 'Improve'] },
    ],
    notTitle: 'What we do not do',
    nots: [
      'Negotiate prices or close the sale. That stays with you.',
      'Give binding quotes.',
      'Pretend to be human. It says it is automated whenever someone asks.',
    ],
    industriesTitle: 'Where it fits',
    industriesLead: 'Built for service businesses where a conversation comes before a sale.',
    industries: [
      { t: 'Clinics and wellness', d: 'Enquiries about treatments, first visits and follow-up care.' },
      { t: 'Property', d: 'Viewing requests and buyers who go quiet after the first visit.' },
      { t: 'Education and courses', d: 'Questions about programmes, trial classes and enrolment.' },
      { t: 'Home and professional services', d: 'Quote requests, site visits and consultations.' },
    ],
    ctaTitle: 'Not sure what you need?',
    ctaP: 'Tell us where your enquiries come from. We will look at how they are handled today and suggest what to set up first.',
  },

  book: {
    metaTitle: 'Book a Discovery Call | Qustomer',
    metaDescription: 'Pick a time for a discovery call with the Qustomer team. We look at how your WhatsApp, website, social and email enquiries are handled today.',
    label: 'Book a discovery call',
    eyebrow: 'Discovery call',
    h1: 'Book a discovery call',
    lead: 'Pick a time that suits you. We will look at how your customer enquiries are handled today and show you what is slipping through.',
    coverTitle: 'What we will cover',
    cover: [
      'Where your enquiries come from: WhatsApp, website, social media and email',
      'Who replies, how fast, and where leads tend to slip',
      'How follow-up and booking work right now',
      'The next step that makes sense for your business',
    ],
    bringTitle: 'What to bring',
    bring: 'A short picture of your business, and one or two customer conversations you feel were not handled well.',
    note: 'No pitch. Just a conversation.',
    calTitle: 'Choose a time',
    loading: 'Loading calendar\u2026',
    fallback: 'Calendar not loading?',
    openCal: 'Open it in a new tab',
    emailPrefix: 'Prefer to write to us?',
  },

  footer: {
    tagline: 'The team that handles your leads and customer chats, built around how your business works.',
    rights: 'All rights reserved.',
    login: 'Team login',
    cols: [
      {
        title: 'What we do',
        links: [
          { label: 'Everything we do', href: '/what-we-do' },
          { label: 'WhatsApp lead management', href: '/whatsapp-lead-management' },
          { label: 'Automated lead follow-up', href: '/lead-follow-up' },
          { label: 'Appointment booking via WhatsApp', href: '/appointment-booking' },
          { label: 'WhatsApp Business API setup', href: '/whatsapp-business-api' },
        ],
      },
      {
        title: 'Who it is for',
        links: [
          { label: 'Beauty and wellness clinics', href: '/industries/beauty-wellness' },
          { label: 'Education and courses', href: '/industries/education' },
          { label: 'Lead response time guide', href: '/guides/lead-response-time' },
        ],
      },
      {
        title: 'Company',
        links: [
          { label: 'Privacy policy', href: '/privacy' },
          { label: 'Terms of service', href: '/terms' },
        ],
      },
    ],
  },

  notFound: { title: 'Page not found', back: 'Back home' },
};

export type Copy = typeof en;

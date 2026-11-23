// English copy for the inner SEO / legal pages. Indonesian lives in pages-id.ts (same keys, own slugs).
export type PageKey =
  | 'leadManagement' | 'followUp' | 'booking' | 'whatsappApi'
  | 'beauty' | 'education' | 'responseGuide' | 'privacy' | 'terms';

export interface Section { h2: string; paras?: string[]; items?: { t: string; d: string }[] }
export interface PageCopy {
  key: PageKey;
  slug: string;
  kind: 'service' | 'industry' | 'guide' | 'legal';
  /** Full <title>. */
  metaTitle: string;
  description: string;
  /** Short label for breadcrumbs and related links. */
  label: string;
  eyebrow: string;
  h1: string;
  lead: string;
  sections: Section[];
  faq?: { q: string; a: string }[];
  updated?: string;
  /** Keep out of search results (and the sitemap) until the page is ready. */
  noindex?: boolean;
}
export interface PagesBundle {
  ui: { home: string; related: string; faq: string; updated: string; breadcrumb: string };
  pages: PageCopy[];
}

export const pagesEn: PagesBundle = {
  ui: { home: 'Home', related: 'More from Qustomer', faq: 'Common questions', updated: 'Last updated', breadcrumb: 'Breadcrumb' },
  pages: [
    {
      key: 'leadManagement',
      slug: 'whatsapp-lead-management',
      kind: 'service',
      metaTitle: 'WhatsApp Lead Management by a Team | Qustomer',
      description: 'We set up and run how your WhatsApp leads are captured, answered, qualified and followed up, built around your business process.',
      label: 'WhatsApp lead management',
      eyebrow: 'What we do',
      h1: 'WhatsApp lead management, handled by a team',
      lead: 'Most of your leads already message you on WhatsApp. We set up how those chats are captured, answered and followed up, then run it with you.',
      sections: [
        {
          h2: 'Why WhatsApp makes a poor lead inbox on its own',
          paras: [
            'New leads sit in the same chat list as existing customers, suppliers and friends. Replies depend on who happens to be free. Nobody can say at a glance who is waiting, who is ready to book and who went quiet last week.',
            'Leads rarely get lost because nobody cared. They get lost because there was no system that made the next step happen.',
          ],
        },
        {
          h2: 'What we set up for you',
          items: [
            { t: 'One record per customer', d: 'Name, contact, where they came from and the full conversation, kept together even when they also write from your website, social media or email.' },
            { t: 'A fast first reply', d: 'Common questions are answered straight away from information you approve, so a new lead is not left waiting.' },
            { t: 'Light qualification', d: 'A few natural questions find out what they need and whether it is a fit, using the wording of your business.' },
            { t: 'Pipeline stages that match yours', d: 'We shape the stages to how you actually sell, so you can see who is waiting, booked or gone quiet.' },
            { t: 'Handover to your team', d: 'Price talks, complaints and anything unclear go to a person, with a summary of the chat.' },
          ],
        },
        {
          h2: 'Built on the official WhatsApp Business Platform',
          paras: ['We connect your number through the official WhatsApp Business Platform, so your business messaging follows WhatsApp’s own rules and policies.'],
        },
        {
          h2: 'How we work with you',
          paras: ['We start by learning how enquiries are handled today, build the setup around your process, launch alongside your team and keep improving it. Your team keeps the relationship and the close.'],
        },
      ],
      faq: [
        { q: 'Does my team still talk to customers on WhatsApp?', a: 'Yes. Your team can take over any conversation at any time. The assistant handles the routine first replies and follow-ups, and hands over when a person is needed.' },
        { q: 'Can you bring in our existing customer list?', a: 'We can work from your existing customer list so history is not lost. We agree what to import during setup.' },
      ],
    },
    {
      key: 'followUp',
      slug: 'lead-follow-up',
      kind: 'service',
      metaTitle: 'Automated Lead Follow-Up on Schedule | Qustomer',
      description: 'We set up scheduled follow-ups and offers for quiet leads, written with you and sent at the right time, so leads stop going cold.',
      label: 'Automated lead follow-up',
      eyebrow: 'What we do',
      h1: 'Lead follow-up that does not depend on someone remembering',
      lead: 'Most leads do not say no. They go quiet. We set up the follow-ups and offers that bring them back, and we run them on schedule.',
      sections: [
        {
          h2: 'Why leads go cold',
          paras: [
            'A customer asks about a price, then life gets busy. A week later nobody remembers to check in, and the conversation is over without anyone deciding it.',
            'Follow-up is usually the first thing that slips when the team is busy, which is exactly when it matters.',
          ],
        },
        {
          h2: 'What we run for you',
          items: [
            { t: 'Scheduled follow-ups', d: 'Quiet leads get a nudge at the timing you choose, and it stops as soon as they reply.' },
            { t: 'Quiet hours', d: 'Messages never go out at hours you have ruled out.' },
            { t: 'Scheduled offers', d: 'Promos and next-step offers reach the customers they fit, when you decide.' },
            { t: 'No-show and after-visit follow-up', d: 'We chase missed appointments and check in after a visit, until there is a clear yes or no.' },
            { t: 'A person when it matters', d: 'If a lead replies with a price question or a complaint, a person takes over with a summary.' },
          ],
        },
        {
          h2: 'Written with you, not for you',
          paras: [
            'We draft every follow-up and offer with you, in your tone and language. Messages sent outside the 24-hour WhatsApp window use templates approved by WhatsApp, and we prepare those with you too.',
          ],
        },
      ],
      faq: [
        { q: 'Will customers feel spammed?', a: 'Timing, quiet hours and stop rules are agreed with you first, and follow-ups stop when the customer replies or asks not to be contacted.' },
        { q: 'Can we choose what offers go out?', a: 'Yes. You decide the offers and when they are sent. We handle the setup and scheduling.' },
      ],
    },
    {
      key: 'booking',
      slug: 'appointment-booking',
      kind: 'service',
      metaTitle: 'Appointment Booking via WhatsApp Chat | Qustomer',
      description: 'We set up booking inside your customer chats: open slots, confirmation and reminders, fitted to your calendar and booking rules.',
      label: 'Appointment booking via WhatsApp',
      eyebrow: 'What we do',
      h1: 'Appointment booking, right inside the chat',
      lead: 'Customers who ask about a time should be able to book it in the same conversation. We set that up around your calendar and your rules.',
      sections: [
        {
          h2: 'The back-and-forth we remove',
          paras: ['“Is Saturday open?”, “What about 11?”, “Can we move it?” Every message is a chance for the customer to drift away, and every one costs your team time.'],
        },
        {
          h2: 'How booking works with us',
          items: [
            { t: 'Checks your availability', d: 'The assistant offers open slots based on how you schedule, not on guesses.' },
            { t: 'Confirms in the chat', d: 'The customer gets a clear confirmation of day, time and service.' },
            { t: 'Sends reminders', d: 'Reminders go out before the visit, which helps reduce no-shows.' },
            { t: 'Handles changes', d: 'Reschedules follow the rules you set, and unusual requests go to a person.' },
          ],
        },
        {
          h2: 'Fitted to your booking rules',
          paras: ['Opening hours, buffer times, how far ahead people can book, which services need a consultation first: we set these up with you so bookings match how you actually work.'],
        },
      ],
      faq: [
        { q: 'Which calendar do you work with?', a: 'We fit the setup to the calendar or booking process you already use. We confirm what is possible during the first conversation.' },
        { q: 'What if a customer wants something unusual?', a: 'Anything outside your rules goes to your team with a summary of the chat, instead of the assistant guessing.' },
      ],
    },
    {
      key: 'whatsappApi',
      slug: 'whatsapp-business-api',
      kind: 'service',
      metaTitle: 'WhatsApp Business API Setup in Indonesia | Qustomer',
      description: 'We handle the WhatsApp Business Platform setup for you: number, templates and connection to your customer record, without the technical work.',
      label: 'WhatsApp Business API setup',
      eyebrow: 'What we do',
      h1: 'WhatsApp Business API setup, without the technical work',
      lead: 'The WhatsApp Business Platform is what lets a business handle many chats properly. We take care of the setup so you do not have to.',
      sections: [
        {
          h2: 'What it is, in plain words',
          paras: ['The WhatsApp Business Platform (often called the WhatsApp Business API) is WhatsApp’s official way for businesses to send and receive messages at scale, connected to other systems such as a customer record.'],
        },
        {
          h2: 'What we take care of',
          items: [
            { t: 'Connecting your number', d: 'We handle registration and connection of your business number to the platform.' },
            { t: 'Business profile', d: 'Your business name and details set up the way customers should see them.' },
            { t: 'Message templates', d: 'We write and submit the templates needed for follow-ups and reminders.' },
            { t: 'Connection to your customer record', d: 'Every conversation lands in the same record as your website, social and email enquiries.' },
          ],
        },
        {
          h2: 'What we need from you',
          paras: ['A business number and access to your business details. We tell you exactly what is needed during setup. Verification and policies are set by Meta, so some steps depend on their approval.'],
        },
      ],
      faq: [
        { q: 'How long does setup take?', a: 'It depends on your business and on verification by Meta. We give you a plan after the first conversation.' },
        { q: 'Do I need a developer?', a: 'No. We do the technical setup and explain each step in plain language.' },
      ],
    },
    {
      key: 'beauty',
      slug: 'industries/beauty-wellness',
      kind: 'industry',
      metaTitle: 'Chat Handling for Beauty & Wellness Clinics | Qustomer',
      description: 'We handle enquiries, bookings and after-treatment follow-up for beauty and wellness clinics, set up around your services and way of working.',
      label: 'Beauty and wellness clinics',
      eyebrow: 'Who it is for',
      h1: 'Customer conversations for beauty and wellness clinics',
      lead: 'Your customers ask about treatments, prices and free slots at all hours. We set up replies, bookings and follow-up around how your clinic works.',
      sections: [
        {
          h2: 'What usually slips',
          paras: ['Enquiries arrive after hours and wait until morning. Customers who had a treatment are rarely asked how it went, or offered the next step at the right time.'],
        },
        {
          h2: 'What we set up for a clinic',
          items: [
            { t: 'Answers about treatments', d: 'Services, prices, location and how a visit works, from information you approve.' },
            { t: 'Consultation and treatment booking', d: 'Open slots offered in chat, confirmed, with reminders before the visit.' },
            { t: 'After-treatment check-in', d: 'A scheduled message after the visit, with a person taking over if there is a concern.' },
            { t: 'Next-step offers', d: 'Rebooking and follow-up offers sent at the timing you choose.' },
          ],
        },
        {
          h2: 'Care stays with your team',
          paras: ['The assistant never gives medical advice. Questions about suitability, side effects or anything clinical go to your staff.'],
        },
      ],
      faq: [
        { q: 'Can it follow our own price list and promos?', a: 'Yes. It answers from the information you approve, and we update it when your menu or promos change.' },
      ],
    },
    {
      key: 'education',
      slug: 'industries/education',
      kind: 'industry',
      metaTitle: 'Enquiry Handling for Courses & Schools | Qustomer',
      description: 'We handle course enquiries, trial class bookings and registration follow-up for education businesses, built around your programs.',
      label: 'Education and courses',
      eyebrow: 'Who it is for',
      h1: 'Enquiry handling for education and course businesses',
      lead: 'Parents and students ask about schedules, fees and trial classes. We set up fast answers, bookings and follow-up around your programs.',
      sections: [
        {
          h2: 'What usually slips',
          paras: ['Many enquiries come in at once before a new batch, and the same questions get answered again and again. Interested families who need a nudge before registering often do not get one.'],
        },
        {
          h2: 'What we set up for you',
          items: [
            { t: 'Answers about programs', d: 'Schedules, levels, fees and how to register, from information you approve.' },
            { t: 'Trial class and visit booking', d: 'Open slots offered in chat and confirmed, with reminders.' },
            { t: 'Registration follow-up', d: 'Interested leads get a timely check-in until there is a clear yes or no.' },
            { t: 'New batch announcements', d: 'Scheduled messages to the people who asked about a program, when a new batch opens.' },
          ],
        },
        {
          h2: 'Your staff keeps the relationship',
          paras: ['Fee negotiation, special cases and sensitive questions go to your team with a summary, so families always reach a person when it matters.'],
        },
      ],
      faq: [
        { q: 'Can it handle messages from parents and students?', a: 'It answers the routine questions and hands anything personal or unusual to your team.' },
      ],
    },
    {
      key: 'responseGuide',
      slug: 'guides/lead-response-time',
      kind: 'guide',
      metaTitle: 'How Fast Should You Reply to a New Lead? | Qustomer',
      description: 'A short guide to lead response time for service businesses: why the first reply matters and a simple self-check you can do today.',
      label: 'Lead response time guide',
      eyebrow: 'Guide',
      h1: 'How fast should you reply to a new lead?',
      lead: 'The answer is “faster than you probably do”. Here is why it matters and a quick check you can run this week.',
      sections: [
        {
          h2: 'Why the first reply matters',
          paras: [
            'A person who messages a business is usually asking more than one. Attention is highest right after they send the message, and the business that replies while they are still looking often has the advantage.',
            'Speed also signals how you will treat them after they buy.',
          ],
        },
        {
          h2: 'A five-minute self-check',
          items: [
            { t: 'Look at your last ten enquiries', d: 'How long did the first reply take? Note the slowest one.' },
            { t: 'Check evenings and weekends', d: 'What happens to a message that arrives at 21:00 on a Saturday?' },
            { t: 'Find the quiet ones', d: 'Which leads stopped replying, and did anyone follow up?' },
            { t: 'Ask who owns it', d: 'If two people are “responsible”, is it really anyone’s job?' },
          ],
        },
        {
          h2: 'What good looks like',
          items: [
            { t: 'A reply within minutes', d: 'At least during business hours, with a clear next step in the first message.' },
            { t: 'A plan for after hours', d: 'An answer that does not make the customer wait until morning.' },
            { t: 'Scheduled follow-up', d: 'A set time to check in when a lead goes quiet.' },
            { t: 'A person for the hard parts', d: 'Price talks and complaints go to someone who can decide.' },
          ],
        },
        {
          h2: 'Where we come in',
          paras: ['If the self-check showed gaps, that is the work we do: we set up the replies, bookings and follow-ups around your process and run them with you.'],
        },
      ],
    },
    {
      key: 'privacy',
      slug: 'privacy',
      kind: 'legal',
      noindex: true, // TODO remove once counsel has reviewed and the TODO marks are filled
      metaTitle: 'Privacy Policy | Qustomer',
      description: 'How Qustomer collects, uses and protects personal data on this website and when handling customer conversations for business clients.',
      label: 'Privacy policy',
      eyebrow: 'Legal',
      h1: 'Privacy policy',
      lead: 'This policy explains what personal data Qustomer handles, why, and the choices you have.',
      updated: '2026-11-23',
      sections: [
        {
          h2: '1. Who we are',
          paras: [
            'Qustomer provides a service that sets up and runs customer conversations for businesses. It is operated by PT Pilar Antar Informasi, Jaya Harmoni JH4-3, Sidoarjo, Indonesia. For privacy questions, contact Akbar Putra, Founder at team@qustomer.id.',
          ],
        },
        {
          h2: '2. Data we collect on this website',
          paras: [
            'This website does not use advertising cookies. We use Vercel Web Analytics to count visits (pages viewed, referrer, country, device type). It sets no cookies and does not track you across sites or store your IP address. We also use Google Search Console, which reports how our pages appear in Google Search and does not run on your browser. The booking page loads a scheduling widget from Cal.com. When you book a call, the details you enter (such as your name, email and answers) are processed by Cal.com and passed to us, and Cal.com\u2019s own privacy policy applies to the widget. If you email us, we receive your email address and whatever you choose to tell us. We use it only to reply and to discuss working together, based on our legitimate interest in answering you or on your consent where the law requires it.',
          ],
        },
        {
          h2: '3. Data we handle for our clients',
          paras: [
            'When we run customer conversations for a business, we handle personal data of that business’s customers, such as name, contact details and message content, from channels like WhatsApp, website chat, social media and email.',
            'For this data the business decides why it is collected and is responsible for having a lawful basis. We process it on the business’s behalf and under its instructions, under a data processing agreement that sets out these roles.',
          ],
        },
        {
          h2: '4. Health and other specific data',
          paras: [
            'Some businesses we serve, such as clinics, may receive messages that mention health information. This is specific personal data under UU PDP. We do not ask customers for it. Clients must tell us when their conversations are likely to include it, so we can agree extra safeguards and handling rules. Our assistant does not give medical advice.',
          ],
        },
        {
          h2: '5. Children',
          paras: [
            'Our service is built for businesses, not for children. Where a client, such as an education provider, communicates with children, the client is responsible for obtaining the parental or guardian consent required by law, and we process that data only on that basis.',
          ],
        },
        {
          h2: '6. Automated replies',
          paras: [
            'Our assistant replies automatically, using information approved by the client. It says it is automated when asked, and a person can take over on request. You may object to automated processing by asking to speak to a person or by contacting us.',
          ],
        },
        {
          h2: '7. How we use data',
          paras: [
            'We use data to deliver the service we agreed with the client: answering and routing enquiries, booking, follow-up and reporting. We do not sell personal data.',
          ],
        },
        {
          h2: '8. Who we share it with',
          paras: [
            'We use service providers needed to deliver the service, such as the WhatsApp Business Platform and hosting providers. They process data only to provide those services.',
          ],
        },
        {
          h2: '9. Transfers outside Indonesia',
          paras: [
            'Some providers, such as WhatsApp (Meta) and cloud hosting, may process data outside Indonesia. We use providers that apply appropriate safeguards and, where required, we make sure protection is at least equivalent to Indonesian law.',
          ],
        },
        {
          h2: '10. How long we keep it',
          paras: [
            'We keep data only as long as needed to provide the service, as the client instructs, and as the law requires. After that it is deleted or anonymised. Data held under a client contract is kept for up to 24 months after the contract ends.',
          ],
        },
        {
          h2: '11. Security and data breaches',
          paras: [
            'We use reasonable technical and organisational measures to protect personal data. If a breach affects personal data we handle, we will notify the affected client without delay so that required notices can be given within 3×24 hours, and we will notify individuals and the authority ourselves where we are responsible for doing so.',
          ],
        },
        {
          h2: '12. Your rights',
          paras: [
            'Under Indonesian law, including the Personal Data Protection Law (UU PDP), you may ask to access, correct or delete your personal data, withdraw consent, and object to automated processing. If your data was collected by one of our clients, please contact that business, or contact us and we will pass your request on.',
          ],
        },
        {
          h2: '13. Changes and contact',
          paras: [
            'We may update this policy and will change the date above when we do. Questions: team@qustomer.id.',
          ],
        },
      ],
    },
    {
      key: 'terms',
      slug: 'terms',
      kind: 'legal',
      noindex: true, // TODO remove once counsel has reviewed and the TODO marks are filled
      metaTitle: 'Terms of Service | Qustomer',
      description: 'The terms for using the Qustomer website, and a summary of how our written service agreements with business clients work.',
      label: 'Terms of service',
      eyebrow: 'Legal',
      h1: 'Terms of service',
      lead: 'These terms cover your use of this website and explain how our service agreements work.',
      updated: '2026-11-23',
      sections: [
        {
          h2: '1. About these terms and language',
          paras: [
            'By using this website you agree to these terms. Our service for clients is provided under a separate written agreement, which takes priority where it differs. These terms are published in English and Indonesian. If they differ, the Indonesian version prevails.',
          ],
        },
        {
          h2: '2. The website',
          paras: [
            'The content on this website is for general information about Qustomer. It is not an offer or a binding quote. Details of scope and fees are agreed in writing with each client.',
          ],
        },
        {
          h2: '3. Our service',
          paras: [
            'Qustomer sets up and runs customer conversations for businesses. We do not guarantee specific results, such as a number of leads, bookings or sales.',
          ],
        },
        {
          h2: '4. Client responsibilities',
          paras: [
            'Clients are responsible for their products, prices and promises to customers, and for the accuracy of the information they give us. Clients must have a lawful basis, including opt-in consent where needed, to contact their customers, and must follow the WhatsApp Business messaging and commerce policies. Clients must not use the service to send spam or unlawful content.',
          ],
        },
        {
          h2: '5. Third-party platforms',
          paras: [
            'Our service relies on third-party platforms such as WhatsApp. Their policies apply, and their availability and approvals are outside our control.',
          ],
        },
        {
          h2: '6. Intellectual property',
          paras: [
            'The Qustomer name, logo and website content belong to Qustomer. You may not copy them without our permission.',
          ],
        },
        {
          h2: '7. Liability',
          paras: [
            'The website is provided as is. To the extent permitted by law, we are not liable for losses arising from use of this website.',
          ],
        },
        {
          h2: '8. Changes to these terms',
          paras: [
            'We may update these terms. The date above shows the latest version.',
          ],
        },
        {
          h2: '9. Governing law and disputes',
          paras: [
            'These terms are governed by the laws of Indonesia. We first try to resolve disputes in good faith. If that fails, they go to the District Court of Sidoarjo (Pengadilan Negeri Sidoarjo).',
          ],
        },
        {
          h2: '10. Contact',
          paras: [
            'Qustomer, operated by PT Pilar Antar Informasi, Jaya Harmoni JH4-3, Sidoarjo, Indonesia. Questions: team@qustomer.id.',
          ],
        },
      ],
    },
  ],
};

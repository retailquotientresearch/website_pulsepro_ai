'use client'

import HeroSection from '@/components/HeroSection'
import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import { useTranslations } from 'next-intl'

export default function PrivacyPolicyPage() {
  const t = useTranslations('privacyPolicy')
  return (
    <main>
      {/* Hero Section */}
      <HeroSection
        title={t('hero.title')}
        subtitle={t('hero.subtitle')}
        customIllustration={{
          mainIcon: 'ri-shield-user-line',
          topRightIcon: 'ri-lock-line',
          bottomLeftIcon: 'ri-file-shield-line'
        }}
      />

      <Section className='py-12 md:py-16 bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-950 dark:to-black'>
        <Container>
          <div className='max-w-7xl mx-auto'>
            <div className='bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm p-8 md:p-12'>
              {/* Effective Date */}
              <div className='mb-8 pb-6 border-b border-gray-200 dark:border-gray-700'>
                <p className='text-sm text-gray-500 dark:text-gray-400'>
                  Effective date: August 02, 2020
                </p>
              </div>

              {/* 1. Introduction */}
              <section className='mb-12'>
                <h2 className='text-2xl font-bold text-gray-900 dark:text-white mb-6'>
                  1. Introduction
                </h2>
                <p className='text-gray-600 dark:text-gray-400 leading-relaxed mb-4'>
                  Welcome to <strong>Pulse Business Solutions Inc</strong>.
                </p>
                <p className='text-gray-600 dark:text-gray-400 leading-relaxed mb-4'>
                  <strong>Pulse Business Solutions Inc</strong> (
                  <strong>
                    <q>us</q>
                  </strong>
                  ,{' '}
                  <strong>
                    <q>we</q>
                  </strong>
                  , or{' '}
                  <strong>
                    <q>our</q>
                  </strong>
                  ) operates https://www.pulsepro.ai and Pulse mobile
                  application (hereinafter referred to as{' '}
                  <strong>
                    <q>Service</q>
                  </strong>
                  ).
                </p>
                <p className='text-gray-600 dark:text-gray-400 leading-relaxed mb-4'>
                  Our Privacy Policy governs your visit to
                  https://www.pulsepro.ai and Pulse mobile application, and
                  explains how we collect, safeguard and disclose information
                  that results from your use of our Service.
                </p>
                <p className='text-gray-600 dark:text-gray-400 leading-relaxed mb-4'>
                  We use your data to provide and improve Service. By using
                  Service, you agree to the collection and use of information in
                  accordance with this policy. Unless otherwise defined in this
                  Privacy Policy, the terms used in this Privacy Policy have the
                  same meanings as in our Terms and Conditions.
                </p>
                <p className='text-gray-600 dark:text-gray-400 leading-relaxed'>
                  Our Terms and Conditions (
                  <strong>
                    <q>Terms</q>
                  </strong>
                  ) govern all use of our Service and together with the Privacy
                  Policy constitutes your agreement with us (
                  <strong>
                    <q>agreement</q>
                  </strong>
                  ).
                </p>
              </section>

              {/* 2. Definitions */}
              <section className='mb-12'>
                <h2 className='text-2xl font-bold text-gray-900 dark:text-white mb-6'>
                  2. Definitions
                </h2>
                <div className='space-y-4'>
                  <div>
                    <p className='text-gray-600 dark:text-gray-400 leading-relaxed'>
                      <strong>SERVICE</strong> means the https://www.pulsepro.ai
                      website and Pulse mobile application operated by Pulse
                      Business Solutions Inc.
                    </p>
                  </div>
                  <div>
                    <p className='text-gray-600 dark:text-gray-400 leading-relaxed'>
                      <strong>PERSONAL DATA</strong> means data about a living
                      individual who can be identified from those data (or from
                      those and other information either in our possession or
                      likely to come into our possession).
                    </p>
                  </div>
                  <div>
                    <p className='text-gray-600 dark:text-gray-400 leading-relaxed'>
                      <strong>USAGE DATA</strong> is data collected
                      automatically either generated by the use of Service or
                      from Service infrastructure itself (for example, the
                      duration of a page visit).
                    </p>
                  </div>
                  <div>
                    <p className='text-gray-600 dark:text-gray-400 leading-relaxed'>
                      <strong>COOKIES</strong> are small files stored on your
                      device (computer or mobile device).
                    </p>
                  </div>
                  <div>
                    <p className='text-gray-600 dark:text-gray-400 leading-relaxed'>
                      <strong>DATA CONTROLLER</strong> means a natural or legal
                      person who (either alone or jointly or in common with
                      other persons) determines the purposes for which and the
                      manner in which any personal data are, or are to be,
                      processed. For the purpose of this Privacy Policy, we are
                      a Data Controller of your data.
                    </p>
                  </div>
                  <div>
                    <p className='text-gray-600 dark:text-gray-400 leading-relaxed'>
                      <strong>DATA PROCESSORS (OR SERVICE PROVIDERS)</strong>{' '}
                      means any natural or legal person who processes the data
                      on behalf of the Data Controller. We may use the services
                      of various Service Providers in order to process your data
                      more effectively.
                    </p>
                  </div>
                  <div>
                    <p className='text-gray-600 dark:text-gray-400 leading-relaxed'>
                      <strong>DATA SUBJECT</strong> is any living individual who
                      is the subject of Personal Data.
                    </p>
                  </div>
                  <div>
                    <p className='text-gray-600 dark:text-gray-400 leading-relaxed'>
                      <strong>THE USER</strong> is the individual using our
                      Service. The User corresponds to the Data Subject, who is
                      the subject of Personal Data.
                    </p>
                  </div>
                </div>
              </section>

              {/* 3. Information Collection and Use */}
              <section className='mb-12'>
                <h2 className='text-2xl font-bold text-gray-900 dark:text-white mb-6'>
                  3. Information Collection and Use
                </h2>
                <p className='text-gray-600 dark:text-gray-400 leading-relaxed'>
                  We collect several different types of information for various
                  purposes to provide and improve our Service to you.
                </p>
              </section>

              {/* 4. Types of Data Collected */}
              <section className='mb-12'>
                <h2 className='text-2xl font-bold text-gray-900 dark:text-white mb-6'>
                  4. Types of Data Collected
                </h2>

                <h3 className='text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4'>
                  Personal Data
                </h3>
                <p className='text-gray-600 dark:text-gray-400 leading-relaxed mb-4'>
                  While using our Service, we may ask you to provide us with
                  certain personally identifiable information that can be used
                  to contact or identify you (
                  <strong>
                    <q>Personal Data</q>
                  </strong>
                  ). Personally identifiable information may include, but is not
                  limited to:
                </p>

                <div className='pl-6 text-gray-600 dark:text-gray-400 space-y-2 mb-4'>
                  <p>(a) Email address</p>
                  <p>(b) First name and last name</p>
                  <p>(c) Phone number</p>
                  <p>(d) Address, State, Province, ZIP/Postal code, City</p>
                  <p>(e) Cookies and Usage Data</p>
                </div>

                <p className='text-gray-600 dark:text-gray-400 leading-relaxed mb-8'>
                  We may use your Personal Data to contact you with newsletters,
                  marketing or promotional materials and other information that
                  may be of interest to you. You may opt out of receiving any,
                  or all, of these communications from us by following the
                  unsubscribe link or by emailing at{' '}
                  <a
                    href='mailto:hello@pulsepro.ai'
                    className='text-gray-900 dark:text-white underline'
                  >
                    hello@pulsepro.ai
                  </a>
                  .
                </p>

                <h3 className='text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4'>
                  Usage Data
                </h3>
                <p className='text-gray-600 dark:text-gray-400 leading-relaxed mb-4'>
                  We may also collect information that your browser sends
                  whenever you visit our Service or when you access Service by
                  or through a mobile device (
                  <strong>
                    <q>Usage Data</q>
                  </strong>
                  ).
                </p>

                <p className='text-gray-600 dark:text-gray-400 leading-relaxed mb-4'>
                  This Usage Data may include information such as your
                  computer&apos;s Internet Protocol address (e.g. IP address),
                  browser type, browser version, the pages of our Service that
                  you visit, the time and date of your visit, the time spent on
                  those pages, unique device identifiers and other diagnostic
                  data.
                </p>

                <p className='text-gray-600 dark:text-gray-400 leading-relaxed mb-8'>
                  When you access Service with a mobile device, this Usage Data
                  may include information such as the type of mobile device you
                  use, your mobile device unique ID, the IP address of your
                  mobile device, your mobile operating system, the type of
                  mobile Internet browser you use, unique device identifiers and
                  other diagnostic data.
                </p>

                <h3 className='text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4'>
                  Location Data
                </h3>
                <p className='text-gray-600 dark:text-gray-400 leading-relaxed mb-4'>
                  We may use and store information about your location if you
                  give us permission to do so (
                  <strong>
                    <q>Location Data</q>
                  </strong>
                  ). We use this data to provide features of our Service, to
                  improve and customize our Service.
                </p>

                <p className='text-gray-600 dark:text-gray-400 leading-relaxed mb-8'>
                  You can enable or disable location services when you use our
                  Service at any time by way of your device settings.
                </p>

                <h3 className='text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4'>
                  Tracking Cookies Data
                </h3>
                <p className='text-gray-600 dark:text-gray-400 leading-relaxed mb-4'>
                  We use cookies and similar tracking technologies to track the
                  activity on our Service and we hold certain information.
                </p>

                <p className='text-gray-600 dark:text-gray-400 leading-relaxed mb-4'>
                  Cookies are files with a small amount of data which may
                  include an anonymous unique identifier. Cookies are sent to
                  your browser from a website and stored on your device. Other
                  tracking technologies are also used such as beacons, tags and
                  scripts to collect and track information and to improve and
                  analyze our Service.
                </p>

                <p className='text-gray-600 dark:text-gray-400 leading-relaxed mb-4'>
                  You can instruct your browser to refuse all cookies or to
                  indicate when a cookie is being sent. However, if you do not
                  accept cookies, you may not be able to use some portions of
                  our Service.
                </p>

                <p className='text-gray-600 dark:text-gray-400 leading-relaxed mb-4'>
                  Examples of Cookies we use:
                </p>

                <div className='pl-6 text-gray-600 dark:text-gray-400 space-y-2 mb-8'>
                  <p>
                    (a) Session Cookies: We use Session Cookies to operate our
                    Service.
                  </p>
                  <p>
                    (b) Preference Cookies: We use Preference Cookies to
                    remember your preferences and various settings.
                  </p>
                  <p>
                    (c) Security Cookies: We use Security Cookies for security
                    purposes.
                  </p>
                  <p>
                    (d) Advertising Cookies: Advertising Cookies are used to
                    serve you with advertisements that may be relevant to you
                    and your interests.
                  </p>
                </div>

                <h3 className='text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4'>
                  Other Data
                </h3>
                <p className='text-gray-600 dark:text-gray-400 leading-relaxed'>
                  While using our Service, we may also collect the following
                  information: sex, age, date of birth, place of birth, passport
                  details, citizenship, registration at place of residence and
                  actual address, telephone number (work, mobile), details of
                  documents on education, qualification, professional training,
                  employment agreements, non-disclosure agreements, information
                  on bonuses and compensation, information on marital status,
                  family members, social security (or other taxpayer
                  identification) number, office location and other data.
                </p>
              </section>

              {/* 5. Use of Data */}
              <section className='mb-12'>
                <h2 className='text-2xl font-bold text-gray-900 dark:text-white mb-6'>
                  5. Use of Data
                </h2>
                <p className='text-gray-600 dark:text-gray-400 leading-relaxed mb-4'>
                  Pulse Business Solutions Inc uses the collected data for
                  various purposes:
                </p>

                <div className='pl-6 text-gray-600 dark:text-gray-400 space-y-2'>
                  <p>(a) to provide and maintain our Service;</p>
                  <p>(b) to notify you about changes to our Service;</p>
                  <p>
                    (c) to allow you to participate in interactive features of
                    our Service when you choose to do so;
                  </p>
                  <p>(d) to provide customer support;</p>
                  <p>
                    (e) to gather analysis or valuable information so that we
                    can improve our Service;
                  </p>
                  <p>(f) to monitor the usage of our Service;</p>
                  <p>(g) to detect, prevent and address technical issues;</p>
                  <p>
                    (h) to fulfill any other purpose for which you provide it;
                  </p>
                  <p>
                    (i) to carry out our obligations and enforce our rights
                    arising from any contracts entered into between you and us,
                    including for billing and collection;
                  </p>
                  <p>
                    (j) to provide you with notices about your account and/or
                    subscription, including expiration and renewal notices,
                    email-instructions, etc.;
                  </p>
                  <p>
                    (k) to provide you with news, special offers and general
                    information about other goods, services and events which we
                    offer that are similar to those that you have already
                    purchased or enquired about unless you have opted not to
                    receive such information;
                  </p>
                  <p>
                    (l) in any other way we may describe when you provide the
                    information;
                  </p>
                  <p>(m) for any other purpose with your consent.</p>
                </div>
              </section>

              {/* 6. Retention of Data */}
              <section className='mb-12'>
                <h2 className='text-2xl font-bold text-gray-900 dark:text-white mb-6'>
                  6. Retention of Data
                </h2>
                <p className='text-gray-600 dark:text-gray-400 leading-relaxed mb-4'>
                  We will retain your Personal Data only for as long as is
                  necessary for the purposes set out in this Privacy Policy. We
                  will retain and use your Personal Data to the extent necessary
                  to omply with our legal obligations (for example, if we are
                  required to retain your data to comply with applicable laws),
                  resolve disputes, and enforce our legal agreements and
                  policies.
                </p>
                <p className='text-gray-600 dark:text-gray-400 leading-relaxed'>
                  We will also retain Usage Data for internal analysis purposes.
                  Usage Data is generally retained for a shorter period, except
                  when this data is used to strengthen the security or to
                  improve the functionality of our Service, or we are legally
                  obligated to retain this data for longer time periods.
                </p>
              </section>

              {/* 7. Transfer of Data */}
              <section className='mb-12'>
                <h2 className='text-2xl font-bold text-gray-900 dark:text-white mb-6'>
                  7. Transfer of Data
                </h2>
                <p className='text-gray-600 dark:text-gray-400 leading-relaxed mb-4'>
                  Your information, including Personal Data, may be transferred
                  to – and maintained on – computers located outside of your
                  state, province, country or other governmental jurisdiction
                  where the data protection laws may differ from those of your
                  jurisdiction.
                </p>
                <p className='text-gray-600 dark:text-gray-400 leading-relaxed mb-4'>
                  If you are located outside United States and choose to provide
                  information to us, please note that we transfer the data,
                  including Personal Data, to United States and process it
                  there.
                </p>
                <p className='text-gray-600 dark:text-gray-400 leading-relaxed mb-4'>
                  Your consent to this Privacy Policy followed by your
                  submission of such information represents your agreement to
                  that transfer.
                </p>
                <p className='text-gray-600 dark:text-gray-400 leading-relaxed'>
                  Pulse Business Solutions Inc will take all the steps
                  reasonably necessary to ensure that your data is treated
                  securely and in accordance with this Privacy Policy and no
                  transfer of your Personal Data will take place to an
                  organisation or a country unless there are adequate controls
                  in place including the security of your data and other
                  personal information.
                </p>
              </section>

              {/* 8. Disclosure of Data */}
              <section className='mb-12'>
                <h2 className='text-2xl font-bold text-gray-900 dark:text-white mb-6'>
                  8. Disclosure of Data
                </h2>
                <p className='text-gray-600 dark:text-gray-400 leading-relaxed mb-6'>
                  We may disclose personal information that we collect, or you
                  provide:
                </p>

                <div className='space-y-6'>
                  <div>
                    <h3 className='text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2'>
                      Disclosure for Law Enforcement
                    </h3>
                    <p className='text-gray-600 dark:text-gray-400 leading-relaxed'>
                      Under certain circumstances, we may be required to
                      disclose your Personal Data if required to do so by law or
                      in response to valid requests by public authorities.
                    </p>
                  </div>

                  <div>
                    <h3 className='text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2'>
                      Business Transaction
                    </h3>
                    <p className='text-gray-600 dark:text-gray-400 leading-relaxed'>
                      If we or our subsidiaries are involved in a merger,
                      acquisition or asset sale, your Personal Data may be
                      transferred.
                    </p>
                  </div>

                  <div>
                    <h3 className='text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2'>
                      Other cases
                    </h3>
                    <p className='text-gray-600 dark:text-gray-400 leading-relaxed mb-2'>
                      We may disclose your information also:
                    </p>
                    <ul className='list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-1'>
                      <li>to our subsidiaries and affiliates;</li>
                      <li>
                        to contractors, service providers, and other third
                        parties we use to support our business;
                      </li>
                      <li>
                        to fulfill the purpose for which you provide the
                        information;
                      </li>
                      <li>
                        for the purpose of including your company&apos;s logo on
                        our website;
                      </li>
                      <li>
                        for any other purpose disclosed by us when you provide
                        the information;
                      </li>
                      <li>with your consent in any other cases;</li>
                      <li>
                        if we believe disclosure is necessary or appropriate to
                        protect the rights, property, or safety of the Company,
                        our customers, or others.
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* 9. Security of Data */}
              <section className='mb-12'>
                <h2 className='text-2xl font-bold text-gray-900 dark:text-white mb-6'>
                  9. Security of Data
                </h2>
                <p className='text-gray-600 dark:text-gray-400 leading-relaxed'>
                  The security of your data is important to us but remember that
                  no method of transmission over the Internet or method of
                  electronic storage is 100% secure. While we strive to use
                  commercially acceptable means to protect your Personal Data,
                  we cannot guarantee its absolute security.
                </p>
              </section>

              {/* 10. Your Data Protection Rights */}
              <section className='mb-12'>
                <h2 className='text-2xl font-bold text-gray-900 dark:text-white mb-6'>
                  10. Your Data Protection Rights Under General Data Protection
                  Regulation (GDPR)
                </h2>
                <p className='text-gray-600 dark:text-gray-400 leading-relaxed mb-4'>
                  If you are a resident of the European Union (EU) and European
                  Economic Area (EEA), you have certain data protection rights,
                  covered by GDPR. – See more{' '}
                  <a
                    href='https://eur-lex.europa.eu/eli/reg/2016/679/oj'
                    className='text-gray-900 dark:text-white underline'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    here
                  </a>
                </p>
                <p className='text-gray-600 dark:text-gray-400 leading-relaxed mb-4'>
                  We aim to take reasonable steps to allow you to correct,
                  amend, delete, or limit the use of your Personal Data.
                </p>
                <p className='text-gray-600 dark:text-gray-400 leading-relaxed mb-4'>
                  If you wish to be informed what Personal Data we hold about
                  you and if you want it to be removed from our systems, please
                  email us at{' '}
                  <a
                    href='mailto:hello@pulsepro.ai'
                    className='text-gray-900 dark:text-white underline'
                  >
                    hello@pulsepro.ai
                  </a>
                  .
                </p>
                <p className='text-gray-600 dark:text-gray-400 leading-relaxed mb-4'>
                  In certain circumstances, you have the following data
                  protection rights:
                </p>

                <div className='pl-6 text-gray-600 dark:text-gray-400 space-y-2 mb-4'>
                  <p>
                    (a) the right to access, update or to delete the information
                    we have on you;
                  </p>
                  <p>
                    (b) the right of rectification. You have the right to have
                    your information rectified if that information is inaccurate
                    or incomplete;
                  </p>
                  <p>
                    (c) the right to object. You have the right to object to our
                    processing of your Personal Data;
                  </p>
                  <p>
                    (d) the right of restriction. You have the right to request
                    that we restrict the processing of your personal
                    information;
                  </p>
                  <p>
                    (e) the right to data portability. You have the right to be
                    provided with a copy of your Personal Data in a structured,
                    machine-readable and commonly used format;
                  </p>
                  <p>
                    (f) the right to withdraw consent. You also have the right
                    to withdraw your consent at any time where we rely on your
                    consent to process your personal information;
                  </p>
                </div>

                <p className='text-gray-600 dark:text-gray-400 leading-relaxed mb-4'>
                  Please note that we may ask you to verify your identity before
                  responding to such requests. Please note, we may not able to
                  provide Service without some necessary data.
                </p>

                <p className='text-gray-600 dark:text-gray-400 leading-relaxed'>
                  You have the right to complain to a Data Protection Authority
                  about our collection and use of your Personal Data. For more
                  information, please contact your local data protection
                  authority in the European Economic Area (EEA).
                </p>
              </section>

              {/* 11. Your Data Protection Rights under CalOPPA */}
              <section className='mb-12'>
                <h2 className='text-2xl font-bold text-gray-900 dark:text-white mb-6'>
                  11. Your Data Protection Rights under the California Privacy
                  Protection Act (CalOPPA)
                </h2>
                <p className='text-gray-600 dark:text-gray-400 leading-relaxed mb-4'>
                  CalOPPA is the first state law in the USA to require
                  commercial websites and online services to post a privacy
                  policy. The law&apos;s reach stretches well beyond California
                  to require a person or company in the United States (and
                  conceivable the world) that operates websites collecting
                  personally identifiable information from California consumers
                  to post a conspicuous privacy policy on its website stating
                  exactly the information being collected and those individuals
                  with whom it is being shared, and to comply with this policy.
                  – See more{' '}
                  <a
                    href='https://consumercal.org/about-cfc/cfc-education-foundation/california-online-privacy-protection-act-caloppa-3/'
                    className='text-gray-900 dark:text-white underline'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    here
                  </a>
                  .
                </p>
                <p className='text-gray-600 dark:text-gray-400 leading-relaxed mb-4'>
                  According to CalOPPA we agree to the following:
                </p>

                <div className='pl-6 text-gray-600 dark:text-gray-400 space-y-2 mb-6'>
                  <p>(a) users can visit our site anonymously;</p>
                  <p>
                    (b) our Privacy Policy link includes the word{' '}
                    <strong>
                      <q>Privacy</q>
                    </strong>
                    , and can easily be found on the page specified above on the
                    home page of our website;
                  </p>
                  <p>
                    (c) users will be notified of any privacy policy changes on
                    our Privacy Policy Page;
                  </p>
                  <p>
                    (d) users are able to change their personal information by
                    emailing us at{' '}
                    <a
                      href='mailto:hello@pulsepro.ai'
                      className='text-gray-900 dark:text-white underline'
                    >
                      hello@pulsepro.ai
                    </a>
                    .
                  </p>
                </div>

                <h3 className='text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4'>
                  Our Policy on{' '}
                  <strong>
                    <q>Do Not Track</q>
                  </strong>{' '}
                  Signals:
                </h3>
                <p className='text-gray-600 dark:text-gray-400 leading-relaxed mb-4'>
                  We honor Do Not Track signals and do not track, plant cookies,
                  or use advertising when a Do Not Track browser mechanism is in
                  place. Do Not Track is a preference you can set in your web
                  browser to inform websites that you do not want to be tracked.
                </p>
                <p className='text-gray-600 dark:text-gray-400 leading-relaxed'>
                  You can enable or disable Do Not Track by visiting the
                  Preferences or Settings page of your web browser.
                </p>
              </section>

              {/* 12. Your Data Protection Rights under CCPA */}
              <section className='mb-12'>
                <h2 className='text-2xl font-bold text-gray-900 dark:text-white mb-6'>
                  12. Your Data Protection Rights under the California Consumer
                  Privacy Act (CCPA)
                </h2>
                <p className='text-gray-600 dark:text-gray-400 leading-relaxed mb-4'>
                  If you are a California resident, you are entitled to learn
                  what data we collect about you, ask to delete your data and
                  not to sell (share) it. To exercise your data protection
                  rights, you can make certain requests and ask us:
                </p>

                <div className='pl-6 text-gray-600 dark:text-gray-400 space-y-4 mb-6'>
                  <div>
                    <div className='mb-2'>
                      <p className='font-semibold'>
                        (a) What personal information we have about you.
                      </p>{' '}
                      <p className='pl-4'>
                        If you make this request, we will return to you:
                      </p>
                    </div>
                    <div className='pl-4 space-y-1'>
                      <p>
                        (i) The categories of personal information we have
                        collected about you.
                      </p>
                      <p>
                        (ii) The categories of sources from which we collect
                        your personal information.
                      </p>
                      <p>
                        (iii) The business or commercial purpose for collecting
                        or selling your personal information.
                      </p>
                      <p>
                        (iv) The categories of third parties with whom we share
                        personal information.
                      </p>
                      <p>
                        (v) The specific pieces of personal information we have
                        collected about you.
                      </p>
                      <p>
                        (vi) A list of categories of personal information that
                        we have sold, along with the category of any other
                        company we sold it to. If we have not sold your personal
                        information, we will inform you of that fact.
                      </p>
                      <p>
                        (vii) A list of categories of personal information that
                        we have disclosed for a business purpose, along with the
                        category of any other company we shared it with.
                      </p>
                    </div>
                    <p className='mt-2'>
                      Please note, you are entitled to ask us to provide you
                      with this information up to two times in a rolling
                      twelve-month period. When you make this request, the
                      information provided may be limited to the personal
                      information we collected about you in the previous 12
                      months.
                    </p>
                  </div>

                  <div className='mb-2'>
                    <p className='font-semibold'>
                      (b) To delete your personal information.
                    </p>{' '}
                    <p className='pl-4'>
                      If you make this request, we will delete the personal
                      information we hold about you as of the date of your
                      request from our records and direct any service providers
                      to do the same. In some cases, deletion may be
                      accomplished through de-identification of the information.
                      If you choose to delete your personal information, you may
                      not be able to use certain functions that require your
                      personal information to operate.
                    </p>
                  </div>

                  <div className='mb-2'>
                    <p className='font-medium'>
                      (c) To stop selling your personal information.
                    </p>{' '}
                    <p className='pl-6'>
                      We don&apos;t sell or rent your personal information to
                      any third parties for any purpose. You are the only owner
                      of your Personal Data and can request disclosure or
                      deletion at any time.
                    </p>
                  </div>
                </div>

                <p className='text-gray-600 dark:text-gray-400 leading-relaxed mb-4'>
                  Please note, if you ask us to delete or stop selling your
                  data, it may impact your experience with us, and you may not
                  be able to participate in certain programs or membership
                  services which require the usage of your personal information
                  to function. But in no circumstances, we will discriminate
                  against you for exercising your rights.
                </p>

                <p className='text-gray-600 dark:text-gray-400 leading-relaxed mb-4'>
                  To exercise your California data protection rights described
                  above, please send your request(s) by one of the following
                  means:
                </p>

                <p className='text-gray-600 dark:text-gray-400 leading-relaxed mb-6'>
                  By email:{' '}
                  <a
                    href='mailto:hello@pulsepro.ai'
                    className='text-gray-900 dark:text-white underline'
                  >
                    hello@pulsepro.ai
                  </a>
                </p>

                <p className='text-gray-600 dark:text-gray-400 leading-relaxed'>
                  Your data protection rights, described above, are covered by
                  the CCPA, short for the California Consumer Privacy Act. To
                  find out more, visit the official California Legislative
                  Information website. The CCPA took effect on 01/01/2020.
                </p>
              </section>

              {/* 13. Service Providers */}
              <section className='mb-12'>
                <h2 className='text-2xl font-bold text-gray-900 dark:text-white mb-6'>
                  13. Service Providers
                </h2>
                <p className='text-gray-600 dark:text-gray-400 leading-relaxed mb-4'>
                  We may employ third party companies and individuals to
                  facilitate our Service (
                  <strong>
                    <q>Service Providers</q>
                  </strong>
                  ), provide Service on our behalf, perform Service-related
                  services or assist us in analysing how our Service is used.
                </p>
                <p className='text-gray-600 dark:text-gray-400 leading-relaxed'>
                  These third parties have access to your Personal Data only to
                  perform these tasks on our behalf and are obligated not to
                  disclose or use it for any other purpose.
                </p>
              </section>

              {/* 14. Analytics */}
              <section className='mb-12'>
                <h2 className='text-2xl font-bold text-gray-900 dark:text-white mb-6'>
                  14. Analytics
                </h2>
                <p className='text-gray-600 dark:text-gray-400 leading-relaxed mb-6'>
                  We may use third-party Service Providers to monitor and
                  analyze the use of our Service.
                </p>

                <div className='space-y-6'>
                  <div className='bg-gray-50 dark:bg-gray-900 p-6 rounded-lg'>
                    <h3 className='text-xl font-semibold text-gray-700 dark:text-gray-300 mb-4'>
                      Google Analytics
                    </h3>
                    <p className='text-gray-600 dark:text-gray-400 leading-relaxed mb-4'>
                      Google Analytics is a web analytics service offered by
                      Google that tracks and reports website traffic. Google
                      uses the data collected to track and monitor the use of
                      our Service. This data is shared with other Google
                      services. Google may use the collected data to
                      contextualise and personalise the ads of its own
                      advertising network.
                    </p>
                    <p className='text-gray-600 dark:text-gray-400 leading-relaxed mb-4'>
                      For more information on the privacy practices of Google,
                      please visit the Google Privacy Terms web page{' '}
                      <a
                        href='https://policies.google.com/privacy?hl=en'
                        className='text-gray-900 dark:text-white underline'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        here
                      </a>
                      .
                    </p>
                    <p className='text-gray-600 dark:text-gray-400 leading-relaxed'>
                      We also encourage you to review the Google&apos;s policy
                      for safeguarding your data{' '}
                      <a
                        href='https://support.google.com/analytics/answer/6004245'
                        className='text-gray-900 dark:text-white underline'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        here
                      </a>
                      .
                    </p>
                  </div>

                  <div className='bg-gray-50 dark:bg-gray-900 p-6 rounded-lg'>
                    <h3 className='text-xl font-semibold text-gray-700 dark:text-gray-300 mb-4'>
                      Firebase
                    </h3>
                    <p className='text-gray-600 dark:text-gray-400 leading-relaxed mb-4'>
                      Firebase is analytics service provided by Google Inc.
                    </p>
                    <p className='text-gray-600 dark:text-gray-400 leading-relaxed mb-4'>
                      You may opt-out of certain Firebase features through your
                      mobile device settings, such as your device advertising
                      settings or by following the instructions provided by
                      Google in their Privacy Policy{' '}
                      <a
                        href='https://policies.google.com/privacy?hl=en'
                        className='text-gray-900 dark:text-white underline'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        here
                      </a>
                      .
                    </p>
                    <p className='text-gray-600 dark:text-gray-400 leading-relaxed'>
                      For more information on what type of information Firebase
                      collects, please visit the Google Privacy Terms web page{' '}
                      <a
                        href='https://policies.google.com/privacy?hl=en'
                        className='text-gray-900 dark:text-white underline'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        here
                      </a>
                      .
                    </p>
                  </div>

                  <div className='bg-gray-50 dark:bg-gray-900 p-6 rounded-lg'>
                    <h3 className='text-xl font-semibold text-gray-700 dark:text-gray-300 mb-4'>
                      Cloudflare analytics
                    </h3>
                    <p className='text-gray-600 dark:text-gray-400 leading-relaxed'>
                      Cloudflare analytics is a web analytics service operated
                      by Cloudflare Inc. Read their Privacy Policy{' '}
                      <a
                        href='https://www.cloudflare.com/privacypolicy/'
                        className='text-gray-900 dark:text-white underline'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        here
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </section>

              {/* 15. CI/CD tools */}
              <section className='mb-12'>
                <h2 className='text-2xl font-bold text-gray-900 dark:text-white mb-6'>
                  15. CI/CD tools
                </h2>
                <p className='text-gray-600 dark:text-gray-400 leading-relaxed mb-6'>
                  We may use third-party Service Providers to automate the
                  development process of our Service.
                </p>

                <div className='space-y-6'>
                  <div className='bg-gray-50 dark:bg-gray-900 p-6 rounded-lg'>
                    <h3 className='text-xl font-semibold text-gray-700 dark:text-gray-300 mb-4'>
                      GitHub
                    </h3>
                    <p className='text-gray-600 dark:text-gray-400 leading-relaxed mb-4'>
                      GitHub is provided by GitHub, Inc.
                    </p>
                    <p className='text-gray-600 dark:text-gray-400 leading-relaxed mb-4'>
                      GitHub is a development platform to host and review code,
                      manage projects, and build software.
                    </p>
                    <p className='text-gray-600 dark:text-gray-400 leading-relaxed'>
                      For more information on what data GitHub collects for what
                      purpose and how the protection of the data is ensured,
                      please visit GitHub Privacy Policy page{' '}
                      <a
                        href='https://help.github.com/en/articles/github-privacy-statement'
                        className='text-gray-900 dark:text-white underline'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        here
                      </a>
                      .
                    </p>
                  </div>

                  <div className='bg-gray-50 dark:bg-gray-900 p-6 rounded-lg'>
                    <h3 className='text-xl font-semibold text-gray-700 dark:text-gray-300 mb-4'>
                      GitLab CI/CD
                    </h3>
                    <p className='text-gray-600 dark:text-gray-400 leading-relaxed mb-4'>
                      GitLab CI/CD is provided by GitLab, Inc.
                    </p>
                    <p className='text-gray-600 dark:text-gray-400 leading-relaxed mb-4'>
                      GitLab CI (Continuous Integration) service is a part of
                      GitLab that build and test the software whenever developer
                      pushes code to application.
                    </p>
                    <p className='text-gray-600 dark:text-gray-400 leading-relaxed mb-4'>
                      GitLab CD (Continuous Deployment) is a software service
                      that places the changes of every code in the production
                      which results in every day deployment of production.
                    </p>
                    <p className='text-gray-600 dark:text-gray-400 leading-relaxed'>
                      For more information on what data GitLab CI/CD collects
                      for what purpose and how the protection of the data is
                      ensured, please visit GitLab CI/CD Privacy Policy page{' '}
                      <a
                        href='https://about.gitlab.com/privacy/'
                        className='text-gray-900 dark:text-white underline'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        here
                      </a>
                      .
                    </p>
                  </div>

                  <div className='bg-gray-50 dark:bg-gray-900 p-6 rounded-lg'>
                    <h3 className='text-xl font-semibold text-gray-700 dark:text-gray-300 mb-4'>
                      CircleCI
                    </h3>
                    <p className='text-gray-600 dark:text-gray-400 leading-relaxed mb-4'>
                      CircleCI is provided by Circle Internet Services, Inc.
                    </p>
                    <p className='text-gray-600 dark:text-gray-400 leading-relaxed mb-4'>
                      CircleCI is Continuous Integration, a development practice
                      which is being used by software teams allowing them to
                      build, test and deploy applications easier and quicker on
                      multiple platforms.
                    </p>
                    <p className='text-gray-600 dark:text-gray-400 leading-relaxed'>
                      For more information on what data Circle CI collects for
                      what purpose and how the protection of the data is
                      ensured, please visit Circle CI Privacy Policy page{' '}
                      <a
                        href='https://circleci.com/privacy/'
                        className='text-gray-900 dark:text-white underline'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        here
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </section>

              {/* 16. Advertising */}
              <section className='mb-12'>
                <h2 className='text-2xl font-bold text-gray-900 dark:text-white mb-6'>
                  16. Advertising
                </h2>
                <p className='text-gray-600 dark:text-gray-400 leading-relaxed mb-6'>
                  We may use third-party Service Providers to show
                  advertisements to you to help support and maintain our
                  Service.
                </p>

                <div className='bg-gray-50 dark:bg-gray-900 p-6 rounded-lg'>
                  <h3 className='text-xl font-semibold text-gray-700 dark:text-gray-300 mb-4'>
                    Google AdSense DoubleClick Cookie
                  </h3>
                  <p className='text-gray-600 dark:text-gray-400 leading-relaxed mb-4'>
                    Google, as a third party vendor, uses cookies to serve ads
                    on our Service. Google&apos;s use of the DoubleClick cookie
                    enables it and its partners to serve ads to our users based
                    on their visit to our Service or other websites on the
                    Internet.
                  </p>
                  <p className='text-gray-600 dark:text-gray-400 leading-relaxed'>
                    You may opt out of the use of the DoubleClick Cookie for
                    interest-based advertising by visiting the Google Ads
                    Settings web page{' '}
                    <a
                      href='http://www.google.com/ads/preferences/'
                      className='text-gray-900 dark:text-white underline'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      here
                    </a>
                    .
                  </p>
                </div>
              </section>

              {/* 17. Behavioral Remarketing */}
              <section className='mb-12'>
                <h2 className='text-2xl font-bold text-gray-900 dark:text-white mb-6'>
                  17. Behavioral Remarketing
                </h2>
                <p className='text-gray-600 dark:text-gray-400 leading-relaxed mb-6'>
                  Pulse Business Solutions Inc uses remarketing services to
                  advertise on third party websites to you after you visited our
                  Service. We and our third-party vendors use cookies to inform,
                  optimise and serve ads based on your past visits to our
                  Service.
                </p>

                <div className='space-y-6'>
                  <div className='bg-gray-50 dark:bg-gray-900 p-6 rounded-lg'>
                    <h3 className='text-xl font-semibold text-gray-700 dark:text-gray-300 mb-4'>
                      Google Ads (AdWords)
                    </h3>
                    <p className='text-gray-600 dark:text-gray-400 leading-relaxed mb-4'>
                      Google Ads (AdWords) remarketing service is provided by
                      Google Inc.
                    </p>
                    <p className='text-gray-600 dark:text-gray-400 leading-relaxed mb-4'>
                      You can opt-out of Google Analytics for Display
                      Advertising and customize the Google Display Network ads
                      by visiting the Google Ads Settings page{' '}
                      <a
                        href='http://www.google.com/settings/ads'
                        className='text-gray-900 dark:text-white underline'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        here
                      </a>
                      .
                    </p>
                    <p className='text-gray-600 dark:text-gray-400 leading-relaxed mb-4'>
                      Google also recommends installing the Google Analytics
                      Opt-out Browser Add-on{' '}
                      <a
                        href='https://tools.google.com/dlpage/gaoptout'
                        className='text-gray-900 dark:text-white underline'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        here
                      </a>{' '}
                      for your web browser. Google Analytics Opt-out Browser
                      Add-on provides visitors with the ability to prevent their
                      data from being collected and used by Google Analytics.
                    </p>
                    <p className='text-gray-600 dark:text-gray-400 leading-relaxed'>
                      For more information on the privacy practices of Google,
                      please visit the Google Privacy Terms web page{' '}
                      <a
                        href='https://policies.google.com/privacy?hl=en'
                        className='text-gray-900 dark:text-white underline'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        here
                      </a>
                      .
                    </p>
                  </div>

                  <div className='bg-gray-50 dark:bg-gray-900 p-6 rounded-lg'>
                    <h3 className='text-xl font-semibold text-gray-700 dark:text-gray-300 mb-4'>
                      Facebook
                    </h3>
                    <p className='text-gray-600 dark:text-gray-400 leading-relaxed mb-4'>
                      Facebook remarketing service is provided by Facebook Inc.
                    </p>
                    <p className='text-gray-600 dark:text-gray-400 leading-relaxed mb-4'>
                      You can learn more about interest-based advertising from
                      Facebook by visiting this page{' '}
                      <a
                        href='https://www.facebook.com/help/164968693837950'
                        className='text-gray-900 dark:text-white underline'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        here
                      </a>
                      .
                    </p>
                    <p className='text-gray-600 dark:text-gray-400 leading-relaxed mb-4'>
                      To opt-out from Facebook&apos;s interest-based ads, follow
                      these instructions from Facebook{' '}
                      <a
                        href='https://www.facebook.com/help/568137493302217'
                        className='text-gray-900 dark:text-white underline'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        here
                      </a>
                      .
                    </p>
                    <p className='text-gray-600 dark:text-gray-400 leading-relaxed mb-4'>
                      Facebook adheres to the Self-Regulatory Principles for
                      Online Behavioural Advertising established by the Digital
                      Advertising Alliance. You can also opt-out from Facebook
                      and other participating companies through the Digital
                      Advertising Alliance in the USA{' '}
                      <a
                        href='http://www.aboutads.info/choices/'
                        className='text-gray-900 dark:text-white underline'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        here
                      </a>
                      , the Digital Advertising Alliance of Canada in Canada{' '}
                      <a
                        href='http://youradchoices.ca/'
                        className='text-gray-900 dark:text-white underline'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        here
                      </a>{' '}
                      or the European Interactive Digital Advertising Alliance
                      in Europe{' '}
                      <a
                        href='http://www.youronlinechoices.eu/'
                        className='text-gray-900 dark:text-white underline'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        here
                      </a>
                      , or opt-out using your mobile device settings.
                    </p>
                    <p className='text-gray-600 dark:text-gray-400 leading-relaxed'>
                      For more information on the privacy practices of Facebook,
                      please visit Facebook&apos;s Data Policy{' '}
                      <a
                        href='https://www.facebook.com/privacy/explanation'
                        className='text-gray-900 dark:text-white underline'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        here
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </section>

              {/* 18. Payments */}
              <section className='mb-12'>
                <h2 className='text-2xl font-bold text-gray-900 dark:text-white mb-6'>
                  18. Payments
                </h2>
                <p className='text-gray-600 dark:text-gray-400 leading-relaxed mb-4'>
                  We may provide paid products and/or services within Service.
                  In that case, we use third-party services for payment
                  processing (e.g. payment processors).
                </p>
                <p className='text-gray-600 dark:text-gray-400 leading-relaxed mb-4'>
                  We will not store or collect your payment card details. That
                  information is provided directly to our third-party payment
                  processors whose use of your personal information is governed
                  by their Privacy Policy. These payment processors adhere to
                  the standards set by PCI-DSS as managed by the PCI Security
                  Standards Council, which is a joint effort of brands like
                  Visa, Mastercard, American Express and Discover. PCI-DSS
                  requirements help ensure the secure handling of payment
                  information.
                </p>
                <p className='text-gray-600 dark:text-gray-400 leading-relaxed mb-6'>
                  The payment processors we work with are:
                </p>

                <div className='space-y-6'>
                  <div className='bg-gray-50 dark:bg-gray-900 p-6 rounded-lg'>
                    <h3 className='text-xl font-semibold text-gray-700 dark:text-gray-300 mb-4'>
                      PayPal or Braintree:
                    </h3>
                    <p className='text-gray-600 dark:text-gray-400 leading-relaxed'>
                      Their Privacy Policy can be viewed at{' '}
                      <a
                        href='https://www.paypal.com/webapps/mpp/ua/privacy-full'
                        className='text-gray-900 dark:text-white underline'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        here
                      </a>
                      .
                    </p>
                  </div>

                  <div className='bg-gray-50 dark:bg-gray-900 p-6 rounded-lg'>
                    <h3 className='text-xl font-semibold text-gray-700 dark:text-gray-300 mb-4'>
                      Apple Store In-App Payments:
                    </h3>
                    <p className='text-gray-600 dark:text-gray-400 leading-relaxed'>
                      Their Privacy Policy can be viewed at:{' '}
                      <a
                        href='https://www.apple.com/legal/privacy/en-ww/'
                        className='text-gray-900 dark:text-white underline'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        here
                      </a>{' '}
                      or{' '}
                      <a
                        href='https://support.apple.com/en-us/HT203027'
                        className='text-gray-900 dark:text-white underline'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        here
                      </a>
                      .
                    </p>
                  </div>

                  <div className='bg-gray-50 dark:bg-gray-900 p-6 rounded-lg'>
                    <h3 className='text-xl font-semibold text-gray-700 dark:text-gray-300 mb-4'>
                      Google Play In-App Payments:
                    </h3>
                    <p className='text-gray-600 dark:text-gray-400 leading-relaxed'>
                      Their Privacy Policy can be viewed at:{' '}
                      <a
                        href='https://policies.google.com/privacy?hl=en&gl=us'
                        className='text-gray-900 dark:text-white underline'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        here
                      </a>{' '}
                      or{' '}
                      <a
                        href='https://payments.google.com/payments/apis-secure/u/0/get_legal_document?ldo=0&ldt=privacynotice&ldl=en'
                        className='text-gray-900 dark:text-white underline'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        here
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </section>

              {/* 19. Links to Other Sites */}
              <section className='mb-12'>
                <h2 className='text-2xl font-bold text-gray-900 dark:text-white mb-6'>
                  19. Links to Other Sites
                </h2>
                <p className='text-gray-600 dark:text-gray-400 leading-relaxed mb-4'>
                  Our Service may contain links to other sites that are not
                  operated by us. If you click a third party link, you will be
                  directed to that third party&apos;s site. We strongly advise
                  you to review the Privacy Policy of every site you visit.
                </p>
                <p className='text-gray-600 dark:text-gray-400 leading-relaxed'>
                  We have no control over and assume no responsibility for the
                  content, privacy policies or practices of any third party
                  sites or services.
                </p>
              </section>

              {/* 20. Children's Privacy */}
              <section className='mb-12'>
                <h2 className='text-2xl font-bold text-gray-900 dark:text-white mb-6'>
                  20. Children&apos;s Privacy
                </h2>
                <p className='text-gray-600 dark:text-gray-400 leading-relaxed mb-4'>
                  Our Services are not intended for use by children under the
                  age of 18 (
                  <strong>
                    <q>Child</q>
                  </strong>{' '}
                  or{' '}
                  <strong>
                    <q>Children</q>
                  </strong>
                  ).
                </p>
                <p className='text-gray-600 dark:text-gray-400 leading-relaxed'>
                  We do not knowingly collect personally identifiable
                  information from Children under 18. If you become aware that a
                  Child has provided us with Personal Data, please contact us.
                  If we become aware that we have collected Personal Data from
                  Children without verification of parental consent, we take
                  steps to remove that information from our servers.
                </p>
              </section>

              {/* 21. Changes to This Privacy Policy */}
              <section className='mb-12'>
                <h2 className='text-2xl font-bold text-gray-900 dark:text-white mb-6'>
                  21. Changes to This Privacy Policy
                </h2>
                <p className='text-gray-600 dark:text-gray-400 leading-relaxed mb-4'>
                  We may update our Privacy Policy from time to time. We will
                  notify you of any changes by posting the new Privacy Policy on
                  this page.
                </p>
                <p className='text-gray-600 dark:text-gray-400 leading-relaxed mb-4'>
                  We will let you know via email and/or a prominent notice on
                  our Service, prior to the change becoming effective and update{' '}
                  <strong>
                    <q>effective date</q>
                  </strong>{' '}
                  at the top of this Privacy Policy.
                </p>
                <p className='text-gray-600 dark:text-gray-400 leading-relaxed'>
                  You are advised to review this Privacy Policy periodically for
                  any changes. Changes to this Privacy Policy are effective when
                  they are posted on this page.
                </p>
              </section>

              {/* 22. Contact Us */}
              <section className='mb-8'>
                <h2 className='text-2xl font-bold text-gray-900 dark:text-white mb-6'>
                  22. Contact Us
                </h2>
                <div className='bg-gray-50 dark:bg-gray-900 p-6 rounded-lg'>
                  <p className='text-gray-600 dark:text-gray-400 leading-relaxed mb-4'>
                    If you have any questions about this Privacy Policy, please
                    contact us:
                  </p>
                  <div className='text-gray-700 dark:text-gray-300 space-y-2'>
                    <p>
                      By email:{' '}
                      <a
                        href='mailto:hello@pulsepro.ai'
                        className='text-gray-900 dark:text-white underline'
                      >
                        hello@pulsepro.ai
                      </a>
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  )
}

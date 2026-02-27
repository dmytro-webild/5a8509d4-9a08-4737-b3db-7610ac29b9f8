"use client";

import { Code, Layers, Sparkles, UserCheck, Users } from "lucide-react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardTwentyTwo from '@/components/sections/feature/FeatureCardTwentyTwo';
import TeamCardOne from '@/components/sections/team/TeamCardOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterBase from '@/components/sections/footer/FooterBase';

export default function SitePage() {
  return (
    <ThemeProvider
      defaultButtonVariant="directional-hover"
      defaultTextAnimation="reveal-blur"
      borderRadius="pill"
      contentWidth="mediumLarge"
      sizing="largeSmall"
      background="fluid"
      cardStyle="gradient-mesh"
      primaryButtonStyle="flat"
      secondaryButtonStyle="solid"
      headingFontWeight="bold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleCentered 
          navItems={[{"name":"Hero","id":"hero-section"},{"name":"About","id":"about-section"},{"name":"Feature","id":"features-section"},{"name":"Team","id":"team-section"},{"name":"Testimonial","id":"testimonial-section"},{"name":"Contact","id":"contact-section"}]} 
          button={{"text":"Join Us"}} 
          brandName="TechConnect Club" 
        />
      </div>
      <div id="hero-section" data-section="hero-section">
        <HeroBillboard 
          title="Where Innovation Meets Community" 
          description="Join our vibrant tech club where students and enthusiasts collaborate, learn, and build the future together. Connect with like-minded peers, explore cutting-edge technologies, and grow your skills in a supportive environment." 
          background={{ variant: 'radial-gradient' }} 
          tag="Tech Enthusiasts Welcome" 
          tagIcon={Sparkles} 
          tagAnimation="slide-up" 
          buttons={[{"text":"Explore Events","href":"#events-section"},{"text":"Join Our Community","href":"#contact-section"}]} 
          buttonAnimation="slide-up" 
          avatars={[{"src":"http://img.b2bpic.net/free-photo/multiracial-group-people-discussing-business-office_1268-21455.jpg","alt":"Member avatar"},{"src":"http://img.b2bpic.net/free-photo/group-young-people-casual-clothes-working-modern-office_146671-16433.jpg","alt":"Member avatar"},{"src":"http://img.b2bpic.net/free-photo/people-working-together-animation-studio_23-2149208003.jpg","alt":"Member avatar"}]} 
          avatarText="150+ Members" 
          imageSrc="http://img.b2bpic.net/free-photo/business-leader-professional-office-strategizing-development-success_482257-124038.jpg" 
          imageAlt="Tech club members collaborating" 
          mediaAnimation="slide-up" 
          marqueeItems={[{"text":"Hackathons","icon":"Code"},{"text":"Workshops","icon":"BookOpen"},{"text":"Mentorship","icon":"UserCheck"},{"text":"Projects","icon":"Layers"}]} 
          marqueeSpeed={40} 
          showMarqueeCard={true} 
          ariaLabel="Hero section" 
        />
      </div>
      <div id="about-section" data-section="about-section">
        <SplitAbout 
          title="Empowering Tech Enthusiasts Since 2018" 
          description="Our computer club is a vibrant community where students and tech lovers come together to explore, create, and innovate. We foster collaboration, learning, and growth through hands-on projects, workshops, and peer-to-peer knowledge sharing." 
          tag="About Us" 
          tagIcon={Code} 
          tagAnimation="slide-up" 
          buttons={[{"text":"Join Our Community","href":"#contact-section"},{"text":"View Events","href":"#features-section"}]} 
          buttonAnimation="slide-up" 
          bulletPoints={[{"title":"Hands-On Learning","description":"Dive into real-world projects and gain practical experience with cutting-edge technologies.","icon":Layers},{"title":"Expert Mentorship","description":"Learn from experienced members and industry professionals who guide our community forward.","icon":UserCheck},{"title":"Collaborative Environment","description":"Work alongside fellow members on exciting initiatives that push the boundaries of innovation.","icon":Users}]} 
          imageSrc="http://img.b2bpic.net/free-photo/happy-overjoyed-business-team-celebrate-corporate-victory_93675-133717.jpg" 
          imageAlt="Tech enthusiasts collaborating in a modern computer club setting" 
          mediaAnimation="slide-up" 
          imagePosition="left" 
          textboxLayout="split-description" 
          useInvertedBackground={true} 
          className="py-16 md:py-24" 
          textBoxClassName="max-w-2xl" 
          mediaWrapperClassName="rounded-xl overflow-hidden shadow-lg" 
        />
      </div>
      <div id="features-section" data-section="features-section">
        <FeatureCardTwentyTwo 
          features={[{"id":"feature-1","category":["Learning","Workshops"],"title":"Hands-On Coding Workshops","imageSrc":"http://img.b2bpic.net/free-photo/two-creative-designers-working-project-together-sharing-new-ideas-workplace-business-team-work-concept_58466-12412.jpg","imageAlt":"Students participating in a coding workshop"},{"id":"feature-2","category":["Community","Events"],"title":"Weekly Tech Meetups","imageSrc":"http://img.b2bpic.net/free-photo/diverse-business-people-dinner-party_53876-98341.jpg","imageAlt":"Group of members networking at a tech meetup"},{"id":"feature-3","category":["Collaboration","Projects"],"title":"Open Source Contributions","imageSrc":"http://img.b2bpic.net/free-photo/team-software-engineers-doing-brainstorming-office_482257-123976.jpg","imageAlt":"Members collaborating on an open source project"}]} 
          animationType="slide-up" 
          title="Empowering Tech Enthusiasts" 
          description="Join our vibrant community of learners and innovators. We offer hands-on workshops, collaborative projects, and networking opportunities to help you grow your skills and connect with like-minded peers." 
          textboxLayout="inline-image" 
          useInvertedBackground={true} 
          tag="Learn & Grow" 
          tagIcon={Sparkles} 
          tagAnimation="blur-reveal" 
          buttons={[{"text":"Explore Events","href":"#events-section"},{"text":"Join Our Community","href":"#contact-section"}]} 
          buttonAnimation="opacity" 
        />
      </div>
      <div id="team-section" data-section="team-section">
        <TeamCardOne 
          members={[{"id":"member-1","name":"Alex Morgan","role":"Club President","imageSrc":"http://img.b2bpic.net/free-photo/group-multiethnic-business-partners-having-creative-business-team-meeting-modern-office_181624-26572.jpg","imageAlt":"Alex Morgan, Club President"},{"id":"member-2","name":"Taylor Kim","role":"Tech Lead","imageSrc":"http://img.b2bpic.net/free-photo/back-end-developer-training-predictive-models_482257-116913.jpg","imageAlt":"Taylor Kim, Tech Lead"},{"id":"member-3","name":"Jordan Lee","role":"Events Coordinator","imageSrc":"http://img.b2bpic.net/free-photo/medium-shot-smiley-people-working_23-2149337244.jpg","imageAlt":"Jordan Lee, Events Coordinator"},{"id":"member-4","name":"Casey Smith","role":"Community Manager","imageSrc":"http://img.b2bpic.net/free-photo/close-up-people-studying-with-laptop_23-2149204726.jpg","imageAlt":"Casey Smith, Community Manager"}]} 
          gridVariant="three-columns-all-equal-width" 
          animationType="slide-up" 
          title="Meet Our Leadership Team" 
          description="Our dedicated team of passionate members drives the club's mission forward, fostering innovation and collaboration among tech enthusiasts." 
          tag="Core Team" 
          tagIcon={Users} 
          tagAnimation="blur-reveal" 
          buttons={[{"text":"View All Members","href":"#"}]} 
          buttonAnimation="opacity" 
          textboxLayout="inline-image" 
          useInvertedBackground={true} 
        />
      </div>
      <div id="testimonial-section" data-section="testimonial-section">
        <TestimonialCardOne 
          testimonials={[{"id":"testimonial-1","name":"Alex Morgan","role":"Software Engineer","company":"TechNova Inc.","rating":5,"imageSrc":"http://img.b2bpic.net/free-photo/financial-advisor-presents-detailed-stock-market-analysis-clients_482257-107526.jpg","imageAlt":"Alex Morgan, Software Engineer at TechNova Inc."},{"id":"testimonial-2","name":"Jamie Chen","role":"UX Designer","company":"InnovateLab","rating":5,"imageSrc":"http://img.b2bpic.net/free-photo/businessman-celebrating-his-success-after-presenting-project-proposal-his-multiethnic-partners_181624-33367.jpg","imageAlt":"Jamie Chen, UX Designer at InnovateLab"},{"id":"testimonial-3","name":"Taylor Kim","role":"Data Scientist","company":"DataCore Solutions","rating":5,"imageSrc":"http://img.b2bpic.net/free-photo/team-software-engineers-doing-brainstorming-office_482257-123976.jpg","imageAlt":"Taylor Kim, Data Scientist at DataCore Solutions"}]} 
          gridVariant="uniform-all-items-equal" 
          animationType="slide-up" 
          title="What Our Members Say" 
          description="Hear from our vibrant community of tech enthusiasts who have transformed their skills and connections through our club." 
          tag="Community Impact" 
          tagIcon={Users} 
          tagAnimation="blur-reveal" 
          buttons={[{"text":"Join Our Community","href":"#contact-section"}]} 
          buttonAnimation="opacity" 
          textboxLayout="inline-image" 
          useInvertedBackground={true} 
        />
      </div>
      <div id="contact-section" data-section="contact-section">
        <ContactSplitForm 
          title="Join Our Tech Community" 
          description="Ready to dive into the world of technology? Get in touch with us to learn more about our club activities, upcoming events, and how you can become part of our growing family of tech enthusiasts." 
          inputs={[{"name":"name","type":"text","placeholder":"Your Full Name","required":true},{"name":"email","type":"email","placeholder":"Your Email Address","required":true},{"name":"subject","type":"text","placeholder":"Subject","required":false}]} 
          textarea={{"name":"message","placeholder":"Your Message","rows":5,"required":true}} 
          useInvertedBackground={false} 
          imageSrc="http://img.b2bpic.net/free-photo/medium-shot-friends-reading-menu-restaurant_23-2150384828.jpg" 
          imageAlt="Tech enthusiasts collaborating in a modern club setting" 
          mediaAnimation="slide-up" 
          mediaPosition="left" 
          buttonText="Send Message" 
          ariaLabel="Contact section" 
          className="py-16" 
          containerClassName="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" 
          contentClassName="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" 
          formCardClassName="bg-white rounded-xl shadow-lg p-8" 
          titleClassName="text-3xl font-bold text-gray-900 mb-4" 
          descriptionClassName="text-lg text-gray-600 mb-6" 
          buttonClassName="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105" 
          buttonTextClassName="text-base" 
        />
      </div>
      <div id="footer-section" data-section="footer-section">
        <FooterBase 
          columns={[{"title":"Club Info","items":[{"label":"About Us","href":"#about-section"},{"label":"Our Mission","href":"#about-section"},{"label":"Events Calendar","href":"#events-section"},{"label":"Member Directory","href":"#team-section"}]},{"title":"Resources","items":[{"label":"Learning Hub","href":"#features-section"},{"label":"Project Showcase","href":"#features-section"},{"label":"Tech Blog","href":"#testimonial-section"},{"label":"Community Guidelines","href":"#contact-section"}]},{"title":"Connect","items":[{"label":"Join Our Community","href":"#contact-section"},{"label":"Volunteer Opportunities","href":"#contact-section"},{"label":"Contact Us","href":"#contact-section"},{"label":"Newsletter Signup","href":"#contact-section"}]}]} 
          logoText="TechGrove Club" 
          copyrightText="© 2025 TechGrove Club | Fostering Innovation & Community" 
          ariaLabel="Site footer" 
        />
      </div>
    </ThemeProvider>
  );
}

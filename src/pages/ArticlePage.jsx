// src/pages/ArticlePage.jsx
import React from 'react'
import { useParams, Link } from 'react-router-dom'
import Seo from '../components/Seo' // ✅ added SEO import

import ZimsecOLevelExamPrep from '../routes/featured/zimsec-olevel-exam-prep-with-ai.jsx'
import AiHomeworkHelpInShona from '../routes/featured/ai-homework-help-in-shona.jsx'
import ZimbabweTeachersAiLessonPlanning from '../routes/featured/zimbabwe-teachers-ai-lesson-planning.jsx'
import SchemeOfWork from '../routes/featured/how-to-write-a-scheme-of-work-for-african-schools.jsx'
import MarkHomeworkFaster from '../routes/featured/how-to-mark-student-homework-faster-and-give-better-feedback.jsx'
import ParentsTrackProgress from '../routes/featured/how-parents-can-track-their-childs-progress-at-school.jsx'
import AfricanLanguagesAI from '../routes/featured/which-african-languages-can-ai-understand-in-2026.jsx'
import IdentifyStudentsFallingBehind from '../routes/featured/how-to-identify-students-who-are-falling-behind.jsx'
import HomeworkStudentsComplete from '../routes/featured/how-to-set-homework-that-students-actually-complete.jsx'
import AfricaAiStartups from '../routes/featured/ai-startups-africa-2026.jsx'
import HowAIIsPoweringAfrica from '../routes/featured/how-ai-is-powering-africas-new-industrial-revolution.jsx'
import AiStartupAnalysis from '../routes/featured/50-ai-startups-in-africa-the-ultimate-2026-sectoral-review.jsx'
import HurudzaAI from '../routes/featured/hurudza-ai-the-startup-bringing-real-time-farm-advice-to-zimbabwean-farmers.jsx'
import ChatCash from '../routes/featured/chatcash-the-zimbabwean-startup-turning-whatsapp-into-a-business-operating-system.jsx'
import NeedEnergy from '../routes/featured/needenergy-how-a-bulawayo-startup-is-using-ai-to-solve-zimbabwes-power-crisis.jsx'
import Farmhut from '../routes/featured/farmhut-the-zimbabwean-agritech-startup-connecting-farmers-to-fair-markets.jsx'
import BatsiHealth from '../routes/featured/batsihealth-the-startup-bringing-doctors-to-rural-zimbabwe.jsx'
import BigDotAi from '../routes/featured/bigdot-ai-the-startup-using-blockchain-to-help-zimbabwes-smes-go-digital.jsx'
import CassavaTechnologies from '../routes/featured/cassava-technologies-how-a-zimbabwean-billionaire-is-building-africas-first-ai-factory.jsx'
import ChikoroVsAkello from '../routes/featured/chikoro-ai-vs-akello-which-edtech-platform-is-right-for-zimbabwean-students.jsx'
import ChikoroVsChatGPT from '../routes/featured/chikoro-ai-vs-chatgpt-which-is-better-for-zimbabwe-students.jsx'
import IsAICheating from '../routes/featured/is-using-ai-for-homework-cheating-a-guide-for-zimbabwe-students.jsx'
import AfricaLeapfrog from '../routes/featured/how-africa-leapfrogged-with-mobile-money-and-is-doing-it-again-with-ai.jsx'
import BestFreeAITools from '../routes/featured/best-free-ai-tools-for-zimbabwe-students-in-2026.jsx'
import ImproveEnglishWithAI from '../routes/featured/how-to-improve-your-english-with-ai.jsx'
import ShouldSchoolsAllowAI from '../routes/featured/should-schools-in-zimbabwe-allow-ai-a-teachers-guide.jsx'
import DiasporaParents from '../routes/featured/diaspora-parents-how-to-support-your-childs-education-in-zimbabwe-with-ai.jsx'
import ZIMSECALevel from '../routes/featured/how-to-use-ai-to-pass-zimsec-a-level-exams.jsx'
import ChikoroVsKhanAcademy from '../routes/featured/chikoro-ai-vs-khan-academy-which-is-better-for-zimbabwe-students.jsx'
import HowAIChangingSTEM from '../routes/featured/how-ai-is-changing-stem-education-in-africa.jsx'
import TopAfricanCountriesAI from '../routes/featured/top-african-countries-leading-the-ai-race-in-2026.jsx'
import EdTechRace from '../routes/featured/kenya-vs-nigeria-vs-south-africa-vs-zimbabwe-which-country-is-winning-the-edtech-race.jsx'
import VayaTechnologies from '../routes/featured/vaya-technologies-how-econet-built-zimbabwes-super-app.jsx'
import Paynow from '../routes/featured/paynow-the-payment-gateway-powering-zimbabwes-digital-economy.jsx'
import ZimSmartVillages from '../routes/featured/zimsmart-villages-the-project-bringing-ai-and-telemedicine-to-rural-zimbabwe.jsx'
import HowAfricaLeapfroggingAI from '../routes/featured/how-africa-is-leapfrogging-in-ai.jsx'
import HowToTalkToYourChildAboutAI from '../routes/featured/how-to-talk-to-your-child-about-ai.jsx'
import AfricanAICompaniesUnknown from '../routes/featured/the-african-ai-companies-youve-never-heard-of-but-should-know.jsx'
import WhyAfricaBiggestAIMarket from '../routes/featured/why-africa-will-be-the-worlds-biggest-ai-market-by-2040.jsx'
import AfricanGovernmentsAI from '../routes/featured/how-african-governments-are-responding-to-ai-country-by-country.jsx'
import AfricaAITalentPipeline from '../routes/featured/africas-ai-talent-pipeline-where-the-next-generation-of-engineers-is-coming-from.jsx'
import SovereignAI from '../routes/featured/what-sovereign-ai-means-and-why-africa-needs-it.jsx'
import ZimbabweLiteracyRates from '../routes/featured/why-zimbabwe-has-one-of-africas-highest-literacy-rates-and-what-threatens-it.jsx'
import AITeachersOvercrowdedClassrooms from '../routes/featured/how-ai-is-helping-teachers-in-overcrowded-african-classrooms.jsx'
import AfricanStudentsAIGlobalUniversities from '../routes/featured/the-african-students-using-ai-to-get-into-global-universities.jsx'
import ZIMSECReformAIAge from '../routes/featured/what-zimsec-reform-could-look-like-in-an-ai-age.jsx'
import MPesaAt20 from '../routes/featured/m-pesa-at-20-how-kenyas-mobile-money-giant-changed-africa-forever.jsx'
import AndelaTechTalent from '../routes/featured/andela-the-company-that-proved-african-developers-can-compete-with-anyone.jsx'
import FlutterwavePaystack from '../routes/featured/flutterwave-paystack-and-the-african-fintech-revolution.jsx'
import AfricaFemaleAIFounders from '../routes/featured/africas-female-ai-founders-the-women-building-the-continents-tech-future.jsx'
import AIHealthcareRuralAfricans from '../routes/featured/how-ai-is-changing-healthcare-for-rural-africans.jsx'
import AIAfricanAgriculture from '../routes/featured/ai-in-african-agriculture-from-soil-tests-to-market-prices.jsx'
import AfricanFarmersSatellitesAI from '../routes/featured/how-african-farmers-are-using-satellites-and-ai-to-fight-climate-change.jsx'
import AfricaLanguageDiversityAI from '../routes/featured/why-africas-language-diversity-is-both-ais-biggest-challenge-and-biggest-opportunity.jsx'
import RonaldBvirinyangwe from '../routes/featured/ronald-bvirinyangwe-the-zimbabwean-student-who-built-an-ai-tutor-for-his-country.jsx'
import StriveMasiyiwa from '../routes/featured/strive-masiyiwa-the-man-who-built-africas-biggest-tech-empire-from-zimbabwe.jsx'
import ZimbabweBrainDrainAI from '../routes/featured/zimbabwes-brain-drain-and-how-ai-could-help-reverse-it.jsx'
import ZimbabweDiasporaTechFuture from '../routes/featured/how-zimbabwes-diaspora-is-funding-the-countrys-tech-future.jsx'
import ZimbabweInformalEconomyAI from '../routes/featured/ai-and-zimbabwes-informal-economy-vendors-markets-and-the-hustle-economy.jsx'
import ZimbabweTechHubs from '../routes/featured/zimbabwes-tech-hubs-the-spaces-where-the-next-generation-of-founders-is-building.jsx'
import IyinoluwaAboyeji from '../routes/featured/iyinoluwa-aboyeji-the-man-who-built-andela-and-flutterwave-and-isnt-done-yet.jsx'
import RebeccaEnonchong from '../routes/featured/rebecca-enonchong-the-cameroonian-who-became-africas-most-powerful-tech-voice.jsx'
import SholaAkinlade from '../routes/featured/shola-akinlade-how-paystacks-founder-sold-to-stripe-and-changed-african-fintech.jsx'
import KolaAina from '../routes/featured/kola-aina-the-vc-who-bet-on-african-founders-before-anyone-else.jsx'
import OdunayoEweniyi from '../routes/featured/odunayo-eweniyi-building-financial-inclusion-from-lagos-one-piggybank-at-a-time.jsx'
import KenyaSiliconSavannah from '../routes/featured/kenyas-silicon-savannah-how-nairobi-became-africas-most-important-tech-hub.jsx'
import NigeriaTechEcosystem from '../routes/featured/nigerias-tech-ecosystem-why-lagos-is-the-capital-of-african-tech-ambition.jsx'
import SouthAfricaTechEconomy from '../routes/featured/south-africa-africas-most-advanced-tech-economy-and-what-holds-it-back.jsx'
import ZimbabweLearnFromKenya from '../routes/featured/what-zimbabwe-can-learn-from-kenyas-approach-to-mobile-money-and-fintech.jsx'
import NigeriaTalentPipeline from '../routes/featured/how-nigeria-built-the-talent-pipeline-that-feeds-the-worlds-tech-companies.jsx'
import AIAfricanHealthcare from '../routes/featured/ai-in-african-healthcare-from-rural-clinics-to-drug-discovery.jsx'
import AIAfricanFintech from '../routes/featured/ai-in-african-fintech-how-machine-learning-is-rewriting-credit-fraud-and-financial-inclusion.jsx'
import AIAfricanLogistics from '../routes/featured/ai-in-african-logistics-fixing-the-last-mile-problem-that-has-held-the-continent-back.jsx'
import AIAfricanEnergy from '../routes/featured/ai-in-african-energy-how-machine-learning-is-helping-solve-the-continents-power-crisis.jsx'
import AIAfricanRetail from '../routes/featured/ai-and-african-retail-how-e-commerce-and-informal-markets-are-being-transformed.jsx'
import RemoteJobZimbabweDeveloper from '../routes/featured/how-to-get-a-remote-job-as-a-zimbabwean-developer-in-2026.jsx'
import AIStartBusinessZimbabwe from '../routes/featured/how-to-use-ai-to-start-a-business-in-zimbabwe-with-almost-no-money.jsx'
import EarnUSDZimbabwe from '../routes/featured/how-to-earn-in-usd-from-zimbabwe-a-practical-guide-for-2026.jsx'
import AILearnSkillsZimbabwe from '../routes/featured/how-to-use-ai-to-learn-new-skills-and-change-your-career-in-zimbabwe.jsx'
import AINavigateZimbabweJobMarket from '../routes/featured/how-to-use-ai-tools-to-navigate-zimbabwes-job-market.jsx'

// Map slug → component
const articleComponents = {
  'how-to-prepare-for-zimsec-o-level-exams-with-ai': ZimsecOLevelExamPrep,
  'ai-homework-help-in-shona-chikoro-ai-explained': AiHomeworkHelpInShona,
  'how-zimbabwean-teachers-are-using-ai-to-plan-lessons': ZimbabweTeachersAiLessonPlanning,
  'how-to-write-a-scheme-of-work-for-african-schools': SchemeOfWork,
  'how-to-mark-student-homework-faster-and-give-better-feedback': MarkHomeworkFaster,
  'how-parents-can-track-their-childs-progress-at-school': ParentsTrackProgress,
  'which-african-languages-can-ai-understand-in-2026': AfricanLanguagesAI,
  'how-to-identify-students-who-are-falling-behind': IdentifyStudentsFallingBehind,
  'how-to-set-homework-that-students-actually-complete': HomeworkStudentsComplete,
  'ai-startups-africa-2026': AfricaAiStartups,
  'how-ai-is-powering-africas-new-industrial-revolution': HowAIIsPoweringAfrica,
  '50-ai-startups-in-africa-the-ultimate-2026-sectoral-review': AiStartupAnalysis,
  'hurudza-ai-the-startup-bringing-real-time-farm-advice-to-zimbabwean-farmers': HurudzaAI,
  'chatcash-the-zimbabwean-startup-turning-whatsapp-into-a-business-operating-system': ChatCash,
  'needenergy-how-a-bulawayo-startup-is-using-ai-to-solve-zimbabwes-power-crisis': NeedEnergy,
  'farmhut-the-zimbabwean-agritech-startup-connecting-farmers-to-fair-markets': Farmhut,
  'batsihealth-the-smart-kiosk-startup-bringing-doctors-to-rural-zimbabwe': BatsiHealth,
  'bigdotai-the-startup-using-blockchain-to-help-zimbabwes-smes-go-digital': BigDotAi,
  'cassava-technologies-how-a-zimbabwean-billionaire-is-building-africas-first-ai-factory': CassavaTechnologies,
  'chikoro-ai-vs-akello-which-edtech-platform-is-right-for-zimbabwean-students': ChikoroVsAkello,
  'chikoro-ai-vs-chatgpt-which-is-better-for-zimbabwe-students': ChikoroVsChatGPT,
  'is-using-ai-for-homework-cheating-a-guide-for-zimbabwe-students': IsAICheating,
  'how-africa-leapfrogged-with-mobile-money-and-is-doing-it-again-with-ai': AfricaLeapfrog,
  'best-free-ai-tools-for-zimbabwe-students-in-2026': BestFreeAITools,
  'how-to-improve-your-english-with-ai': ImproveEnglishWithAI,
  'should-schools-in-zimbabwe-allow-ai-a-teachers-guide': ShouldSchoolsAllowAI,
  'diaspora-parents-how-to-support-your-childs-education-in-zimbabwe-with-ai': DiasporaParents,
  'how-to-use-ai-to-pass-zimsec-a-level-exams': ZIMSECALevel,
  'chikoro-ai-vs-khan-academy-which-is-better-for-zimbabwe-students': ChikoroVsKhanAcademy,
  'how-ai-is-changing-stem-education-in-africa': HowAIChangingSTEM,
  'top-african-countries-leading-the-ai-race-in-2026': TopAfricanCountriesAI,
  'kenya-vs-nigeria-vs-south-africa-vs-zimbabwe-which-country-is-winning-the-edtech-race': EdTechRace,
  'vaya-technologies-how-econet-built-zimbabwes-super-app': VayaTechnologies,
  'paynow-the-payment-gateway-powering-zimbabwes-digital-economy': Paynow,
  'zimsmart-villages-the-project-bringing-ai-and-telemedicine-to-rural-zimbabwe': ZimSmartVillages,
  'how-africa-is-leapfrogging-in-ai': HowAfricaLeapfroggingAI,
  'how-to-talk-to-your-child-about-ai': HowToTalkToYourChildAboutAI,
  'the-african-ai-companies-youve-never-heard-of-but-should-know': AfricanAICompaniesUnknown,
  'why-africa-will-be-the-worlds-biggest-ai-market-by-2040': WhyAfricaBiggestAIMarket,
  'how-african-governments-are-responding-to-ai-country-by-country': AfricanGovernmentsAI,
  'africas-ai-talent-pipeline-where-the-next-generation-of-engineers-is-coming-from': AfricaAITalentPipeline,
  'what-sovereign-ai-means-and-why-africa-needs-it': SovereignAI,
  'why-zimbabwe-has-one-of-africas-highest-literacy-rates-and-what-threatens-it': ZimbabweLiteracyRates,
  'how-ai-is-helping-teachers-in-overcrowded-african-classrooms': AITeachersOvercrowdedClassrooms,
  'the-african-students-using-ai-to-get-into-global-universities': AfricanStudentsAIGlobalUniversities,
  'what-zimsec-reform-could-look-like-in-an-ai-age': ZIMSECReformAIAge,
  'm-pesa-at-20-how-kenyas-mobile-money-giant-changed-africa-forever': MPesaAt20,
  'andela-the-company-that-proved-african-developers-can-compete-with-anyone': AndelaTechTalent,
  'flutterwave-paystack-and-the-african-fintech-revolution': FlutterwavePaystack,
  'africas-female-ai-founders-the-women-building-the-continents-tech-future': AfricaFemaleAIFounders,
  'how-ai-is-changing-healthcare-for-rural-africans': AIHealthcareRuralAfricans,
  'ai-in-african-agriculture-from-soil-tests-to-market-prices': AIAfricanAgriculture,
  'how-african-farmers-are-using-satellites-and-ai-to-fight-climate-change': AfricanFarmersSatellitesAI,
  'why-africas-language-diversity-is-both-ais-biggest-challenge-and-biggest-opportunity': AfricaLanguageDiversityAI,
  'ronald-bvirinyangwe-the-zimbabwean-student-who-built-an-ai-tutor-for-his-country': RonaldBvirinyangwe,
  'strive-masiyiwa-the-man-who-built-africas-biggest-tech-empire-from-zimbabwe': StriveMasiyiwa,
  'zimbabwes-brain-drain-and-how-ai-could-help-reverse-it': ZimbabweBrainDrainAI,
  'how-zimbabwes-diaspora-is-funding-the-countrys-tech-future': ZimbabweDiasporaTechFuture,
  'ai-and-zimbabwes-informal-economy-vendors-markets-and-the-hustle-economy': ZimbabweInformalEconomyAI,
  'zimbabwes-tech-hubs-the-spaces-where-the-next-generation-of-founders-is-building': ZimbabweTechHubs,
  'iyinoluwa-aboyeji-the-man-who-built-andela-and-flutterwave-and-isnt-done-yet': IyinoluwaAboyeji,
  'rebecca-enonchong-the-cameroonian-who-became-africas-most-powerful-tech-voice': RebeccaEnonchong,
  'shola-akinlade-how-paystacks-founder-sold-to-stripe-and-changed-african-fintech': SholaAkinlade,
  'kola-aina-the-vc-who-bet-on-african-founders-before-anyone-else': KolaAina,
  'odunayo-eweniyi-building-financial-inclusion-from-lagos-one-piggybank-at-a-time': OdunayoEweniyi,
  'kenyas-silicon-savannah-how-nairobi-became-africas-most-important-tech-hub': KenyaSiliconSavannah,
  'nigerias-tech-ecosystem-why-lagos-is-the-capital-of-african-tech-ambition': NigeriaTechEcosystem,
  'south-africa-africas-most-advanced-tech-economy-and-what-holds-it-back': SouthAfricaTechEconomy,
  'what-zimbabwe-can-learn-from-kenyas-approach-to-mobile-money-and-fintech': ZimbabweLearnFromKenya,
  'how-nigeria-built-the-talent-pipeline-that-feeds-the-worlds-tech-companies': NigeriaTalentPipeline,
  'ai-in-african-healthcare-from-rural-clinics-to-drug-discovery': AIAfricanHealthcare,
  'ai-in-african-fintech-how-machine-learning-is-rewriting-credit-fraud-and-financial-inclusion': AIAfricanFintech,
  'ai-in-african-logistics-fixing-the-last-mile-problem-that-has-held-the-continent-back': AIAfricanLogistics,
  'ai-in-african-energy-how-machine-learning-is-helping-solve-the-continents-power-crisis': AIAfricanEnergy,
  'ai-and-african-retail-how-e-commerce-and-informal-markets-are-being-transformed': AIAfricanRetail,
  'how-to-get-a-remote-job-as-a-zimbabwean-developer-in-2026': RemoteJobZimbabweDeveloper,
  'how-to-use-ai-to-start-a-business-in-zimbabwe-with-almost-no-money': AIStartBusinessZimbabwe,
  'how-to-earn-in-usd-from-zimbabwe-a-practical-guide-for-2026': EarnUSDZimbabwe,
  'how-to-use-ai-to-learn-new-skills-and-change-your-career-in-zimbabwe': AILearnSkillsZimbabwe,
  'how-to-use-ai-tools-to-navigate-zimbabwes-job-market': AINavigateZimbabweJobMarket,
}

export default function ArticlePage() {
  const { slug } = useParams()
  const ArticleComponent = articleComponents[slug]

  if (!ArticleComponent) {
    return (
      <section className="article-page">
        <div className="container" style={{ padding: '4rem 0' }}>
          <h2>Article not found</h2>
          <Link to="/">← Back to Home</Link>
        </div>
      </section>
    )
  }

  // ✅ Basic title generation using slug
  const readableTitle = slug
    ? slug
        .replace(/-/g, ' ')
        .replace(/\b\w/g, c => c.toUpperCase())
    : 'Article'

  return (
    <>
      {/* ✅ SEO metadata for dynamic articles */}
      <Seo
        title={`${readableTitle} | Scales AI`}
        description={`Read "${readableTitle}" — a featured article from Scales AI, exploring AI innovation, responsible scaling, and the future of education and technology in Africa.`}
        pathname={`/blog/${slug}`}
        image="/assets/featured-banner.png"
      />

      <ArticleComponent />
    </>
  )
}

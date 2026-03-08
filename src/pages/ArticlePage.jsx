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

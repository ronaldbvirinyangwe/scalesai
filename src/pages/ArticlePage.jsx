// src/pages/ArticlePage.jsx
import React from 'react'
import { useParams, Link } from 'react-router-dom'
import Seo from '../components/Seo' // ✅ added SEO import

// Import article components manually
import Genesis21Released from '../routes/featured/genesis-21-released.jsx'
import SafetyReport from '../routes/featured/chikoro-safety-report.jsx'
import AfricaFirstAgents from '../routes/featured/building-africa-first-agents.jsx'
import ExodusArticle from '../routes/featured/exodus-lightweight-fast-local.jsx'
import EduTechAfrica from '../routes/featured/chikoro-at-edutech-africa-2025.jsx'
import FineTuningLanguages from '../routes/featured/fine-tuning-shona-and-swahili-models.jsx'
import ZimsecOLevelExamPrep from '../routes/featured/zimsec-olevel-exam-prep-with-ai.jsx'
import AiHomeworkHelpInShona from '../routes/featured/ai-homework-help-in-shona.jsx'
import ZimbabweTeachersAiLessonPlanning from '../routes/featured/zimbabwe-teachers-ai-lesson-planning.jsx'
import SchemeOfWork from '../routes/featured/how-to-write-a-scheme-of-work-for-african-schools.jsx'
import MarkHomeworkFaster from '../routes/featured/how-to-mark-student-homework-faster-and-give-better-feedback.jsx'
import ParentsTrackProgress from '../routes/featured/how-parents-can-track-their-childs-progress-at-school.jsx'
import AfricanLanguagesAI from '../routes/featured/which-african-languages-can-ai-understand-in-2026.jsx'
import IdentifyStudentsFallingBehind from '../routes/featured/how-to-identify-students-who-are-falling-behind.jsx'
import HomeworkStudentsComplete from '../routes/featured/how-to-set-homework-that-students-actually-complete.jsx'

// Map slug → component
const articleComponents = {
  'genesis-21-released': Genesis21Released,
  'chikoro-safety-report': SafetyReport,
  'building-africa-first-agents': AfricaFirstAgents,
  'exodus-lightweight-fast-local': ExodusArticle,
  'chikoro-at-edutech-africa-2025': EduTechAfrica,
  'fine-tuning-shona-and-swahili-models': FineTuningLanguages,
  'how-to-prepare-for-zimsec-o-level-exams-with-ai': ZimsecOLevelExamPrep,
  'ai-homework-help-in-shona-chikoro-ai-explained': AiHomeworkHelpInShona,
  'how-zimbabwean-teachers-are-using-ai-to-plan-lessons': ZimbabweTeachersAiLessonPlanning,
  'how-to-write-a-scheme-of-work-for-african-schools': SchemeOfWork,
  'how-to-mark-student-homework-faster-and-give-better-feedback': MarkHomeworkFaster,
  'how-parents-can-track-their-childs-progress-at-school': ParentsTrackProgress,
  'which-african-languages-can-ai-understand-in-2026': AfricanLanguagesAI,
  'how-to-identify-students-who-are-falling-behind': IdentifyStudentsFallingBehind,
  'how-to-set-homework-that-students-actually-complete': HomeworkStudentsComplete,
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

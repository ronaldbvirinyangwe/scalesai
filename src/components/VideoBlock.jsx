import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'

export default function VideoBlock() {
  const [played, setPlayed] = useState(false)
  const videoId = 'ZxcShaA8GWw'
  const thumb = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
  const embed = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&mute=1&playsinline=1&modestbranding=1&rel=0&controls=1`
  const siteUrl = 'https://scalesai.online'
  const videoUrl = `https://www.youtube.com/watch?v=${videoId}`

  const videoSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: "Prime Minister Abiy Ahmed's Speech on AI Adoption",
    description:
      "Prime Minister Abiy Ahmed delivers a speech on Africa’s active approach to AI innovation and policy at a High-Level Policy Dialogue.",
    thumbnailUrl: [thumb],
    uploadDate: "2025-06-02",  // Replace with actual upload date if known
    contentUrl: videoUrl,
    embedUrl: embed,
    publisher: {
      "@type": "Organization",
      name: "Scales AI",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/scales.png`,
      },
    },
    creator: {
      "@type": "Person",
      name: "H.E. Abiy Ahmed",
      jobTitle: "Prime Minister of Ethiopia",
    },
  }

  return (
    <section id="video" className="video-block" aria-labelledby="video-heading">
      <Helmet>
        <title>Abiy Ahmed Speech on AI | Scales AI</title>
        <meta
          name="description"
          content="Prime Minister Abiy Ahmed discusses Africa’s role in AI adoption and policy. Watch the speech featured on Scales AI."
        />
        <meta
          name="keywords"
          content="Abiy Ahmed AI speech, AI in Africa, Scales AI video, AI policy Africa"
        />

        <meta property="og:title" content="Abiy Ahmed Speech on AI | Scales AI" />
        <meta
          property="og:description"
          content="Prime Minister Abiy Ahmed addresses the need for Africa to lead in AI innovation."
        />
        <meta property="og:type" content="video.other" />
        <meta property="og:url" content={`${siteUrl}/#video`} />
        <meta property="og:image" content={thumb} />
        <meta property="og:video" content={videoUrl} />

        <meta name="twitter:card" content="player" />
        <meta name="twitter:title" content="Abiy Ahmed Speech on AI | Scales AI" />
        <meta
          name="twitter:description"
          content="Prime Minister Abiy Ahmed outlines Africa’s proactive AI strategy and vision."
        />
        <meta name="twitter:image" content={thumb} />
        <meta name="twitter:player" content={embed} />
        <meta name="twitter:creator" content="@scales_ai" />

        <script type="application/ld+json">
          {JSON.stringify(videoSchema, null, 2)}
        </script>
      </Helmet>

      <div className="container video-block__inner">
        <h2 id="video-heading" className="visually-hidden">
          Abiy Ahmed Speech on AI
        </h2>

        <div className="video-wrapper">
          {played ? (
            <iframe
              className="video-frame"
              src={embed}
              title="Prime Minister Abiy Ahmed Speech on AI"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          ) : (
            <>
              <img
                className="video-thumb"
                src={thumb}
                alt="Thumbnail: Abiy Ahmed speech on AI"
                onClick={() => setPlayed(true)}
              />
              <button
                type="button"
                className="play"
                aria-label="Play video: Abiy Ahmed Speech on AI"
                onClick={() => setPlayed(true)}
              >
                ▶
              </button>
            </>
          )}
        </div>

        <blockquote>
          “AI is no longer a distant dream — it is the engine of transformation across sectors, geographies, and societies... We made a deliberate choice not to remain passive consumers of imported innovation, but to become active contributors...”  
          <cite>
            H.E. Prime Minister Abiy Ahmed<br />
            <span>Prime Minister of the Federal Democratic Republic of Ethiopia</span>
          </cite>
        </blockquote>
      </div>
    </section>
  )
}

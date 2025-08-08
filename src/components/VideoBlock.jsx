import React, { useState } from 'react'

export default function VideoBlock() {
  const [played, setPlayed] = useState(false)
  const videoId = 'hzwuUKD5ZLo'
  const thumb = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
  const embed = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&mute=1&playsinline=1&modestbranding=1&rel=0&controls=1`

  return (
    <section id="video" className="video-block">
      <div className="container video-block__inner">
        <div className="video-wrapper">
          {played ? (
            <iframe
              className="video-frame"
              src={embed}
              title="Societal Impacts of AI"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          ) : (
            <>
              <img
                className="video-thumb"
                src={thumb}
                alt="Video thumbnail"
                onClick={() => setPlayed(true)}
              />
              <button
                type="button"
                className="play"
                aria-label="Play video"
                onClick={() => setPlayed(true)}
              >
                ▶
              </button>
            </>
          )}
        </div>

        <blockquote>
          “If knowledge is power and we’re building machines that have more
          knowledge than us, what will happen between us and the machines?”
          <cite>
            Deep Ganguli
            <br />
            <span>Research Lead, Societal Impacts</span>
          </cite>
        </blockquote>
      </div>
    </section>
  )
}

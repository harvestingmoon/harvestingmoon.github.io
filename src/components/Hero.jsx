import { contactLinks } from '../data';

export default function Hero() {
  return (
    <header style={{ marginBottom: 36 }}>
      <img
        src="/profile.png"
        alt="Lee Wen Yeong"
        className="profile-img"
      />
      <h1 style={{ fontSize: 24, fontWeight: 700, marginBottom: 4 }}>
        Lee Wen Yeong
      </h1>
      <p style={{ color: '#666', fontSize: 14, marginBottom: 14 }}>
        Undergraduate student at NUS
      </p>
      <p>
        <strong>
          I am an incoming Applied Machine Learning Engineer at{' '}
          <a href="https://fireworks.ai" target="_blank" rel="noopener noreferrer">Fireworks AI</a>,
        </strong>{' '}
        where I will be working on fast, production-grade model serving and inference. I am finishing a Business
        Analytics degree at <strong>National University of Singapore</strong> (School of Computing), which is
        completely unrelated to what I do now, and I enjoy it a lot nonetheless.
      </p>
      <p>
        I am currently a Research Assistant under the Cooperative Autonomous Systems group at{' '}
        <a href="https://cas.aifb.kit.edu/" target="_blank" rel="noopener noreferrer">Karlsruhe Institute of Technology</a>,
        working with Wan Lei on memory efficient 4D Gaussian representations for dynamic driving environments. I am
        also a Student Ambassador at the{' '}
        <a href="https://github.com/NVIDIA-AI-Technology-Center" target="_blank" rel="noopener noreferrer">NVIDIA AI Technology Center</a>,
        mentored by Darren Tan, focusing on computational biology and inference optimization.
      </p>
      <p>
        At TikTok I progressed from a Trust & Safety Project Management Intern to a Machine Learning Engineer Intern in
        the Search Algorithms and Tako teams, working on ranking algorithms, AI agents and knowledge distillation.
        Before that I worked on computer vision at DSTA and LLMs at the Ministry of Manpower. I also contribute to open
        source, mostly PyTorch, SGLang and llama.cpp (I try my best).
      </p>
      <p style={{ marginTop: 16 }}>
        {contactLinks.map((link, i) => (
          <span key={link.label}>
            <a href={link.href} target={link.href.startsWith('mailto') ? undefined : '_blank'} rel="noopener noreferrer">
              {link.label}
            </a>
            {i < contactLinks.length - 1 && <span className="sep">/</span>}
          </span>
        ))}
      </p>
    </header>
  );
}

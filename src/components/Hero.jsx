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
        I am currently a Research Assistant under the Cooperative Autonomous Systems at{' '}
        <a href="https://cas.aifb.kit.edu/" target="_blank" rel="noopener noreferrer">Karlsruhe Institute of Technology</a>{' '}
        working with Wan Lei on memory efficient 4D Gaussian representations for dynamic driving environments.
      </p>
      <p>
        I am also
        a Student Ambassador at{' '}
        <a href="https://github.com/NVIDIA-AI-Technology-Center" target="_blank" rel="noopener noreferrer">NVIDIA AI Technology Center</a>{' '}
        mentored by Darren Tan, focusing on computational biology and inference optimization.
        </p>
        <p>
        At <strong>TikTok</strong>, I progressed from a Trust & Safety Project Management Intern to a Machine Learning Engineer Intern
        in the Search Algorithms and the Tako Team, working on algorithms, AI agents, and knowledge distillation. 
        Prior to this, I was at <strong>DSTA</strong> and <strong>MOM</strong> focusing on computer vision and LLMs respectively.
        </p>
      <p>
        I am currently an undergraduate student with a Business Analytics degree from{' '}
        <strong>National University of Singapore</strong> (School of Computing). 
        <p>
        (yes my degree is completely unrelated to what i do, but i enjoy it a lot nonetheless)
        </p>
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

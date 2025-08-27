export default function DesktopTypingAnimation() {
  return (
    <>
      <p className="mt-4 text-lg max-w-xl text-gray-600 dark:text-gray-300 z-10 font-mono">
        <span className="typing-animation">
          Informatics Engineer | Backend Developer | Cloud Enthusiast
        </span>
      </p>
      <style jsx>{`
        .typing-animation {
          display: inline-block;
          overflow: hidden;
          white-space: nowrap;
          border-right: 3px solid #facc15;
          width: 0;
          animation: typing 4s steps(58, end) forwards,
            blink 1s step-end infinite;
        }

        @keyframes typing {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }

        @keyframes blink {
          from,
          to {
            border-color: transparent;
          }
          50% {
            border-color: #facc15;
          }
        }
      `}</style>
    </>
  );
}

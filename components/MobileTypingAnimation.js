import { TypeAnimation } from "react-type-animation";

export default function MobileTypingAnimation() {
  return (
    <div className="mt-4 text-base text-center h-16 max-w-xl text-gray-600 dark:text-gray-300 z-10 font-mono">
      <TypeAnimation
        sequence={[
          "Informatics Engineer",
          1000,
          "Informatics Engineer\nBackend Developer | Cloud Enthusiast",
          3000,
        ]}
        wrapper="span"
        cursor={true}
        repeat={Infinity}
        speed={60}
        className="whitespace-pre-line" // Penting untuk baris baru
      />
    </div>
  );
}

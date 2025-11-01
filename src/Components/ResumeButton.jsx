export default function ResumeButton({ className }) {
  return (
    <a
      href="/Keerthi_Saranya_Resume.pdf"
      download
      className={`px-5 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow-md hover:opacity-90 transition ${className}`}
    >
      Download Resume
    </a>
  );
}

import Link from "next/link";
import backgroundImage from '@/assets/images/background.webp';

export default function Header() {
  return (
    <header
      className="sticky top-0 left-0 right-0 h-12 z-10 border-b border-gray-200 bg-repeat bg-center"
      style={{ backgroundImage: `url(${backgroundImage.src})` }}
    >
      <div className="px-4 h-full flex justify-between items-center w-full max-w-[720px] mx-auto">
        <Link href="/" className="flex items-center">
          <span className="text-lg font-black text-black">꿈풀이</span>
        </Link>
      </div>
    </header>
  );
} 
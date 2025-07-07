import Image from 'next/image';
import Link from 'next/link';

export default function Logo() {
  return (
    <div>
      <Link href="/">
        <Image
          className="max-w-[100px] md:max-w-[165px]"
          src="/assets/lws_logo.png"
          alt="Lws"
          height={100}
          width={150}
        />
      </Link>
    </div>
  );
}

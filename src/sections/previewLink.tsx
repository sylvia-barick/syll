import Link from 'next/link';
import sylviaImage from '@/media/sylvia.png';
import Image from 'next/image'; // Make sure this path points to your image

async function LinkPreview() {
  return (
    <Link
      href={'https://www.linkedin.com/in/sylvia-barick-081651321/'} // Replace with your LinkedIn or any other URL
      target="_blank"
      className="text-black w-[50%] h-[200px] cursor-pointer flex items-center bg-[#f3f3f3] gap-3 text-left border-white border-[2px]"
      style={{
        textDecoration: 'none',
      }}
    >
      <div className="object-cover h-full">
        <Image
          src={sylviaImage} // Your image
          alt="Sylvia Barick"
          className="object-cover h-full w-[340px] m-0"
        />
      </div>
      <div className="p-4 w-[60%]">
        <h3 className="text-3xl font-bold leading-[2rem] mb-2 ">
          Sylvia Barick - AI-ML Engineer
        </h3>
        <p className="text-base line-clamp-3 mb-2 ">
          I’m an aspiring AI-ML engineer who loves building meaningful tech, exploring Web3, joining hackathons, and creating solutions that truly help people.
        </p>
        <span className="mt-3 opacity-50 text-xs">
          &nbsp;{'https://www.linkedin.com/in/sylvia-barick-081651321/'}
        </span>
      </div>
    </Link>
  );
}

export default LinkPreview;

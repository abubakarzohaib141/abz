'use client'; // Ensure this is the first line

import { useRouter } from 'next/navigation'; // Correct import for App Router
import Link from 'next/link';

const Page = () => { // Capitalize the component name
  const router = useRouter();

  const navigateToAbout = () => {
    router.push('/About'); // Use lowercase path if your route is '/about'
  };

  return (
    <div>
      {/* Using Link with an <a> tag for better semantics */}
      <Link href="/about">
        Go To About Page
      </Link>
      <br />
      {/* Button that uses the router to navigate */}
      <button onClick={navigateToAbout}>Go To About</button>
    </div>
  );
};

export default Page;

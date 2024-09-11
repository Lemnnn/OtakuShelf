const Landing = () => {
  return (
    <div className="w-screen h-screen flex flex-col relative">
      <div className="w-full bg-black flex justify-between items-center px-10 py-5">
        <p className="text-white font-extrabold text-4xl">Otaku Shelf</p>
        <button
          className="bg-white py-2 px-7 rounded-xl font-bold"
          onClick={() => (window.location.href = "/register")}
        >
          Get Started!
        </button>
      </div>
      <div className="w-full flex flex-col items-center justify-center">
        <div className="w-full py-10 flex flex-col items-center justify-center px-[400px]">
          <h1 className="text-black font-extrabold text-2xl py-3">
            Your Ultimate Manga Haven!
          </h1>
          <p className="text-black font-semibold text-lg">
            Discover a world where your favorite manga comes to life. At Otaku
            Shelf, we offer an extensive collection of manga that caters to
            every otaku's dream. Whether you're a long-time fan or new to the
            world of manga, you'll find a vast library of titles spanning all
            genres, from epic adventures to heartwarming romances.
          </p>
        </div>
        <div className="w-full py-10 flex flex-col items-center justify-center bg-black px-[400px]">
          <h3 className="text-white font-semibold text-xl md:text-2xl mb-4">
            Why Choose Otaku Shelf?
          </h3>
          <ul className="text-white font-medium text-base md:text-lg list-disc list-inside mb-6 px-4">
            <li className="py-3">
              <strong>Comprehensive Library:</strong> Browse through our curated
              collection of manga series and discover new favorites. We feature
              both classic and contemporary titles to ensure there's something
              for everyone.
            </li>
            <li className="py-3">
              <strong>User-Friendly Experience:</strong> Our intuitive interface
              makes it easy to find and read your favorite manga. Enjoy a
              seamless reading experience with customizable settings to suit
              your preferences.
            </li>
            <li className="py-3">
              <strong>Regular Updates:</strong> Stay up-to-date with the latest
              releases and ongoing series. Our team is dedicated to bringing you
              the newest chapters and volumes as soon as they're available.
            </li>
            <li className="py-3">
              <strong>Community Engagement:</strong> Join a vibrant community of
              manga enthusiasts. Share your thoughts, reviews, and
              recommendations with fellow readers.
            </li>
            <li className="py-3">
              <strong>Personalized Recommendations:</strong> Receive tailored
              suggestions based on your reading history and preferences, helping
              you discover new series you'll love.
            </li>
          </ul>
        </div>
        <div className="w-full py-10 flex flex-col items-center justify-center px-[400px]">
          <h3 className="text-black font-semibold text-xl md:text-2xl mb-4">
            Get Started Today!
          </h3>
          <p className="text-black font-semibold text-lg md:text-xl mb-6 w-full max-w-2xl px-4">
            Explore our collection and immerse yourself in captivating stories
            and stunning artwork. Sign up now to unlock exclusive features and
            enjoy a personalized manga experience like never before.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Landing;

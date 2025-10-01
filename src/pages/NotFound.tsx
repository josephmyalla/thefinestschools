
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import Footer from "../components/Footer";

const NotFound = () => {
  return (
    <>
      <NavBar />
      <div className="py-20 px-4 min-h-[60vh] flex items-center">
        <div className="container-custom text-center">
          <h1 className="text-5xl font-bold mb-4 gradient-text">404</h1>
          <h2 className="text-2xl font-semibold mb-6">Page Not Found</h2>
          <p className="text-av-gray max-w-md mx-auto mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Button asChild className="bg-av-purple hover:bg-av-purple-dark">
            <Link to="/">Return to Homepage</Link>
          </Button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;

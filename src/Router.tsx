import { AnimatePresence, motion } from "framer-motion";
import {
  createBrowserRouter,
  Link,
  RouterProvider,
  useLocation,
  useOutlet,
} from "react-router-dom";
import Index from "./index";
import MultiStep from "@/components/multi-step/MultiStep";
import EmailBox from "./components/email-box/EmailBox";
import Carousel from "./components/carousel/Carousel";

const MotionLink = motion(Link);
const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Index />,
      },
      {
        path: "/multi-step",
        element: <MultiStep />,
      },
      {
        path: "/email-box",
        element: <EmailBox />,
      },
      {
        path: "/carousel",
        element: <Carousel />,
      },
    ],
  },
]);

function Layout() {
  const location = useLocation();
  const outlet = useOutlet();
  return (
    <div className="min-h-screen items-start bg-gradient-to-br from-slate-700">
      <div className="m-auto flex min-h-screen w-[80%] min-w-[500px] flex-col">
        <div className="py-12">
          {location.pathname !== "/" && (
            <MotionLink
              to={".."}
              className="transition-color rounded bg-white p-2 shadow-sm duration-500 hover:bg-slate-200"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{
                opacity: 0,
              }}
              key="go-back-link"
            >
              ← Go Back
            </MotionLink>
          )}
        </div>
        <AnimatePresence mode="wait">
          <motion.main className="flex flex-auto" key={location.pathname}>
            {outlet}
          </motion.main>
        </AnimatePresence>
      </div>
    </div>
  );
}

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;

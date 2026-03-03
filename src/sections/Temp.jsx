import { useRef } from "react";
import FlipLink from "../components/ui/FlipLink";
import { Link } from "react-router-dom";

const Temp = () => {
  const flipRef = useRef()
  return (
    <div className="h-screen">
      <Link
      to={"/contact"}
       className="px-[1em] py-[1em] border-2 w-fit text-[1.2emem]"
      onMouseEnter={() => flipRef.current.play()}
      onMouseLeave={() => flipRef.current.reverse()} 
      >
        <FlipLink
        ref={flipRef}
          text={"Say Hello"}
          icon={<i className="ri-arrow-right-up-line text-[1.4em]"></i>}
        />
      </Link>
    </div>
  );
};

export default Temp;

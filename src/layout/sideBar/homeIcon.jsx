import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function HomeIcon() {
  return (
    <Link to='/' className="flex items-center justify-center bg-white rounded-full text-black p-4 text-3xl hover:bg-gray-300">
      <FaHome />

    </Link>
  )
}

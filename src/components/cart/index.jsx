import cartUtils from "../../utils/cartutils"
import { RiFilePaper2Fill } from "react-icons/ri";
import { FaVideo } from "react-icons/fa";



export default function Cart() {
  return (
    <div className="flex items-center justify-center gap-x-4">
        {cartUtils.map(cart=>(
            <div className=" flex-col items-center justify-center group">
                <div className='  border border-gray-300 p-3 rounded-md w-[360px] ' >
                <div className="bg-gray-200 text-black p-3 flex items-center justify-center text-5xl rounded-full h-[150px] w-[150px] mx-auto  ">
                    {cart.icon}
                </div>
                <div className="text-2xl baslik py-4 text-center w-full border-b">
                    {cart.name}
                </div>
                
                <div className="flex items-center justify-center gap-x-4 py-4 text-gray-400 ">
                    <div className="flex-col items-center justify-center text-lg font-semibold">
                    <RiFilePaper2Fill  />
                    <span>{cart.text}</span>
                    </div>
                    <div className="flex-col items-center justify-center text-lg font-semibold">
                    <FaVideo    />
                    <span>{cart.video}</span>
                    </div>
                </div>
                
                </div>
            </div>
        ))}
    </div>
  )
}

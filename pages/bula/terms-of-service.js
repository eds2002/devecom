import { Docs } from "../../constants/constant"



export default function tos(){
  return (
    <div className="relative flex items-center justify-center w-full pt-[104px] h-full max-w-2xl mx-auto lg:max-w-7xl lg:px-8">
        <div className = "h-full px-4 text-white">
          <div className = "h-[30vh] text-white text-5xl py-24 font-bold">Terms of Service</div>
          <div
            dangerouslySetInnerHTML={{__html: Docs[0].TOS}}
          />
        </div>
    </div>
  )
}

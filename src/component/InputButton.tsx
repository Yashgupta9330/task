import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const InputButton=()=> {
  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input type="email" placeholder="Enter your Email" className="text-[#555657] bg-[#0D0E10] border-0 w-[167px] transition-all duration-300 hover:border-[#7F39EB]" />
      <Button type="submit" className="w-[83px] bg-[#7F39EB] h-[36px]">Subscribe</Button>
    </div>
  )
}
export default InputButton
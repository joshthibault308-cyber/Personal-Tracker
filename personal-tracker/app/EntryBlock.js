import { jetBrains_Mono } from '@/app/layout'
export default function Entry({ Text, Background }) {
    return (
            <div
                className={`flex items-center justify-center text-center ${Background} text-[#000000] text-[2cqw]`}>
                {Text}
            </div>
    )
}
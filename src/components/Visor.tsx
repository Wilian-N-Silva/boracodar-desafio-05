import equalsVisorIcon from '../assets/equalsVisor.svg'

interface VisorProps {
    lastOperation: string,
    currentOperation: string,
}

export function Visor({ lastOperation, currentOperation }: VisorProps) {
    return (
        <div className="flex flex-col gap-2 px-[22px]">
            <div className="text-end text-[#6B6B6B] text-xl h-[28px]">{lastOperation}</div>
            <div className="flex text-[#6B6B6B] items-center">
                <img className="w-5 h-5" src={equalsVisorIcon} alt="" />
                <div className="flex-1 text-end text-[#EBEBEB] text-4xl h-[50px]">{currentOperation}</div>
            </div>
        </div>
    )
}
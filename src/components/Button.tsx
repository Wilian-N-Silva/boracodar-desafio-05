import clsx from "clsx";

interface ButtonProps {
    content: string,
    icon?: string
}


export function Button({ content, icon }: ButtonProps) {

    const coloredList = [
        'MULTIPLY',
        'MINUS',
        'PLUS',
        'DIVIDE'
    ]


    return <button
        type="button"
        className={clsx('shadow-button cursor-pointer flex items-center justify-center text-[#EBEBEB] text-2xl w-full h-full rounded-full gradient-button active:scale-95 active:shadow-none', {
            'gradient-button-function': coloredList.includes(content),
            'gradient-button-result': content === 'EQUALS',
            'text-[#975DFA]': content === 'CE',
            'text-4xl': content === ','
        })}
    >
        {
            icon ? <img src={icon} alt="" /> : content
        }
    </button>
}
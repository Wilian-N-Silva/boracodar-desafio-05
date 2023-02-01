import { Button } from './components/Button'
import { Visor } from './components/Visor'
import './styles/global.css'

import equalsIcon from './assets/equals.svg';
import plusIcon from './assets/plus.svg';
import minusIcon from './assets/minus.svg';
import divideIcon from './assets/divide.svg';
import multiplyIcon from './assets/multiply.svg';
import percentageIcon from './assets/percent.svg';
import plusMinusIcon from './assets/plusMinus.svg';


function App() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-[356px] h-[566px] rounded-[48px] bg-[#2D2A37] flex flex-col gap-[26px] pt-[54px] px-8 pb-8 shadow-calc">
        <Visor currentOperation="2" lastOperation="1 + 1" />
        <div className="grid grid-cols-4 grid-rows-5 gap-3 h-full w-full">
          <Button content="CE" />
          <Button content="C" />
          <Button content="PERCENT" icon={percentageIcon} />
          <Button content="DIVIDE" icon={divideIcon} />
          <Button content="7" />
          <Button content="8" />
          <Button content="9" />
          <Button content="MULTIPLY" icon={multiplyIcon} />
          <Button content="4" />
          <Button content="5" />
          <Button content="6" />
          <Button content="MINUS" icon={minusIcon} />
          <Button content="1" />
          <Button content="2" />
          <Button content="3" />
          <Button content="PLUS" icon={plusIcon} />
          <Button content="PLUSMINUS" icon={plusMinusIcon} />
          <Button content="0" />
          <Button content="," />
          <Button content="EQUALS" icon={equalsIcon} />
        </div>
      </div>
    </div>
  )
}

export default App

import { useState } from 'react'
import Draggable from 'react-draggable'
import { useRef } from 'react'
import { useAppStore } from '../../store/useAppStore'

type CalcBtn = {
  label: string
  type: 'num' | 'op' | 'ac' | 'eq'
  span?: boolean
}

const buttons: CalcBtn[] = [
  { label: 'AC', type: 'ac' },
  { label: '+/-', type: 'op' },
  { label: '%', type: 'op' },
  { label: '÷', type: 'op' },
  { label: '7', type: 'num' },
  { label: '8', type: 'num' },
  { label: '9', type: 'num' },
  { label: '×', type: 'op' },
  { label: '4', type: 'num' },
  { label: '5', type: 'num' },
  { label: '6', type: 'num' },
  { label: '−', type: 'op' },
  { label: '1', type: 'num' },
  { label: '2', type: 'num' },
  { label: '3', type: 'num' },
  { label: '+', type: 'op' },
  { label: '0', type: 'num', span: true },
  { label: '.', type: 'num' },
  { label: '=', type: 'eq' },
]

const btnStyles: Record<CalcBtn['type'], string> = {
  num: 'bg-[#1F2937] text-white',
  op: 'bg-[#2D3748] text-[#FF8559]',
  ac: 'bg-[#2D3748] text-white text-sm',
  eq: 'bg-[#FF8559] text-white',
}

export default function Calculator() {

  const [display, setDisplay] = useState('0')
  const [expression, setExpression] = useState('')
  const [prev, setPrev] = useState('')
  const [op, setOp] = useState('')
  const [justCalc, setJustCalc] = useState(false)
  // const [visible, setVisible] = useState(false)
  const visible = useAppStore((state) => state.calculator)
  const viewCalculator = useAppStore((state) => state.viewCalculator)
  const nodeRef = useRef(null)

  const updateDisplay = (val: string) => setDisplay(val)

  const handleNum = (n: string) => {
    if (justCalc) {
      updateDisplay(n === '.' ? '0.' : n)
      setJustCalc(false)
      return
    }
    if (display === '0' && n !== '.') { updateDisplay(n); return }
    if (n === '.' && display.includes('.')) return
    updateDisplay(display + n)
  }

  const handleOp = (o: string) => {
    if (o === '+/-') { updateDisplay((parseFloat(display) * -1).toString()); return }
    if (o === '%') { updateDisplay((parseFloat(display) / 100).toString()); return }
    if (prev && !justCalc) handleEqual(true)
    setPrev(display)
    setOp(o)
    setJustCalc(true)
    setExpression(`${display} ${o}`)
  }

  const handleEqual = (silent = false) => {
    if (!op || !prev) return
    const a = parseFloat(prev)
    const b = parseFloat(display)
    let result: number

    if (op === '+') result = a + b
    else if (op === '−') result = a - b
    else if (op === '×') result = a * b
    else if (op === '÷') result = b !== 0 ? a / b : 0
    else return

    if (!silent) {
      setExpression(`${prev} ${op} ${display} =`)
      setOp('')
      setPrev('')
    }

    const formatted = parseFloat(result.toFixed(8)).toString()
    updateDisplay(formatted)
    setJustCalc(true)
  }

  const handleAC = () => {
    updateDisplay('0')
    setExpression('')
    setPrev('')
    setOp('')
    setJustCalc(false)
  }

  const handlePress = (btn: CalcBtn) => {
    if (btn.type === 'ac') handleAC()
    else if (btn.type === 'eq') handleEqual()
    else if (btn.type === 'op') handleOp(btn.label)
    else handleNum(btn.label)
  }

  return (
    <>
      {/* Botón toggle en nav */}
      {/* <button
        onClick={viewCalculator}
        className={`flex flex-col items-center gap-1 ${visible ? 'text-[#FF8559]' : 'text-[#6B7280]'}`}
      >
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <rect x="3" y="3" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M7 8h8M7 12h4M13 11v4M15 11v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
        <span className="">Calculadora</span>
      </button> */}

      {/* Calculadora flotante */}
      {visible && (
        <Draggable nodeRef={nodeRef} bounds="parent" handle=".calc-handle">
          <div
            ref={nodeRef}
            className="absolute z-50 w-[220px] bg-[#1F2937] rounded-[20px] border border-[#374151] overflow-hidden"
            style={{ top: 80, left: 78 }}
          >
            {/* Handle drag */}
            <div className=" flex justify-between items-center px-4 py-3 bg-[#111827] border-b border-[#374151] cursor-grab active:cursor-grabbing ">
              <div className='calc-handle items-center gap-8 flex'>
                <div className="calc-handle flex gap-1 ">
                  <span className="w-[6px] h-[6px] rounded-full bg-[#4B5563]"></span>
                  <span className="w-[6px] h-[6px] rounded-full bg-[#4B5563]"></span>
                  <span className="w-[6px] h-[6px] rounded-full bg-[#4B5563]"></span>
                </div>
                <span className="text-xs text-[#6B7280] font-medium">Calculadora</span>
              </div>
              <button type='button' onClick={viewCalculator} className="text-[#6B7280] text-lg  relative leading-none">×</button>
            </div>

            {/* Pantalla */}
            <div className="bg-[#111827] px-4 pt-3 pb-2">
              <p className="text-xs text-[#6B7280] text-right min-h-[18px] truncate">{expression}</p>
              <p className="text-[28px] font-medium text-white text-right truncate">{display}</p>
            </div>

            {/* Botones */}
            <div className="grid grid-cols-4 gap-px bg-[#374151]">
              {buttons.map((btn, i) => (
                <button
                  key={i}
                  onClick={() => handlePress(btn)}
                  className={`
                    ${btnStyles[btn.type]}
                    ${btn.span ? 'col-span-2' : ''}
                    h-12 flex items-center justify-center text-base font-medium
                    active:opacity-70 transition-opacity
                  `}
                >
                  {btn.label}
                </button>
              ))}
            </div>
          </div>
        </Draggable>
      )}
    </>
  )
}
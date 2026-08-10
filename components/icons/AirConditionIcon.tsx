const AirConditionIcon = ({
  ref,
  ...props
}: React.SVGProps<SVGSVGElement> & { ref?: React.Ref<SVGSVGElement> }) => (
  <svg
    id='Layer_1'
    data-name='Layer 1'
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 240 200'
    fill='none'
    stroke='currentColor'
    strokeLinecap='round'
    strokeMiterlimit={10}
    strokeWidth={5}
    ref={ref}
    {...props}
  >
    <rect x='5.89' y='32.61' width='228.22' height='108.61' rx='8' />
    <path d='M50.59,141.21V123.16a8,8,0,0,1,8-8H182.51a8,8,0,0,1,8,8v18.05' />
    <line x1='119.62' y1='49.28' x2='188.53' y2='49.28' />
    <line x1='207.25' y1='49.28' x2='220.46' y2='49.28' />
    <line x1='50.59' y1='128.35' x2='174.22' y2='128.35' />
    <line x1='150.12' y1='152.07' x2='150.12' y2='167.39' />
    <line x1='93.71' y1='152.07' x2='93.71' y2='167.39' />
    <line x1='121.91' y1='152.07' x2='121.91' y2='167.39' />
    <path d='M175.92,152.07c0,3.83-.82,11.07,4.86,15.32' />
    <path d='M67.91,152.07c0,3.83.82,11.07-4.86,15.32' />
  </svg>
)

export default AirConditionIcon

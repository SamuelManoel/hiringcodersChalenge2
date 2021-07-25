interface Props {
  readonly className: string,
  onClick: any,
}

const IconClose: React.FC<Props> = ({ className, onClick }) => {
  return (
    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
      width="128.000000pt" height="128.000000pt" viewBox="0 0 128.000000 128.000000"
      preserveAspectRatio="xMidYMid meet"
      className={className}
      onClick={onClick}
    >
      <g transform="translate(0.000000,128.000000) scale(0.100000,-0.100000)"
        fill="#000000" stroke="none">
        <path d="M20 1260 c-46 -46 -38 -56 252 -347 l273 -273 -273 -273 c-290 -291
-298 -301 -252 -347 46 -46 56 -38 347 252 l273 273 273 -273 c291 -290 301
-298 347 -252 46 46 38 56 -252 347 l-273 273 273 273 c290 291 298 301 252
347 -46 46 -56 38 -347 -252 l-273 -273 -273 273 c-291 290 -301 298 -347 252z"/>
      </g>
    </svg>
  )
}

export default IconClose

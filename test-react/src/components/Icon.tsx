interface IconProps {
  name: string
  className?: string
}

function Icon({ name, className = 'button-icon' }: IconProps) {
  return (
    <svg className={className} role="presentation" aria-hidden="true">
      <use href={`/icons.svg#${name}`}></use>
    </svg>
  )
}

export default Icon

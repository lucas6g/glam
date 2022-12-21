import LogoSvg from '../../assets/logo.svg'

interface LogoProps {
  height?: number
  width?: number
}

export function Logo(props: LogoProps) {
  return <LogoSvg {...props} />
}

interface MissionBrandProps {
  size?: number;
  textClassName?: string;
  imgClassName?: string;
}

const MissionBrand = ({ size = 36, textClassName = '', imgClassName = '' }: MissionBrandProps) => (
  <>
    <img
      src="/mission-logo-icon.png"
      alt="Миссия"
      style={{ height: size, width: 'auto' }}
      className={imgClassName}
    />
    <span className={textClassName}>МИССИЯ</span>
  </>
);

export default MissionBrand;

import './KeyFigures.css'
import lipIcon from '../../Assets/lipIcon.svg'
import gluIcon from '../../Assets/gluIcon.svg'
import proIcon from '../../Assets/protIcon.svg'
import calIcon from '../../Assets/calIcon.svg'
const KeyFigures = (data) => {
  let formatedProps = [
    {
      img: calIcon,
      unit: 'kCal',
      label: 'Calories',
      amount: data.keyData.calorieCount,
    },
    {
      img: proIcon,
      unit: 'g',
      label: 'Proteines',
      amount: data.keyData.proteinCount,
    },
    {
      img: gluIcon,
      unit: 'g',
      label: 'Glucides',
      amount: data.keyData.carbohydrateCount,
    },
    {
      img: lipIcon,
      unit: 'g',
      label: 'Lipides',
      amount: data.keyData.lipidCount,
    },
  ]
  return (
    <div className="container">
      {formatedProps.map((item) => {
        return (
          <div key={item.label} className="keyFigure">
            <img className="keyFigure-img" src={item.img} alt={item.label} />
            <div className="keyFigure-name">
              <span className="keyFigure-name__data">
                {item.amount}
                {item.unit}
              </span>
              <p className="keyFigure-name__label">{item.label}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default KeyFigures

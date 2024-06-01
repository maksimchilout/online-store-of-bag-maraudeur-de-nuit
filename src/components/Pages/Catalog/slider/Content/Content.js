import { Slider } from '../Slider/Slider'
// import './Content.css'


export const Content = (props) => {
  const sliderData = [
    {
      title: props.item.title,
      img: `./img/products/${props.item.photo[0]}`
    },
    {
      title: props.item.title,
      img: `./img/products/${props.item.photo[1]}`
    },
    {
      title: props.item.title,
      img: `./img/products/${props.item.photo[2]}`
    },
    {
      title: props.item.title,
      img: `./img/products/${props.item.photo[3]}`
    },
    {
      title: props.item.title,
      img: `./img/products/${props.item.photo[4]}`
    },
    {
      title: props.item.title,
      img: `./img/products/${props.item.photo[5]}`
    },
  ]
    return(
        <div className="content">
          <div className="content__grid">
            {/*<p>Тут будет текст с описанием сумки.....</p>*/}
          </div>
          <Slider data={sliderData} />
        </div>
        )


}
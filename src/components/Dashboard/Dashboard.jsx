import LineChart from '../Charts/LineChart'
import StackedBar from '../Charts/StackedBar'
import Closed from './closed/Closed'
import style from './estilo.module.css'

const Dashboard = () => {
  return (
    <section className={style.sectionContainer}>
      <section className={style.sectionBox}>
        <article className={style.tabla}>
          <StackedBar />
        </article>
        <article className={style.progresBarContainer}>
          <p className={style.progresBar}>asdasdasdas</p>
          <p className={style.progresBar}>WEQQWEEQW</p>
        </article>
      </section>

      <section className={style.sectionBox}>
        <section className={style.iconosContainer}>
          <article className={style.iconos}>
            <Closed />
          </article>
          <article className={style.iconos}> </article>
          <article className={style.iconos}> </article>
          <article className={style.iconos}> </article>
          <article className={style.iconos}> </article>
          <article className={style.iconos}> </article>
        </section>
        <article className={style.tabla}>
          <LineChart />
        </article>
      </section>
    </section>
  )
}

export default Dashboard

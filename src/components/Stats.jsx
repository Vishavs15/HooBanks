import styles from "../style";
import { stats } from '../constants';

const Stats = () => (
    <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
      {stats.map((statinfo) => (
        <div key={statinfo.id} className={`flex-1 flex justify-start iteams-center flex-row m-3`}>

          <h4 className="font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white">{statinfo.value}</h4>

          <p className="font-poppins font-normal xs:text-[25px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3 mt-[16px]">{statinfo.title}</p>

        </div>
      ))}
    </section>
  )

export default Stats
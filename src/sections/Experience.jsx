import TitleHeader from '../components/TitleHeader'
import { expCards } from '../constants';
import GlowCard from '../components/GlowCard';

const Experience = () => {
  return (
    <section className="w-full md:mt-40 mt-20 section-padding xl:px-0">
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader
          title="Professional Work Experience"
          sub="Experience Overview"
        />

        <div className="mt-32 relative">
          <div className="relative z-50 xl:space-32 space-y-10">
            {expCards.map((card) => (
              <div key={card.title} className="exp-car-wrapper">
                <div className='xl:w-2/12'>
                    <GlowCard>
                        <div>
                            <img src={card.imgPath} alt="card.title" className='w-30'/>
                        </div>
                    </GlowCard>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience
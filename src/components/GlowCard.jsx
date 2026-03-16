import React ,{useRef} from 'react'

const GlowCard = ({card,children,index}) => {
  const cardRefs = useRef([]);

  const handleMouseMove = (index) => (e) =>{
    const card = cardRefs.current[index];
    if (card) return;
  }

  return (
    <div ref={(el)=>(cardRefs.current[index] =el)} onMouseMove ={handleMouseMove(index)}
        className='card timeline-card rounded-xl p-10'>
        <div className='glow'/>
        {children}
    </div>
  )
}

export default GlowCard
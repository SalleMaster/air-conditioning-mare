import { CalendarCheck, BadgePercent } from 'lucide-react'

import CustomCard from '@/components/custom/CustomCard'

const Actions = () => {
  return (
    <section id='actions' className='grid gap-8 bg-background py-20 px-4'>
      <h2 className='text-4xl text-center font-bold'>
        Aktuelne akcije i promocije
      </h2>
      <div className='container mx-auto grid md:grid-cols-2 gap-8'>
        <CustomCard
          title='15% POPUSTA na instalaciju'
          description='Važi do kraja leta'
        >
          <BadgePercent className='w-[150px] h-[150px]' strokeWidth={1} />
        </CustomCard>
        <CustomCard
          title='Besplatna provera održavanja'
          description='Zakazite pregled danas'
        >
          <CalendarCheck className='w-[150px] h-[150px]' strokeWidth={1} />
        </CustomCard>
      </div>
    </section>
  )
}

export default Actions

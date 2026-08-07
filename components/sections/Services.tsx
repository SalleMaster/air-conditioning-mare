import CustomCard from '@/components/custom/CustomCard'
import AirConditionIcon from '@/components/icons/AirConditionIcon'
import ServiceIcon from '@/components/icons/ServiceIcon'
import RepairsIcon from '@/components/icons/RepairsIcon'

const Services = () => {
  return (
    <section id='services' className='grid gap-8 bg-secondary py-20 px-4'>
      <h2 className='text-4xl text-center font-bold'>Naše usluge</h2>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        <CustomCard
          title='Instalacija'
          description='Profesionalna instalacija AC-a za vašu kuću ili poslovni prostor'
        >
          <AirConditionIcon className='w-[150px] h-[150px]' />
        </CustomCard>
        <CustomCard
          title='Održavanje'
          description='Redovno održavanje Vašeg AC sistema za optimalan rad'
        >
          <ServiceIcon className='w-[150px] h-[150px]' />
        </CustomCard>
        <CustomCard
          title='Popravka'
          description='Brza i efikasna popravka AC sistema'
        >
          <RepairsIcon className='w-[150px] h-[150px]' />
        </CustomCard>
      </div>
    </section>
  )
}

export default Services

import { ReactNode } from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

type Props = {
  title: string
  description: string
  children: ReactNode
}

const CustomCard = ({ title, description, children }: Props) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className='text-2xl text-center'>{title}</CardTitle>
        <CardDescription className='text-lg text-center'>
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className='flex justify-center items-center h-full'>
        {/* {imageSrc && imageAlt && (
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={100}
            height={100}
            className='w-[150px]'
          />
        )}
        {Icon && <Icon className='w-[150px] h-[150px]' />}
        {children} */}
        {children}
      </CardContent>
    </Card>
  )
}

export default CustomCard

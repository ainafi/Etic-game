import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { fetchData } from '@/API/fetchData'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const Trend = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['trend'],
    queryFn: () => fetchData("trending", "movie", "week"),
  })

  console.log(data);

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  return (
    <section>
      <h2 className='pb-5 text-2xl font-semibold text-center text-white md:text-3xl'>
        film le plus populaire de la semaine
      </h2>
      <div className='flex items-center justify-center'>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full "
        >
          <CarouselContent>
            {data.results.map((movie, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex items-center justify-center p-6 aspect-square">
                      <div>
                        <img className='w-[500px] rounded-md' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                        <p className='mt-3 font-semibold text-center text-white'>{movie.title}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  )
}

export default Trend
"use client";
import PodcastCard from '@/components/PodcastCard'
import { podcastData } from '@/constants'
import React from 'react'
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

const Home = () => {
  const trendingPodcast = useQuery(api.podcasts.getTrendingPodcasts);
  return (
    <div className='mt-9 flex flex-col gap-9 md:overflow-hidden'>
      <section className='flex flex-col gap-5'>
        <h1 className='text-20 font-bold text-white-1'>Trending Podcast</h1>
        <div className='podcast_grid'>
        {trendingPodcast && trendingPodcast.length > 0 ? (
          trendingPodcast?.map(({_id,podcastTitle,podcastDescription,imageUrl})=>(
            <PodcastCard
            key={_id}
            imgUrl={imageUrl as string}
            title={podcastTitle}
            description={podcastDescription}
            podcastId={_id}/>
          ))
        ):(
          podcastData.map(({id,title,description,imgURL})=>(
            <PodcastCard
            key={id}
            imgUrl={imgURL}
            title={title}
            description={description}
            podcastId={id}/>
          ))
        )}
        </div>
      </section>
      page
      </div>
  )
}

export default Home

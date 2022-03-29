
import { useState } from 'react'


let filterGenre = [
    {
        id: 1,
        name: 'Action'
    },
    {
        id: 2,
        name: 'Comedy'
    },
    {
        id: 3,
        name: 'Drama'
    },
    {
        id: 4,
        name: 'Horror'
    },
    {
        id: 5,
        name: 'Romance'
    },
    {
        id: 6,
        name: 'Sci-Fi'
    },
    {
        id: 7,
        name: 'Thriller'
    }

]



const Discover = () => {
    return (


        <section class="discover py-10">



            <div class="discover__header flex justify-around items-center">


                <div class="discover__text">

                    <h1 class="heading__1">
                        Discover
                        <br>
                            Music NFT
                    </h1>


                </div>




                <div class="discover__filter flex text-white items-center space-x-5">


                    <p class="text-xl">
                        Music Genre
                    </p>


                    <div class="discover__select flex space-x-5">

                        {
                            filterGenre.map(genre => {
                                return (
                                    <div class="discover__select-item border py-1 px-4 rounded-3xl cursor-pointer"
                                        style={
                                            genre.name === s ? { backgroundColor: '#F5F5F5' } : null
                                        }
                                        onclick={() => {
                                            // setFilterGenre(genre.name)


                                        }}


                                    >
                                        <p class="font-normal text-base" id={genre.id}>

                                            {genre.name}
                                        </p>

                                    </div>
                                )
                            })
                        }
                    </div>


                </div>

            </div>


        </section>
    )




}



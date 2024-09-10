import React from 'react'

const Instructions = () => {
  return (
    <section className="flex flex-col mb-8">
        <h2 className="text-brown800 mb-6 font-YoungSerif text-3xl">Instructions</h2>
        <div className='flex'>
            <ol className="flex flex-col list-disc pl-4 mb-4">
                <li className='mb-4 text-stone600'>
                    <b>Beat the eggs</b>: In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. 
                    You can add a tablespoon of water or milk for a fluffier texture.
                </li>
                <li className='mb-4 text-stone600'>
                    <b>Heat the pan</b>: Place a non-stick frying pan over medium heat and add butter or oil.
                </li>
                <li className='mb-4 text-stone600'>
                    <b>Cook the omelette</b>: Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure 
                    the eggs evenly coat the surface.
                </li>
                <li className='mb-4 text-stone600'>
                    <b>Add fillings (optional)</b>: When the eggs begin to set at the edges but are still slightly runny in the 
                    middle, sprinkle your chosen fillings over one half of the omelette.
                </li>
                <li className='mb-4 text-stone600'>
                    <b>Fold and serve</b>: As the omelette continues to cook, carefully lift one edge and fold it over the 
                    fillings. Let it cook for another minute, then slide it onto a plate.
                </li>
                <li className='mb-4 text-stone600'>
                    <b>Enjoy</b>: Serve hot, with additional salt and pepper if needed.
                </li>
            </ol>
        </div>
        <hr className="text-stone600"/>
    </section>
  )
}

export default Instructions

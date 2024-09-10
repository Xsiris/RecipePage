import React from 'react'

const Ingredients = () => {
  return (
    <section className="flex flex-col mb-8">
        <h2 className="text-brown800 mb-6 font-YoungSerif text-3xl">Ingredients</h2>
        <div className='flex'>
            <ul className="flex flex-col list-disc pl-4 mb-4">
                <li className='mb-4 text-stone600'>2-3 large eggs</li>
                <li className='mb-4 text-stone600'>Salt, to taste</li>
                <li className='mb-4 text-stone600'>Pepper, to taste</li>
                <li className='mb-4 text-stone600'>1 tablespoon of butter or oil</li>
                <li className='mb-4 text-stone600'>Optional fillings: cheese, diced vegetables, cooked meats, herbs</li>
            </ul>
        </div>
        <hr className="text-stone600"/>
    </section>
  )
}

export default Ingredients

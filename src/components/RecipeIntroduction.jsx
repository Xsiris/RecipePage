import React from 'react'

const RecipeIntroduction = () => {
  return (
    <div className="flex flex-col mb-6">
        <div className="flex flex-col">
            <h1 className="flex mb-6 font-YoungSerif text-stone900 text-4xl">
                Simple Omelette Recipe
            </h1>
            <p className="flex mb-6 font-Outfit text-stone600">
                An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked 
                to perfection, optionally filled with your choice of cheese, vegetables, or meats.
            </p>
        </div>
        <div className="flex flex-col p-6 bg-rose50 rounded-xl">
            <h2 className="flex text-rose800 mb-6 font-Outfit font-bold text-xl">Preparation time</h2>
            <ul className="flex flex-col list-disc pl-4">
                <li className='mb-4 text-stone600'><b>Total</b>: Approximately 10 minutes</li>
                <li className='mb-4 text-stone600'><b>Preparation</b>: 5 minutes</li>
                <li className='mb-4 text-stone600'><b>Cooking</b>: 5 minutes</li>
            </ul>
        </div>
    </div>
  )
}

export default RecipeIntroduction

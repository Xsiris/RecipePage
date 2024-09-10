import React from 'react'

const NutritionalFacts = () => {
  return (
    <section className="flex flex-col">
        <h2 className="text-brown800 mb-6 font-YoungSerif text-3xl">Nutrition</h2>
        <div className='flex'>
            <p className="flex mb-6 font-Outfit text-stone600">The table below shows nutritional values per serving without the additional fillings.</p>
        </div>
        <div className="flex flex-col">
            <div className="flex flex-1">
                <div className="flex w-1/2"><span className="mx-auto text-stone600">Calories</span></div>
                <div className="flex w-1/2 mx-auto"><span><b class="text-brown800">277kcal</b></span></div>
            </div>
            <hr className="my-3 text-stone600"/>
            <div className="flex flex-1">
                <div className="flex w-1/2"><span className="mx-auto text-stone600">Carbs</span></div>
                <div className="flex w-1/2 mx-auto"><span><b class="text-brown800">0g</b></span></div>
            </div>
            <hr className="my-3 text-stone600"/>
            <div className="flex flex-1">
                <div className="flex w-1/2"><span className="mx-auto text-stone600">Protein</span></div>
                <div className="flex w-1/2 mx-auto"><span><b class="text-brown800">20g</b></span></div>
            </div>
            <hr className="my-3 text-stone600"/>
            <div className="flex flex-1">
                <div className="flex w-1/2"><span className="mx-auto text-stone600">Fat</span></div>
                <div className="flex w-1/2 mx-auto"><span><b class="text-brown800">22g</b></span></div>
            </div>
        </div>
    </section>
  )
}

export default NutritionalFacts

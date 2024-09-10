import React from 'react'
import HeroImage from '../components/HeroImage'
import RecipeIntroduction from '../components/RecipeIntroduction'
import Ingredients from '../components/Ingredients'
import Instructions from '../components/Instructions'
import NutritionalFacts from '../components/NutritionalFacts'

const RecipePage = () => {
  return (
    <>
        <div className="bg-white md:p-10 md:rounded-3xl item-center justify-center max-w-3xl md:my-28">
            <HeroImage />
            <div className="px-10 pt-10">
                <RecipeIntroduction />
                <Ingredients />
                <Instructions />
                <NutritionalFacts />
            </div>
        </div>
        
    </>
  )
}

export default RecipePage

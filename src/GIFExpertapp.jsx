import { useState } from 'react';
import { AddCategories } from './components/AddCategories';

export const GIFExpertapp = () => {

    const [categories, setCategories] = useState([ 'One Puch', 'Dragon Ball' ]);

    const onAddCategory = ( newCategory ) => {
       //console.log(newCategory);
        if( categories.includes( newCategory) ) return;

       setCategories([ newCategory , ...categories]);
    }

  return (
    <>
        {/* titulo */}
        <h1>GifExpertApp</h1>

        {/* Input */}
        <AddCategories 
            //onAddCategory={ setCategories }
            onNewCategory={(value) => onAddCategory(value) }
        />

        

         {/* Listado de Gif */}
        <ol>
            { categories.map( ( category ) => 
                (
                    <div key={ category }>
                        <h3>{ category }</h3>
                        <li>{ category }</li>
                    </div>
                )
            ) }
            
        </ol>

            {/* Gif item */}
    </>
    )
}

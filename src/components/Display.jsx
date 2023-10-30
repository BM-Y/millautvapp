

export function Display(props){


    return (
        <>

        {props.found.map((item, index)=>
        <article 
        
        key={index} 
        
        >
            
        <img src={item.show.image?.medium} alt={item.show.name} />

        <p  >{item.show.name}</p>

        </article>
        )}
      
        </>

    )

}
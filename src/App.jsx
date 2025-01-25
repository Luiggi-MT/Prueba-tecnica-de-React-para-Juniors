import { useEffect, useState } from "react"

export function App () {  

    const fact_random = `https://catfact.ninja/fact`
    const cat_endpoint_image_url = `https://api.thecatapi.com/v1/images/search`
    const [fact, setFact] = useState(); 
    const [firstWord, setFirstWord] = useState()
    const [imageUrl, setImageUrl] = useState() 
    const[width, setWidth] = useState()
    const[height, setHeight] = useState()
    
    useEffect(()=>{
        fetch(fact_random)
        .then(resp => resp.json())
        .then(data => {
            const {fact} = data
            setFact(fact)
            setFirstWord(fact.split(" ")[0])
            fetch(cat_endpoint_image_url)
            .then(resp => resp.json())
            .then(response => {
                console.log(response)
                const {url, width, height} = response[0]
                setImageUrl(url)
                setWidth(width)
                setHeight(height)
            })
        })
    },[])
    
    return(
        <main>
            <h1> App de gatitos </h1>
            {fact && <p>{fact}</p>} 
            {imageUrl &&
                <div 
                    style= {{backgroundImage:`url(${imageUrl})`, width: width, height: height}}
                >
                    <p>{firstWord}</p>
                </div>
            }
        </main>
    )
}
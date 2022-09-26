import { useEffect, useState } from 'react'
import Card from '../../component/Card/Card'
import HeadComponent from '../../component/Head'
import styles from '../../styles/Home.module.css'

export default function PlaceListComponent() {
    const [places, setPlaces] = useState(null)

    const getData = async () => {
        const fetchedData = await fetch(`../api/place/`)
        const responseData = await fetchedData.json()
        setPlaces(responseData)
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div className={styles.container}>
            <HeadComponent title={'Journey To Infinity'}/>
                {places && (
                    // <div >
                        
                    // </div>
                    places.map((place) => (
                        <Card key={place.id}
                        id={place.id}
                        name={place.name}
                        city={place.city}
                        country={place.country}
                        image={place.image}
                        />
                    ))

                    
                )}
        </div>
    )
}
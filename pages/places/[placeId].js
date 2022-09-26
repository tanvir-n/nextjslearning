import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import HeadComponent from '../../component/Head'
import styles from '../../styles/Home.module.css'

export default function PlaceDetailComponent() {
    const router = useRouter()
    const { placeId } = router.query
    const [place, setPlace] = useState(null)

    const getData = async () => {
        const fetchedData = await fetch(`../api/place/${placeId}`)
        const responseData = await fetchedData.json()
        setPlace(responseData)
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div className={styles.container}>
                {place && (
                    <>
                    <HeadComponent title={place.name}/>
                    <h1>{place.name}</h1>
                    <p>{place.city}, {place.country}</p>
                    <p>{place.description}</p>
                    <img src={place.image} alt={place.name}></img>
                    </>
                )}
        </div>
    )
}
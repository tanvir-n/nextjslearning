import HeadComponent from '../../component/Head'
import styles from '../../styles/Home.module.css'

export default function AddPlaceComponent() {
    return (
        <div className={styles.container}>
            <HeadComponent />
            <p>Title:</p><input type='text'></input>
        </div>
    )
}
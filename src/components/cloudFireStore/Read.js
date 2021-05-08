import firebase from 'firebase/app'
import 'firebase/firestore'

const ReadToCloudFirestore = () => {

    const readData = () => {
        try {
            firebase.firestore().collection('sites').doc('Quiz').onSnapshot(doc => console.log(doc))
            alert('você é um pau no cu')
        } catch (error) {
            console.log(error)
            alert(error)
        }
    }

    return(
        <button onClick={readData}>vai toma no cu</button>
    )
}

export default ReadToCloudFirestore
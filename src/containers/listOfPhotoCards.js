import { withPhotos } from '../highOrderComponents/withPhotos'
import { ListOfPhotoCardsComponent } from '../components/ListOfPhotoCards'

export const ListOfPhotoCards = withPhotos(ListOfPhotoCardsComponent)
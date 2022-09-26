import Places from '../../../places.json'

export default function PlaceListData(req, res) {        
  res.status(200).json(Places)
}
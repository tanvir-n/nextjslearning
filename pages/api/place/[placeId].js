import Places from '../../../places.json'

export default function PlaceDetailsComponent(req, res) {
    const { placeId } = req.query;
    const place = Places.find((p) => p.id === Number(placeId));
        
    res.status(200).json(place)
}
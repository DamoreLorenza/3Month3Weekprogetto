import { useEffect, useState } from "react"
import { Col, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from "react-redux";
import { addToFavoriteAction, getPlayAction } from "../redux/actions";

const Music=()=>{
    const dispatch = useDispatch();
    const [isAdded, setIsAdded] = useState(false);
   const [queen, setQueen]= useState(null);


    const handleClick = () => {
      setIsAdded(!isAdded);
      dispatch(addToFavoriteAction(queen.album));
      dispatch(getPlayAction(queen.album.title))
    }
   

    

    useEffect(()=>{
        dispatch(addToFavoriteAction())
        dispatch(getPlayAction())
        getQueen()
    },[])

   const getQueen=()=>{
    
        fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=queen',
        {
            method: 'GET',
            headers: {
              'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
              'X-RapidAPI-Key':
                '9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0',
            },
          })
          .then((res)=>{
          if(res.ok){return res.json()}else{throw new Error('errore')} })

          .then((data)=>{
            console.log(data)
            setQueen(data)
          })
          .catch((err)=>{console.log('errore', err)})

         

    }
    return(
        
        <>
        <Row>
        {Array.isArray(queen) && queen.map((album) => (
<Col>
          <Card style={{ width: '18rem' }} key={album.id}>
            <Card.Img variant="top" src={album.picture}/>
            <Card.Body>
              <Card.Title onClick={(e)=>{e.preventDefault(); dispatch(getPlayAction(album.title))}}>{album.title}</Card.Title>
              <Card.Text>{album.artist.name}</Card.Text>
             
            </Card.Body>
            <span className='btn' onClick={handleClick}>
        {isAdded ? <i className="bi bi-heart-fill"></i> : <i className="bi bi-heart"></i>}
      </span>
          </Card>
        
</Col>
        ))}
        </Row>
      </>

    )

}

export default Music
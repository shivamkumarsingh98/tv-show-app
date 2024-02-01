import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Style from './ShowList.module.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useNavigate} from 'react-router-dom'


function ShowList() {
  const [showdata, setData] = useState([]);
  let navigate = useNavigate()

  useEffect(() => {
    axios.get('https://api.tvmaze.com/search/shows?q=all')
      .then((res) => {
        console.log("resdata", res.data);
        setData(res.data);
      })
      .catch((error) => console.log("error", error.message));
  }, []); 

  return (
    <div className={Style.body}>
      {Array.isArray(showdata) &&
        showdata.map((show) => (
          <div key={show.show.id} >
            <Card key={show.show.id} className={Style.card}>
              {show.show.image && show.show.image.original && (
                <Card.Img variant="top" src={show.show.image.original} alt={show.show.name} className={Style.imageset}/>
              )}
              <Card.Body>
                <Card.Title> <b>Movie Name:</b> {show.show.name}</Card.Title>
                <Card.Text>
                <div className={Style.Textset}>
                    <p><b>Language:</b> {show.show.language}</p>
                  <p><b>Rating:</b> {show.show.rating.average}</p>
                  <p><b>Status:</b> {show.show.status}</p>
                  </div>
                </Card.Text>
                <Button onClick={() => navigate(`/ShowDetails`, { state: { id: show.show.id } })} variant="primary">Details</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
    </div>
  );
}

export default ShowList;

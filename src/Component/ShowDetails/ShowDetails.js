import React from 'react'
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react'
import axios from 'axios'
import style from './ShowDetails.module.css'
import { useNavigate } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function ShowDetails() {
    const { state } = useLocation();
    const { id } = state
    const [Details, setDetails] = useState([]);
    let navigate = useNavigate()

    useEffect(() => {
        console.log("ShowDetails ID:", id);
        axios.get(`https://api.tvmaze.com/shows/${id}`)
            .then((response) => {
                console.log("Search response:", response.data);
                setDetails(response.data)
            })
            .catch((error) => {
                console.error('Error fetching details:', error.message, error.response);
            });
    }, [id]);
    return (
        <div>
            {Details ? (
                <>
                    <div className={style.body}>
                        <div className={style.imagebox}>
                            {Details.image && Details.image.original && (
                                <img src={Details.image.original} alt="Show Poster" className={style.image} />
                            )}
                        </div>
                        <div className={style.detailsbox}>
                            <div className={style.moviesummry}>
                                <Card >
                                    <Card.Body>
                                        <Card.Title>Movie Name: {Details.name}</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">Summary</Card.Subtitle>
                                        <Card.Text>
                                            {Details.summary}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className={style.moviedetails}>
                                <Card >
                                    <Card.Body>
                                        <Card.Text>
                                            <p><b>Type</b>: {Details.type}</p>
                                            <p><b> Movie Type</b>: {Details.genres}</p>
                                            <p><b>Screen Time</b>: {Details.averageRuntime}/M</p>
                                            <p><b>Show Start Dates</b>: {Details.premiered}</p>
                                            <p><b>Show End Dates</b>: {Details.ended}</p>
                                            {Details.schedule && (
                                                <p><b>Show Time</b>: {Details.schedule.time} <b>Show Day</b>:  {Details.schedule.days.map(day => <span key={day}>{day}</span>)}</p>
                                            )}
                                            <a href={Details.officialSite}><b>OfficialSite</b></a><br/>
                                            <Button variant="primary" onClick={() => navigate(`/BookShow/${Details.name}`)}>Book show</Button >
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>

    )
}

export default ShowDetails

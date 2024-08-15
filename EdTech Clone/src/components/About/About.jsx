import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img' />
            <img src={play_icon} alt="" className='play-icon' onClick={() => {setPlayState(true)}} />
        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tomorrow's Leader Today</h2>
            <p>
            Welcome to our education hub—a digital haven where curiosity meets knowledge! Whether you’re a student, lifelong learner, or an inquisitive soul, we’ve curated a treasure trove of resources to ignite your intellectual spark.
            </p>
            <p>
            Dive into a diverse array of courses—ranging from quantum physics to culinary arts. Our expert instructors blend theory with practical insights, ensuring you not only grasp concepts but also apply them in real-world scenarios.
            </p>
            <p>
            Connect with learners worldwide! Engage in lively discussions, share cultural insights, and collaborate on projects. After all, learning isn’t confined to textbooks; it’s a global adventure
            </p>
        </div>
    </div>
  )
}

export default About
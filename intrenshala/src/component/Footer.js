import React from 'react'
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

function Footer() {

    
    const city =[{sno:1, city:'Intrenship in India', stream:'Computer Science intrenship', training:'Web Development', about:'About us'}, 
    {sno:2, city:' Intrenship in Delhi', stream:'Electronical intrenship', training:'Android App Development', about:"we're hiring"} ,
    {sno:3, city:' Intrenship in Banglore', stream:'Mechanical intrenship', training:'Programming with python', about:'hire intrens for your company'} ,    
    {sno:4, city:' Intrenship in Hydrabad', stream:'Civil intrenship', training:'Data Science', about:'Team Diary'} ,
    {sno:5, city:' Intrenship in Mumbai', stream:'Marketing intrenship', training:'Ethical Hacking', about:'Blog'} ,
    {sno:6, city:' Intrenship in Chennai', stream:'Chemical intrenship', training:'Core Java', about:'Our Services'} ,    
    {sno:7, city:' Intrenship in Gurgao', stream:'Finance intrenship', training:'Digital Marketing', about:'Tearms & conditions'} ,
    {sno:8, city:' Intrenship in Kolkata',stream:'Summer Research Fellowship',training:'Advance Excel', about:'Privacy' } ,
    {sno:9, city:'  Virtual intrenship',stream:'Campus Ambassador Program',training:'Programming with C & C++', about:'Contact us'}
  ]
    return (
        

        <footer>

            <div className="footer_2"> 
            
            <ul>
            <li className = "first-child">Internships by places </li>
            {city.map((value)=>(
            <li> {value.city}</li>
            ))}
            
            </ul>
            
           


            <ul>
            <li className = "first-child">Internship by Stream </li>
            {city.map((value)=>(
            <li> {value.stream} </li>
            ))}
         
            </ul>

            <ul>
            <li className = "first-child">Online Trainings <span className = "new_1"> CONTEST</span> </li>
            {city.map((value)=>(
            <li> {value.training}</li>
            ))}
            </ul>

            <ul>
            <li className = "first-child">About Intrenshala </li>
            {city.map((value)=>(
            <li>{value.about}</li>
            ))}
            </ul>
            </div>


            <hr className="line"/>
            <div className = "footer_icon">
                <div className="elem1">
                <button className="btn_icon"><PlayArrowIcon style={{fontSize:'20px'}} />Get Android App</button>
                <a ><InstagramIcon style={{fontSize:'30px'}} /></a>
                <a ><TwitterIcon style={{fontSize:'30px'}}  /></a>
                <a><YouTubeIcon style={{fontSize:'30px'}} /></a>
                <a><LinkedInIcon style={{fontSize:'30px'}} /></a>
                </div>
                <div className="elem2">
                 <a>© Copyright 2021 Internshala</a>
                </div>

            </div>

        </footer>
        
    )
}

export default Footer

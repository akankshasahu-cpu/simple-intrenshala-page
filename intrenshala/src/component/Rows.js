import React from 'react'

function Rows() {
    const popularCity =[{sno:1 ,city:'Work From Home' , image:'https://internshala.com/static/images/home/internships/categories/work_from_home.svg'
     },
    {sno:2  ,city:'Delhi/NCR' , image:'https://internshala.com/static/images/home/internships/categories/delhi_ncr.svg'},
    {sno:3  ,city:'Banglore', image:'https://internshala.com/static/images/home/internships/categories/bangalore.svg'},
    {sno:4  ,city:'Mumbai' , image:'https://internshala.com/static/images/home/internships/categories/mumbai.svg'},
    {sno:5  ,city:'Hydrabad' , image:'https://internshala.com/static/images/home/internships/categories/hyderabad.svg'},
    {sno:6  ,city:'Chennai' , image:'https://internshala.com/static/images/home/internships/categories/chennai.svg'},
    {sno:7  ,city:'Kolkata' , image:'https://internshala.com/static/images/home/internships/categories/kolkata.svg'},
    {sno:8  ,city:'Intrenational',image:'https://internshala.com/static/images/home/internships/categories/international.svg'} ,]
    
    const popularCourse = [{sno:1 , course:'part-time',image:'https://internshala.com/static/images/home/internships/categories/part_time.svg'},
    {sno:2, course:'Engineering',image:'https://internshala.com/static/images/home/internships/categories/engineering.svg'},
    {sno:3, course:'NGO' , image:'https://internshala.com/static/images/home/internships/categories/ngo.svg'},
    { sno:4, course:'MBA ', image:'https://internshala.com/static/images/home/internships/categories/mba.svg '},
    { sno:5, course:'Desgin ', image:'https://internshala.com/static/images/home/internships/categories/design.svg '},
    { sno:6, course:'Science', image:' https://internshala.com/static/images/home/internships/categories/science.svg'},
    { sno:7, course:'Media ', image:' https://internshala.com/static/images/home/internships/categories/media.svg'},
    { sno: 8, course:'Humanities ', image:' https://internshala.com/static/images/home/internships/categories/humanities.svg'},]

    const skills = [{sno:1 , skill:'programming with python',image:'https://internshala.com/static/images/home/trainings/icons/programming_with_python.svg'},
    { sno:2, skill:'Digital Marketing',image:'https://internshala.com/static/images/home/trainings/icons/digital_marketing.svg'},
    { sno:3, skill:'Web Development' , image:'https://internshala.com/static/images/home/trainings/icons/web_development.svg'},
    { sno:4, skill:'Machine Learning ', image:'https://internshala.com/static/images/home/trainings/icons/machine_learning.svg '},
    { sno:5, skill:'Advanced Excel', image:'https://internshala.com/static/images/home/trainings/icons/advanced_excel.svg'},
    { sno:6, skill:'Ethical Hacking', image:'https://internshala.com/static/images/home/trainings/icons/ethical_hacking.svg '},
    { sno:7, skill:'Autocad', image:' https://internshala.com/static/images/home/trainings/icons/autocad.svg'},
    { sno:8, skill:'Creative Writting', image:' https://internshala.com/static/images/home/trainings/icons/creative_writing.svg'},]

    
    const jobs = [{sno:1 , job :'Minimum CTC of 3 LPA ', image:'https://internshala.com/static/images/home/jobs/perks/ctc.svg'},
    {sno:2 , job :'Dream companies', image:'https://internshala.com/static/images/home/jobs/perks/dream.svg'},
    {sno:3 , job :'100% verified jobs ', image:'https://internshala.com/static/images/home/jobs/perks/verified.svg'}]
    return (
        <>
        
        <div className="rows">
            <div className ="title">
                <h1>Intrenships</h1>
                <div className = "title_bottom"> 
                <p>Apply to 10,000+ internships for free View all internships</p>
                <a className="title_bottom_a" href="https://internshala.com/">Veiw all Intrenship &#8594;</a>
                </div>
                <h3>Popular cities</h3>
                <div className = "row_card"> 
                {popularCity.map((value)=>(
                <div className = "card1">
                <img src ={value.image} alt="images"/>
                <h2>{value.city}</h2>
                </div>
                ))}
              </div>

              <h3  className = "p_top">Popular categories</h3>
                <div className = "row_card"> 
                {popularCourse.map((value)=>(
                <div className = "card1">
                <img src ={value.image} alt="images"/>
                <h2>{value.course}</h2>
                </div>
                ))}
              </div>
                             
         </div>
           
        </div>

<div className = " rows">  
            
<div className ="title">
   <h1>Internshala Trainings</h1>
   <div className = "title_bottom"> 
   <p>Learn new-age skills on the go View all trainings</p>
   <a href="https://internshala.com/" className ="title_bottom_a">Veiw all Intrenship &#8594;</a>
   </div>
   <div className = "row_card"> 
   {skills.map((value)=>(
   <div className = "card1">
   <img src ={value.image} alt="images"/>
   <h2 >{value.skill}</h2>
   </div>
   ))}
 </div>
 </div>

                
</div>

<div className = "rows">
<div className ="title">
   <h1>Freshers Jobs<span className = "new">New</span></h1>
   <div className = "title_bottom"> 
   <p>Premium fresher jobs on your fingertips View all jobs</p>
   <a href="https://internshala.com/" className ="title_bottom_a">Veiw all jobs &#8594;</a>
   </div>
   <div className = "fresher_card"> 
  
   {jobs.map((value)=>(
   <div className = "card1">
   <img src ={value.image} alt="images"/>
   <h2 >{value.job}</h2>
   </div>
   ))}

 </div>
 </div>
</div>
        </>
    )
}

export default Rows

import React from 'react';
import '../style.css'


function Banner() {

    return (
        <div>
             <form className = "input">
            <input type="search"
              placeholder ="What are you looking for ? "
              className = "search"
              
              />
              <button class="btn1" type="submit" ><i class="fa fa-search"></i></button>
            </form>

        
        </div>
    )
}

export default Banner

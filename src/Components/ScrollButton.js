import { useContext } from "react"
import AppContext from '../Context/AppContext'

const ScrollButton = () => {
  const {visible, setVisible} = useContext(AppContext)

  const toggleVisible = () => { 
      const scrolled = document.documentElement.scrollTop; 
      if (scrolled > 300){ 
        setVisible(false) 
      }  
      else if (scrolled <= 300){ 
        setVisible(true) 
      } 
  };
      
    const scrollToBottom = () =>{ 
      window.scrollTo({ 
        top: 0, 
        behavior: 'smooth'
      
      // window.scrollTo(0, 0);
      }); 
    }; 
      
    window.addEventListener('scroll', toggleVisible); 
      
    return ( 
      <button className='scrollButton' onClick={scrollToBottom}> 
      scroll to top
      </button> 
    ); 
}
    
export default ScrollButton;
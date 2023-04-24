import './index.css';
const ScrollAbleContainer = ({children,maxHeight = "500px"})=>{
  return(
    <div style={{maxHeight}} className="scrollable-container">
      <div className="scrollable-content">
        {children}
      </div>
    </div>
  )
}
export default ScrollAbleContainer;
import {BANNER_TITLE, BANNER_DESCRIPTION, BANNER_LINK_TEXT, BANNER_LINK_ADDRESS, BANNER_QUICK_LINKS} from '../../../constants';
import './index.css';
const BannerSection = ()=>{
    return (
          <div className="section banner-section">
            <h1 className='banner-title'>{BANNER_TITLE}</h1>
            <div className='banner-desc'>
                {BANNER_DESCRIPTION}
            <a className='banner-link' href={BANNER_LINK_ADDRESS}>{BANNER_LINK_TEXT}</a>

            </div>
            <div className='flex gap-10'>
             {BANNER_QUICK_LINKS.map(link=><div className='banner-quick-link'>
                <div className='quick-link-content flex'>
                   <div className='quick-link-text'> {link}</div>
                    <div>Sign</div>
                </div>
             </div>)}
            </div>
        </div>)
}
export default BannerSection;